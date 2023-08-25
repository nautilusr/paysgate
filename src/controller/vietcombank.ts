import fs from 'fs';
import md5 from 'md5';
import https from 'https';
import crypto from 'crypto';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import logger from '../ultis/logger';
import { Ultis } from '../ultis/ultis';
import { Const } from '../ultis/const';

interface Param {
    DT: string;
    OV: string;
    PM: string;
    E: string;
    browserId: string;
    lang: string;
    mid: number;
    cif: string;
    clientId: string;
    mobileId: string;
    sessionId: string;
    browserToken: string;
    user: string;
    type?: number;
    tranId?: string;
}

export class VcbController {
    constructor(username: string, password: string, account_number: string) {
        Const.file = `data/${username}.txt`;
        Const.password = password;
        if (!fs.existsSync(Const.file)) {
            Const.username = username;
            Const.password = password;
            Const.account_number = account_number;
            Const.clientId = '';
            Const.browserId = md5(Const.username);
            this.saveData();
        } else {
            this.parseData();
        }
    }
    private saveData(): void {
        const data = {
            username: Const.username,
            password: Const.password,
            account_number: Const.account_number,
            sessionId: Const.sessionId,
            mobileId: Const.mobileId,
            clientId: Const.clientId,
            cif: Const.cif,
            E: Const.E,
            res: Const.res,
            tranId: Const.tranId,
            browserToken: Const.browserToken,
            browserId: Const.browserId,
        };
        fs.writeFileSync(Const.file, JSON.stringify(data));
    }
    private parseData(): void {
        const data = JSON.parse(fs.readFileSync(Const.file, 'utf-8'));
        Const.username = data.username;
        Const.password = Const.password;
        Const.account_number = data.account_number ?? '';
        Const.sessionId = data.sessionId ?? '';
        Const.mobileId = data.mobileId ?? '';
        Const.clientId = data.clientId ?? '';
        Const.token = data.token ?? '';
        Const.accessToken = data.accessToken ?? '';
        Const.authToken = data.authToken ?? '';
        Const.cif = data.cif ?? '';
        Const.res = data.res ?? '';
        Const.tranId = data.tranId ?? '';
        Const.browserToken = data.browserToken ?? '';
        Const.browserId = data.browserId ?? '';
        Const.E = data.E ?? '';
    }
    async getCaptcha(): Promise<any> {
        Const.captchaToken = Ultis.generateRandomString(30);
        const url: string = `https://digiapp.vietcombank.com.vn/utility-service/v1/captcha/${Const.captchaToken}`;
        const config: AxiosRequestConfig = {
            headers: {
                'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'
            },
            responseType: 'arraybuffer'
        };

        try {
            const client = axios.create({
                httpsAgent: new https.Agent({
                    secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
                }),
            });
            const response = await client.get(url, config);
            const result: string = response.data;
            return Buffer.from(result).toString('base64');
        } catch (error) {
            logger.error(error);
        }
    }
    async solveCaptcha(): Promise<any> {
        const getCaptcha = await this.getCaptcha();
        const result = await this.createTask(getCaptcha);
        if (result) {
            if (result.Code == 0) {
                await new Promise(resolve => setTimeout(resolve, 3000));
                const taskResult = await this.getTaskResult(result.TaskId);
                if (taskResult.status === true) {
                    Const.captchaValue = taskResult.captcha;
                    return { status: true, key: Const.captchaToken, captcha: taskResult.captcha };
                } else {
                    return { status: false, msg: "Error getTaskResult" };
                }
            }
        }
    }
    private async createTask(image: string): Promise<any> {
        const client = axios.create();
        try {
            const response = await client.post('https://api.1stcaptcha.com/recognition', {
                Apikey: Const.captcha1st,
                Type: 'imagetotext',
                Image: image
            });
            return response.data;
        } catch (error) {
            logger.error(error);
        }
        return false;
    }
    private async getTaskResult(taskId: string, j: number = 0): Promise<any> {
        if (j >= 5) {
            return { status: false };
        }
        try {
            const response = await axios.get(`https://api.1stcaptcha.com/getresult?apikey=${Const.captcha1st}&taskid=${taskId}`);
            const result = response.data;
            if (result.Status === 'SUCCESS') {
                return { status: true, captcha: result.Data };
            } else if (result.Status === 'processing') {
                await new Promise(resolve => setTimeout(resolve, 3000));
                j++;
                return this.getTaskResult(taskId, j);
            }
        } catch (error) {
            logger.error(error);
        }
        // return { status: false };
    }
    async doLogin(): Promise<any> {
        const solveCaptcha = await this.solveCaptcha();
        if (!solveCaptcha.status) {
            return solveCaptcha;
        }

        const param = {
            DT: Const.DT,
            OV: Const.OV,
            PM: Const.PM,
            E: Ultis.getE(Const.username) || "",
            browserId: Const.browserId,
            captchaToken: Const.captchaToken,
            captchaValue: Const.captchaValue,
            checkAcctPkg: Const.checkAcctPkg,
            lang: Const.lang,
            mid: 6,
            password: Const.password,
            user: Const.username
        };
        console.log(param)
        const result = await Ultis.curlPost(Const.url.login, param);
       
        if (result.code === 0) {
            Const.sessionId = result.sessionId;
            Const.mobileId = result.userInfo.mobileId;
            Const.clientId = result.userInfo.clientId;
            Const.cif = result.userInfo.cif;
            const session = { sessionId: Const.sessionId, mobileId: Const.mobileId, clientId: Const.clientId, cif: Const.cif };
            this.saveData();

            return {
                success: true,
                message: "success",
                session: session,
                data: result || ""
            };
        } else if (result.code === 20231 && result.mid === 6) {
            Const.browserToken = result.browserToken;
            return this.checkBrowser(1); // 5 is for smart otp, change accordingly
        } else {
            return {
                success: false,
                message: result.des,
                param: param,
                data: result || ""
            };
        }
    }
    async checkBrowser(type: number = 1): Promise<any> {
        const param = {
            DT: Const.DT,
            OV: Const.OV,
            PM: Const.PM,
            E: Ultis.getE(Const.username) || "",
            browserId: Const.browserId,
            lang: Const.lang,
            mid: 3008,
            cif: "",
            clientId: "",
            mobileId: "",
            sessionId: "",
            browserToken: Const.browserToken,
            user: Const.username
        };

        const result = await Ultis.curlPost(`${Const.url['authen-service']}3008`, param);

        if (result.transaction?.tranId) {
            return this.chooseOtpType(result.transaction.tranId, type);
        } else {
            return {
                success: false,
                message: "checkBrowser failed",
                param: param,
                data: result || ""
            };
        }
    }
    async chooseOtpType(tranID: string, type: number = 1): Promise<any> {
        const param = {
            DT: Const.DT,
            OV: Const.OV,
            PM: Const.PM,
            E: Ultis.getE(Const.username) || "",
            browserId: Const.browserId,
            lang: Const.lang,
            mid: 3010,
            cif: "",
            clientId: "",
            mobileId: "",
            sessionId: "",
            browserToken: Const.browserToken,
            tranId: tranID,
            type: type, // 1 for SMS, 5 for smart
            user: Const.username,
        };

        const result = await Ultis.curlPost(`${Const.url['authen-service']}3010`, param);

        if (result.code === 0) {
            Const.tranId = tranID;
            this.saveData();
            return {
                success: true,
                message: "ok",
                result: {
                    browserToken: Const.browserToken,
                    tranId: result.tranId || '',
                    challenge: result.challenge || '',
                },
                param: param,
                data: result || "",
            };
        }
    }
}