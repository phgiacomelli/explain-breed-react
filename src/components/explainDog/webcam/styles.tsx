import styled from "styled-components";

export const WebCamContainer = styled.div`
    width: 200px,
    height: 200px;
    /* border: 2px solid red; */
    background-color: blue
    border-radius: .8rem;
    display:flex;
    justify-content:center;
    align-items: center;

    & canvas {
        border-radius: .8rem;
        min-width: 200px;
        min-height: 200px;
    }
`;