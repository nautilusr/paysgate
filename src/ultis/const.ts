export class Const {
    public static captcha1st: string = '351c2fae7c9445dead5b7b79dc75193e';
    
    public static defaultPublicKey: string = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAikqQrIzZJkUvHisjfu5ZCN+TLy//43CIc5hJE709TIK3HbcC9vuc2+PPEtI6peSUGqOnFoYOwl3i8rRdSaK17G2RZN01MIqRIJ/6ac9H4L11dtfQtR7KHqF7KD0fj6vU4kb5+0cwR3RumBvDeMlBOaYEpKwuEY9EGqy9bcb5EhNGbxxNfbUaogutVwG5C1eKYItzaYd6tao3gq7swNH7p6UdltrCpxSwFEvc7douE2sKrPDp807ZG2dFslKxxmR4WHDHWfH0OpzrB5KKWQNyzXxTBXelqrWZECLRypNq7P+1CyfgTSdQ35fdO7M1MniSBT1V33LdhXo73/9qD5e5VQIDAQAB\n-----END PUBLIC KEY-----";
    public static clientPublicKey: string = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCg+aN5HEhfrHXCI/pLcv2Mg01gNzuAlqNhL8ojO8KwzrnEIEuqmrobjMFFPkrMXUnmY5cWsm0jxaflAtoqTf9dy1+LL5ddqNOvaPsNhSEMmIUsrppvh1ZbUZGGW6OUNeXBEDXhEF8tAjl3KuBiQFLEECUmCDiusnFoZ2w/1iOZJwIDAQAB";
    public static clientPrivateKey: string = "-----BEGIN RSA PRIVATE KEY-----\r\nMIICXQIBAAKBgQCg+aN5HEhfrHXCI/pLcv2Mg01gNzuAlqNhL8ojO8KwzrnEIEuq\r\nmrobjMFFPkrMXUnmY5cWsm0jxaflAtoqTf9dy1+LL5ddqNOvaPsNhSEMmIUsrppv\r\nh1ZbUZGGW6OUNeXBEDXhEF8tAjl3KuBiQFLEECUmCDiusnFoZ2w/1iOZJwIDAQAB\r\nAoGAEGDV7SCfjHxzjskyUjLk8UL6wGteNnsdLGo8WtFdwbeG1xmiGT2c6eisUWtB\r\nGQH03ugLG1gUGqulpXtgzyUYcj0spHPiUiPDAPY24DleR7lGZHMfsnu20dyu6Llp\r\nXup07OZdlqDGUm9u2uC0/I8RET0XWCbtOSr4VgdHFpMN+MECQQDbN5JOAIr+px7w\r\nuhBqOnWJbnL+VZjcq39XQ6zJQK01MWkbz0f9IKfMepMiYrldaOwYwVxoeb67uz/4\r\nfau4aCR5AkEAu/xLydU/dyUqTKV7owVDEtjFTTYIwLs7DmRe247207b6nJ3/kZhj\r\ngsm0mNnoAFYZJoNgCONUY/7CBHcvI4wCnwJBAIADmLViTcjd0QykqzdNghvKWu65\r\nD7Y1k/xiscEour0oaIfr6M8hxbt8DPX0jujEf7MJH6yHA+HfPEEhKila74kCQE/9\r\noIZG3pWlU+V/eSe6QntPkE01k+3m/c82+II2yGL4dpWUSb67eISbreRovOb/u/3+\r\nYywFB9DxA8AAsydOGYMCQQDYDDLAlytyG7EefQtDPRlGbFOOJrNRyQG+2KMEl/ti\r\nYr4ZPChxNrik1CFLxfkesoReXN8kU/8918D0GLNeVt/C\r\n-----END RSA PRIVATE KEY-----\r\n";
    public static url: Record<string, string> = {
        getCaptcha: "https://digiapp.vietcombank.com.vn/utility-service/v1/captcha/",
        login: "https://digiapp.vietcombank.com.vn/authen-service/v1/login",
        authenService: "https://digiapp.vietcombank.com.vn/authen-service/v1/api-",
        getHistories: "https://digiapp.vietcombank.com.vn/bank-service/v1/transaction-history",
        tranferOut: "https://digiapp.vietcombank.com.vn/napas-service/v1/init-fast-transfer-via-accountno",
        genOtpOut: "https://digiapp.vietcombank.com.vn/napas-service/v1/transfer-gen-otp",
        genOtpIn: "https://digiapp.vietcombank.com.vn/transfer-service/v1/transfer-gen-otp",
        confirmTranferOut: "https://digiapp.vietcombank.com.vn/napas-service/v1/transfer-confirm-otp",
        confirmTranferIn: "https://digiapp.vietcombank.com.vn/transfer-service/v1/transfer-confirm-otp",
        tranferIn: "https://digiapp.vietcombank.com.vn/transfer-service/v1/init-internal-transfer",
        getBanks: "https://digiapp.vietcombank.com.vn/utility-service/v1/get-banks",
        getAccountDeltail: "https://digiapp.vietcombank.com.vn/bank-service/v1/get-account-detail",
        getlistAccount: "https://digiapp.vietcombank.com.vn/bank-service/v1/get-list-account-via-cif",
        getlistDDAccount: "https://digiapp.vietcombank.com.vn/bank-service/v1/get-list-ddaccount",
    };
    public static lang: string = 'vi';
    public static _timeout: number = 60;
    public static DT: string = "Windows";
    public static OV: string = "10";
    public static PM: string = "Chrome 111.0.0.0";
    public static checkAcctPkg: string = "1";
    public static username: string = "";
    public static password: string = "";
    public static account_number: string = "";
    public static captchaToken: string = "";
    public static captchaValue: string = "";
    public static proxy: string = "";
    public static sessionId: string = "";
    public static mobileId: string = "";
    public static clientId: string = "";
    public static cif: string = "";
    public static res: string = "";
    public static browserToken: string = "";
    public static browserId: string = "";
    public static E: string = "";
    public static tranId: string = "";
    public static token: any = "";
    public static accessToken: any = "";
    public static authToken: any = "";
    public static file: string;
}