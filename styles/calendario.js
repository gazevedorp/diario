import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
    font-size: 1.2rem;
    font-weight: bold;
`

export const DivText = styled.div`
    margin-top: 50px;
    padding-bottom: 30px;
    width: 90vw;
`

export const Description = styled.p`
    font-size: 12px;
    font-weight: 200;
    text-align: justify;
    white-space: pre-line;
`

export const DivCalendar = styled.div`
    padding: 20px;
    margin-top: 25px;
    width: 90vw;
`