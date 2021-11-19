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

export const DivTel = styled.div`
    display: flex;
    flex-direction: row;
`;

export const DivDdd = styled.div`
    width: 25%;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
`;

export const DivCel = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
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

export const DivInf = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DivTerms = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 100%;
    padding-left: 15px;
    padding-bottom: 25px;

    @media(min-width: 800px) {
        width: 50%;
    }
`;

export const DivTermsText = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const LabelTerms = styled.a`
    margin-bottom: 10px;
    font-size: 12px;
    cursor: pointer;
    text-align: justify;
    margin-right: 15px;

    color: #ffffff;
`;

export const CheckTerms = styled.input`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    cursor: pointer;
    vertical-align: middle;
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

export const TextModal = styled.p`
    white-space: pre-line;
`;

export const ButtonModal = styled.button`
    width: 100%;
    margin-top: 10px;
    padding: 16px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

    color: ${props => props.border ? "darkred" : "black"};
    background-color: white;
    border: ${props => props.border ? "1px solid" : 0}px;
    border-color: darkred;
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