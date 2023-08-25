<?php 
	$otp = $_GET['otp'];

	file_put_contents('otp.txt', $otp);


 ?>