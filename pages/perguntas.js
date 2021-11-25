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
    DivContent,
    DivText,
    Description,
    Title,
} from '../styles/perguntas'

export default function Perguntas() {

    const [content, setContent] = useState()

    useEffect(() => {
        onInit();
    }, [])

    const onInit = async () => {
        const response = await api.get("faq");
        console.log(response.data)
        setContent(response.data);
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
                    MITOS E VERDADES
                </HeaderPageTitle>
                <HeaderPageImage src="/faqs.png" />
            </HeaderPage>
            <DivContent>
                {content &&
                    content.map(item =>
                        <DivText key={item}>
                            <Title>{item.title}</Title>
                            <Description>{item.content}</Description>
                        </DivText>
                    )
                }
            </DivContent>
        </Container>
    )
}
