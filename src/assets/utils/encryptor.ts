import * as CryptoJS from "crypto-js";

const SECRET = "UJaLAa7uiSAkjSAdmPA";


function setOnLocalStorage(key: string, value: string): void {
    const encryptedValue = CryptoJS.AES.encrypt(value, SECRET).toString();
    localStorage.setItem(key, encryptedValue);
}


function getFromLocalStorage(key: string): string | null {
    const encryptedValue = localStorage.getItem(key);
    if (encryptedValue) {
        const decryptedValue = CryptoJS.AES.decrypt(encryptedValue, SECRET).toString(CryptoJS.enc.Utf8);
        return decryptedValue;
    }

    return null;
}

export {setOnLocalStorage,getFromLocalStorage}