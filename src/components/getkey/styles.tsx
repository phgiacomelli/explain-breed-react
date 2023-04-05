import styled from "styled-components";

export const Input = styled.input`
    outline: 0;
    border: none;
    border-radius: .5rem;
    background-color: #292F3A;
    padding: .5rem;
    width: 485px;
    font-size: 1rem;
    /* letter-spacing: .8px; */
    color: #CECECE;

    @media (max-width: 1150px) {
        width: 100%;
    }

    @media (max-width: 390px) {
        padding: .2rem;
        width: 100%;
    }
`;

export const Link = styled.a`
    color: #d4770d;
`;