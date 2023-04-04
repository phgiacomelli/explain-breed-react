import { 
    Container,
    CentralDiv,
    Title,
    Text,
    ButtonCTA
 } from "../../assets/styles/sharedStyles";

 import { Link } from "react-router-dom";
 import { Input } from "./styles";

function GetApiKey(){
    return (
        <Container>
        <CentralDiv>
            <Title>
                Configuranção necessária
            </Title>
            <Text>
                Preencha com sua Api Key da OpenAI. É necessário para fazer a comunicação com o ChatGPT.
            </Text>
            <Input placeholder="Api Key..." />
            <Link to={"/explain-dog"}>
                <ButtonCTA>
                    Avançar
                </ButtonCTA>
            </Link>
        </CentralDiv>

    </Container>
    )
}

export default GetApiKey;