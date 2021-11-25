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
    width: 100px;
`

export const DivOptions = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #ffffff;

    position: fixed;

    @media(min-width: 800px) {
        width: 50vw;
    }
`;


export const DivMenuOptions = styled.div`
    width: 100vw;
    display: flex;
    overflow-x: scroll;
    white-space: nowrap;

    @media(min-width: 800px) {
        overflow-x: hidden;
        justify-content: center;
    }
`

export const Option = styled.button`
    display: inline-block;
    padding: 10px;
    font-size: 10px;
    font-weight: ${props => props.checked ? "bold" : "regular"};
    margin: 1px;
    background-color: #ffffff;
    border: 1px solid gray;
    color: #7f30af;
    border-bottom: ${props => props.checked ? "5px solid #713093" : ""};
    cursor: pointer;
`

export const Title = styled.p`
    width: auto;
    display: inline-block;
    padding: 2px;
    font-size: 10px;
    font-weight: bold;
    color: #ffffff;
    background-color: #713093;
    margin-bottom: 20px;
`

export const Description = styled.p`
    font-size: 10px;
    color: #7f30af;
    text-align: justify;
    white-space: pre-line;
`

export const DivText = styled.div`
    margin-top: 250px;
    padding-bottom: 30px;
    width: 90vw;
`