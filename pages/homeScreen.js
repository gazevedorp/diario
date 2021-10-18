import React from 'react';
import Router from 'next/router';

import { useServiceState } from '../services/serviceState';

import Menu from '../components/menu';

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

    const { menuOpen, setMenuOpen } = useServiceState();

    return (
        <Container>
            {menuOpen && <Menu />}
            <Header>
                <HeaderText>
                    PROGRAMA DE SUPORTE AO PACIENTE
                </HeaderText>
                <HeaderButton onClick={() => setMenuOpen()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </HeaderButton>
            </Header>
            <ContainerOptions>
                <Option src="diario-dor.png"/>
                <Option src="buscar-medico.png" />
                <Option src="diario-alimentacao.png" />
                <Option src="diario-exercicio.png" />
                <Option src="redes-sociais.png" />
                <Option src="videos.png" />
            </ContainerOptions>
            <Buttons>
                <Button>LEMBRETES</Button>
                <Button>RELATÓRIOS</Button>
                <Button>VISUALIZAR</Button>
            </Buttons>
        </Container>
    )
}