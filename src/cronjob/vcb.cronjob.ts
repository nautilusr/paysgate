import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from '../ultis/logger';
import { vietcombank } from '../api/vietcombank';
import transactionSchema from '../schema/transaction.schema';
dotenv.config();
const { VCB_USERNAME, VCB_PASSWORD, VCB_ACCOUNT_NUMBER } = process.env;
mongoose.connect('mongodb://localhost:27017/paysgate', { useNewUrlParser: true, useUnifiedTopology: true } as any);

export class vcbCronJob {
    static interval: NodeJS.Timer;
    static async start() {
        while (true) {
            try {
                this.updateStatusBasedOnTime()
                this.saveTransaction()
            } catch (error) {
                logger.error("Error:", error);
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    static async saveTransaction() {
        if (!VCB_USERNAME || !VCB_PASSWORD || !VCB_ACCOUNT_NUMBER) return;
        const result = await new vietcombank(VCB_USERNAME, VCB_PASSWORD, VCB_ACCOUNT_NUMBER).getHistories("01/08/2023", "25/08/2023")
        const transaction = result.transactions
        for (const item of transaction) {
            const newItem = {
                Reference: item.Reference,
                Description: item.Description,
                Amount: item.Amount,
                TransactionDate: item.TransactionDate
            };
            const existingData = await transactionSchema.findOne({ Reference: newItem.Reference });
            if (!existingData) {
                await transactionSchema.create(newItem);
            }
            if (item.status == "PENDING") {
                this.checkCodeinTransaction(item)
            }
        }
    }
    static async checkCodeinTransaction(item: { Description: any; }) {
        try {
            const recentTransaction = await transactionSchema.findOne({ stauts: "PENDING", code: { $regex: item.Description, $options: 'i' } });
            if (recentTransaction) {
                // callback lại cho khách hàng biết rằng giao dịch đã được xử lý
                await transactionSchema.updateOne({ _id: recentTransaction._id }, { $set: { status: "COMPLETED" } });
            }
        } catch (error) {
            logger.error("Error:", error);
        }
    }
    static async updateStatusBasedOnTime() {
        try {
            const currentTime = new Date();
            const overdueTime = new Date(currentTime.getTime() - 10 * 60 * 1000); // Threshold for overdue is 10 minutes

            const overdueTransactions = await transactionSchema.find({
                time: { $lt: overdueTime },
                status: "PENDING"
            });

            for (const transaction of overdueTransactions) {
                await transactionSchema.updateOne({ _id: transaction._id }, { $set: { status: "OVERDUE" } });
            }
        } catch (error) {
            logger.error("Error:", error);
        }
    }
}
// vcbCronJob.start();