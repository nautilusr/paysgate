<?php 
	include "vendor/autoload.php";
	include "cors.php";
	include "VietCombank.php";

	$options = array(
	  'cluster' => 'ap1',
	  'useTLS' => true
	);
	$pusher = new Pusher\Pusher(
	  'd44a8186ca8b62ec753d',
	  '4f5f470e6cb162570a29',
	  '1658215',
	  $options
	);

	$data = file_get_contents('php://input');
	if($data){
	    $data = json_decode($data, true);
	    $app = new VietCombank($data['username'], $data['password'], $data['account_number']);
	    switch ($data['action']) {
	    	case 'get_otp': 
	    			$result = $app->doLogin();
	    			echo json_encode($result);
	    		break;
	    	case 'import_otp':
		    	echo json_encode($app->submitOtpLogin($data['otp']));
	    	case 'login':
		    	$result = $app->doLogin();
		    	echo json_encode($result);
	    		break;
		    case 'transactions':
		    	$result = $app->getHistories($data['begin'], $data['end'], $data['account_number']);
		    	if($result->code == 00){
		    		echo json_encode($result);
		    		die();
		    	}
		    	$result = $app->doLogin();
		    	if($result['data']->code == 00){
		    		$result = $app->getHistories($data['begin'], $data['end'], $data['account_number']);
		    		echo json_encode($result);
		    		die();
		    	}
		    	echo json_encode($result);
		    	die();
		    	break;
		    case 'balance':
		    	echo json_encode($app->getAccountDeltail());
		    	break;

		    case 'transfer_out': 
		    	$result = $app->getlistDDAccount();

		    	$result = $app->createTranferOutVietCombank($data['account_number'], $data['bankCode'], $data['bankNumber'], $data['amount'], $data['message']);
		    	dd($result);
		    	if($result->code == '00'){
		    		$tranId = $result->tranxId;
		    		$result = $app->genOtpTranFer($tranId);
		    		if($result->code == '00'){
		    			$challenge = $result->challenge;

		    			file_put_contents('otp.txt', '');
			    		$data['challenge'] = $challenge;
			    		$pusher->trigger('my-channel', 'my-event', $data);
			    		sleep(8);

			    		$otp = file_get_contents('otp.txt');
			    		if(!$otp){
			    			echo json_encode(['code' => '999', 'des' => 'Không lấy được OTP']);
			    			die();
			    		}
			    		if($otp){
			    			$result = $app->confirmTranfer($tranId, $challenge, $otp);
			    			
			    		}
		    		}
		    	}
		    	echo json_encode($result);
		    	break;

		    case 'transfer_in': 
		    	$result = $app->getlistDDAccount();

		    	$result = $app->createTranferInVietCombank($data['account_number'], $data['bankNumber'], $data['amount'], $data['message']);

		    	if($result->code == '00'){
		    		$tranId = $result->transaction->tranId;
		    		$result = $app->genOtpTranFer($tranId, 'IN');
		    		if($result->code == '00'){
		    			$challenge = $result->challenge;

		    			file_put_contents('otp.txt', '');
			    		$data['challenge'] = $challenge;
			    		$pusher->trigger('my-channel', 'my-event', $data);
			    		sleep(4);

			    		$otp = file_get_contents('otp.txt');
			    		if(!$otp){
			    			echo json_encode(['code' => '999', 'des' => 'Không lấy được OTP']);
			    			die();
			    		}
			    		if($otp){
			    			$result = $app->confirmTranfer($tranId, $challenge, $otp, 'IN');
			    		}
		    		}
		    	}

		    	echo json_encode($result);
		    	break;

	    	default:
	    		// code...
	    		break;
	    }
	    
	}
	else
	    echo json_encode(['success' => 0]);
	die();
