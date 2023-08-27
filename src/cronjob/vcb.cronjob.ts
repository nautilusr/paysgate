import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import axios from 'axios';
// import transactionSchema from '../schema/transaction.schema';
import logger from '../ultis/logger';
import { vietcombank } from '../api/vietcombank';
dotenv.config();
mongoose.connect('mongodb://localhost:27017/paysgate', { useNewUrlParser: true, useUnifiedTopology: true } as any);

export class vcbCronJob {
    static interval: NodeJS.Timer;
    static async start() {
        while (true) {
            // const currentDate = new Date();
            // const minutes = currentDate.getMinutes();
            // const seconds = currentDate.getSeconds();
            // const hour = currentDate.getHours();
            // const day = currentDate.getDate();
            // const month = currentDate.getMonth() + 1;
            // const year = currentDate.getFullYear();
            // let data = JSON.stringify({
            //     "action": "transactions",
            //     "begin": "01/08/2023",
            //     "end": "25/08/2023",
            //     "username": "0915586030",
            //     "password": "Obstinate@2022",
            //     "account_number": "1111000038888"
            // });

            try {
                new vietcombank('0915586030', 'Obstinate@2022', '1111000038888').getHistories("01/08/2023","25/08/2023")
            } catch (error) {
                logger.error("Error:", error);
            }

            // Đợi một khoảng thời gian trước khi bắt đầu lại vòng lặp
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}
vcbCronJob.start();