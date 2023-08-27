import axios, { AxiosResponse } from "axios";
import md5 from "md5";
import forge from 'node-forge';
import accountSchema from "../schema/account.schema";


export class vietcombank {
    private captcha1st: string = '5456dd091eb54cedbcfe5fa667d79b1b';
    private defaultPublicKey: string = "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUFpa3FRckl6WkprVXZIaXNqZnU1WkNOK1RMeS8vNDNDSWM1aEpFNzA5VElLM0hiY0M5dnVjMitQUEV0STZwZVNVR3FPbkZvWU93bDNpOHJSZFNhSzE3RzJSWk4wMU1JcVJJSi82YWM5SDRMMTFkdGZRdFI3S0hxRjdLRDBmajZ2VTRrYjUrMGN3UjNSdW1CdkRlTWxCT2FZRXBLd3VFWTlFR3F5OWJjYjVFaE5HYnh4TmZiVWFvZ3V0VndHNUMxZUtZSXR6YVlkNnRhbzNncTdzd05IN3A2VWRsdHJDcHhTd0ZFdmM3ZG91RTJzS3JQRHA4MDdaRzJkRnNsS3h4bVI0V0hESFdmSDBPcHpyQjVLS1dRTnl6WHhUQlhlbHFyV1pFQ0xSeXBOcTdQKzFDeWZnVFNkUTM1ZmRPN00xTW5pU0JUMVYzM0xkaFhvNzMvOXFENWU1VlFJREFRQUIKLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0t";
    private clientPublicKey: string = "";
    private clientPrivateKey: string = "";
    private url = {
        'getCaptcha': "https://digiapp.vietcombank.com.vn/utility-service/v1/captcha/",
        'login': "https://digiapp.vietcombank.com.vn/authen-service/v1/login",
        'authen-service': "https://digiapp.vietcombank.com.vn/authen-service/v1/api-",
        'getHistories': "https://digiapp.vietcombank.com.vn/bank-service/v1/transaction-history",
        'tranferOut': "https://digiapp.vietcombank.com.vn/napas-service/v1/init-fast-transfer-via-accountno",
        'genOtpOut': "https://digiapp.vietcombank.com.vn/napas-service/v1/transfer-gen-otp",
        'genOtpIn': "https://digiapp.vietcombank.com.vn/transfer-service/v1/transfer-gen-otp",
        'confirmTranferOut': "https://digiapp.vietcombank.com.vn/napas-service/v1/transfer-confirm-otp",
        'confirmTranferIn': "https://digiapp.vietcombank.com.vn/transfer-service/v1/transfer-confirm-otp",
        'tranferIn': "https://digiapp.vietcombank.com.vn/transfer-service/v1/init-internal-transfer",
        'getBanks': "https://digiapp.vietcombank.com.vn/utility-service/v1/get-banks",
        'getAccountDeltail': "https://digiapp.vietcombank.com.vn/bank-service/v1/get-account-detail",
        'getlistAccount': "https://digiapp.vietcombank.com.vn/bank-service/v1/get-list-account-via-cif",
        'getlistDDAccount': "https://digiapp.vietcombank.com.vn/bank-service/v1/get-list-ddaccount"
    };
    private lang = 'vi';
    private DT = "Windows";
    private OV = "10";
    private PM = "Chrome 111.0.0.0";
    private checkAcctPkg = "1";
    private username = "";
    private password = "";
    private captchaToken = "";
    private captchaValue = "";
    browserId: any;
    account_number: string;
    keys: any;
    isActive: boolean = false;
    sessionId: any;
    mobileId: any;
    clientId: string = "";
    cif: any;
    browserToken: string = "";
    tranId: string = "";
    res: Object | undefined;
    E: string | undefined;
    bankCode: string = "VCB";
    bankName: string = "Vietcombank";
    token: any;
    accessToken: any;
    authToken: any;
    constructor(username: string, password: string, account_number: string) {
        this.username = username;
        this.password = password;
        this.account_number = account_number;
        this.genKeys()
    }
    async getAccount() {
        return await accountSchema.findOne({ username: this.username, password: this.password, account_number: this.account_number });
        // if (!data) {
        //     this.clientId = '';
        //     this.browserId = md5(this.username)
        //     this.saveData();
        // } else {
        //     this.username = data.username;
        //     this.password = data.password;
        //     this.account_number = data.account_number;
        //     this.sessionId = data.sessionId;
        //     this.mobileId = data.mobileId;
        //     this.clientId = data.clientId;
        //     this.token = data.token;
        //     this.accessToken = data.accessToken;
        //     this.authToken = data.authToken;
        //     this.cif = data.cif;
        //     this.res = data.res;
        //     this.tranId = data.tranId;
        //     this.browserToken = data.browserToken;
        //     this.browserId = data.browserId;
        //     this.E = data.E;
        // }
    }

