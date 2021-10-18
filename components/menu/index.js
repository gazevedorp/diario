import React from 'react';
import Router from 'next/router';

import { useServiceState } from '../../services/serviceState';

import {
    Sidebar,
    Item
} from 'react-sidebar-ui'

import 'react-sidebar-ui/dist/index.css';

//The style classes described are found in '../../styles/global.js'

export default function Menu() {

    const { setMenuOpen } = useServiceState();

    return (
        <Sidebar classes="menu" isCollapsed={false}>
            < Item classes="menu-item"
                onClick={() => setMenuOpen()}>
                Fechar
            </Item >
            <Item classes="menu-item"
                onClick={() => {
                    Router.push('/homeScreen');
                    setMenuOpen();
                }}>
                HOME
            </Item>
            <Item classes="menu-item">
                A ENXAQUECA
            </Item>
            <Item classes="menu-item">
                O DIÁRIO DA ENXAQUECA
            </Item>
            <Item classes="menu-item">
                PERGUNTAS FREQUENTES
            </Item>
            <Item classes="menu-item">
                MEU PERFIL
            </Item>
            <Item classes="menu-item">
                TERMOS DE USO
            </Item>
            <Item classes="menu-item"
                onClick={() => {
                    setMenuOpen()
                    Router.push('/')
                }}>
                SAIR
            </Item>
        </Sidebar >
    )
}