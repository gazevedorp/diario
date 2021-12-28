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
    width: 200px;
`

export const ContentStep = styled.div`
    height: 300px;
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
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: scroll;
    overflow: hidden;

    h2{
        margin-top: 15px;
        color: #7f30af;
        text-align: center;
    }
    div{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    div label{
        color: #7f30af;
    }
    div label input{
        padding: 0px;
        font-size: 18px;
        border: 0px;
        width: 50px;
        border-bottom: 1px solid gray;
    }

    @media(max-width: 600px) {
        width: 80vw;
    }
`

export const ContentStepThree = styled.div`
    height: 400px;
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
        width: 100%;
        color: #7f30af;
        font-weight: 600;
    }
    @media(max-width: 600px) {
        width: 80vw;
        input{
        width: 80vw;
    }
    }
`

export const ContentStepFour = styled.div`
    height: 400px;
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
    label{
        color: #7f30af;
        font-weight: 400;
        font-size: 14px;
        height: 35px;
        width: 150px;
        margin-left: auto;
        margin-right: auto;
    }
`

export const ContentStepFive = styled.div`
    height: 400px;
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
    label{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #7f30af;
        font-weight: 400;
        font-size: 14px;
        height: 35px;
        width: 150px;
        margin-left: auto;
        margin-right: auto;
    }
    @media(max-width: 600px) {
        width: 80vw;
    }
`

export const ContentStepSix = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    padding: 10px;

    h3{
        color: #7f30af;
        text-align: right;
        padding-bottom: 10px;
    }

    p{
        color: #7f30af;
        font-size: 14px;
        padding: 0px 2px 10px 2px;
    }
    div p {
        display: inline-block;
        width: 100px;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden !important;
        text-overflow: ellipsis;
    }

    .footer{
        width: 100%;
    }

    .footer button{
        margin-top: 5px;
        width: 100%;
        padding: 10px;
        background-color: white;
        cursor: pointer;
        color: #7a0025;

        border: 0.5px solid gray;
    }

    -moz-box-shadow: 0 0 5px #999;
    -webkit-box-shadow: 0 0 5px #999;
    box-shadow: 0 0 5px #999;
`


export const ViewModal = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    input{
        border : 0px;
        border-bottom: 1px solid gray;
    }
    p{
        padding: 10px;
        border-bottom: 1px solid lightgray;
        font-size: 14px;
        cursor: pointer;
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