import {
    Container,
    CentralDiv,
    Title,
    Text,
    ButtonCTA
} from "../../assets/styles/sharedStyles";

import { useNavigate } from "react-router-dom";
import { Input } from "./styles";
import { ChangeEvent, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as Encryptor from "../../assets/utils/encryptor";

const checkApiKey = (str: string): boolean => {
    const regex = /^sk-.{48}$/;
    return regex.test(str);
}

enum ToastType {
    Error = "error",
    Info = "info",
    Warning = "warning",
    Success = "success"
}

const showMessage = (message: string, type:ToastType) => {
    toast(message,{
        position: toast.POSITION.TOP_CENTER,
        type: type,
        theme: "dark"
    })
}

function GetApiKey() {
    const [key, setKey] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        let key_storage = Encryptor.getFromLocalStorage("apiKey");
        let show_page = Encryptor.getFromLocalStorage("showPage");
        console.log(key_storage == "");

        if (key_storage != "" && 
            show_page != "true"){
            return navigate("/explain-dog");
        }
        
        if (key_storage != "") {
            setKey(key_storage);
        }

    }, []);

    const handleKey = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setKey(evt.target.value);
    }

    const saveKey = () => {
        
        if (key == null || 
            key == "")
            return showMessage("É necessário preencher a api key!", ToastType.Error);


        if (!checkApiKey(key))
            return showMessage("Insira uma api key válida!", ToastType.Warning);


        // encrypt antes de salvar - N esquecer
        Encryptor.setOnLocalStorage("apiKey", key);
        navigate("/explain-dog");
        showMessage("Api key inserida com sucesso!", ToastType.Success);
    }

    return (
        <Container>
            <CentralDiv>
                <Title>
                    Configuranção necessária
                </Title>
                <Text>
                    Preencha com sua Api Key da OpenAI. É necessário para fazer a comunicação com o ChatGPT.
                </Text>
                <Input placeholder="Api Key..." value={key} onChange={handleKey} />
                <ButtonCTA onClick={saveKey}>
                    Avançar
                </ButtonCTA>
            </CentralDiv>
            <ToastContainer autoClose={2000} />
        </Container>
    )
}

export default GetApiKey;