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

const checkApiKey = (str: string): boolean => {
    const regex = /^sk-.{48}$/;
    return regex.test(str);
}


function GetApiKey() {
    const [key, setKey] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        let key_storage = localStorage.getItem("apiKey");

        if (key_storage != null)
            navigate("/explain-dog");

    }, []);

    const handleKey = (evt: ChangeEvent) => {
        setKey(evt.target.value);
    }

    const saveKey = () => {
        if (key == null)
            return;
        console.log(checkApiKey(key));

        if (!checkApiKey(key))
            return;

        // encrypt antes de salvar - N esquecer
        localStorage.setItem("apiKey", key);

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

        </Container>
    )
}

export default GetApiKey;