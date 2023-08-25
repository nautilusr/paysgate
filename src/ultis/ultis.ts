import axios from "axios";
import md5 from "md5";
import { Const } from "./const";
import crypto, { createDecipheriv } from "crypto";
import NodeRSA from "node-rsa";
import logger from "./logger";
import https from "https";

export class Ultis {
    public static generateRandomString(length: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters.charAt(randomIndex);
        }
        return randomString;
    }

    public static generateUniqueRandomString() {
        const randomData = crypto.randomBytes(16); // Tạo dãy bytes ngẫu nhiên
        const hash = crypto.createHash('sha256').update(randomData).digest('hex'); // Tính băm SHA-256
        const randomString = hash.slice(0, 6); // Lấy 6 ký tự đầu của giá trị băm
        return randomString;
    }
    
    public static getE(username: string | number[] | Uint8Array) {
        username = md5(username);
        const formattedChunks = [
            username.slice(0, 8),
            username.slice(8, 12),
            username.slice(12, 16),
            username.slice(16, 20),
            username.slice(20),
        ];

        return formattedChunks.join('-').toUpperCase();
    }
    public static async curlPost(url: string = "", data: any = {}): Promise<any> {
        try {
            const client = axios.create({
                httpsAgent: new https.Agent({
                    secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
                }),
            });
            const response = await client.post(url, JSON.stringify(this.encryptData(data)), {
                headers: this.headerNull(),
                responseType: 'arraybuffer'
            });
            console.log('decryptData', JSON.parse(Buffer.from(response.data).toString('utf-8')))
            // console.log(Buffer.from(JSON.parse(Buffer.from(response.data).toString('utf-8')).d).toString('base64'))
            const result = this.decryptData(response.data);
            return result;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    static encryptData(str: { clientPubKey: string; }) {
        str.clientPubKey = Const.clientPublicKey;
        const key = Ultis.generateRandomString(32);
        const iv = Ultis.generateRandomString(16);
        const rsa = new NodeRSA();
        rsa.importKey(Const.defaultPublicKey, 'public');
        rsa.setOptions({ encryptionScheme: 'pkcs1_oaep' });

        const cipher = crypto.createCipheriv('aes-256-ctr', key, iv);
        const encryptedData = Buffer.concat([
            Buffer.from(iv),
            cipher.update(JSON.stringify(str), 'utf8'),
            cipher.final(),
        ]);

        const encryptedKey = rsa.encrypt(key, 'base64');
        console.log('encryptData', {
            d: encryptedData.toString('base64'),
            k: encryptedKey,
        });

        return {
            d: encryptedData.toString('base64'),
            k: encryptedKey,
        };
    }

    static decryptData(_cipher: any) {
        const cipher = JSON.parse(Buffer.from(_cipher).toString('utf-8'));
        const header = cipher.k;
        const body = Buffer.from(cipher.d, 'base64');
        // console.log('decryptData', header, Buffer.from(body).toString('base64'));

        const rsa = new NodeRSA();
        rsa.importKey(Const.clientPrivateKey, 'private');
        rsa.setOptions({ encryptionScheme: 'pkcs1_oaep' });
        const key = rsa.decrypt(header, 'utf8');

        const iv = body.slice(0, 16);
        const cipherText = body.slice(16);

        const decipher = crypto.createDecipheriv('aes-256-ctr', Buffer.from(key, 'base64'), iv);
        const decryptedText = Buffer.concat([decipher.update(cipherText), decipher.final()]);

        return JSON.parse(decryptedText.toString('utf8'));
    }
    static headerNull(): Record<string, string> {
        const key = Const.username + "6q93-@u9";
        const xlim = crypto.createHash("sha256").update(key).digest("hex");

        return {
            Accept: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'vi',
            Connection: 'keep-alive',
            'Content-Type': 'application/json',
            Host: 'digiapp.vietcombank.com.vn',
            Origin: 'https://vcbdigibank.vietcombank.com.vn',
            Referer: 'https://vcbdigibank.vietcombank.com.vn/',
            'sec-ch-ua-mobile': '?0',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-site',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
            'X-Channel': 'Web',
            'X-Lim-ID': xlim,
        };
    }

}