import React from 'react';
import Router from 'next/router';

import { useServiceState } from '../../services/serviceState';
import { useUserState } from '../../services/userState';

import {
    Sidebar,
    Item,
    Icon
} from 'react-sidebar-ui'

import 'react-sidebar-ui/dist/index.css';

//The style classes described are found in '../../styles/global.js'

export default function Menu() {

    const { setVoucher, setUser } = useUserState();
    const { setMenuOpen, menuOpen } = useServiceState();

    if (menuOpen)
        return (
            <Sidebar classes="menu" isCollapsed={false}>
                < Item classes="menu-item"
                    onClick={() => setMenuOpen()}>
                    <Icon><img src="Fechar.png" className="item-image" /></Icon>
                    Fechar
                </Item >
                <Item classes="menu-item"
                    onClick={() => {
                        Router.push('/homeScreen');
                        setMenuOpen();
                    }}>
                    <Icon><img src="home.png" className="item-image" /></Icon>
                    HOME
                </Item>
                <Item classes="menu-item"
                    onClick={() => {
                        Router.push('/enxaqueca');
                        setMenuOpen();
                    }}>
                    <Icon><img src="a-enxaqueca.png" className="item-image" /></Icon>
                    A ENXAQUECA
                </Item>
                <Item classes="menu-item"
                    onClick={() => {
                        Router.push('/diario');
                        setMenuOpen();
                    }}>
                    <Icon><img src="diario-da-enxaqueca.png" className="item-image" /></Icon>
                    O DIÁRIO DA ENXAQUECA
                </Item>
                <Item classes="menu-item"
                    onClick={() => {
                        Router.push('/perguntas');
                        setMenuOpen();
                    }}>
                    <Icon><img src="perguntas-frequentes.png" className="item-image" /></Icon>
                    PERGUNTAS FREQUENTES
                </Item>
                <Item classes="menu-item"
                    onClick={() => {
                        Router.push('/perfil');
                        setMenuOpen();
                    }}>
                    <Icon><img src="meu-perfil.png" className="item-image" /></Icon>
                    MEU PERFIL
                </Item>
                <Item classes="menu-item"
                    onClick={() => {
                        Router.push('/termos');
                        setMenuOpen();
                    }}>
                    <Icon><img src="termo-de-uso.png" className="item-image" /></Icon>
                    TERMOS DE USO
                </Item>
                <Item classes="menu-item-social">
                    <a href="http://enxaquecacronica.com.br/" target="_blank" rel="noopener noreferrer">
                        <img src="web.png" className="item-image" />
                    </a>
                    <a href="https://m.facebook.com/enxaquecacronica.br" target="_blank" rel="noopener noreferrer">
                        <img src="facebook.png" className="item-image" />
                    </a>
                    <a href="https://www.instagram.com/enxaquecacronica/" target="_blank" rel="noopener noreferrer">
                        <img src="instagram.png" className="item-image" />
                    </a>
                </Item>
                <Item classes="menu-item-sair"
                    onClick={() => {
                        setMenuOpen()
                        localStorage.removeItem("Token")
                        setVoucher(false);
                        setUser([]);
                        Router.push('/')
                    }}>
                    <Icon><img src="sair.png" className="item-image" /></Icon>
                    SAIR
                </Item>
            </Sidebar >
        )
    else
        return <></>
}