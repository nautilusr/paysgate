// encryptedRequestModule.js

const forge = require('node-forge');

function encryptRequest(e) {
    try {
        const n = forge.random.getBytesSync(32),
            t = forge.random.getBytesSync(16);
        
        e = Object.assign({
            clientPubKey: this.clientPublicKey
        }, e);
        
        const i = forge.cipher.createCipher("AES-CTR", n);
        i.start({
            iv: t
        });
        i.update(forge.util.createBuffer(forge.util.encodeUtf8(JSON.stringify(e))));
        i.finish();
        
        const r = Buffer.concat([Buffer.from(t, "binary"), Buffer.from(i.output.data, "binary")]);
        
        const publicKey = forge.pki.publicKeyFromPem(forge.util.decode64(this.defaultPublicKey));
        const s = publicKey.encrypt(forge.util.encode64(n));
        
        return {
            d: r.toString("base64"),
            k: forge.util.encode64(s)
        };
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    encryptRequest: encryptRequest
};