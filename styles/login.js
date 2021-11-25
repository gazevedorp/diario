import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: #7f30af;
`;


export const DivSup = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;

    @media(min-width: 800px) {
        width: 50%;
    }
`;

export const TextSup = styled.a`
    margin: 0px;
    padding: 20px;
    padding-bottom: 0px;
    font-size: 16px;
    cursor: pointer;

    color: #ffffff;
`;

export const DivForm = styled.div`
    width: 100%;
    padding: 15px;
    padding-top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media(min-width: 800px) {
        width: 50%;
    }
`;

export const InputTitle = styled.p`
    margin-top: 20px;
    font-size: 14px;
    font-weight: normal;

    color: #ffffff;
`;

export const Input = styled.input`
    margin-top: 10px;
    border-width: 0px;
    border-bottom-width: 1px;
    outline: none;
    font-size: 16px;

    color: #ffffff;
    background-color: transparent;
    border-color: #ffffff;

    &:hover {
      color: #ffffff;
    }
`;

export const Text = styled.a`
    margin-top: ${props => props.marginTop ? 25 : 0}px;
    margin-bottom: ${props => props.marginBottom ? 25 : 0}px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;

    color: #ffffff;
`;

export const DivInf = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background-color: #7a0025;
`;

export const Button = styled.button`
    width: 50%;
    padding: 18px;

    border-width: 0px;
    border-right-width: ${props => props.border ? 1 : 0}px;
    border-color: #ffffff;

    font-size: 16px;
    background-color: transparent;
    color: #ffffff;
    cursor: pointer;
`;

export const DivImage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
`;

export const ErrorLabel = styled.p`
    margin-top: 2px;
    color: darkred;
`;