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
    padding: 16px 14px 16px 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: #ffffff;
`

export const HeaderText = styled.p`
    width: 95%;
    font-size: 0.9rem;
    font-weight: bold;
`

export const HeaderButton = styled.button`
    width: 20px;
    height: 30px;
    border: 0px;
    cursor: pointer;

    background-color: #ffffff;
    div {
        width: 20px;
        height: 2px;
        background-color: grey;
        margin: 6px 0;
    }
`

export const ContainerOptions = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    @media(min-width: 700px) {
        width: 75vw;
    }
    @media(min-width: 800px) {
        width: 70vw;
    }
    @media(min-width: 1000px) {
        width: 70vw;
    }
    @media(min-width: 1200px) {
        width: 60vw;
    }
    @media(min-width: 1400px) {
        width: 50vw;
    }
    @media(min-width: 1600px) {
        width: 40vw;
    }
`

export const Option = styled.img`
    width: 45%;
    margin: 5px;
    cursor: pointer;

    -moz-box-shadow: 0 0 5px #999;
    -webkit-box-shadow: 0 0 5px #999;
    box-shadow: 0 0 5px #999;
    @media(min-width: 700px) {
        width: 200px;
        height: 200px;
    }
`

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background-color: #ffffff;
`;

export const Button = styled.button`
    padding: 18px;
    font-size: 0.8rem;
    border-width: 0px;
    cursor: pointer;

    background-color: transparent;
`;