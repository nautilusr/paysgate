import mongoose from 'mongoose';
import TeleBot from 'telebot';
import { vietcombank } from './api/vietcombank';
// import { vietcombank } from './api/vietcombank';

mongoose.connect('mongodb://localhost:27017/paysgate', { useNewUrlParser: true, useUnifiedTopology: true } as any);
const bot = new TeleBot({ token: "6131327375:AAEDBQRtddtZQo8I42XcySG1vy1iKe3WZ7o", usePlugins: ['askUser'] });
bot.start();

// bot.on(['/login', '/hello'], (msg) => {
//     return bot.sendMessage(msg.from.id, `Hello ${msg.from.first_name}!`);
// });

bot.on(/^\/login (.+)$/, (msg) => {
    const username = msg.text.split(' ').filter((res: any) => { return res != '' })[1];
    const password = msg.text.split(' ').filter((res: any) => { return res != '' })[2];
    const account_number = msg.text.split(' ').filter((res: any) => { return res != '' })[3];
    if (!username || !password || !account_number) return bot.sendMessage(msg.from.id, `Vui lòng nhập đầy đủ thông tin đăng nhập!`);
    return new vietcombank(username, password, account_number).doLogin()

});
bot.on(/^\/otp (.+)$/, (msg) => {
    const username = msg.text.split(' ').filter((res: any) => { return res != '' })[1];
    const password = msg.text.split(' ').filter((res: any) => { return res != '' })[2];
    const account_number = msg.text.split(' ').filter((res: any) => { return res != '' })[3];
    const otp = msg.text.split(' ').filter((res: any) => { return res != '' })[4];
    if (!username || !password || !account_number || !otp) return bot.sendMessage(msg.from.id, `Vui lòng nhập đầy đủ thông tin!`);
    return new vietcombank(username, password, account_number).submitOtpLogin(otp)
});

bot.on(/^\/history (.+)$/, (msg) => {
    const username = msg.text.split(' ').filter((res: any) => { return res != '' })[1];
    const password = msg.text.split(' ').filter((res: any) => { return res != '' })[2];
    const account_number = msg.text.split(' ').filter((res: any) => { return res != '' })[3];
    // const begin = msg.text.split(' ').filter((res: any) => { return res != '' })[4];
    // const end = msg.text.split(' ').filter((res: any) => { return res != '' })[5];
    if (!username || !password || !account_number) return bot.sendMessage(msg.from.id, `Vui lòng nhập đầy đủ thông tin!`);
    return new vietcombank(username, password, account_number).getHistories("01/08/2023","25/08/2023")
})