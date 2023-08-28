import { tpbank } from "../api/tpbank";
import transactionSchema from "../schema/transaction.schema";
import logger from "../ultis/logger";

export class tpbCronJob {
    async start() {
        while (true) {
            try {
                const response = await new tpbank("0915586030", "Obs@2023").getHistories();
                const transaction = response.transactionInfos;
                const convertData = {
                    bankAccountNumber: "03591049601",
                    bankAccountName: "NGUYEN VAN A",
                    bankCode: "TPB",
                    bankName: "TPBank",
                    amount: transaction.amount,
                    TransactionDate: transaction.valueDate,
                    Description: transaction.description,
                    TransactionId: transaction.id,
                }
                await transactionSchema.findOneAndUpdate({ TransactionId: transaction.id }, convertData, { upsert: true });

            } catch (error) {
                logger.error("Error:", error);
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}
