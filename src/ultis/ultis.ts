import crypto from "crypto";
import forge from 'node-forge';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
const { clientPublicKey, clientPrivateKey } = process.env;
const envFilePath = path.join(__dirname, '../../.env');

export class Ultis {
    public static generateUniqueRandomString() {
        const randomData = crypto.randomBytes(16); // Tạo dãy bytes ngẫu nhiên
        const hash = crypto.createHash('sha256').update(randomData).digest('hex'); // Tính băm SHA-256
        const randomString = hash.slice(0, 6); // Lấy 6 ký tự đầu của giá trị băm
        return randomString;
    }
    public static async genKeys() {
        console.time("Generate keys...");
        const keys = forge.pki.rsa.generateKeyPair({
            bits: 1024,
            workers: 1
        });

        const _clientPublicKey = forge.pki.publicKeyToPem(keys.publicKey).replace(/(-|(BEGIN|END) PUBLIC KEY|\r|\n)/gi, "");
        const _clientPrivateKey = forge.pki.privateKeyToPem(keys.privateKey);
        fs.readFile(envFilePath, 'utf8', (err: any, data: string) => {
            if (err) {
                console.error(err);
                return;
            }
            const updatedData = data
                .replace(`clientPublicKey="${clientPublicKey}"`, `clientPublicKey="${_clientPublicKey}"`)
                .replace(`clientPrivateKey="${clientPrivateKey}"`, `clientPrivateKey="${_clientPrivateKey}"`)
            fs.writeFile(envFilePath, updatedData, 'utf8', (err: any) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('Value updated successfully.');
            });
        });
        console.timeEnd("Generate keys...");
}
}