import { ExplainContainer } from "./styles";

type ExplainProps = {
    text: string | null
}

function Explain({ text }: ExplainProps) {
    return (
        <ExplainContainer>
            {text == null ?
                "Mostre a imagem de um cachorro para a câmera, clique no botão 'Explique-me' e aguarde..." :
                text}
        </ExplainContainer>
    )
}

export default Explain;
