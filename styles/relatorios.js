import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Header = styled.div`
    width: 100vw;
    padding: 16px 14px 0px 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: #ffffff;
`

export const BackButton = styled.button`
    border: 0px;
    cursor: pointer;

    background-color: #ffffff;
`

export const BackButtonImage = styled.img`
    width: 20px;
    height: 20px;
`

export const HeaderPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const HeaderPageTitle = styled.p`
    font-size: 1rem;
    font-weight: bold;
`

export const HeaderPageImage = styled.img`
    margin-top: 20px;
    width: 150px;
`

export const DivButtons = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(min-width: 800px) {
        width: 50vw;
    }
`;

export const ButtonDate = styled.button`
    width: 75%;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #ffffff;
    color: #7a0025;
    border: 1px solid #7a0025;
    cursor: pointer;
`

export const ButtonSend = styled.button`
    width: 95%;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #ffffff;
    color: #7a0025;
    border: 1px solid #7a0025;
    cursor: pointer;
`

export const DivMenuOptions = styled.div`
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Option = styled.button`
    padding: 10px;
    font-size: 12px;
    font-weight: ${props => props.checked ? "bold" : "regular"};
    margin: 1px;
    background-color: #ffffff;
    border: 1px solid #7f30af;
    color: #7f30af;
    border-bottom: ${props => props.checked ? "5px solid #7f30af" : ""};
`

export const DivChart = styled.div`
    width: 95vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(min-width: 800px) {
        width: 50vw;
    }
`;
