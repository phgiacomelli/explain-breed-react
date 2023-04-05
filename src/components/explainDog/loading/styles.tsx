import styled from "styled-components";

export const LoadingContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    margin:0;
    padding:0;
    top:0;
    left:0;
    display: flex;
    justify-content:center;
    align-items:center
    
    /* background-color: red; */
    
    & .test {
        width: 100%;
        height: 100vh;
        position: absolute;
        margin:0;
        padding:0;
        top:0;
        left:0;
        background-color: #00000067;
        z-index: 99999;
    }
`;