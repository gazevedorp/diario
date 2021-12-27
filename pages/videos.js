import React, { useEffect, useState } from 'react';
import Router from 'next/router';

import axios from 'axios';
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
    Description,
    DivVideos,
    LoadMore
} from '../styles/videos'

export default function Videos() {

    const [option, setOption] = useState(1)
    const [content, setContent] = useState()
    const [nextUrl, setNextUrl] = useState("")
    const [token, setToken] = useState("")

    useEffect(() => {
        onInit();
    }, [])

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const onInit = async () => {
        const tokenTemp = localStorage.getItem("Token");
        setToken(tokenTemp)
        const response = await api.get("videos");
        setContent(response.data.data);
        setNextUrl(response.data.next_page_url)
        console.log(response.data.data)
    }

    const loadMore = async () => {
        if (nextUrl !== null) {
            const response = await axios.get(nextUrl, config);
            setContent(content.concat(response.data.data))
            setNextUrl(response.data.next_page_url)
        }
    }

    useEffect(() => {
        console.log(content)
    }, [content])

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
                        VÍDEOS
                    </HeaderPageTitle>
                    <HeaderPageImage src="/video-menu.png" />
                </HeaderPage>
                <DivMenuOptions>
                    <Option checked={option === 1} onClick={() => setOption(1)}>TODOS</Option>
                    <Option checked={option === 2} onClick={() => setOption(2)}>EXERCÍCIOS</Option>
                    <Option checked={option === 3} onClick={() => setOption(3)}>NUTRIÇÃO</Option>
                    <Option checked={option === 4} onClick={() => setOption(4)}>BUSCA</Option>
                </DivMenuOptions>
            </DivOptions>
            {content &&
                <>
                    {option === 1 &&
                        <>
                            <DivText>
                                {content.map(item =>
                                    <DivVideos key={item.url}>
                                        <iframe src={item.url}
                                            style={{ width: "95%" }}
                                            frameBorder='0'
                                            allowFullScreen="allowfullscreen"
                                        />
                                        <Title>{item.name}</Title>
                                        <Description>{item.description}</Description>
                                    </DivVideos>
                                )}
                            </DivText>
                            {nextUrl !== null &&
                                <LoadMore
                                    onClick={loadMore}
                                >Carregar mais</LoadMore>
                            }
                        </>
                    }
                    {option === 2 &&
                        <DivText>

                        </DivText>
                    }
                    {option === 3 &&
                        <DivText>
                        </DivText>
                    }
                    {option === 4 &&
                        <DivText>
                        </DivText>
                    }
                </>
            }
        </Container>
    )
}
