import { 
    Container,
    CentralDiv,
    Title,
    Text,
    ButtonCTA,
 } from "../../assets/styles/sharedStyles";
 import { 
    WebCam,
    ExplainContainer
 } from "./styles";
 import { useRef } from "react"
import * as tmImage from '@teachablemachine/image';

import Explain from "./explain";


function ExplainDog(){

    const URL = "https://teachablemachine.withgoogle.com/models/hjTq9nDGj/";
    const webcamContainer = useRef(null);

    let model: tmImage.CustomMobileNet, webcam: tmImage.Webcam, labelContainer, maxPredictions;

    const init = async () => {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";
        model = await tmImage.load(modelURL, metadataURL);       
        maxPredictions = model.getTotalClasses();
        
        const flip = true; 
        webcam = new tmImage.Webcam(200, 200, flip); 
        await webcam.setup();
        await webcam.play();
        window.requestAnimationFrame(loop);

        if (webcamContainer.current != null) {
            // da erro mas funciona 🤦‍♂️
            webcamContainer.current.appendChild(webcam.canvas);
        }
    }

    const loop = () => {
        webcam.update(); 
        // await predict();
        window.requestAnimationFrame(loop);
    }

    const predict = async () => {
        const prediction = await model.predict(webcam.canvas);

        // mostra todo o obj
        console.log(prediction);

        const probability = prediction.reduce(
            (prev, current) => {
                return prev.probability > current.probability ? prev : current;
            }
        );

        // mostra o que provavelmente é
        console.log(probability);
    }

    init()
    return (
        <Container>
            <CentralDiv>
                <Title>
                    Conhecendo mais sobre o dog!
                </Title>
                <Text>
                    Preencha com sua Api Key da OpenAI. É necessário para fazer a comunicação com o ChatGPT.
                </Text>
                <ExplainContainer>
                    <WebCam id="webcam-container" ref={webcamContainer} />
                     <svg width="40" height="24" viewBox="0 0 61 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M60.0607 13.0607C60.6464 12.4749 60.6464 11.5251 60.0607 10.9393L50.5147 1.3934C49.9289 0.807611 48.9792 0.807611 48.3934 1.3934C47.8076 1.97919 47.8076 2.92893 48.3934 3.51472L56.8787 12L48.3934 20.4853C47.8076 21.0711 47.8076 22.0208 48.3934 22.6066C48.9792 23.1924 49.9289 23.1924 50.5147 22.6066L60.0607 13.0607ZM0 13.5H59V10.5H0V13.5Z" fill="#4D5360"/>
                    </svg>
                    <Explain />
                </ExplainContainer>
                <ButtonCTA onClick={predict}>Gerar Explicação</ButtonCTA>
            </CentralDiv>
        
        </Container>
    )
}

export default ExplainDog;