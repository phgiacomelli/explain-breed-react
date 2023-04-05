import * as CryptoJS from "crypto-js";

const SECRET = "UJaLAa7uiSAkjSAdmPA";


const setOnLocalStorage = (key: string, value: string): void => {
    const encryptedValue = CryptoJS.AES.encrypt(value, SECRET).toString();
    localStorage.setItem(key, encryptedValue);
}


const getFromLocalStorage = (key: string): string => {
    const encryptedValue = localStorage.getItem(key);
    if (encryptedValue) {
        const decryptedValue = CryptoJS.AES.decrypt(encryptedValue, SECRET).toString(CryptoJS.enc.Utf8);
        return decryptedValue;
    }

    return "";
}

export {setOnLocalStorage,getFromLocalStorage}