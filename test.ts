// "https://digiapp.vietcombank.com.vn/authen-service/v1/login"
// { "DT": "Windows", "OV": "10", "PM": "Chrome 111.0.0.0", "E": "81FA105E-2113-1133-AE7D-047B6ADE604B", "browserId": "", "captchaToken": "OPpUpk5LqozXHUeOhCq2MZ5aSTymKn", "captchaValue": "81542", "checkAcctPkg": "1", "lang": "vi", "mid": 6, "password": "Obstinate@2022", "user": "0915586030" }
// "{\"d\":\"NTZuZTdBSjNTRW9WTFF5SnX3QN85YQUFRx86gXfkcwwoF38MjGpcxjWTpxLSVndf94FMqPDqkBA63xSzvcDjCnAZRuJgeJwEVDtAehlEmp64cG8nzDxL37ZtzkHulbyedyn\\/Pj6h6ONUOXs7WI+raJWZevEelsfTlsFuSWbwy8JS0EB4KZA2Z4Rz5bj7+yxBe23IlfCVlbRDbODxR2aECQli\\/TWKunDtDAcQ0UsZa9SXVfk47vvX3T9ectf+It8QTC8kic37lLwSLaPLhqu8zDJObiOblZ2gvAqHwZ5ApT+Wm6gVPjxaPGU7jzu\\/LklU9PBz9R2KFngwHc9N+CsA5W2Na+iA4jnRQnSLTIwvyayEvu4Avao7iB5FJkxdaNMRDWS\\/JvviyjiNRxFMf5VeBhOVDeduMPl15e9BLos772C\\/uI735it2n\\/YW4dVSFBJF9q6gWyClpvZt019CE8oMHoyE+WozW5dxPYmUoCVnRF+n9XFeIOe+lPjZRpzqCARJlwYBmC8vgjYhGEl0ZoqnFbpnCIvIH3aNoIf5GPz2Lz2+HcWj3ojeGCnsVQ03Iztv8Rtu9n\\/p8JCa6352NHRzhPIjOh1NWFQgRqeMEwYVzkRBsww46n2NlC+Z71MC4hslk1WDpOHM3gK50OP2YWgSOnvihpyPLHyjaXkCUXxkewFTe9aveFQ=\",\"k\":\"Ppwfb3qQxd4p1EO6OWcc5cBl+Zc17eamiw18ShfjgpN2eXdMrtITQTNNcW3e2bhK0Nbpi5jKmpxmUP\\/fSzrHGIl3\\/soLcCPymnL81NP5FQ\\/r7UBTA0j2G565Rq5CT+aru6bi631sb\\/BSi2yYkQpZcA7Tj\\/cwxwFt3yCNMsmbcoXqf3Hxs6\\/Hw\\/Vnq0GPMiG1vetXW1C8+Uqaedyhf6D9V+LNJ2vDYBtnI9ithsx6sLZNV8hoHlYFcEJzQAF8apQxjmg1URcP8xdLdVpMwIr6izQvCY0sILzu3KuHz39vGGkTmJDGh94N+8vqdhaVK3jyQWhwO\\/OGjmUOmkW1R\\/CRWA==\"}"
import axios from "axios";
import { encryptRequest } from './src/controller/a';
const data = { "DT": "Windows", "OV": "10", "PM": "Chrome 111.0.0.0", "E": "81FA105E-2113-1133-AE7D-047B6ADE604B", "browserId": "", "captchaToken": "kv8YLGYeRk9qAJITocDcAtdn7X3Aqw", "captchaValue": "48434", "checkAcctPkg": "1", "lang": "vi", "mid": 6, "password": "Obstinate@2022", "user": "0915586030", "clientPubKey": "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCg+aN5HEhfrHXCI\/pLcv2Mg01gNzuAlqNhL8ojO8KwzrnEIEuqmrobjMFFPkrMXUnmY5cWsm0jxaflAtoqTf9dy1+LL5ddqNOvaPsNhSEMmIUsrppvh1ZbUZGGW6OUNeXBEDXhEF8tAjl3KuBiQFLEECUmCDiusnFoZ2w\/1iOZJwIDAQAB" }


const url = "https://digiapp.vietcombank.com.vn/authen-service/v1/login";
axios.post(url, encryptRequest(data), {
    timeout: 60000,
    headers: {
        "Accept": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "vi",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Host": "digiapp.vietcombank.com.vn",
        "Origin": "https://vcbdigibank.vietcombank.com.vn",
        "Referer": "https://vcbdigibank.vietcombank.com.vn/",
        "sec-ch-ua-mobile": "?0",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
        "X-Channel": "Web",
        "X-Lim-ID": "349fb5ff88d05936925098ac95a5a1009ff50dba20e802012cac4de9f8fd07b2"
    },
    validateStatus: () => true, // Bỏ qua kiểm tra trạng thái HTTP
}).then(res => {
    console.log(res.data)
})
// console.log(response.data)

// if (response.status === 200) {
//     const result = response.data;
//     return this.decryptData(result);
// } else {
//     return false;
// }