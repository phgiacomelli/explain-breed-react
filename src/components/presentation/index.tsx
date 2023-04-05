import {
    Container,
    CentralDiv,
    Title,
    Text,
    ButtonCTA
} from "../../assets/styles/sharedStyles";
import { Link } from "react-router-dom";
import dogHome from "../../assets/icons/doh-home.svg";

function Presentation() {
    return (
        <Container>
            <CentralDiv height="645px">
                <Title> 
                    Sobre o Explain Breed
                </Title>
                <Text>
                    O Projeto foi criado para auxiliar as pessoas que pensam em adotar/ter um cachorro, onde o usuário irá mostrar uma foto do cachorro pela webcam/câmera, 
                    e o programa irá retornar uma breve explicação sobre as características da raça do respectivo animal. Note que não irá funcionar com todas as raças existentes,
                    por conta de ser um projeto limitado, mas nada impede de que com o tempo seja ampliado e podendo assim, atender a todas as necessidades.
                </Text>
                <Link to={"/api-key"}>
                    <ButtonCTA>
                        Vamos lá
                    </ButtonCTA>
                </Link>
                <img src={dogHome} />
            </CentralDiv>

        </Container>
    )
}

export default Presentation;
