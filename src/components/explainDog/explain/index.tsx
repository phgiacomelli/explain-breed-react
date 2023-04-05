import { ExplainContainer } from "./styles";

type ExplainProps = {
    text: string | null
}

function Explain({ text }: ExplainProps) {
    return (
        <ExplainContainer>
            {text == null ?
                "Mostre a foto de um animal para a câmera e aguarde a resposta" :
                text}
        </ExplainContainer>
    )
}

export default Explain;
