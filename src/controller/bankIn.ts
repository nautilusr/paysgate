import { Request, Response } from "express-serve-static-core";
import md5 from "md5";
import { ParsedQs } from "qs";
import { errorCodes } from "./errCode";
import accountSchema from "../schema/account.schema";
import { Ultis } from "../ultis/ultis";
import gateSchema from "../schema/gate.schema";

export class bankInController {
    static async GET_ACTIVE_BANKS(req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) {
        const { api_key } = req.query;
        const apiKey = await gateSchema.findOne({ api_key });
        const data = await accountSchema.find({ isActive: true, type: "IN-OUT" })
        // Kiểm tra api_key có tồn tại hay không
        if (!apiKey) {
            return res.status(401).json({ errorCode: 401, message: errorCodes[401] });
        }
        // Tạo response trả về cho client
        const json = data.map((item) => {
            return {
                bankid: item._id,
                bankAccountNumber: item.account_number,
                bankAccountName: item.res.userInfo.cusName,
                bankCode: item.bankCode,
                bankName: item.bankName,
            }
        });
        return res.json(json);

    }
    static async B_REQUEST_PAY_IN(req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) {
        const { api_key, request_id, bid, amount, signature } = req.body;
        const apiKey = await gateSchema.findOne({ api_key });
        const account = await accountSchema.findOne({ bid, isActive: true, type: "IN-OUT" });
        // Kiểm tra api_key có tồn tại hay không
        if (!apiKey) {
            return res.status(401).json({ errorCode: 401, message: errorCodes[401] });
        }
        const signatureInput = md5(`${apiKey.api_key}${request_id}${apiKey.pin}`);
        // Kiểm tra signature có khớp với signature truyền lên hay không
        if (signatureInput !== signature) {
            return res.json({ errorCode: 6, message: errorCodes[6] });
        }
        // Kiểm tra tài khoản ngân hàng có tồn tại hay không
        if (!account) {
            return res.json({ errorCode: 4, message: errorCodes[4] });
        }
        // Số tiền nạp tối thiểu là 5,000 đ và tối đa là 1 tỷ
        if (amount < 5000 || amount > 1000000000) {
            return res.json({ errorCode: 5, message: errorCodes[5] });
        }
        // Tạo response trả về cho client
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
        return res.json(response);
    }
    static async B_CALLBACK_PAY_IN() {

    }
}