    async doLogin(): Promise<any> {
        const solveCaptcha = await this.solveCaptcha();
        if (!solveCaptcha?.status) {
            return solveCaptcha;
        }
        const param = {
            DT: this.DT,
            OV: this.OV,
            PM: this.PM,
            E: this.getE() || "",
            browserId: this.browserId || "",
            captchaToken: this.captchaToken,
            captchaValue: this.captchaValue,
            checkAcctPkg: this.checkAcctPkg,
            lang: this.lang,
            mid: 6,
            password: this.password,
            user: this.username,
        };
        const resultString = await this.curlPost(this.url.login, param);
        const result = JSON.parse(resultString);
        if (result.code == '00') {
            this.sessionId = result.sessionId;
            this.mobileId = result.userInfo.mobileId;
            this.clientId = result.userInfo.clientId;
            this.cif = result.userInfo.cif;
            const session = { sessionId: this.sessionId, mobileId: this.mobileId, clientId: this.clientId, cif: this.cif };
            this.saveData();
            return {
                success: true,
                message: "success",
                session: session,
                data: result,
            };
        } else if (result.code === '20231' && result.mid === '6') { // Trình duyệt chưa xác thực
            this.browserToken = result.browserToken;
            return this.checkBrowser(1); // 5 là smart otp
        } else {
            return {
                success: false,
                message: result.des,
                param: param,
                data: result || "",
            };
        }
    }
    async saveData() {
        const data = {
            username: this.username,
            password: this.password,
            account_number: this.account_number,
            sessionId: this.sessionId,
            mobileId: this.mobileId,
            clientId: this.clientId,
            cif: this.cif,
            E: this.E,
            res: this.res,
            tranId: this.tranId,
            browserToken: this.browserToken,
            browserId: this.browserId,
            bankCode: this.bankCode,
            bankName: this.bankName,
        };
        return await accountSchema.findOneAndUpdate({ username: this.username }, data, { upsert: true });
    }
    async checkBrowser(type = 1) {
        const param = {
            DT: this.DT,
            OV: this.OV,
            PM: this.PM,
            E: this.getE() || "",
            browserId: this.browserId,
            lang: this.lang,
            mid: 3008,
            cif: "",
            clientId: "",
            mobileId: "",
            sessionId: "",
            browserToken: this.browserToken,
            user: this.username
        };

        try {
            const resultString = await this.curlPost(this.url['authen-service'] + "3008", param);
            const result = JSON.parse(resultString);
            if (result && result.transaction && result.transaction.tranId) {
                return this.chooseOtpType(result.transaction.tranId, type);
            } else {
                return {
                    success: false,
                    message: "checkBrowser failed",
                    param: param,
                    data: result || ""
                };
            }
        } catch (error) {
            console.error(error);
            return {
                success: false,
                message: "Error occurred during checkBrowser",
                param: param,
                error: error
            };
        }
    }
    async chooseOtpType(tranID: string, type: number = 1): Promise<any> {
        const param = {
            DT: this.DT,
            OV: this.OV,
            PM: this.PM,
            E: this.getE() || "",
            browserId: this.browserId,
            lang: this.lang,
            mid: 3010,
            cif: "",
            clientId: "",
            mobileId: "",
            sessionId: "",
            browserToken: this.browserToken,
            tranId: tranID,
            type: type, // 1 for SMS, 5 for smart
            user: this.username,
        };

        const resultString = await this.curlPost(`${this.url['authen-service']}3010`, param);
        const result = JSON.parse(resultString);
        if (result.code == 0) {
            this.tranId = tranID;
            this.saveData();
            return {
                success: true,
                message: "ok",
                result: {
                    browserToken: this.browserToken,
                    tranId: result.tranId || '',
                    challenge: result.challenge || '',
                },
                param: param,
                data: result || "",
            };
        }
    }
    async submitOtpLogin(otp: string) {
        const account = await accountSchema.findOne({ username: this.username, password: this.password, account_number: this.account_number })
        if (!account) {
            const resultLogin = await new vietcombank(this.username, this.password, this.account_number).doLogin();
            if (resultLogin.code == '00') new vietcombank(this.username, this.password, this.account_number).submitOtpLogin(otp)
            return;
        }
        const param = {
            DT: this.DT,
            OV: this.OV,
            PM: this.PM,
            E: this.getE() || "",
            browserId: account.browserId,
            lang: this.lang,
            mid: 3011,
            cif: "",
            clientId: "",
            mobileId: "",
            sessionId: "",
            browserToken: account.browserToken,
            tranId: account.tranId,
            otp: otp,
            user: this.username
        };
        try {
            const resultString = await this.curlPost(this.url['authen-service'] + "3011", param);
            const result = JSON.parse(resultString);
            if (result.code == '00') {
                this.sessionId = result.sessionId;
                this.mobileId = result.userInfo.mobileId;
                this.clientId = result.userInfo.clientId;
                this.cif = result.userInfo.cif;
                const session = {
                    sessionId: this.sessionId,
                    mobileId: this.mobileId,
                    clientId: this.clientId,
                    cif: this.cif
                };
                this.res = result;
                this.saveData();
                const sv = await this.saveBrowser();
                if (sv.code === 0) {
                    return {
                        success: true,
                        message: "success",
                        d: sv,
                        session: session,
                        data: result || ""
                    };
                } else {
                    return {
                        success: false,
                        message: sv.des,
                        param: param,
                        data: sv || ""
                    };
                }
            } else {
                return {
                    success: false,
                    message: result.des,
                    param: param,
                    data: result || ""
                };
            }
        } catch (error) {
            console.error(error);
            return {
                success: false,
                message: "Error occurred during OTP submission",
                param: param,
                error: error
            };
        }
    }
    async saveBrowser() {
        const param = {
            DT: this.DT,
            OV: this.OV,
            PM: this.PM,
            E: "",
            browserId: this.browserId,
            browserName: "Chrome 111.0.0.0",
            lang: this.lang,
            mid: 3009,
            cif: this.cif,
            clientId: this.clientId,
            mobileId: this.mobileId,
            sessionId: this.sessionId,
            user: this.username
        };

        try {
            const resultString = await this.curlPost(this.url['authen-service'] + "3009", param);
            const result = JSON.parse(resultString);
            return result;
        } catch (error) {
            console.error('Error occurred while saving browser:', error);
            return {
                success: false,
                message: "Error occurred while saving browser",
                param: param,
                error: error
            };
        }
    }
    async solveCaptcha(): Promise<any> {
        const getCaptcha = await this.getCaptcha();
        const result = await this.createTask(getCaptcha);
        if (result !== false && result.Code === 0) {
            await new Promise(resolve => setTimeout(resolve, 3000)); // Sử dụng setTimeout để đợi 3 giây
            const taskResult = await this.getTaskResult(result.TaskId);

            if (taskResult.status === true) {
                this.captchaValue = taskResult.captcha;
                return { status: true, key: this.captchaToken, captcha: taskResult.captcha };
            } else {
                return { status: false, msg: "Error getTaskResult" };
            }
        }
    }
    private async getTaskResult(taskId: string, j: number = 0): Promise<any> {
        if (j >= 5) {
            return { status: false };
        }

        try {
            const response = await axios.get(`https://api.1stcaptcha.com/getresult?apikey=${this.captcha1st}&taskid=${taskId}`);
            const result = response.data;
            ``
            if (result.Status === 'SUCCESS') {
                return { status: true, captcha: result.Data };
            } else if (result.Status === 'processing') {
                await new Promise(resolve => setTimeout(resolve, 3000)); // Chờ 3 giây
                j++;
                return this.getTaskResult(taskId, j);
            }
        } catch (error) {
            return { status: false };
        }
    }

