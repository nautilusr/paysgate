<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">











<html xmlns="http://www.w3.org/1999/xhtml">
<!-- InstanceBegin template="/Templates/acb_layout.dwt" codeOutsideHTMLIsLocked="false" -->

<head>
    <link rel="shortcut icon" href="/acbib/img/icon/favicon.ico" type="image/x-icon" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="Content-Style-Type" content="text/css" />
    <link href="/acbib/css/style_web.css" rel="stylesheet" />
    <link href="/acbib/css/style_menu.css" rel="stylesheet" />
    <link href="/acbib/css/style_phase_2.css" rel="stylesheet" />
    <link rel="stylesheet" href="/acbib/css/jquery-ui-1.8.24.css" />

    <script src="/acbib/js/check.js"></script>
    <script src="/acbib/js/numtostring.js"></script>
    <script src="/acbib/js/jquery-3.5.1.min.js"></script>
    <script src="/acbib/js/menu.js"></script>
    <script src="/acbib/js/initTable.js"></script>

    <script src="/acbib/js/jquery-ui-1.8.custom.min.js"></script>
    <script src="/acbib/js/jquery-3.5.1.min.js"></script>
    <script src="/acbib/js/jquery-migrate-3.3.0.min.js"></script>
    <script src="/acbib/js/jquery-ui-1.8.24.js"></script>
    <script src="/acbib/js/jquery.qrcode.js"></script>
    <script src="/acbib/js/qrcode.js"></script>
    <script type="text/javascript">
        $(function() {
            $('#menu li').each(function() {
                if ($(this).children('ul').length <= 0) {
                    $(this).addClass('no-child');
                }
            });
        });
    </script>
    <script>
        $(function() {
            var pickerOpts = {
                showOn: "button",
                buttonImage: "img/calendar.png",
                buttonImageOnly: true,
                changeMonth: true,
                changeYear: true,
                yearRange: "-3:+1",

                dateFormat: 'dd/mm/yy',
                buttonText: "Chọn ngày",
                monthNames: ['Th&#225;ng 1', 'Th&#225;ng 2', 'Th&#225;ng 3', 'Th&#225;ng 4', 'Th&#225;ng 5', 'Th&#225;ng 6',
                    'Th&#225;ng 7', 'Th&#225;ng 8', 'Th&#225;ng 9', 'Th&#225;ng 10', 'Th&#225;ng 11', 'Th&#225;ng 12'
                ],
                monthNamesShort: ['Th&#225;ng 1', 'Th&#225;ng 2', 'Th&#225;ng 3', 'Th&#225;ng 4', 'Th&#225;ng 5', 'Th&#225;ng 6',
                    'Th&#225;ng 7', 'Th&#225;ng 8', 'Th&#225;ng 9', 'Th&#225;ng 10', 'Th&#225;ng 11', 'Th&#225;ng 12'
                ],
                dayNames: ['Ch&#7911; nh&#7853;t', 'Th&#7913; 2', 'Th&#7913; 3', 'Th&#7913; 4', 'Th&#7913; 5', 'Th&#7913; s&#225;u', 'Th&#7913; 7'],
                dayNamesShort: ['CN', 'Th&#7913; 2', 'Th&#7913; 3', 'Th&#7913; 4', 'Th&#7913; 5', 'Th&#7913; 6', 'Th&#7913; 7'],
                dayNamesMin: ['CN', 'Hai', 'Ba', 'T&#432;', 'N&#259;m', 'S&#225;u', 'B&#7843;y'],
                prevText: 'L&#249;i',
                prevStatus: 'Xem th&#225;ng tr&#432;&#7899;c',
                nextText: 'Ti&#7871;p',
                nextStatus: 'Xem th&#225;ng ti&#7871;p theo'

            };
            $("#FromDate").datepicker(pickerOpts);
            $("#ToDate").datepicker(pickerOpts);
            $("#TransDate").datepicker(pickerOpts);
            $("#MaturityDate").datepicker(pickerOpts);

        });
    </script>
    <script language="javascript" src="/acbib/js/libca.js"></script>
    <script language="javascript" src="/acbib/js/base64.js"></script>
    <script>
        $(window).load(function() {
            //alert("window load occurred!");
            initPlugin('/acbib');
        });
    </script>

    <title>ACB Online</title>


    <script type="text/javascript">
        window.onload = function() {
            //	altRowsDouble('table1');
            //$('#page').hide();
        }
    </script>

    <script type="text/javascript">
        $(document).ready(function() {
            $('#AccountNbr1').change(function() {
                var account1 = document.getElementById('AccountNbr1').value;
                var account2 = document.getElementById('AccountNbr2').value;
                if (account1 != account2) {
                    $('#xnsd').hide();
                } else {
                    $("#xnsd").show();
                    document.submitByMonth.dse_nextEventName.value = 'checkAcctThauChiYN';
                    document.submitByMonth.submit();
                }
                return false;
            });
            $('#AccountNbr2').change(function() {
                var account1 = document.getElementById('AccountNbr1').value;
                var account2 = document.getElementById('AccountNbr2').value;
                if (account1 != account2) {
                    $("#xnsd").hide();
                } else {
                    $("#xnsd").show();
                    document.submitByMonth.dse_nextEventName.value = 'checkAcctThauChiYN';
                    document.submitByMonth.submit();
                }
                return false;
            });
        });
    </script>
</head>


