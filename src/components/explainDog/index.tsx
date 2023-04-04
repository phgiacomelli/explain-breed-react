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
import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';
import arrow from "../../assets/icons/arrow.svg";
function ExplainDog(){

    const URL = "https://teachablemachine.withgoogle.com/models/hjTq9nDGj/";
    const webcamContainer = useRef(null);

    let model: tmImage.CustomMobileNet, webcam: tmImage.Webcam, labelContainer, maxPredictions;

    const init = async () => {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // or files from your local hard drive
        // Note: the pose library adds "tmImage" object to your window (window.tmImage)
        model = await tmImage.load(modelURL, metadataURL);       
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const flip = true; // whether to flip the webcam
        webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
        
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);
        console.log(webcam);
        console.log(webcam.canvas);
        if (webcamContainer.current != null) {
            webcamContainer.current.appendChild(webcam.canvas);
        }
        // append elements to the DOM
    }

    const loop = () => {
        webcam.update(); // update the webcam frame
        // await predict();
        window.requestAnimationFrame(loop);
    }

    const predict = async () => {
        // predict can take in an image, video or canvas html element
        const prediction = await model.predict(webcam.canvas);
        console.log(prediction);

        const probability = prediction.reduce(
            (prev, current) => {
                return prev.probability > current.probability ? prev : current;
            }
        );

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
                    <img src={arrow} height={90} width={"50px"}  />
                    <div></div>
                </ExplainContainer>
                <ButtonCTA onClick={predict}></ButtonCTA>
            </CentralDiv>
        
        </Container>
    )
}

export default ExplainDog;