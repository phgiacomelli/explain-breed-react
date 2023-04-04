import styled from "styled-components";

export const WebCam = styled.div`
    width: 300px,
    height: 200px;
    border: 2px solid red;
    border-radius: .8rem;

    & canvas {
        border-radius: .8rem;
        width: 100%;
        height: 100%;
    }
`;

export const ExplainContainer = styled.div`
    display:flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;