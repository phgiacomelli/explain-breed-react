import styled from "styled-components";

export const ExplainContent = styled.div`
    display:flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    color: #fafafa;
    /* background-color: white; */

    @media (max-width: 1150px) {
      flex-direction:column;

      .arrow{
        display: none;
      }
    }
`;
export const ButtonSecondary = styled.button`
    border:none;
    border-radius:.6rem;
    padding: .2rem .6rem;
    color: #fafafa;
    font-size: 12px;
    text-align: center;
    background-color: #494949;

    &:hover{
        cursor:pointer;
    }
`;