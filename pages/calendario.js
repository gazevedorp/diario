import React, { useState, useEffect } from 'react';
import Router from 'next/router';

import api from '../services/api';

import { format } from 'date-fns';
import MenuButton from '../components/menu-button';
import Menu from '../components/menu';

import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import {
    Container,
    Header,
    BackButton,
    BackButtonImage,
    HeaderPage,
    HeaderPageTitle,
    HeaderPageImage,
    DivCalendar
} from '../styles/calendario'

export default function Calendario() {

    const [value, onChange] = useState(new Date());
    const [content, setContent] = useState()

    useEffect(() => {
        onInit();
    }, [])

    const onInit = async () => {
        const response = await api.get("calendario");
        setContent(response.data);
        console.log(response.data)
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
                <HeaderPageImage src="/menu-icon-calendar.png" />
            </HeaderPage>
            <DivCalendar>
                    <Calendar
                        locale="pt-BR"
                        onChange={onChange}
                        value={value}
                    />
            </DivCalendar>
        </Container>
    )
}
