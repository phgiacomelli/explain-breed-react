import {
    Container,
    CentralDiv,
    Title,
    Text,
    ButtonCTA
} from "../../assets/styles/sharedStyles";
import { Link } from "react-router-dom";

function Presentation() {
    return (
        <Container>
            <CentralDiv>
                <Title>
                    Sobre o Explain Breed
                </Title>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aperiam exercitationem aut quis voluptatum aliquam tempore cum ex consequatur blanditiis beatae velit, ratione ducimus ea nobis ipsam maxime sunt laboriosam.
                </Text>
                <Link to={"/api-key"}>
                    <ButtonCTA>
                        Vamos lá
                    </ButtonCTA>
                </Link>
            </CentralDiv>

        </Container>
    )
}

export default Presentation;
