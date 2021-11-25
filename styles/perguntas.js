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
    font-size: 1rem;
    font-weight: bold;
`

export const HeaderPageImage = styled.img`
    margin-top: 20px;
    width: 100px;
`

export const Title = styled.p`
    font-size: 10px;
    font-weight: bold;
    color: #713093;
    margin-bottom: 10px;
`

export const Description = styled.p`
    font-size: 10px;
    color: #713093;
    text-align: justify;
    white-space: pre-line;
`

export const DivText = styled.div`
    margin: 10px 0px 5px 0px;
    padding: 15px 10px 15px 10px;
    width: 95vw;
    background-color: #dfeaee;
`

export const DivContent = styled.div`
    padding-bottom: 20px;
`