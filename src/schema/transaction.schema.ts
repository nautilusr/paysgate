import { Schema, model } from "mongoose";

const TransactionSchema = new Schema({
    errorCode:              { type: Number, required: false },
    message:                { type: String, required: false },
    bankAccountNumber:      { type: String, required: false },
    bankAccountName:        { type: String, required: false }, 
    bankCode:               { type: String, required: false },
    bankName:               { type: String, required: false },
    amount:                 { type: Number, required: false }, // 5000 - 1000000000
    code:                   { type: String, required: false }, 
    tHash:                  { type: String, required: false },
    request_id:             { type: String, required: false },
    bid:                    { type: String, required: false },
    pin:                    { type: String, required: false },
    signature:              { type: String, required: false }, 
    time:                   { type: Date, default: new Date() },
    TransactionDate:        { type: String, required: false },
    status:                 { type: String, default: false },
    reference:              { type: String, required: false },
    Description:            { type: String, required: false },
    TransactionId:          { type: String, required: false },
});

export default model("transaction", TransactionSchema, "transaction");
