import {
    Container,
    CentralDiv,
    Title,
    Text,
    ButtonCTA
} from "../../assets/styles/sharedStyles";

import { useNavigate } from "react-router-dom";
import { Input, Link } from "./styles";
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import image from "../../assets/icons/image.svg";
import * as Encryptor from "../../assets/utils/encryptor";
import { showMessage, ToastType } from "../../assets/utils/showMessage";
import { ToastContainer } from "react-toastify";


const checkApiKey = (str: string): boolean => {
    const regex = /^sk-.{48}$/;
    return regex.test(str);
}



function GetApiKey() {
    const [key, setKey] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        let key_storage = Encryptor.getFromLocalStorage("apiKey");
        let show_page = Encryptor.getFromLocalStorage("showPage");

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
            <CentralDiv height="645px">
                <Title>
                    Configuranção necessária
                </Title>
                <Text>
                    Preencha o campo abaixo com sua Api Key da OpenAI. Este passo é necessário para fazer a comunicação com o ChatGPT.
                    Em caso de dúvidas, segue o <Link href="https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key" target="_blank">link</Link> com o tutorial de como localizar a Api Key
                </Text>
                <Input placeholder="Api Key..." value={key} onChange={handleKey} />
                <ButtonCTA onClick={saveKey}>
                    Avançar
                </ButtonCTA>
                <img src={image} />
            </CentralDiv>
            <ToastContainer autoClose={2000} />
        </Container>
    )
}

export default GetApiKey;