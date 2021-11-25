import React, { useState, useEffect } from 'react';
import Router from 'next/router';

import api from '../services/api';

import MenuButton from '../components/menu-button';
import Menu from '../components/menu';

import {
    Container,
    Header,
    BackButton,
    BackButtonImage,
    HeaderPage,
    HeaderPageImage,
    HeaderPageTitle,
    DivText,
    Description
} from '../styles/diario'

export default function Diario() {

    const [content, setContent] = useState()

    useEffect(() => {
        onInit();
    }, [])

    const onInit = async () => {
        const response = await api.get("diario-da-enxaqueca");
        setContent(response.data["diario_da_enxaqueca"].body);
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
                    VIVA COM
                </HeaderPageTitle>
                <HeaderPageTitle>
                    MAIS BEM ESTAR
                </HeaderPageTitle>
                <HeaderPageImage src="/a-enxaqueca.png" />
                <HeaderPageTitle>
                    DIÁRIO DA ENXAQUECA
                </HeaderPageTitle>
            </HeaderPage>
            <DivText>
                {content &&
                    <Description>
                        {content}
                    </Description>
                }
            </DivText>
        </Container>
    )
}
