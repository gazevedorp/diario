import React from 'react';
import Router from 'next/router';

import {
    Container,
    DivSup,
    TextSup,
    DivForm,
    DivImage,
    Image,
    InputTitle,
    Input,
    Text,
    DivInf,
    Buttons,
    Button
} from '../styles/forget'

export default function Login() {

    return (
        <Container>
            <DivSup>
                <TextSup onClick={() => Router.push('/login')}>X FECHAR</TextSup>
                <DivImage>
                    <Image src="./avatar.png" />
                </DivImage>
                <Text >ESQUECI MINHA SENHA</Text>
            </DivSup>
            <DivForm>
                <InputTitle>E-MAIL</InputTitle>
                <Input />
                <Text marginTop >DIGITE AQUI SEU E-MAIL, VOCÊ RECEBERÁ NO SEU E-MAIL UM LINK, CLIQUE NO LINK E CADASTRE UMA NOVA SENHA</Text>
            </DivForm>
            <DivInf>
                <Buttons>
                    <Button border onClick={() => Router.push('/')}>CANCELAR</Button>
                    <Button onClick={() => Router.push('/login')}>ENTRAR</Button>
                </Buttons>
            </DivInf>
        </Container>
    )
}
