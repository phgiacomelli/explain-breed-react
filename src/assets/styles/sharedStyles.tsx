import styled from "styled-components";

type CentralDivProps = {
    width?: string,
    height?: string
}

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position:relative;
    /* background-color: #181818; */
    background: linear-gradient(45deg, #320146 0%, #470d68 100%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CentralDiv = styled.div<CentralDivProps>`
    width: ${props => props.width ? props.width :  "700px"};
    min-height: ${props => props.height ? props.height :  "600px"};
    padding: 2rem 5rem;
    display: flex;
    justify-content: center;
    gap:2rem;
    align-items: center;
    flex-direction: column;
    background-color: #2323238b;
    border-radius: .8rem;


    @media (max-width: 1150px) {
        width: 50%;
    }

    @media (max-width: 950px) {
        img {
            display:none;
        }
    } 

    @media (max-width: 425px) {
        width: 80%;
        max-height: 90%;
        padding: 1rem 2rem;
    }
        

`;  

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 900;
    color: #FFFFFF;
    text-align:center;
` ;

export const Text = styled.p`
    font-size: 16;
    font-weight: 500;
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