<body>
    <div id="wrapper">
        <div class="main">
            <div class="main-left">
                <a class="logo" href="javascript:void(0)" style="text-align: center; display: block; margin: 20px 0px;">
                    <img src="images/acbone/ACBoneBIZ-ver.svg" alt="acb one" style="width: 100px" />
                </a>
                <ul id="menu">
                    <li><a href="javascript:void(0)">Qu&#7843;n lý tài kho&#7843;n</a>
                        <ul>
                            <li>
                                <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkAcctSumProc&dse_errorPage=/obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Thông tin tài kho&#7843;n
							</a>
                            </li>
                            <li>
                                <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkTruyVanTKVayProc&dse_errorPage=/obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Truy v&#7845;n t&#224;i kho&#7843;n vay
							</a>
                            </li>
                            <li>
                                <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkVirtualAcctSumProc&dse_errorPage=/obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							T&#224;i kho&#7843;n &#273;&#7883;nh danh
							</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Li&#7879t k&#234 giao d&#7883ch MT</a>
                                <ul>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkregMT940Proc&dse_errorPage=menu.jsp&dse_processorState=initial&dse_nextEventName=start">&#272.K&#253 nh&#7853n li&#7879t k&#234 giao d&#7883ch MT</a>
                                    </li>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkTransactionMTProc&dse_errorPage=/obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
						Li&#7879t k&#234 giao d&#7883ch MT
						</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkTransactionProc&dse_errorPage=/obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Li&#7879;t kê GD theo tr&#7841;ng thái
							</a>
                            </li>
                            <li>
                                <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkTransactionEditProc&dse_errorPage=/obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Xem ho&#7863;c xóa giao d&#7883;ch
							</a>
                            </li>
                            <li>
                                <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkTransactionSignProc&dse_errorPage=/obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Ký xác nh&#7853;n giao d&#7883;ch
							</a>
                            </li>
                            <li>
                                <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkTkNhappProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Thông tin tài kho&#7843;n nhà phân ph&#7889;i
							</a>
                            </li>
                            <li>
                                <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkeInvoiceProc&dse_errorPage=/obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
								H&#243;a &#273;&#417;n &#273;i&#7879;n t&#7917;
							</a>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=displayPageOp&dse_errorPage=menu.jsp&dse_processorState=initial&pageName=obk/transaction_reports/trans_list.jsp#/account-management/transactions-history?load=true">Xem lịch sử giao dịch</a>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=displayPageOp&dse_errorPage=menu.jsp&dse_processorState=initial&pageName=obk/transaction_reports/recurring_report.jsp#/account-management/transactions-history/recurring?load=true">Xuất b&#225;o c&#225;o định kỳ</a>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=displayPageOp&dse_errorPage=menu.jsp&dse_processorState=initial&pageName=obk/misa/registration.jsp#/accountant-service/user-register?load=true">&#272;&#259;ng k&#253; d&#7883;ch v&#7909;</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0)">Chuy&#7875;n ti&#7873;n</a>
                        <ul>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkIntFundTransProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Chuy&#7875;n kho&#7843;n trong ACB
						</a>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkextFundTransProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Chuy&#7875;n kho&#7843;n ngoài ACB
						</a>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkextFundNPTransProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Chuy&#7875;n ti&#7873;n nhanh NAPAS 247
						</a>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkcardFundTransProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Chuy&#7875;n ti&#7873;n vào th&#7867; ACB
						</a>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkidFundTransProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Chuy&#7875;n ti&#7873;n nh&#7853;n b&#7857;ng CMND/ Passport
						</a>
                            </li>
                            <li><a target="_blank" href="https://online.acb.com.vn/hbk/all/duan_mbtt/chuyentheolo/index.jsp?user=6361234566TRUONG&lan=vi_VN" />Chuy&#7875;n kho&#7843;n theo l&#244;</a>
                            </li>
                            <!--  
                            <li><a target="_blank" href="https://online.acb.com.vn/hbk/all/duan_mbtt/chuyentheolothe/index.jsp?user=6361234566TRUONG&lan=vi_VN"/>Chuy&#7875;n kho&#7843;n theo l&#244; th&#7867;</a></li>
                            -->
                            <li><a href="javascript:void(0)">Chi h&#7897; l&#432;&#417;ng</a>
                                <ul>
                                    <li class="node-3"><a target="_blank" href="https://online.acb.com.vn/hbk/all/duan_mbtt/chiholuong/login.jsp?user=6361234566TRUONG&lan=vi_VN" />Giao d&#7883;ch chi h&#7897; l&#432;&#417;ng</a>
                                    </li>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkSalarySignProc&dse_errorPage=/obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">Ký xác nh&#7853;n giao d&#7883;ch</a>
                                    </li>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkSalaryProc&dse_errorPage=/obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">Li&#7879;t kê giao d&#7883;ch</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0)">Thanh toán d&#7883;ch v&#7909;</a>
                        <ul>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=displayPageOp&dse_errorPage=menu.jsp&dse_processorState=initial&pageName=obk/tuitionfees/landing.jsp#/bill">Thanh to&#225;n d&#7883;ch v&#7909;</a>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkTopUpProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
								N&#7841;p ti&#7873;n &#272;TD&#272; tr&#7843; tr&#432;&#7899;c
							</a>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkStockTopUpProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
								N&#7841;p ti&#7873;n ch&#7913;ng kho&#225;n
							</a>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkBillingProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Thanh toán c&#432;&#7899;c &#272;TD&#272; tr&#7843; sau
						</a>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkInternetBillingProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Thanh to&#225;n c&#432;&#7899;c Internet ADSL
						</a>
                            </li>
                            <li><a href="javascript:void(0)">Thanh to&#225;n b&#7843;o hi&#7875;m</a>
                                <ul>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=displayPageOp&dse_errorPage=menu.jsp&dse_processorState=initial&pageName=obk/aia/payment.jsp#/deposit/pay-in-deposit-account">B&#7843;o hi&#7875;m AIA</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkDTCDBillingProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Thanh to&#225;n c&#432;&#7899;c &#272;TC&#272;
						</a>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkTTCTHBillingProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Thanh to&#225;n c&#432;&#7899;c truy&#7873;n h&#236;nh
						</a>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkbuypassportProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Thanh toán v&#233; m&#225;y bay
						</a>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkVNRBillingProc&dse_errorPage=ibk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Thanh to&#225;n v&#233; t&#224;u l&#7917;a
						</a>
                            </li>
                            <!-- Xuyendtk chinh sua theo ho so ACB.KHCN-201801007_BA_ACBO_SohaPay_OnOff-->
                            <!-- <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkSohaPayFundTransProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							TT &#273;&#417;n hàng SohaPay
						</a></li>-->
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkPaymentProc&dse_errorPage=/obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Thanh toán hóa &#273;&#417;n
						</a>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkPaymentTaxProc&dse_errorPage=/obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Thanh to&#225;n thu&#7871 h&#7843;i quan
						</a>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkTanCangProc&dse_errorPage=/obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Thanh to&#225;n d&#7883;ch v&#7909; C&#7843;ng
						</a>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=displayPageOp&dse_errorPage=menu.jsp&dse_processorState=initial&pageName=obk/collections/create_txn.jsp#/services/scsc?load=true">
							Thanh to&#225;n d&#7883;ch v&#7909;
						</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0)">N&#7897;p thu&#7871; tr&#7921;c tuy&#7871;n</a>
                        <ul>
                            <li>
                                <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkThueLapGiayNopTienProc&dse_errorPage=/obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
									L&#7853;p gi&#7845;y n&#7897;p ti&#7873;n
								</a>
                            </li>
                            <li>
                                <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkThueXemXoaGDProc&dse_errorPage=/obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
									Xem ho&#7863;c xóa giao d&#7883;ch
								</a>
                            </li>
                            <li>
                                <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkThueKyXacNhanGDProc&dse_errorPage=/obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
									Ký xác nh&#7853;n giao d&#7883;ch
								</a>
                            </li>
                            <li>
                                <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkThueTraCuuGNTProc&dse_errorPage=/obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
									Tra c&#7913;u gi&#7845;y n&#7897;p ti&#7873;n tr&#7921;c tuy&#7871;n
								</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0)">Ti&#7873;n g&#7917;i</a>
                        <ul>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkDangKyDKDKTienGuiCoKyHanProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
										Ti&#7873;n g&#7917;i có k&#7923; h&#7841;n</a>
                            </li>
                            <li><a href="javascript:void(0)">Ti&#7873;n g&#7917;i &#272;&#7847;u t&#432; tr&#7921;c tuy&#7871;n</a>
                                <ul>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkacctDautuNewProc&dse_errorPage=chuyentien.jsp&dse_processorState=initial&dse_nextEventName=start">
							M&#7903; t&#224;i kho&#7843;n
						</a>
                                    </li>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkacctDautuTrichProc&dse_errorPage=chuyentien.jsp&dse_processorState=initial&dse_nextEventName=start">
							&#272;&#259;ng ký trích ti&#7873;n t&#7921; &#273;&#7897;ng
						</a>
                                    </li>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkacctDautuTrichListProc&dse_errorPage=chuyentien.jsp&dse_processorState=initial&dse_nextEventName=start">
							H&#7911;y &#273;&#259;ng ký rút ti&#7873;n
						</a>
                                    </li>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkacctDautuTTProc&dse_errorPage=chuyentien.jsp&dse_processorState=initial&dse_nextEventName=start">
							Li&#7879;t k&#234; giao d&#7883;ch ti&#7873;n g&#7917;i
						</a>
                                    </li>
                                </ul>
                            </li>
                            <!-- begin ACB.KVH-283-->
                            <!-- end ACB.KVH-283-->
                        </ul>
                    </li>
                    <li><a href="javascript:void(0)">Tín d&#7909;ng</a>
                        <ul>
                            <li>
                                <a href="javascript:void(0)">
											Gi&#x1EA3;i ng&#x00E2;n online
										</a>
                                <ul>
                                    <li class="node-3">
                                        <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkRegBeneficiaryAcctProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
													&#272;&#259;ng k&#253; TK th&#7909; h&#432;&#7903;ng
												</a>
                                    </li>
                                    <li class="node-3">
                                        <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkRegisterForDisbursementOnlineProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
													&#x0110;&#x0103;ng k&#x00FD; gi&#x1EA3;i ng&#x00E2;n
												</a>
                                    </li>
                                    <li class="node-3">
                                        <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkDisbursementSignProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
													K&#x00FD; x&#x00E1;c nh&#x1EAD;n gi&#x1EA3;i ng&#x00E2;n
												</a>
                                    </li>
                                    <li class="node-3">
                                        <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkDisbursementHistoryProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
													L&#x1ECB;ch s&#x1EED; gi&#x1EA3;i ng&#x00E2;n
												</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="javascript:void(0)">Vay online</a>
                                <ul>
                                    <li class="node-3">
                                        <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=displayPageOp&dse_errorPage=ibk/login.jsp&dse_processorState=initial&pageName=obk/denyvaytt.jsp">
							Vay c&#7847;m c&#7889; s&#7889; d&#432; TKTG CKH
						</a>
                                    </li>
                                    <!-- <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkvayCamCoProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Vay c&#7847;m c&#7889; s&#7889; d&#432; TKTG CKH
							</a> -->
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkdangKyTraNoVayProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							&#272;&#259;ng k&#253; tr&#7843; n&#7907; vay &#273;&#7883;nh k&#7923;
						</a>
                                    </li>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obktraNoVayProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Th&#7921;c hi&#7879;n tr&#7843; n&#7907; vay
						</a>
                                    </li>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkthanhLyTKVayProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Thanh l&#253; t&#224;i kho&#7843;n vay
						</a>
                                    </li>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkacctVayTTProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Li&#7879;t k&#234; giao d&#7883;ch vay
							</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="http://www.acb.com.vn/vayquamang/" target="_blank" class="">&#272&#259ng k&#253 h&#7891 s&#417 vay qua m&#7841ng</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0)">D&#7883;ch v&#7909; th&#7867;</a>
                        <ul>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obktttProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
			Xem th&#244;ng tin th&#7867; t&#237;n d&#7909;ng
		</a>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obktransEnterpriseProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
			Xem TBGD t&#237;n d&#7909;ng
		</a>
                            </li>
                            <li>
                                <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkViewDebitInformationProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
				Xem th&#244;ng tin th&#7867; ghi n&#7907;
			</a>
                            </li>
                            <li>
                                <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkSummaryOfCardSpendingProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
				B&#7843;ng t&#243;m t&#7855;t chi ti&#234;u qua th&#7867;
			</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0)">Thanh to&#225n qu&#7889c t&#7871</a>
                        <ul>
                            <li><a href="javascript:void(0)">Truy xu&#7845t Msgs Swift</a>
                                <ul>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkTtqtLietkeProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Li&#7879t k&#234 chi ti&#7871t
						</a>
                                    </li>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkttqtAlertProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Thi&#7871t l&#7853p th&#244ng b&#225o t&#7921 &#273&#7897ng
						</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="javascript:void(0)">&#272;&#259;ng k&#253; giao d&#7883;ch online</a>
                                <ul>
                                    <li class="node-3"><a target="_blank" href="https://online.acb.com.vn/hbk/all/duan_mbtt/ttqt/index.jsp?user=6361234566TRUONG&lan=vi_VN">Kh&#7903;i t&#7841;o giao d&#7883;ch TTQT</a>
                                    </li>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkttqtTransactionProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Truy xu&#7845;t giao d&#7883;ch thanh to&#225;n qu&#7889;c t&#7871;
						</a>
                                    </li>
                                    <!--ACB.KHDN-201807012-->
                                    <li class="node-3">
                                        <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkSignConfirmForTTQTProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
										K&#253; x&#225;c nh&#7853;n giao d&#7883;ch TTQT
										</a>
                                    </li>
                                    <!--end ACB.KHDN-201807012-->
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkttqtAlert2Proc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Thi&#7871t l&#7853p th&#244ng b&#225o t&#7921 &#273&#7897ng
						</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkttqtmauChungTuProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							M&#7851;u ch&#7913;ng t&#7915; TTQT
						</a>
                            </li>
                            <li><a href="javascript:void(0)">Tra so&#225t b&#7897 ch&#7913ng t&#7915 xu&#7845t kh&#7849u</a>
                                <ul>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkttqtCTXKProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Truy xu&#7845t b&#7897 ch&#7913ng t&#7915 xu&#7845t kh&#7849u
						</a>
                                    </li>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkttqtAlert3Proc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Thi&#7871t l&#7853p th&#244ng b&#225o t&#7921 &#273&#7897ng
						</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0)">&#272;&#259;ng ký online</a>
                        <ul>
                            <!--Dang ky soft token-->
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkSoftTokenRegisterProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
			&#272;&#259;ng k&#253; ACB SafeKey
		</a>
                            </li>
                            <!--end Dang ky soft token-->
                            <li><a href="javascript:void(0)">&#272;&#259;ng ký t&#224;i kho&#7843;n th&#7909; h&#432;&#7903;ng</a>
                                <ul>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkTkThuhuongInProc&dse_errorPage=chuyentien.jsp&dse_processorState=initial&dse_nextEventName=start">
				TK th&#7909; h&#432;&#7903;ng trong ACB
			</a>
                                    </li>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkTkThuhuongExtProc&dse_errorPage=chuyentien.jsp&dse_processorState=initial&dse_nextEventName=start">
				TK th&#7909; h&#432;&#7903;ng ngoài ACB
			</a>
                                    </li>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkTkThuhuongPaymentProc&dse_errorPage=chuyentien.jsp&dse_processorState=initial&dse_nextEventName=start">
				TK th&#7909; h&#432;&#7903;ng trong TTH&#272;
			</a>
                                    </li>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkThethuhuongProc&dse_errorPage=chuyentien.jsp&dse_processorState=initial&dse_nextEventName=start">
				Th&#7867; th&#7909; h&#432;&#7903;ng
			</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="javascript:void(0)">&#272;&#259;ng k&#253; n&#7897;p thu&#7871; &#273;i&#7879;n t&#7917;</a>
                                <ul>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkRegDebitAcctForTaxProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
				&#272;&#259;ng k&#253; n&#7897;p thu&#7871; &#273;i&#7879;n t&#7917;
			</a>
                                    </li>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkSignRegDebitAcctForTaxProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
				Ký xác nh&#7853;n giao d&#7883;ch
			</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a target="_blank" href="https://online.acb.com.vn/hbk/all/duan_mbtt/dk_ds_KH_thuho/login.jsp?user=6361234566TRUONG&lan=vi_VN">
		&#272;&#259;ng k&#253; danh s&#225;ch thu h&#7897;</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0)">Mua b&#225;n ngo&#7841;i t&#7879;</a>
                        <ul>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=displayPageOp&dse_errorPage=menu.jsp&dse_processorState=initial&pageName=obk/fxtrading/fxtrading.jsp#/fx-board">Mua b&#225;n ngo&#7841;i t&#7879;
							</a>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=displayPageOp&dse_errorPage=menu.jsp&dse_processorState=initial&pageName=obk/fxtrading/fx_transaction_signature.jsp#/fx-board/transaction/signature">Ký xác nh&#7853;n giao d&#7883;ch
							</a>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=displayPageOp&dse_errorPage=menu.jsp&dse_processorState=initial&pageName=obk/fxtrading/fx_transactions.jsp#/fx-board/transaction/list">Li&#7879;t kê giao d&#7883;ch
							</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkThuBaoLanhProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							X&#225;c th&#7921;c th&#432; b&#7843;o l&#227;nh
						</a>
                    </li>
                    <li><a href="javascript:void(0)">Ti&#7879;n ích khác</a>
                        <ul>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkdangKyChuKyMauProc&dse_errorPage=/obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">&#272;&#259;ng k&#253; ch&#7919; k&#253; m&#7851;u</a>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkChangePassProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							&#272;&#7893;i m&#7853;t kh&#7849;u &#273;&#259;ng nh&#7853;p
						</a>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkchangeUserPassProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							&#272;&#7893;i tên &#273;&#259;ng nh&#7853;p
						</a>
                            </li>
                            <li>
                                <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obktdtkProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
								Thông báo s&#7889; d&#432; t&#7921; &#273;&#7897;ng
							</a>
                            </li>
                            <!-- 2013-09-27 VienP merge menu that
                            <li><a target="_blank" href="https://online.acb.com.vn/hbk/all/duan_mbtt/baolanh/index.jsp?user=6361234566TRUONG&tid=256&lan=vi">B&#7843;o l?nh</a></li>
                        -->
                            <li><a href="javascript:void(0)">Qu&#7843;n l&#253; h&#7885;c ph&#237;</a>
                                <ul>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkSchoolImportBillsProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
						C&#7853;p nh&#7853;t h&#7885;c ph&#237;</a>
                                    </li>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkSchoolBillApprovalProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
									 Xem/ X&#243;a/ Duy&#7879;t h&#7885;c ph&#237;</a>
                                    </li>
                                    <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkSchoolTransactionProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
						Thanh to&#225;n h&#7885;c ph&#237; th&#224;nh c&#244;ng</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkActiveAcctProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
							Kích ho&#7841;t TK ng&#432;ng ho&#7841;t &#273;&#7897;ng
						</a>
                            </li>
                            <!-- ACBNHSO65 them menu chung tu dien -->
                            <li><a href="javascript:void(0)">Ch&#7913;ng t&#7915; &#273;i&#7879;n t&#7917;</a>
                                <ul>
                                    <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=displayPageOp&dse_errorPage=menu.jsp&dse_processorState=initial&pageName=obk/e-statement/e-statement-register.jsp#/e-statement/register">&#272;&#259;ng k&#253;/H&#7911;y d&#7883;ch v&#7909; nh&#7853;n ch&#7913;ng t&#7915; &#273;i&#7879;n t&#7917; qua email</a>
                                    </li>
                                    <li><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=displayPageOp&dse_errorPage=menu.jsp&dse_processorState=initial&pageName=obk/e-statement/e-statement-print.jsp#/e-statement/search-print">Xem/In ch&#7913;ng t&#7915; &#273;i&#7879;n t&#7917;</a>
                                    </li>
                                </ul>
                            </li>
                            <!--<li><a target="_blank" href="https://online.acb.com.vn/hbk/all/duan_mbtt/dkds_khth/index.jsp?user=6361234566TRUONG&lan=vi_VN"/>&#272;&#259;ng k&#253; danh s&#225;ch KH thu h&#7897;</a></li>-->
                            <!-- 2013-09-16 VienP merge menu that					 				
                        <li><a href="javascript:void(0)">D&#7883;ch v&#7909; ch&#7845;p nh&#7853;n th&#7867;</a>
			                 <ul>
			                     <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkMerchantSumProc&dse_errorPage=ibk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
										Th&#244;ng tin giao d&#7883;ch
									</a></li>
			                     <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkMerchantAlertProc&dse_errorPage=ibk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
										Thông báo t&#7921; &#273;&#7897;ng
									</a></li>
			                 </ul>
			             </li>  
                         <li><a href="javascript:void(0)">Giao d&#7883;ch quy&#7873;n ch&#7885;n</a>
			                 <ul>
			                     <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkMoTTQuyenChonProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
											M&#7903; tr&#7841;ng th&#225;i quy&#7873;n ch&#7885;n
											</a></li>
			                     <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkQLTTProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
											Qu&#7843;n l&#253; tr&#7841;ng th&#225;i
											</a></li>
			                     <li class="node-3"><a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obklietkeGDQCProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start">
											Li&#7879;t k&#234; giao d&#7883;ch &#273;&#227; th&#7921;c hi&#7879;n
											</a></li>
			                 </ul>
			             </li>
			-->
                        </ul>
                    </li>
                </ul>
                <div class="box-left">
                    <a href="javascript:void(0)">
                        <!--<img src="images/banerweb_loc.png" />-->
                        <iframe src="https://online.acb.com.vn/news/index.php/quang-cao-ben-trai" frameborder="0" height="161px" width="161px" scrolling="no" marginheight="0px" marginwidth="0px"> </iframe>
                    </a>
                    <div class="copyright">
                        <span>Copyright © 2013<br />Ngân hàng Á Châu- ACB<br />442 Nguy&#7877;n Th&#7883; Minh Khai,<br />Q.3, TP HCM.         
                        </span>
                    </div>
                </div>
            </div>
            <!--*********************-->
            <!--Cột bên phải-->
            <!--*********************-->
            <div class="main-right">
                <!--*********************-->
                <!--Ph?n header ph?a tr?n b?n ph?i -->
                <!--*********************-->
                <div class="header">
                    <script>
                        var mydate = new Date();
                        var year = mydate.getYear();
                        if (year < 1000) year += 1900;
                        var day = mydate.getDay();
                        var month = mydate.getMonth();
                        var daym = mydate.getDate();
                        if (daym < 10) daym = "0" + daym;
                        var dayarray = new Array("Ch&#7911; nh&#7853;t", "Th&#7913; 2", "Th&#7913; 3", "Th&#7913; 4", "Th&#7913; 5", "Th&#7913; 6", "Th&#7913; 7");
                        var montharray = new Array("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12");
                        document.write("<div class=\"timer\">" + dayarray[day] + ", ng&#224;y " + daym + " th&#225;ng " + montharray[month] + " n&#259;m " + year + "</div>");
                    </script>
                    <div class="header-right">
                        <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=ibkLogoutOp&dse_errorPage=ibk/login.jsp&dse_processorState=initial" class="marginright">
                            <img src="img/icon/logout_web.png" alt="" />Thoát</a>
                        <!--<a href="javascript:void(0)" class="marginright"> <img
	src="img/icon/help.png" alt="" />Tr&#7907; gi�p</a> -->
                        <!--<a
	href="javascript:void(0)" class="marginright"> <img src="../img/icon/help.png" alt="" />
