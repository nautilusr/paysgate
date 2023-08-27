import crypto from "crypto";

export class Ultis {
    public static generateUniqueRandomString() {
        const randomData = crypto.randomBytes(16); // Tạo dãy bytes ngẫu nhiên
        const hash = crypto.createHash('sha256').update(randomData).digest('hex'); // Tính băm SHA-256
        const randomString = hash.slice(0, 6); // Lấy 6 ký tự đầu của giá trị băm
        return randomString;
    }
}