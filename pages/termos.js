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
} from '../styles/termos'

export default function Termos() {

    const [content, setContent] = useState()

    useEffect(() => {
        onInit();
    }, [])

    const onInit = async () => {
        const response = await api.get("terms-of-use");
        setContent(response.data.content);
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
                    TERMOS DE USO
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
