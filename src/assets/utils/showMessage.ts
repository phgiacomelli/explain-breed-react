import { ToastContainer, toast } from "react-toastify";

export enum ToastType {
    Error = "error",
    Info = "info",
    Warning = "warning",
    Success = "success"
}

export const showMessage = (message: string, type:ToastType) => {
    toast(message,{
        position: toast.POSITION.TOP_CENTER,
        type: type,
        theme: "dark"
    })
}