    private async createTask(image: string): Promise<any> {
        try {
            const response = await axios.post('https://api.1stcaptcha.com/recognition', {
                Apikey: this.captcha1st,
                Type: 'imagetotext',
                Image: image,
            });

            return response.data;
        } catch (error) {
            return false;
        }
    }

    async getCaptcha(): Promise<string> {
        this.captchaToken = this.generateRandomString(30);
        const url = `https://digiapp.vietcombank.com.vn/utility-service/v1/captcha/${this.captchaToken}`;
        try {
            const response = await axios.get(url, {
                headers: {
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
                },
                responseType: 'arraybuffer',
            });
            const result = Buffer.from(response.data).toString('base64');
            return result;
        } catch (error) {
            return '';
        }
    }
    private generateRandomString(length: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters.charAt(randomIndex);
        }
        return randomString;
    }
    private async curlPost(url: string, data: any): Promise<any> {
        try {
            const encryptData = JSON.stringify(this.encryptRequest(data));
            const response: AxiosResponse = await axios.post(url, encryptData, {
                headers: this.headerNull(),
                validateStatus: () => true, // Bỏ qua kiểm tra trạng thái HTTP
            });
            if (response.status === 200) {
                const result = response.data;
                return this.decryptResponse(result);
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }
    private decryptResponse(e: { k: any; d: any; }) {
        const { k: n, d: t } = e;
        const i = forge.pki.privateKeyFromPem(this.clientPrivateKey);
        const r = forge.util.decodeUtf8(i.decrypt(forge.util.decode64(n)));
        const s = Buffer.from(t, "base64");
        const o = s.slice(0, 16);
        const u = s.slice(16);
        const c = forge.cipher.createDecipher("AES-CTR", Buffer.from(r, "base64").toString("binary"));

        c.start({
            iv: o.toString("binary")
        });
        c.update(forge.util.createBuffer(u));
        c.finish();

        return c.output.data.toString();
    }
    private headerNull() {
        const key = this.username + "6q93-@u9";
        const xlim = this.hashSHA256(key);

        return {
            'Accept': 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'vi',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            'Host': 'digiapp.vietcombank.com.vn',
            'Origin': 'https://vcbdigibank.vietcombank.com.vn',
            'Referer': 'https://vcbdigibank.vietcombank.com.vn/',
            'sec-ch-ua-mobile': '?0',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-site',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
            'X-Channel': 'Web',
            'X-Lim-ID': xlim,
        };
    }

    private hashSHA256(data: string): string {
        const crypto = require('crypto');
        return crypto.createHash('sha256').update(data).digest('hex');
    }

    private getE() {
        const _username = md5(this.username);
        const formattedChunks = [
            _username.slice(0, 8),
            _username.slice(8, 12),
            _username.slice(12, 16),
            _username.slice(16, 20),
            _username.slice(20),
        ];
        return formattedChunks.join('-').toUpperCase();
    }

    private encryptRequest(e: any) {
        try {
            const n = forge.random.getBytesSync(32),
                t = forge.random.getBytesSync(16);

            e = Object.assign({
                clientPubKey: this.clientPublicKey
            }, e);

            const i = forge.cipher.createCipher("AES-CTR", n);
            i.start({
                iv: t
            });
            i.update(forge.util.createBuffer(forge.util.encodeUtf8(JSON.stringify(e))));
            i.finish();

            const r = Buffer.concat([Buffer.from(t, "binary"), Buffer.from(i.output.data, "binary")]);

            const publicKey = forge.pki.publicKeyFromPem(forge.util.decode64(this.defaultPublicKey));
            const s = publicKey.encrypt(forge.util.encode64(n));

            return {
                d: r.toString("base64"),
                k: forge.util.encode64(s)
            };
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    genKeys() {
        if (!this.keys) {
            console.time("Generate keys...");
            this.keys = forge.pki.rsa.generateKeyPair({
                bits: 1024,
                workers: 1
            });

            this.clientPublicKey = forge.pki.publicKeyToPem(this.keys.publicKey).replace(/(-|(BEGIN|END) PUBLIC KEY|\r|\n)/gi, "");
            this.clientPrivateKey = forge.pki.privateKeyToPem(this.keys.privateKey);
            this.isActive = true;
            console.timeEnd("Generate keys...");
        }
    }
    async getHistories(fromDate: any, toDate: any, page = 0) {
        const account = await accountSchema.findOne({ username: this.username, password: this.password, account_number: this.account_number })
        if (!account) return this.doLogin()
        const param = {
            DT: this.DT,
            OV: this.OV,
            PM: this.PM,
            E: this.getE() || "",
            browserId: account.browserId,
            accountNo: this.account_number,
            accountType: "D",
            fromDate: fromDate,
            toDate: toDate,
            lang: this.lang,
            pageIndex: page,
            lengthInPage: 20,
            stmtDate: "",
            stmtType: "",
            mid: 14,
            cif: account.cif,
            user: this.username,
            mobileId: account.mobileId,
            clientId: account.clientId,
            sessionId: account.sessionId
        };
        try {
            const resultString = await this.curlPost(this.url['getHistories'], param);
            const result = JSON.parse(resultString);
            console.log(result)
            if (result.code == '00') {
                return result;
            } else {
                const resultLogin = await new vietcombank(this.username, this.password, this.account_number).doLogin();
                if (resultLogin.code == '00') {
                    this.getHistories(fromDate, toDate, page)
                }
            }
        } catch (error) {
            console.error('Error occurred while retrieving histories:', error);
            return {
                success: false,
                message: "Error occurred while retrieving histories",
                param: param,
                error: error
            };
        }
    }
}