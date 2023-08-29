import axios from "axios";
import accountSchema from "../schema/account.schema";
import logger from "../ultis/logger";

export class tpbank {
    username: string;
    password: string;
    headers: object = {};
    deviceId: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
        this.deviceId = "t8zL1ZTnu2oxOIw2SNXzT01jLs2IuvHJLHww5EdrkdVLX"
    }

    async doLogin() {
        try {
            let data = JSON.stringify({
                "username": "0915586030",
                "password": "Obs@2023",
                "step_2FA": "VERIFY",
                "deviceId": this.deviceId
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://ebank.tpb.vn/gateway/api/auth/login',
                headers: {
                    'APP_VERSION': '2023.04.17',
                    'Accept': 'application/json, text/plain, */*',
                    'Accept-Language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
                    'Connection': 'keep-alive',
                    'Content-Type': 'application/json',
                    'DEVICE_ID': this.deviceId,
                    'DEVICE_NAME': 'Chrome',
                    'Origin': 'https://ebank.tpb.vn',
                    'PLATFORM_NAME': 'WEB',
                    'PLATFORM_VERSION': '116',
                    'Referer': 'https://ebank.tpb.vn/retail/vX/',
                    'SOURCE_APP': 'HYDRO',
                    'Sec-Fetch-Dest': 'empty',
                    'Sec-Fetch-Mode': 'cors',
                    'Sec-Fetch-Site': 'same-origin',
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
                    'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"macOS"'
                },
                data: data
            };

            const response = await axios.request(config)
            const convertData = {
                username: this.username,
                password: this.password,
                accessToken: response.data.access_token,
                clientId: "t8zL1ZTnu2oxOIw2SNXzT01jLs2IuvHJLHww5EdrkdVLX",
                bankCode: "TPB",
                bankName: "TPBank",
            }
            if (response.status == 200) {
                return await accountSchema.findOneAndUpdate({ username: this.username, bankCode: 'TPB' }, convertData, { upsert: true });
            }
            return logger.error("Đăng nhập thất bại!");
        } catch (error) {
            return logger.error(error);
        }
    }

    async getHistories() {
        const account = await accountSchema.findOne({ username: this.username, bankCode: 'TPB' });
        if (!account) return logger.error("Tài khoản không tồn tại!");
        const axios = require('axios');
        let data = JSON.stringify({
            "pageNumber": 1,
            "pageSize": 400,
            "accountNo": "03591049601",
            "currency": "VND",
            "maxAcentrysrno": "",
            "fromDate": "20230528",
            "toDate": "20230828",
            "keyword": ""
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://ebank.tpb.vn/gateway/api/smart-search-presentation-service/v2/account-transactions/find',
            headers: {
                'APP_VERSION': '2023.04.17',
                'Accept': 'application/json, text/plain, */*',
                'Accept-Language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
                'Authorization': `Bearer ${account.accessToken}`,
                'Connection': 'keep-alive',
                'Content-Type': 'application/json',
                'DEVICE_ID': 't8zL1ZTnu2oxOIw2SNXzT01jLs2IuvHJLHww5EdrkdVLX',
                'DEVICE_NAME': 'Chrome',
                'Origin': 'https://ebank.tpb.vn',
                'PLATFORM_NAME': 'WEB',
                'PLATFORM_VERSION': '116',
                'Referer': 'https://ebank.tpb.vn/retail/vX/main/inquiry/account/transaction?id=03591049601',
                'SOURCE_APP': 'HYDRO',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
                'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"macOS"'
            },
            data: data
        };

        const response = await axios.request(config)
        return response.data
    }
}
