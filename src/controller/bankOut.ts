import axios from "axios";
import gateSchema from "../schema/gate.schema";
import { errorCodes } from "./errCode";
import md5 from "md5";

export class bankOutController {
    static async B_REQUEST_PAY_OUT(req: any, res: any) {
        const { api_key, request_id, bankno, account_number, account_name, amount, signature } = req.body;
        const apiKey = await gateSchema.findOne({ api_key });
        // Kiểm tra api_key có tồn tại hay không
        if (!apiKey) {
            return res.status(401).json({ errorCode: 401, message: errorCodes[401] });
        }
        // Kiểm tra các tham số truyền lên có đầy đủ hay không
        if (!request_id || !bankno || !account_number || !account_name || !amount || !signature) {
            return res.json({ errorCode: 9, message: errorCodes[9] });
        }
        // Kiểm tra singature có khớp với signature truyền lên hay không
        const signatureInput = md5(`${apiKey.api_key}${request_id}${apiKey.pin}`);
        if (signatureInput !== signature) {
            return res.json({ errorCode: 6, message: errorCodes[6] });
        }
        // Kiểm tra số tiền rút tối thiểu là 10,000 đ và tối đa là 10,000,000 đ
        if (amount < 10000 || amount > 10000000) {
            return res.json({ errorCode: 5, message: errorCodes[5] });
        }
        // Tạo response trả về cho client
        const response = {
            status: 1,
            type: "OUT",
            requestId: request_id,
            transId: "3960",
            amount: amount,
            date: "06/03/2023 04:46:32",
            message: null,
            signature: "21ddb1bbe1d4652263c2caeebd10c99e"
        }
        return res.json(response);

    }
    static async B_REQUEST_BANK_LIST(req: any, res: any) {
        const { api_key } = req.query;
        const apiKey = await gateSchema.findOne({ api_key });
        const response = await axios.get('https://api.vietqr.io/v2/banks')
        // Kiểm tra api_key có tồn tại hay không
        if (!apiKey) {
            return res.status(401).json({ errorCode: 401, message: errorCodes[401] });
        }
        // Tạo response trả về cho client
        const listBank = response.data.data.map((res: { bin: string; name: string; shortName: string; code: string; }) => {
            return {
                bankNo: res.bin,
                bankName: res.name,
                shortName: res.shortName,
                bankCode: res.code,
            }
        })
        if (response.status == 200) {
            return res.json(listBank);
        } else {
            return res.json({ errorCode: 500, message: errorCodes[500] });
        }
    }
}