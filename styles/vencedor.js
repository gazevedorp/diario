import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
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
    width: 250px;
`

export const DivText = styled.div`
    padding-bottom: 30px;
    width: 90vw;

    @media(min-width: 800px) {
        width: 50%;
    }
`

export const Description = styled.p`
    font-size: 12px;
    text-align: justify;
    white-space: pre-line;
    color: #7f30af;
    margin-bottom: 10px;
`

export const DescriptionTitle = styled.p`
    font-size: 12px;
    font-weight: bold;
    text-align: justify;
    white-space: pre-line;
    color: #7f30af;
    margin-bottom: 10px;
`

export const DivButton = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 0px 20px 0px;
    justify-content: center;
    align-items: center;

`;

export const Button = styled.a`
    width: 100%;
    padding: 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;

    border: 0px;
    background-color: #7a0025;
    color: white;
`;

export const DivSocialContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    @media(min-width: 800px) {
        width: 50%;
    }
`;

export const DivSocial = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
`;

export const SocialIcon = styled.img`
    height: 15px;
    width: 15px;
`;

export const SocialLink = styled.a`
    font-size: 10px;
    color: #f59926;
    text-decoration: none;
    font-weight: bold;
    margin-left: 5px;
`;