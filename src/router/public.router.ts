import express from 'express';
import AccountSchema from '../schema/account.schema';
import gateSchema from '../schema/gate.schema';
import { errorCodes } from '../controller/code';
import md5 from 'md5';
import { Ultis } from '../ultis/ultis';

const publicRouter = express.Router();

publicRouter.get('/GET_ACTIVE_BANKS', async (req, res) => {
    const { api_key } = req.query;
    const apiKey = await gateSchema.findOne({ api_key });
    if (!apiKey) {
        return res.status(401).json({ errorCode: 401, message: errorCodes[401] });
    }
    const data = await AccountSchema.find({ isActive: true, type: "IN-OUT" })
    const json = data.map((item) => {
        return {
            bankid: item._id,
            bankAccountNumber: item.account_number,
            bankAccountName: item.res.userInfo.cusName,
            bankCode: item.bankCode,
            bankName: item.bankName,
        }
    });
    res.json(json);
});

publicRouter.post('/B_REQUEST_PAY_IN', async (req, res) => {
    const { api_key, request_id, bid, amount, pin } = req.body;
    const signatureInput = `${api_key}${request_id}${pin}`;
    const signature = md5(signatureInput);
    if (signature !== req.body.signature) {
        return res.json({ errorCode: 6, message: errorCodes[6] });
    }
    const account = await AccountSchema.findOne({ bid, isActive: true, type: "IN-OUT" });
    if (!account) {
        return res.json({ errorCode: 4, message: errorCodes[4] });
    }
    
    const response = {
        errorCode: 1,
        bankAccountNumber: account.account_number,
        bankAccountName: account.res.userInfo.cusName,
        bankCode: account.bankCode,
        bankName: account.bankName,
        amount: amount,
        code: Ultis.generateUniqueRandomString(),
        message: "Success",
        tHash: 0
    };
    res.json(response);
});

publicRouter.post('/test', async (req, res) => {
    console.log(req.body)
    res.status(200).json({ message: 'ok' });
});

export default publicRouter;
