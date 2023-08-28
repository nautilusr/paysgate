import mongoose from 'mongoose';
import TeleBot from 'telebot';
import { vietcombank } from './api/vietcombank';
// import fs from 'fs';
// import path from 'path';
import dotenv from 'dotenv';
import { Ultis } from './ultis/ultis';
import { tpbank } from './api/tpbank';
dotenv.config();
// const envFilePath = path.join(__dirname, '../.env');
const { VCB_USERNAME, VCB_PASSWORD, VCB_ACCOUNT_NUMBER } = process.env;

mongoose.connect('mongodb://localhost:27017/paysgate', { useNewUrlParser: true, useUnifiedTopology: true } as any);
const bot = new TeleBot({ token: "6131327375:AAEDBQRtddtZQo8I42XcySG1vy1iKe3WZ7o", usePlugins: ['askUser'] });
bot.start();



bot.on(/^\/login (.+)$/, (msg) => {
    // const username = msg.text.split(' ').filter((res: any) => { return res != '' })[1];
    // const password = msg.text.split(' ').filter((res: any) => { return res != '' })[2];
    // const account_number = msg.text.split(' ').filter((res: any) => { return res != '' })[3];
    // if (!username || !password || !account_number) return bot.sendMessage(msg.from.id, `Vui lòng nhập đầy đủ thông tin đăng nhập!`);
    // fs.readFile(envFilePath, 'utf8', (err: any, data: string) => {
    //     if (err) {
    //         console.error(err);
    //         return;
    //     }
    //     const updatedData = data
    //         .replace(`VCB_USERNAME="${VCB_USERNAME}"`, `VCB_USERNAME="${username}"`)
    //         .replace(`VCB_PASSWORD="${VCB_PASSWORD}"`, `VCB_PASSWORD="${password}"`)
    //         .replace(`VCB_ACCOUNT_NUMBER="${VCB_ACCOUNT_NUMBER}"`, `VCB_ACCOUNT_NUMBER="${account_number}"`);
    //     fs.writeFile(envFilePath, updatedData, 'utf8', (err: any) => {
    //         if (err) {
    //             console.error(err);
    //             return;
    //         }
    //         console.log('Value updated successfully.');
    //     });
    // });
    new tpbank("0915586030", "Obs@2023").doLogin();
    return bot.sendMessage(msg.from.id, `Đăng nhập thành công!`);
});
bot.on(/^\/getotp$/, (msg) => {
    if (VCB_USERNAME && VCB_PASSWORD && VCB_ACCOUNT_NUMBER) {
        return new vietcombank(VCB_USERNAME, VCB_PASSWORD, VCB_ACCOUNT_NUMBER).doLogin()
    }
    return bot.sendMessage(msg.from.id, `Lấy OTP thành công!`);
});
bot.on(/^\/genkeys$/, () => {
    return Ultis.genKeys()
});
bot.on(/^\/otp (.+)$/, (msg) => {
    const otp = msg.text.split(' ').filter((res: any) => { return res != '' })[1];
    if (!otp) return bot.sendMessage(msg.from.id, `Vui lòng nhập OTP!`);
    if (VCB_USERNAME && VCB_PASSWORD && VCB_ACCOUNT_NUMBER) {
        return new vietcombank(VCB_USERNAME, VCB_PASSWORD, VCB_ACCOUNT_NUMBER).submitOtpLogin(otp)
    }
    return bot.sendMessage(msg.from.id, `Thành công!`);
});

bot.on(/^\/history (.+)$/, () => {
    // const username = msg.text.split(' ').filter((res: any) => { return res != '' })[1];
    // const password = msg.text.split(' ').filter((res: any) => { return res != '' })[2];
    // const account_number = msg.text.split(' ').filter((res: any) => { return res != '' })[3];
    // // const begin = msg.text.split(' ').filter((res: any) => { return res != '' })[4];
    // // const end = msg.text.split(' ').filter((res: any) => { return res != '' })[5];
    // if (!username || !password || !account_number) return bot.sendMessage(msg.from.id, `Vui lòng nhập đầy đủ thông tin!`);
    // return new vietcombank(username, password, account_number).getHistories("01/08/2023", "25/08/2023")
    return new tpbank("0915586030", "Obs@2023").getHistories()
})