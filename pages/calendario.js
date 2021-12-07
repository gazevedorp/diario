import React, { useState, useEffect } from 'react';
import Router from 'next/router';

import api from '../services/api';

import Calendar from 'react-awesome-calendar';
import MenuButton from '../components/menu-button';
import Menu from '../components/menu';

import {
    Container,
    Header,
    BackButton,
    BackButtonImage,
    HeaderPage,
    HeaderPageTitle,
    DivCalendar
} from '../styles/calendario'

export default function Calendario() {

    const [content, setContent] = useState()

    useEffect(() => {
        onInit();
    }, [])

    const onInit = async () => {

    }

    return (
        <Container>
            <Menu />
            <Header>
                <BackButton onClick={() => Router.push("/homeScreen")}>
                    <BackButtonImage src="/back.png" />
                </BackButton>
                <MenuButton />
            </Header>
            <HeaderPage>
                <HeaderPageTitle>
                    CALENDÁRIO
                </HeaderPageTitle>
            </HeaderPage>
            <DivCalendar>
                <Calendar header={() => (<></>) } />
            </DivCalendar>
        </Container>
    )
}
