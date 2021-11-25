import React, { useEffect, useState } from 'react';
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
    HeaderPageTitle,
    HeaderPageImage,
    DivOptions,
    DivMenuOptions,
    Option,
    DivText,
    Title,
    Description
} from '../styles/enxaqueca'

export default function Enxaqueca() {

    const [option, setOption] = useState(1)
    const [content, setContent] = useState()

    useEffect(() => {
        onInit();
    }, [])

    const onInit = async () => {
        const response = await api.get("enxaqueca");
        setContent(response.data);
    }

    return (
        <Container>
            <DivOptions>
                <Menu />
                <Header>
                    <BackButton onClick={() => Router.back()}>
                        <BackButtonImage src="/back.png" />
                    </BackButton>
                    <MenuButton />
                </Header>
                <HeaderPage>
                    <HeaderPageTitle>
                        ENXAQUECA CRÔNICA
                    </HeaderPageTitle>
                    <HeaderPageImage src="/a-enxaqueca.png" />
                </HeaderPage>
                <DivMenuOptions>
                    <Option checked={option === 1} onClick={() => setOption(1)}>O QUE É</Option>
                    <Option checked={option === 2} onClick={() => setOption(2)}>SINTOMAS E DESENCADEANTES</Option>
                    <Option checked={option === 3} onClick={() => setOption(3)}>MITOS E VERDADES</Option>
                    <Option checked={option === 4} onClick={() => setOption(4)}>TRATAMENTOS</Option>
                </DivMenuOptions>
            </DivOptions>
            {content &&
                <>
                    {option === 1 &&
                        <DivText>
                            <Title>{content["o_que_e"].title}</Title>
                            <Description>{content["o_que_e"].body}</Description>
                        </DivText>
                    }
                    {option === 2 &&
                        <DivText>
                            <Title>{content["sintomas_e_desencadeantes"].title}</Title>
                            <Description>{content["sintomas_e_desencadeantes"].body}</Description>
                        </DivText>
                    }
                    {option === 3 &&
                        <DivText>
                            <Title>{content["mitos_e_verdades"].title}</Title>
                            <Description>{content["mitos_e_verdades"].body}</Description>
                        </DivText>
                    }
                    {option === 4 &&
                        <DivText>
                            <Title>{content["tratamentos"].title}</Title>
                            <Description>{content["tratamentos"].body}</Description>
                        </DivText>
                    }
                </>
            }
        </Container>
    )
}
