fetch("https://ebank.tpb.vn/gateway/api/auth/login", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
    "app_version": "2023.04.17",
    "authorization": "Bearer",
    "content-type": "application/json",
    "device_id": "t8zL1ZTnu2oxOIw2SNXzT01jLs2IuvHJLHww5EdrkdVLX",
    "device_name": "Chrome",
    "platform_name": "WEB",
    "platform_version": "116",
    "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "source_app": "HYDRO",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"username\":\"0915586030\",\"password\":\"Obs@2023\",\"step_2FA\":\"VERIFY\",\"deviceId\":\"t8zL1ZTnu2oxOIw2SNXzT01jLs2IuvHJLHww5EdrkdVLX\"}",
  "method": "POST"
});
const ketqua1 = {
    "expires_in": 0,
    "verify_data_res": {
      "transaction_id": "2751ca01-da07-4939-b0f0-07b999febf17",
      "auth_method": "etoken",
      "cif_number": "03591049",
      "phone_number": "*******030",
      "login_2FA": true
    }
  }
  const ketqua3={
    "access_token": "eyJraWQiOiJNYmV1VmVVWlhVT2FJcDgwYmx1XC9sanFOQjNKZE9aSDgxQ3JGU0tpMmVcL2M9IiwiY3R5IjoiSldUIiwiZW5jIjoiQTEyOENCQy1IUzI1NiIsImFsZyI6ImRpciJ9..iV7fbY1YyB9GcKwlW6FZEg.0rXeKA3BfTev8bYsii4JkiPh0DjS2HuC82lfwAb27ueVgE17RHgCy6pSpn_LpQ9mig6sugxpqQTJ8H0Gtvx4QOqxXPkMOVGzFPnNjRxwFPnpLpXXyuFRrvTFp901RtNNFpOcRRS5rME9172yiuxdwZr3MIHlGb3LijBw6w7krrfL8h3rA5HRWNANJY1hh7-oixIKrdLLFwGYqnZDhkL80OXwOVjjQo6DDz583FiSOtZegYBOgWzwg0wW3pU4rDgL0yLa0CsIhlcy5kz8QF_L58TshOqOr6V8xZHc6Aw7LMPDTwCI-o-S53rVVVzaZWJMhYqZRGAQshBLXp5xHz9QQIW4NYSf4tJUvwf7Icds_K0VjSs1qs-HYgUZRZzoklKR8OUCRg_Bw5qnCDAxoZ5T6N5Jv_1HaYGFXGtXuIeykT3P251BH-wCKcRWpXnV8B1N6XVIlmhuKDRW7in4KkcKvsmOCT32gP6POCSi77JL1LGsCRpXWgwaq8r-gph7yeyC.sRwW7nFAPsApLlcqozwasA",
    "token_type": "Bearer",
    "expires_in": 900
  }

fetch("https://ebank.tpb.vn/gateway/api/auth/login2FA/sms", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
    "app_version": "2023.04.17",
    "authorization": "Bearer",
    "content-type": "application/json",
    "device_id": "t8zL1ZTnu2oxOIw2SNXzT01jLs2IuvHJLHww5EdrkdVLX",
    "device_name": "Chrome",
    "platform_name": "WEB",
    "platform_version": "116",
    "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "source_app": "HYDRO",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"transaction_id\":\"2751ca01-da07-4939-b0f0-07b999febf17\"}",
  "method": "POST"
});

const ketqua2 = {
    "transaction_id": "2751ca01-da07-4939-b0f0-07b999febf17",
    "transId_OTP": "1469290443851111"
  }

fetch("https://ebank.tpb.vn/gateway/api/auth/login2FA/confirm", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
    "app_version": "2023.04.17",
    "authorization": "Bearer",
    "content-type": "application/json",
    "device_id": "t8zL1ZTnu2oxOIw2SNXzT01jLs2IuvHJLHww5EdrkdVLX",
    "device_name": "Chrome",
    "platform_name": "WEB",
    "platform_version": "116",
    "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "source_app": "HYDRO",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"username\":\"0915586030\",\"step_2FA\":\"CONFIRM\",\"confirm_data_req\":{\"transaction_id\":\"2751ca01-da07-4939-b0f0-07b999febf17\",\"otp_value\":\"309079\",\"transId_OTP\":\"1469290443851111\"}}",
  "method": "POST"
});

