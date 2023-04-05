import {
    Container,
    CentralDiv,
    Title,
    Text,
    ButtonCTA,
} from "../../assets/styles/sharedStyles";

import {
    ExplainContent
} from "./styles";

import { useEffect, useRef, useState } from "react"
import * as tmImage from '@teachablemachine/image';
import Explain from "./explain";
import WebCam from "./webcam";
import { useNavigate } from "react-router-dom";
import * as Encryptor from "../../assets/utils/encryptor";

type BreedProbabilityModel = {
    className: string,
    probability: Number
}

type CompletionModel = {
    finish_reason: string,
    index: Number,
    logprobs: any,
    text: string
}

type CompletionInfoModel = {
    completion_tokens: Number,
    prompt_tokens: Number,
    total_tokens: Number
}

type CompletionAboutBreedModel = {
    choices: Array<CompletionModel>,
    created: EpochTimeStamp,
    id: string,
    model: string,
    object: string,
    usage: CompletionInfoModel
}


function ExplainDog() {

    const URL = "https://teachablemachine.withgoogle.com/models/hjTq9nDGj/";
    const API_KEY = Encryptor.getFromLocalStorage("apiKey");
    const webcamContainer = useRef(null);
    const navigate = useNavigate();

    const [explain, setExplain] = useState<string | null>(null);
    // const [isLoading, setIsLoading] = useState(false);

    // const [content, setContent] = useState(<>sasasajk</>);

    let model: tmImage.CustomMobileNet, webcam: tmImage.Webcam;

    const init = async () => {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";
        model = await tmImage.load(modelURL, metadataURL);

        const flip = true;
        webcam = new tmImage.Webcam(200, 200, flip);

        await webcam.setup();
        await webcam.play();
        window.requestAnimationFrame(loop);


        if (webcamContainer.current != null && typeof webcamContainer.current === "object") {
            // da erro mas funciona 🤦‍♂️   
            if (webcamContainer.current.childNodes.length > 0)
                return;
            webcamContainer.current.appendChild(webcam.canvas);
        }
    }

    const loop = () => {
        webcam.update();
        window.requestAnimationFrame(loop);
    }

    const predict = async () => {
        const prediction = await model.predict(webcam.canvas);

        // mostra todo o obj
        // console.log(prediction);

        const breed: BreedProbabilityModel = prediction.reduce(
            (prev, current) => {
                return prev.probability > current.probability ? prev : current;
            }
        );

        // mostra o que provavelmente é
        console.log(breed.className);

        explainBreed(breed.className);
    }

    const explainBreed = (breed: string) => {
        if (API_KEY == null)
            return;

        const prompt = `Explique sobre a raça ${breed}`;

        fetch("https://api.openai.com/v1/engines/text-davinci-002/completions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                prompt: prompt,
                max_tokens: 250,
                top_p: 1,
                temperature: 0
            })
        })
            .then(response => response.json())
            .then((data: CompletionAboutBreedModel) => {
                setExplain(data.choices[0].text);
                return;
            })
            .catch(error => console.error(error));
    }

    const changeApiKey = () => {
        // setando a show page pra true para ele poder acessar a pagina da api key
        // caso queira alterar ou apenas visualizar
        Encryptor.setOnLocalStorage("showPage","true");
        navigate("/api-key");
    }

    useEffect(() => {
        // Ao carregar a página, devemos verificar se está setada uma APIKEY
        let apiKey = Encryptor.getFromLocalStorage("apiKey");

        // Ao carregar a página, devemos seta o showPage para false
        // caso o engraçadinho tente acessar a pagina da api key dnv 
        // só que pela URL
        Encryptor.setOnLocalStorage("showPage", "false")

        // caso nao estiver setada a key, redireciona p pagina responsável
        if (apiKey == null)
            return navigate("/api-key");
    });

    init()

    return (
        <Container>
            <CentralDiv largura={"50%"}  >
                <Title>
                    Conhecendo mais sobre o dog!
                </Title>
                <Text>
                    Preencha com sua Api Key da OpenAI. É necessário para fazer a comunicação com o ChatGPT.
                </Text>
                <ExplainContent>                    
                        <WebCam divRef={webcamContainer} />
                        <svg width="40" height="24" viewBox="0 0 61 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M60.0607 13.0607C60.6464 12.4749 60.6464 11.5251 60.0607 10.9393L50.5147 1.3934C49.9289 0.807611 48.9792 0.807611 48.3934 1.3934C47.8076 1.97919 47.8076 2.92893 48.3934 3.51472L56.8787 12L48.3934 20.4853C47.8076 21.0711 47.8076 22.0208 48.3934 22.6066C48.9792 23.1924 49.9289 23.1924 50.5147 22.6066L60.0607 13.0607ZM0 13.5H59V10.5H0V13.5Z" fill="#4D5360" />
                        </svg>
                        <Explain text={explain} />
                </ExplainContent>
                <ButtonCTA onClick={predict}>Gerar Explicação</ButtonCTA>
                <button onClick={changeApiKey}></button>
            </CentralDiv>

        </Container>
    )
}

export default ExplainDog;