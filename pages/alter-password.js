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
} from '../styles/alter-password'

export default function AlterPassword() {

    return (
        <Container>
            <DivSup>
                <TextSup onClick={() => Router.push('/perfil')}>X FECHAR</TextSup>
                <DivImage>
                    <Image src="./avatar.png" />
                </DivImage>
            </DivSup>
            <DivForm>
                <InputTitle>NOVA SENHA</InputTitle>
                <Input />
                <InputTitle>REPITA NOVA SENHA</InputTitle>
                <Input />
            </DivForm>
            <DivInf>
                <Buttons>
                    <Button border onClick={() => Router.push('/perfil')}>CANCELAR</Button>
                    <Button onClick={() => {}}>ALTERAR</Button>
                </Buttons>
            </DivInf>
        </Container>
    )
}