const ketqua = {
    "access_token": "eyJraWQiOiJNYmV1VmVVWlhVT2FJcDgwYmx1XC9sanFOQjNKZE9aSDgxQ3JGU0tpMmVcL2M9IiwiY3R5IjoiSldUIiwiZW5jIjoiQTEyOENCQy1IUzI1NiIsImFsZyI6ImRpciJ9..694aM5ShuSEQbRv5yOlcug.M8DbFd1TZ4XPOZkCTtHHelnHA0TVg4T9cFGILboTJHIit_gNInJxoDRnxmhrc5qLon9r8mbFyC_x_Y8etW6tfbnHaQxeJ62qyz3yp1ZOEAJm1H0tQzBceKUTpOCHsOwWDDsLQflAG4BOTYiSQFM1dl2PTBxKoPhKJYqpkFHJBPHh1LkjXiKCfbGhK2pMGKpkC7LseD1oa24cXiBtcVmdMIHI_K0l25LuzNTgA251UQNX7HpbqZuk1osmwFDwpTubZcu-93S-aDK5zzHoG6Da6O7_bzRv-xOecAQEoCQ2YlSGZKtDIxinRRRMtENnSemg41dI8ngF_WawcBPlXUUrT0Gq1cMam2Bc8qsogKYMDl_z7LckfILdZup1pkozz8i610H8oEkmLwwuRaT1Zfxg1Mj0s7q0uWFh6IUxf0KNmTibhca07wlahAtr0gLgDhTq9ein52sMjrLGXMzw8Rv72hpLhebB3K0e_u4qOJ0EXfiarwyqyACg60tzv4wN5ls5g37f6VsAbhC9e7hZ55jb_WbV78MCXuCRljJVMX1Gzqw.mJ-duYhWToq9BdVY_mZxUA",
    "token_type": "Bearer",
    "expires_in": 900
  }


  fetch("https://ebank.tpb.vn/gateway/api/customers-presentation-service/v1/customers", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
    "app_version": "2023.04.17",
    "authorization": "Bearer eyJraWQiOiJNYmV1VmVVWlhVT2FJcDgwYmx1XC9sanFOQjNKZE9aSDgxQ3JGU0tpMmVcL2M9IiwiY3R5IjoiSldUIiwiZW5jIjoiQTEyOENCQy1IUzI1NiIsImFsZyI6ImRpciJ9..694aM5ShuSEQbRv5yOlcug.M8DbFd1TZ4XPOZkCTtHHelnHA0TVg4T9cFGILboTJHIit_gNInJxoDRnxmhrc5qLon9r8mbFyC_x_Y8etW6tfbnHaQxeJ62qyz3yp1ZOEAJm1H0tQzBceKUTpOCHsOwWDDsLQflAG4BOTYiSQFM1dl2PTBxKoPhKJYqpkFHJBPHh1LkjXiKCfbGhK2pMGKpkC7LseD1oa24cXiBtcVmdMIHI_K0l25LuzNTgA251UQNX7HpbqZuk1osmwFDwpTubZcu-93S-aDK5zzHoG6Da6O7_bzRv-xOecAQEoCQ2YlSGZKtDIxinRRRMtENnSemg41dI8ngF_WawcBPlXUUrT0Gq1cMam2Bc8qsogKYMDl_z7LckfILdZup1pkozz8i610H8oEkmLwwuRaT1Zfxg1Mj0s7q0uWFh6IUxf0KNmTibhca07wlahAtr0gLgDhTq9ein52sMjrLGXMzw8Rv72hpLhebB3K0e_u4qOJ0EXfiarwyqyACg60tzv4wN5ls5g37f6VsAbhC9e7hZ55jb_WbV78MCXuCRljJVMX1Gzqw.mJ-duYhWToq9BdVY_mZxUA",
    "content-type": "application/json",
    "device_id": "t8zL1ZTnu2oxOIw2SNXzT01jLs2IuvHJLHww5EdrkdVLX",
    "device_name": "Chrome",
    "platform_name": "WEB",
    "platform_version": "116",
    "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "source_app": "HYDRO",
    "cookie": "_hjSessionUser_2893098=eyJpZCI6IjNhNTJjOGFlLWMzOWEtNWFhZi04MTFmLWFlYmI0ZWRlZjk1MCIsImNyZWF0ZWQiOjE2ODY2MjUzNTIzMjUsImV4aXN0aW5nIjpmYWxzZX0=; ea9a3d18c4c9fcf401996d7fb4d11fdc=b4a78523c9cf132693bda4ef12e3ba26; XSRF-TOKEN=75e860eb-013d-4eb4-86db-c8dd558e6918; 32ab96314c7a6cc7937b9d0a048535bb=36a9c89a8a82b1def5e094618f3988a7; 2ecbf8fca8cab9ed1bf1145d0c7ba93f=855d7bbaecc74913dbe45fee6fd2f261; NSC_JOvknwund5ryo3dc4qxfamdit155ccq=ffffffff09da08d745525d5f4f58455e445a4a423660; 7adfb3bcc8d80eadc27cf1cfed99b56b=e2fae0e310f6955e56ed3d850c268052; Authorization=eyJraWQiOiJNYmV1VmVVWlhVT2FJcDgwYmx1XC9sanFOQjNKZE9aSDgxQ3JGU0tpMmVcL2M9IiwiY3R5IjoiSldUIiwiZW5jIjoiQTEyOENCQy1IUzI1NiIsImFsZyI6ImRpciJ9..694aM5ShuSEQbRv5yOlcug.M8DbFd1TZ4XPOZkCTtHHelnHA0TVg4T9cFGILboTJHIit_gNInJxoDRnxmhrc5qLon9r8mbFyC_x_Y8etW6tfbnHaQxeJ62qyz3yp1ZOEAJm1H0tQzBceKUTpOCHsOwWDDsLQflAG4BOTYiSQFM1dl2PTBxKoPhKJYqpkFHJBPHh1LkjXiKCfbGhK2pMGKpkC7LseD1oa24cXiBtcVmdMIHI_K0l25LuzNTgA251UQNX7HpbqZuk1osmwFDwpTubZcu-93S-aDK5zzHoG6Da6O7_bzRv-xOecAQEoCQ2YlSGZKtDIxinRRRMtENnSemg41dI8ngF_WawcBPlXUUrT0Gq1cMam2Bc8qsogKYMDl_z7LckfILdZup1pkozz8i610H8oEkmLwwuRaT1Zfxg1Mj0s7q0uWFh6IUxf0KNmTibhca07wlahAtr0gLgDhTq9ein52sMjrLGXMzw8Rv72hpLhebB3K0e_u4qOJ0EXfiarwyqyACg60tzv4wN5ls5g37f6VsAbhC9e7hZ55jb_WbV78MCXuCRljJVMX1Gzqw.mJ-duYhWToq9BdVY_mZxUA",
    "Referer": "https://ebank.tpb.vn/retail/vX/two-fa",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});

