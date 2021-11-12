import React, {
    useState,
    useEffect
} from 'react';
import Router from 'next/router';

import { parseISO, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Line } from 'react-chartjs-2';
import { ToastContainer } from 'react-toastify';
import Menu from '../components/menu';
import MenuButton from '../components/menu-button';

import {
    Container,
    Header,
    BackButton,
    BackButtonImage,
    HeaderPage,
    HeaderPageTitle,
    HeaderPageImage,
    DivButtons,
    ButtonDate,
    ButtonSend,
    DivMenuOptions,
    Option,
    DivChart
} from '../styles/relatorios'

export default function Relatorios() {

    const [option, setOption] = useState(1)

    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: option === 1 ? "Localização" : option === 2 ? "Sintomas" : option === 3 ? "Nutrição" : option === 4 ? "Exercícios" : null,
                data: [12, 19, 3, 5, 2, 3],
                fill: true,
                backgroundColor: "#7a0025"
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    };

    return (
        <>
            <Container>
                <Menu />
                <Header>
                    <BackButton onClick={() => Router.back()}>
                        <BackButtonImage src="/back.png" />
                    </BackButton>
                    <MenuButton />
                </Header>
                <HeaderPage>
                    <HeaderPageTitle>
                        RELATÓRIOS
                    </HeaderPageTitle>
                    <HeaderPageImage src="/relatorios-logo.png" />
                </HeaderPage>
                <DivMenuOptions>
                    <Option checked={option === 1} onClick={() => setOption(1)}>LOCALIZAÇÃO</Option>
                    <Option checked={option === 2} onClick={() => setOption(2)}>SINTOMAS</Option>
                    <Option checked={option === 3} onClick={() => setOption(3)}>NUTRIÇÃO</Option>
                    <Option checked={option === 4} onClick={() => setOption(4)}>EXERCÍCIOS</Option>
                </DivMenuOptions>
                <DivChart>
                    <Line data={data} options={options} />
                </DivChart>
                <DivButtons>
                    <ButtonDate>
                        ALTERAR PERÍODO
                    </ButtonDate>
                    <ButtonSend>
                        ENVIAR
                    </ButtonSend>
                </DivButtons>
            </Container>
            <ToastContainer />
        </>
    )
}