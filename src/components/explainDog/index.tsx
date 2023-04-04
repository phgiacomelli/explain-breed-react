import { 
    Container,
    CentralDiv,
    Title,
    Text,
 } from "../../assets/styles/sharedStyles";

 import { Link } from "react-router-dom";
 import { WebCam } from "./styles";


function ExplainDog(){


    
    return (
        <Container>
            <CentralDiv>
                <Title>
                    Conhecendo mais sobre o dog!
                </Title>
                <Text>
                    Preencha com sua Api Key da OpenAI. É necessário para fazer a comunicação com o ChatGPT.
                </Text>
                <WebCam> a</WebCam>
            </CentralDiv>

        </Container>
    )
}

export default ExplainDog;