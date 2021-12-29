import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
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
    flex-direction: column;

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

export const Text = styled.a`
    margin-top: ${props => props.marginTop ? props.marginTop : 0}px;
    margin-bottom: ${props => props.marginBottom ? 25 : 0}px;
    margin-left: ${props => props.marginHorizontal ? props.marginHorizontal : 0}px;
    margin-right: ${props => props.marginHorizontal ? props.marginHorizontal : 0}px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;

    color: #ffffff;
`;

export const DivOptions = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20%;

    
    @media(min-width: 800px) {
        width: 50%;
    }
`;

export const ContainerDoctor = styled.div`
    width: 100%;
    padding-bottom: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const DivDoctor = styled.div`
    width: 100%;
    padding-bottom: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(min-width: 800px) {
        width: 50%;
    }
`;

export const LabelDoctor = styled.a`
    font-size: 14px;
    cursor: pointer;

    color: #ffffff;
`;

export const CheckDoctor = styled.input`
    width: 20px;
    height: 20px;
    margin-left: 10px;
    cursor: pointer;
    vertical-align: middle;
`;

export const DivButton = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    align-items: center;

    @media(min-width: 800px) {
        width: 50%;
    }
`;

export const Button = styled.button`
    width: 100%;
    padding: 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

    border: 0px;
    background-color: #7a0025;
    color: white;
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