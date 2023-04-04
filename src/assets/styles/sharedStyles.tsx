import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #181818;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CentralDiv = styled.div`
    width: 900px;
    height: 700px;
    padding: 2rem 5rem;
    display: flex;
    justify-content: center;
    gap:2rem;
    align-items: center;
    flex-direction: column;
    background-color: #232323;
    border-radius: .8rem;
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 900;
    color: #FFFFFF;
` ;

export const Text = styled.p`
    font-size: 16;
    font-weight: 300;
    color: #CECECE;
    text-align: center;
`;

export const ButtonCTA = styled.button`
    background-color: #1864F9;
    color: #FFFFFF;
    padding: .6rem 1.5rem;
    border-radius: .8rem;
    border: none;
    outline: 0;
    transition: .3s all linear;

    &:hover{
        cursor:pointer;
        transform: scale(1.03);
    }
`;