import mongoose from 'mongoose';
import dotenv from 'dotenv';
import axios from 'axios';
import transactionSchema from '../schema/transaction.schema';
dotenv.config();
mongoose.connect('mongodb://localhost:27017/paysgate', { useNewUrlParser: true, useUnifiedTopology: true } as any);

export class vcbCronJob {
    static interval: NodeJS.Timer;
    static async start() {
        while (true) {
            const currentDate = new Date();
            const minutes = currentDate.getMinutes();
            const seconds = currentDate.getSeconds();
            const hour = currentDate.getHours();
            const day = currentDate.getDate();
            const month = currentDate.getMonth() + 1;
            const year = currentDate.getFullYear();
            let data = JSON.stringify({
                "action": "transactions",
                "begin": "01/08/2023",
                "end": "25/08/2023",
                "username": "0915586030",
                "password": "Obstinate@2022",
                "account_number": "1111000038888"
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:8080',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            try {
                const transaction = await axios.request(config);
                const transactionData = transaction.data.transactions;
                for (const trans of transactionData) {
                    const existingTransaction = await transactionSchema.findOne({ reference: trans.Reference });
                    if (!existingTransaction) {
                        await transactionSchema.create({
                            reference: trans.Reference,
                            TransactionDate: trans.TransactionDate,
                            Description: trans.Description,
                            bankAccountNumber: "1111000038888",
                            bankAccountName: "PHAM THE TRUONG",
                            bankCode: "VCB",
                            bankName: "Vietcombank",
                            amount: trans.Amount.replace(/,/g, ''),
                            isPay: false,
                        })
                    }
                }
            } catch (error) {
                console.error("Error:", error);
            }

            // Đợi một khoảng thời gian trước khi bắt đầu lại vòng lặp
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}
vcbCronJob.start();