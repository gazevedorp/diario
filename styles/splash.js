import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const DivSlider = styled.div`
    width: 80%;
    margin-bottom: 75px;
    padding: 0px;
`

export const DivImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    text-align: center;
`

export const Image = styled.img`
    width: 300px;
    height: auto;
    margin-left: auto;
    margin-right: auto; 

`

export const DivText = styled.div`
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Text = styled.p`
    margin: 0px;
    padding: 0px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    line-height: 20px;
`

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