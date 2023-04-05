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
    const [key, setKey] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        let key_storage = Encryptor.getFromLocalStorage("apiKey");
        let show_page = Encryptor.getFromLocalStorage("showPage");

        if (key_storage != null && show_page != "true")
            navigate("/explain-dog");
        
        // if (key) {
            
        // }
        // setKey();

    }, []);

    const handleKey = (evt: ChangeEvent) => {
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
                <Input placeholder="Api Key..." onChange={handleKey} />
                <ButtonCTA onClick={saveKey}>
                    Avançar
                </ButtonCTA>
            </CentralDiv>
            <ToastContainer autoClose={2000} />
        </Container>
    )
}

export default GetApiKey;