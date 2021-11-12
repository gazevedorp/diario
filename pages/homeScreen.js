import React from 'react';
import Router from 'next/router';

import Menu from '../components/menu';
import MenuButton from '../components/menu-button';

import {
    Container,
    Header,
    HeaderText,
    HeaderButton,
    ContainerOptions,
    Option,
    Buttons,
    Button
} from '../styles/homeScreen'

export default function HomeScreen() {

    return (
        <Container>
            <Menu />
            <Header>
                <HeaderText>
                    PROGRAMA DE SUPORTE AO PACIENTE
                </HeaderText>
                <MenuButton />
            </Header>
            <ContainerOptions>
                <Option
                    onClick={() => Router.push("diario-dor")}
                    src="diario-dor.png"
                />
                <Option src="buscar-medico.png" />
                <Option
                    onClick={() => Router.push("diario-alimentacao")}
                    src="diario-alimentacao.png"
                />
                <Option
                    onClick={() => Router.push("diario-exercicio")}
                    src="diario-exercicio.png"
                />
                <Option src="redes-sociais.png" />
                <Option src="videos.png" />
            </ContainerOptions>
            <Buttons>
                <Button>LEMBRETES</Button>
                <Button
                    onClick={() => Router.push("relatorios")}
                >RELATÓRIOS</Button>
                <Button>VISUALIZAR</Button>
            </Buttons>
        </Container>
    )
}