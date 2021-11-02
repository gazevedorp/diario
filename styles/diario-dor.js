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

export const ContentStep = styled.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: scroll;
    overflow: hidden;
    
    h2{
        text-align: center;
    }
    h4{
        color: #7f30af;
        font-weight: 400;
    }
    p {
        color: #7f30af;
        font-weight: 400;
        line-height: 30px;
    }

    @media(max-width: 600px) {
        width: 80vw;
    }
`

export const ContentStepTwo = styled.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: scroll;
    overflow: hidden;
    
    h2{
        color: #7f30af;
        text-align: center;
    }
    p{
        color: #7f30af;
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        color: gray;
    }
    input{
        color: #7f30af;
        font-weight: 600;
    }
    @media(max-width: 600px) {
        width: 80vw;
    }
`

export const ContentStepThree = styled.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: scroll;
    overflow: hidden;
    
    h2{
        color: #7f30af;
        text-align: center;
        margin-bottom: 10px;
    }
    @media(max-width: 600px) {
        width: 80vw;
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button`
    width: 90vw;
    padding: 20px;
    font-weight: 600;
    font-size: 14px;
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
    border: 0px;
`