H&#7897;p th&#432;</a>
-->
                        <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkTroGiupProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start" class="marginright">
                            <img src="img/icon/help.png" alt="" />Tr&#7907; giúp
                        </a>
                        <a href="Request?&dse_sessionId=twRZRBf7QMSbl0OYmXMAn_m&dse_applicationId=-1&dse_pageId=9&dse_operationName=obkHopThuProc&dse_errorPage=obk/login.jsp&dse_processorState=initial&dse_nextEventName=start" class="marginright">
H&#7897;p th&#432;
		</a>
                        <a href="javascript:void(0)"> <img src="img/support.jpg" height="40px" style=" margin-right: -5px!important;" />
                        </a>
                    </div>
                </div>
                <!--*********************-->
                <!--Phần nội dung chính-->
                <!--*********************-->
                <div class="content-holder">
                    <h1>Xin chào, CTY TNHH KIELER GERMANY</h1>
                    <!-- InstanceBeginEditable name="main" -->

                    <!-- InstanceBeginEditable name="main" -->

                    <script>
                        function smit(form) {
                            form.submit();
                        }

                        function XacNhanSoDu() {
                            document.submitByMonth.dse_nextEventName.value = 'xacNhanSoDu';
                            document.submitByMonth.submit();
                        }

                        function SubmitByMonth() {
                            document.submitByMonth.PageCurr.value = 0;
                            document.submitByMonth.TotalPage.value = 0;
                            document.submitByMonth.CheckRef.value = document.main1.CheckRef.checked;
                            document.submitByMonth.EdtRef.value = document.main1.EdtRef.value;
                            document.submitByMonth.dse_nextEventName.value = 'byMonth';
                            createCookie("sort", "2", 1);
                            document.submitByMonth.submit();
                        }

                        function SubmitByDate() {
                            document.submitByDate.PageCurr.value = 0;
                            document.submitByDate.TotalPage.value = 0;
                            document.submitByDate.CheckRef.value = document.main1.CheckRef.checked;
                            document.submitByDate.EdtRef.value = document.main1.EdtRef.value;
                            document.submitByDate.dse_nextEventName.value = 'byDate';
                            createCookie("sort", "1", 1);
                            document.submitByDate.submit();
                        }

                        function OutExByDate() {
                            document.submitByDate.CheckRef.value = document.main1.CheckRef.checked;
                            document.submitByDate.EdtRef.value = document.main1.EdtRef.value;
                            document.submitByDate.dse_nextEventName.value = 'outexbydate';
                            document.submitByDate.submit();
                        }

                        function OutExByMonth() {
                            document.submitByMonth.CheckRef.value = document.main1.CheckRef.checked;
                            document.submitByMonth.EdtRef.value = document.main1.EdtRef.value;
                            document.submitByMonth.dse_nextEventName.value = 'outexbymonth';
                            document.submitByMonth.submit();
                        }

                        function OutPrintByDate() {
                            document.submitByDate.PageCurr.value = 0;
                            document.submitByDate.TotalPage.value = 0;
                            document.submitByDate.CheckRef.value = document.main1.CheckRef.checked;
                            document.submitByDate.EdtRef.value = document.main1.EdtRef.value;
                            document.submitByDate.dse_nextEventName.value = 'outprtbydate';
                            var url = "/acbib";
                            var data = '/Request?&dse_sessionId=' + 'twRZRBf7QMSbl0OYmXMAn_m' + '&dse_applicationId=' + '-1' +
                                '&dse_pageId=' + '9' + '&dse_operationName=obkAcctDetailProc&dse_errorPage=login.jsp&dse_processorState=acctDetailPage&dse_nextEventName=outprtbydate&AccountNbr=' +
                                document.submitByDate.AccountNbr.value + '&CheckRef=' + document.main1.CheckRef.checked +
                                '&EdtRef=' + document.submitByDate.EdtRef.value + '&FromDate=' + document.submitByDate.FromDate.value +
                                '&ToDate=' + document.submitByDate.ToDate.value;
                            //alert(data);
                            window.open(url + data);
                            //document.submitByDate.submit();
                        }

                        function OutPrintByMonth() {
                            document.submitByMonth.PageCurr.value = 0;
                            document.submitByMonth.TotalPage.value = 0;
                            document.submitByMonth.CheckRef.value = document.main1.CheckRef.checked;
                            document.submitByMonth.EdtRef.value = document.main1.EdtRef.value;
                            document.submitByMonth.dse_nextEventName.value = 'outprtbymonth';

                            var url = "/acbib";
                            var data = '/Request?&dse_sessionId=' + 'twRZRBf7QMSbl0OYmXMAn_m' + '&dse_applicationId=' + '-1' +
                                '&dse_pageId=' + '9' + '&dse_operationName=obkAcctDetailProc&dse_errorPage=login.jsp&dse_processorState=acctDetailPage&dse_nextEventName=outprtbymonth&AccountNbr=' +
                                document.submitByMonth.AccountNbr.value + '&CheckRef=' + document.main1.CheckRef.checked +
                                '&EdtRef=' + document.submitByMonth.EdtRef.value + '&MonthCurr=' + document.submitByMonth.MonthCurr.value +
                                '&YearCurr=' + document.submitByMonth.YearCurr.value;
                            window.open(url + data);
                            //document.submitByMonth.submit();
                        }

                        function ChoosePage() {
                            var sort = readCookie("sort");
                            if (sort == "1") {
                                document.choosePage.dse_nextEventName.value = 'choosePage';
                                document.choosePage.submit();
                            } else {
                                document.choosePage.dse_nextEventName.value = 'choosePageMonth';
                                document.choosePage.submit();
                            }
                        }

                        function prev() {
                            var sort = readCookie("sort");
                            document.choosePage.PageCurr.value--;
                            if (sort == "1") {
                                document.choosePage.dse_nextEventName.value = 'choosePage';
                                document.choosePage.submit();
                            } else {
                                document.choosePage.dse_nextEventName.value = 'choosePageMonth';
                                document.choosePage.submit();
                            }
                        }

                        function next() {
                            var sort = readCookie("sort");
                            document.choosePage.PageCurr.value++;
                            if (sort == "1") {
                                document.choosePage.dse_nextEventName.value = 'choosePage';
                                document.choosePage.submit();
                            } else {
                                document.choosePage.dse_nextEventName.value = 'choosePageMonth';
                                document.choosePage.submit();
                            }
                        }

                        function run(evt) {
                            var charCode = (evt.which) ? evt.which : event.keyCode;
                            if (charCode > 31 && (charCode < 48 || charCode > 57))
                                return false;
                            if (charCode == 13) {
                                var sort = readCookie("sort");
                                if (sort == "1") {
                                    document.choosePage.dse_nextEventName.value = 'choosePage';
                                    document.choosePage.submit();
                                } else {
                                    document.choosePage.dse_nextEventName.value = 'choosePageMonth';
                                    document.choosePage.submit();
                                }
                                return true;
                            }
                            return true;
                        }

                        function createCookie(name, value, days) {
                            if (days) {
                                var date = new Date();
                                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                                var expires = "; expires=" + date.toGMTString();
                            } else var expires = "";
                            document.cookie = name + "=" + value + expires + "; path=/";
                        }

                        function readCookie(name) {
                            var nameEQ = name + "=";
                            var ca = document.cookie.split(';');
                            for (var i = 0; i < ca.length; i++) {
                                var c = ca[i];
                                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                            }
                            return null;
                        }
                    </script>


                    <h4>CHI TI&#7870;T TH&#212;NG TIN T&#192;I KHO&#7842;N</h4>
                    <input type="hidden" name="dse_operationName" value="obkAcctSumProc" />
                    <div class="ruler"></div>
                    <table class="table-form">
                        <tr>
                            <td class="white_tieude_2">CH&#7884;N TH&#7900;I GIAN GIAO D&#7882;CH </td>
                        </tr>
                        <tr>
                            <td>
                                <table>
                                    <tr>
                                        <form name="submitByDate" method="post" action="Request">
                                            <input type="hidden" name="dse_sessionId" value="twRZRBf7QMSbl0OYmXMAn_m" />
                                            <input type="hidden" name="dse_applicationId" value="-1" />
                                            <input type="hidden" name="dse_operationName" value="obkAcctDetailProc" />
                                            <input type="hidden" name="dse_pageId" value="9" />
                                            <input type="hidden" name="dse_processorState" value="acctDetailPage" />
                                            <input type="hidden" name="dse_processorId" value="GOEXFNGXBPCECFABGAFAFGBXFEDRIJHVBJBLJAGC" />
                                            <input type="hidden" name="dse_errorPage" value="/obk/acctinquiry/trans.jsp" />


                                            <td>
                                                <table class="table-small">
                                                    <tbody>
                                                        <tr>

                                                            <td>Ch&#7885;n t&#224;i kho&#7843;n</td>
                                                            <td>
                                                                <select name="AccountNbr" id="AccountNbr1">
                                                                    <option value="6361234566" selected="selected">6361234566</option>
                                                                    <option value="9891234566">9891234566</option>
                                                                </select>
                                                            </td>

                                                        </tr>

                                                        <tr>
                                                            <td>T&#7915; ng&#224;y
                                                            </td>
                                                            <td>
                                                                <input type="text" name="FromDate" value="27/07/2023" size="20" class="date-picker" id="FromDate" maxlength="10" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>&#272;&#7871;n ng&#224;y

                                                            </td>
                                                            <td align="left">
                                                                <input type="text" name="ToDate" value="27/08/2023" size="20" class="date-picker" id="ToDate" maxlength="10" />
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td colspan="2" align="center"><span style="padding-left: 0px; padding-right: 0px;"> 
										<input type="button" value="In sao k&#234;" class="nut1 button-white"
										onclick="OutPrintByDate();" />
										<input type="button" value="Xem" class="nut1 button-blue"
										onclick="SubmitByDate();" /> 
										<input type="button" value="Xu&#7845;t Excel" class="nut1 button-white"
										onclick="OutExByDate();" /></span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2" align="center" class="text_bold" colspan="2">
                                                                <input type="hidden" name="CheckRef" id="CheckRef" value="" />
                                                                <input type="hidden" name="EdtRef" id="EdtRef" value="" />
                                                                <input type="hidden" name="dse_nextEventName" value="byDate" id="chooseByDate" />
                                                                <input type="hidden" name="PageCurr" value="1" />
                                                                <input type="hidden" name="TotalPage" value="1" />

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </form>

                                        <form name="submitByMonth" method="post" action="Request">
                                            <input type="hidden" name="dse_sessionId" value="twRZRBf7QMSbl0OYmXMAn_m" />
                                            <input type="hidden" name="dse_applicationId" value="-1" />
                                            <input type="hidden" name="dse_operationName" value="obkAcctDetailProc" />
                                            <input type="hidden" name="dse_pageId" value="9" />
                                            <input type="hidden" name="dse_processorState" value="acctDetailPage" />
                                            <input type="hidden" name="dse_processorId" value="GOEXFNGXBPCECFABGAFAFGBXFEDRIJHVBJBLJAGC" />
                                            <input type="hidden" name="dse_errorPage" value="/obk/acctinquiry/trans.jsp" />


                                            <td>
                                                <table class="table-small">
                                                    <tr>

                                                        <td>Ch&#7885;n t&#224;i kho&#7843;n</td>
                                                        <td>
                                                            <select name="AccountNbr" id="AccountNbr2">
                                                                <option value="6361234566" selected="selected">6361234566</option>
                                                                <option value="9891234566">9891234566</option>
                                                            </select>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            Th&#225;ng
                                                        </td>
                                                        <td>
                                                            <select name="MonthCurr" id="dsthang">
                                                                <option value="01">01</option>
                                                                <option value="02">02</option>
                                                                <option value="03">03</option>
                                                                <option value="04">04</option>
                                                                <option value="05">05</option>
                                                                <option value="06">06</option>
                                                                <option value="07">07</option>
                                                                <option value="08" selected="selected">08</option>
                                                                <option value="09">09</option>
                                                                <option value="10">10</option>
                                                                <option value="11">11</option>
                                                                <option value="12">12</option>
                                                            </select>

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            N&#259;m
                                                        </td>
                                                        <td>
                                                            <select name="YearCurr" id="dsnam">
                                                                <option value="2020">2020</option>
                                                                <option value="2021">2021</option>
                                                                <option value="2022">2022</option>
                                                                <option value="2023" selected="selected">2023</option>
                                                            </select>
                                                        </td>

                                                    </tr>

                                                    <tr>
                                                        <td colspan="2" align="center"><span style="padding-left: 0px; padding-right: 0px;"> 
										<input type="button" value="In sao k&#234;" class="nut1 button-white"
										onclick="OutPrintByMonth();" />
										<input type="button" value="Xem" class="nut1 button-blue"
										onclick="SubmitByMonth();" /> 
										<input type="button" value="Xu&#7845;t Excel" class="nut1 button-white"
										onclick="OutExByMonth();" /></span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2" align="center" class="text_bold" colspan="2">
                                                            <input type="hidden" name="CheckRef" id="CheckRef" value="" />
                                                            <input type="hidden" name="EdtRef" id="EdtRef" value="" />
                                                            <input type="hidden" name="dse_nextEventName" value="byMonth" id="chooseByDate" />
                                                            <input type="hidden" name="PageCurr" value="1" />
                                                            <input type="hidden" name="TotalPage" value="1" />
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </form>

                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <input type="hidden" name="MinorTKXacNhanSoDu" id="MinorTKXacNhanSoDu" value="" />
                        <input type="hidden" name="MajorTKXacNhanSoDu" id="MajorTKXacNhanSoDu" value="" />
                        <input type="hidden" name="SoDuTKXacNhanSoDu" id="SoDuTKXacNhanSoDu" value="" />
                        <div>
                            <tr>
                                <td id="xnsd">
                                    <form name="main" method="post" action="Request">
                                        <input type="hidden" name="dse_sessionId" value="twRZRBf7QMSbl0OYmXMAn_m" />
                                        <input type="hidden" name="dse_applicationId" value="-1" />
                                        <input type="hidden" name="dse_operationName" value="obkAcctDetailProc" />
                                        <input type="hidden" name="dse_pageId" value="9" />
                                        <input type="hidden" name="dse_processorState" value="acctDetailPage" />
                                        <input type="hidden" name="dse_processorId" value="GOEXFNGXBPCECFABGAFAFGBXFEDRIJHVBJBLJAGC" />
                                        <input type="hidden" name="dse_errorPage" value="/ibk/acctinquiry/trans.jsp" />


                                        <input type="hidden" name="dse_nextEventName" value="rateDetail" id="rateDetail" />
                                        <style>
                                            .white-bg {
                                                background-color: white !important;
                                            }
                                        </style>
                                        <table class="white-bg">
                                            <tr>
                                                <td>
                                                    <div style="text-align: center; padding: 10px;">
                                                        <a class="img_login" style="margin-right: 20px;" href="#" onclick="smit(main);"> Xem l&#7883;ch s&#7917; l&#227;i su&#7845;t
									</a>

                                                    </div>
                                                </td>
                                            </tr>

                                        </table>
                                    </form>

                                </td>
                            </tr>

                        </div>
                        <tr>
                            <form name="main1" method="post" action="Request">
                                <input type="hidden" name="dse_sessionId" value="twRZRBf7QMSbl0OYmXMAn_m" />
                                <input type="hidden" name="dse_applicationId" value="-1" />
                                <input type="hidden" name="dse_operationName" value="obkAcctDetailProc" />
                                <input type="hidden" name="dse_pageId" value="9" />
                                <input type="hidden" name="dse_processorState" value="acctDetailPage" />
                                <input type="hidden" name="dse_processorId" value="GOEXFNGXBPCECFABGAFAFGBXFEDRIJHVBJBLJAGC" />
                                <input type="hidden" name="dse_errorPage" value="/obk/login.jsp" />


                                <td height="20" align='center' valign='middle'>
                                    <input type="checkbox" name="CheckRef" value="true"><span style="font-weight: bold;">Li&#7879;t k&#234; theo s&#7889; tham chi&#7871;u</span>&nbsp;&nbsp;
                                    <input type="text" name="EdtRef" value="" maxlength="30" size="18" />
                                </td>
                            </form>

                        </tr>
                        <tr>
                            <td height="10" align="center"></td>
                        </tr>
                        <tr>
                            <td height="1" align="left" bgcolor="#cccccc"></td>
                        </tr>
                        <tr>
                            <td height="10" align="center"></td>
                        </tr>



                        <tr>
                            <td height="20" align="right" class="success red_tieude">S&#7889; d&#432; &#273;&#7847;u: 79.764.861 (VND)</td>
                        </tr>

                        <tr>
                            <td align="left">

                                <table class="table-style-double1" border="0" width="100%" cellspacing="1" cellpadding="0" id="table1">
                                    <caption></caption>
                                    <tr class="table-style-double1">
                                        <th class="table-style-double1" align="center">Ng&#224;y hi&#7879;u l&#7921;c</th>
                                        <th class="table-style-double1" align="center">Ng&#224;y GD</th>
                                        <th class="table-style-double1" align="center">S&#7889; GD</th>
                                        <th class="table-style-double1" align="center">Ghi n&#7907;</th>
                                        <th class="table-style-double1" align="center">Ghi c&#243;</th>
                                        <th class="table-style-double1" align="center">S&#7889; d&#432;</th>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">28-07-23</td>
                                        <td class="table-style-double1" align="center" width="14%">28-07-23 09:14:39 AM</td>
                                        <td class="table-style-double1" align="center" width="16%">2619</td>
                                        <td class="table-style-double1" align="right" width="12%">6.462.900</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">73.301.961</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">+BHXH+103+00+TW9557C+07911+DONG+BHXH+-280723-09:14:36 936109</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">31-07-23</td>
                                        <td class="table-style-double1" align="center" width="14%">31-07-23 04:52:45 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2620</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">156.747.000</td>
                                        <td class="table-style-double1" align="right" width="12%">230.048.961</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">IB NGUYEN VAN CONG CONG NOP TIEN MAT</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">31-07-23</td>
                                        <td class="table-style-double1" align="center" width="14%">31-07-23 05:51:12 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2621</td>
                                        <td class="table-style-double1" align="right" width="12%">7.731.000</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">222.317.961</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">LUONG THANG 07-310723-17:51:10 475544</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">31-07-23</td>
                                        <td class="table-style-double1" align="center" width="14%">31-07-23 05:51:13 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2622</td>
                                        <td class="table-style-double1" align="right" width="12%">4.600.476</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">217.717.485</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">LUONG THANG 07-310723-17:51:12 475550</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">31-07-23</td>
                                        <td class="table-style-double1" align="center" width="14%">31-07-23 05:51:16 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2623</td>
                                        <td class="table-style-double1" align="right" width="12%">7.827.700</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">209.889.785</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">LUOMG THANG 07-310723-17:51:14 475559</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">31-07-23</td>
                                        <td class="table-style-double1" align="center" width="14%">31-07-23 05:51:18 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2624</td>
                                        <td class="table-style-double1" align="right" width="12%">2.909.524</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">206.980.261</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">LUONG THANG 07-310723-17:51:16 475594</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">31-07-23</td>
                                        <td class="table-style-double1" align="center" width="14%">31-07-23 05:51:19 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2625</td>
                                        <td class="table-style-double1" align="right" width="12%">7.510.000</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">199.470.261</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">LUONG THANG 07-310723-17:51:18 475644</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">31-07-23</td>
                                        <td class="table-style-double1" align="center" width="14%">31-07-23 05:51:21 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2626</td>
                                        <td class="table-style-double1" align="right" width="12%">5.690.952</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">193.779.309</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">LUONG THANG 07-310723-17:51:20 475654</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">31-07-23</td>
                                        <td class="table-style-double1" align="center" width="14%">31-07-23 05:51:24 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2627</td>
                                        <td class="table-style-double1" align="right" width="12%">1.450.000</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">192.329.309</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">LUONG THANG 07-310723-17:51:22 475682</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">31-07-23</td>
                                        <td class="table-style-double1" align="center" width="14%">31-07-23 05:51:26 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2628</td>
                                        <td class="table-style-double1" align="right" width="12%">7.921.521</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">184.407.788</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">LUONG THANG 07-310723-17:51:24 475690</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">31-07-23</td>
                                        <td class="table-style-double1" align="center" width="14%">31-07-23 05:51:27 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2629</td>
                                        <td class="table-style-double1" align="right" width="12%">10.405.000</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">174.002.788</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">LUONG THANG 07-310723-17:51:26 475711</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">31-07-23</td>
                                        <td class="table-style-double1" align="center" width="14%">31-07-23 05:51:29 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2630</td>
                                        <td class="table-style-double1" align="right" width="12%">8.172.000</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">165.830.788</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">LUONG THANG 07-310723-17:51:27 475724</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">31-07-23</td>
                                        <td class="table-style-double1" align="center" width="14%">31-07-23 05:51:30 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2631</td>
                                        <td class="table-style-double1" align="right" width="12%">8.503.000</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">157.327.788</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">LUONG THANG 07-310723-17:51:29 475747</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">31-07-23</td>
                                        <td class="table-style-double1" align="center" width="14%">31-07-23 05:51:32 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2632</td>
                                        <td class="table-style-double1" align="right" width="12%">1.914.524</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">155.413.264</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">LUONG THANG 07-310723-17:51:30 475752</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">31-07-23</td>
                                        <td class="table-style-double1" align="center" width="14%">31-07-23 05:52:12 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2633</td>
                                        <td class="table-style-double1" align="right" width="12%">676.190</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">154.737.074</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">HBCTY TNHH KIELER GERMANY LUONG THANG 07</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">31-07-23</td>
                                        <td class="table-style-double1" align="center" width="14%">31-07-23 05:52:18 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2634</td>
                                        <td class="table-style-double1" align="right" width="12%">7.910.000</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">146.827.074</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">HBCTY TNHH KIELER GERMANY LUONG THANG 07</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">31-07-23</td>
                                        <td class="table-style-double1" align="center" width="14%">31-07-23 05:52:20 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2635</td>
                                        <td class="table-style-double1" align="right" width="12%">9.510.851</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">137.316.223</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">HBCTY TNHH KIELER GERMANY LUONG THANG 07</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">31-07-23</td>
                                        <td class="table-style-double1" align="center" width="14%">31-07-23 05:52:31 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2636</td>
                                        <td class="table-style-double1" align="right" width="12%">14.026.277</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">123.289.946</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">HBCTY TNHH KIELER GERMANY LUONG THANG 07</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">31-07-23</td>
                                        <td class="table-style-double1" align="center" width="14%">31-07-23 05:52:31 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2637</td>
                                        <td class="table-style-double1" align="right" width="12%">7.536.286</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">115.753.660</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">HBCTY TNHH KIELER GERMANY LUONG THANG 07</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">31-07-23</td>
                                        <td class="table-style-double1" align="center" width="14%">31-07-23 05:52:32 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2638</td>
                                        <td class="table-style-double1" align="right" width="12%">24.776.555</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">90.977.105</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">HBCTY TNHH KIELER GERMANY LUONG THANG 07</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">31-07-23</td>
                                        <td class="table-style-double1" align="center" width="14%">31-07-23 05:52:33 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2639</td>
                                        <td class="table-style-double1" align="right" width="12%">10.879.902</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">80.097.203</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">HBCTY TNHH KIELER GERMANY LUONG THANG 07</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">01-08-23</td>
                                        <td class="table-style-double1" align="center" width="14%">01-08-23 01:47:58 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2640</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">2.595.337</td>
                                        <td class="table-style-double1" align="right" width="12%">82.692.540</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">TIKI COMPANY LIMITED-[501890470100489] DVH TAI ACB HCM, PAYMENT FOR SELLER ID 337640 , 2062308397 , 1353368</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">03-08-23</td>
                                        <td class="table-style-double1" align="center" width="14%">03-08-23 09:43:56 AM</td>
                                        <td class="table-style-double1" align="center" width="16%">2641</td>
                                        <td class="table-style-double1" align="right" width="12%">60.000.000</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">22.692.540</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">HBCTY TNHH KIELER GERMANY RUT TIEN MAT</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">03-08-23</td>
                                        <td class="table-style-double1" align="center" width="14%">03-08-23 03:29:25 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2642</td>
                                        <td class="table-style-double1" align="right" width="12%">3.800.000</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">18.892.540</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">HBCTY TNHH KIELER GERMANY LUONG THANG 07</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">03-08-23</td>
                                        <td class="table-style-double1" align="center" width="14%">03-08-23 03:29:25 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2643</td>
                                        <td class="table-style-double1" align="right" width="12%">4.660.000</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">14.232.540</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">HBCTY TNHH KIELER GERMANY LUONG THANG 07</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">03-08-23</td>
                                        <td class="table-style-double1" align="center" width="14%">03-08-23 03:29:26 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2644</td>
                                        <td class="table-style-double1" align="right" width="12%">2.105.000</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">12.127.540</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">HBCTY TNHH KIELER GERMANY LUONG THANG 07</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">12-08-23</td>
                                        <td class="table-style-double1" align="center" width="14%">12-08-23 03:01:33 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2645</td>
                                        <td class="table-style-double1" align="right" width="12%">100.000</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">12.027.540</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20"> THU PHI SMS THAY DOI SO DU THANG 07/2023</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">14-08-23</td>
                                        <td class="table-style-double1" align="center" width="14%">14-08-23 12:11:25 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2646</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">1.838.508</td>
                                        <td class="table-style-double1" align="right" width="12%">13.866.048</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">RECESS COMPANY LIMITED-[501900770100511] DVH TAI ACB - NHTMCP A CHAU, VN340KG81F-20230814</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">16-08-23</td>
                                        <td class="table-style-double1" align="center" width="14%">16-08-23 03:30:48 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2647</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">348.867</td>
                                        <td class="table-style-double1" align="right" width="12%">14.214.915</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">IB DAO AN BAO HOAN PHI CAN ADS LAZADA</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">18-08-23</td>
                                        <td class="table-style-double1" align="center" width="14%">18-08-23 02:45:50 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2648</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">140.000.000</td>
                                        <td class="table-style-double1" align="right" width="12%">154.214.915</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">HBCTY TNHH XAY LAP VA THUONG MAI MANH NGHIA MN TT TIEN DOT 1</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">18-08-23</td>
                                        <td class="table-style-double1" align="center" width="14%">18-08-23 03:26:07 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2649</td>
                                        <td class="table-style-double1" align="right" width="12%">21.600.000</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">132.614.915</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">KIELER THANH TOAN HOP DONG 2872-2023 CHO TTP HOANG GIA-180823-15:26:06 071464</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">18-08-23</td>
                                        <td class="table-style-double1" align="center" width="14%">18-08-23 03:27:07 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2650</td>
                                        <td class="table-style-double1" align="right" width="12%">120.000.000</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">12.614.915</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">HBCTY TNHH KIELER GERMANY RUT TIEN MAT</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">22-08-23</td>
                                        <td class="table-style-double1" align="center" width="14%">22-08-23 09:33:45 AM</td>
                                        <td class="table-style-double1" align="center" width="16%">2651</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">168.385.000</td>
                                        <td class="table-style-double1" align="right" width="12%">180.999.915</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">HBCTY TNHH XAY LAP VA THUONG MAI MANH NGHIA MANHNGHIA TT LAN 2</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">23-08-23</td>
                                        <td class="table-style-double1" align="center" width="14%">23-08-23 01:44:08 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2652</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">7.221.500</td>
                                        <td class="table-style-double1" align="right" width="12%">188.221.415</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">HBCONG TY TNHH CUC GACH CTY CUC GACH CHUYEN TIEN TU TIET TRUNG</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">23-08-23</td>
                                        <td class="table-style-double1" align="center" width="14%">23-08-23 03:17:44 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2653</td>
                                        <td class="table-style-double1" align="right" width="12%">150.000.000</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">38.221.415</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">HBCTY TNHH KIELER GERMANY RUT TIEN MAT</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">24-08-23</td>
                                        <td class="table-style-double1" align="center" width="14%">24-08-23 05:36:59 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2654</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">15.000.000</td>
                                        <td class="table-style-double1" align="right" width="12%">53.221.415</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">IB NGUYEN VAN CONG NOP TIEN MAT</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">24-08-23</td>
                                        <td class="table-style-double1" align="center" width="14%">24-08-23 05:51:22 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2655</td>
                                        <td class="table-style-double1" align="right" width="12%">50.000.000</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">3.221.415</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20">HBCTY TNHH KIELER GERMANY KIELER THANH TOAN HOP DONG CHO MANH NGHIA</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%">25-08-23</td>
                                        <td class="table-style-double1" align="center" width="14%">25-08-23 09:32:47 PM</td>
                                        <td class="table-style-double1" align="center" width="16%">2656</td>
                                        <td class="table-style-double1" align="right" width="12%">&nbsp;</td>
                                        <td class="table-style-double1" align="right" width="12%">1.495</td>
                                        <td class="table-style-double1" align="right" width="12%">3.222.910</td>
                                    </tr>
                                    <tr class="table-style-double1">
                                        <td class="table-style-double1" align="center" width="14%"></td>
                                        <td class="acctSum" align="left" colspan="5" height="20"> LAI NHAP VON</td>
                                        <!--</td>
	<td class="table-style-double1" align="center" width="14%">&nbsp;</td>
	<td class="table-style-double1" align="center" width="16%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">&nbsp;</td>
	<td class="table-style-double1" align="right" width="12%">-->
                                        <td class="acctSum" align="left" width="7%"></td>
                                    </tr>
                                </table>

                            </td>
                        </tr>

                        <tr>
                            <td height="20" align="right" class="red_tieude">T&#7893;ng r&#250;t ra: 568.679.658 (VND)&nbsp;&nbsp;&nbsp;&nbsp;T&#7893;ng g&#7917;i v&#224;o: 492.137.707 (VND)</td>
                        </tr>

                        <tr>
                            <td height="20" align="right" class="success red_tieude">S&#7889; d&#432; cu&#7889;i: 3.222.910 (VND)</td>
                        </tr>



                    </table>

                    <!-- InstanceEndEditable -->
                </div>
            </div>
        </div>
    </div>
</body>
<!-- InstanceEnd -->

</html>