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
    Description,
    DescriptionTitle,
    DivButton,
    Button,
    DivSocialContainer,
    DivSocial,
    SocialIcon,
    SocialLink
} from '../styles/vencedor'

export default function Vencedor() {

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
                    PROGRAMA DE SUPORTE
                </HeaderPageTitle>
                <HeaderPageTitle>
                    AO PACIENTE
                </HeaderPageTitle>
                <HeaderPageImage src="Home/Prog_vencedor.png" />
            </HeaderPage>
            <DivText>
                <Description>
                    A Allergan, comprometida com médicos, prestadores de serviços de saúde e pacientes, criou o Programa Vence Dor da Enxaqueca Crônica, cujos principais objetivos são:
                </Description>
                <Description>
                    - Auxiliar os pacientes com doenças crônicas a seguirem as recomendações médicas;
                </Description>
                <Description>
                    - Propiciar benefícios (descontos e pagamento em até 04 vezes no cartão) para melhorar o acesso e à adesão ao tratamento de doenças crônicas;
                </Description>
                <Description>
                    - Disponibilizar informações sobre a doença, sintomas e a melhor forma de gerenciar o tratamento conforme a prescrição médica.
                </Description>
                <DescriptionTitle>
                    COMO FUNCIONA
                </DescriptionTitle>
                <Description>
                    `Com a receita médica e seus documentos pessoais, você pode adquirir o tratamento para enxaqueca crônica prescrito pelo seu médico, por um valor diferenciado.
                </Description>
                <Description>
                    Para se cadastrar no programa, você precisa:
                </Description>
                <Description style={{ marginLeft: 20 }}>
                    - ligar para 0800 8989 890 e
                    <br />
                    - acessar o aplicativo Diário da Enxaqueca
                </Description>
                <Description>
                    Conforme as orientações do seu médico, existe diferentes tipos de tratamentos: orais de uso diários, mensais e injetáveis com aplicações trimestrais.
                </Description>
                <Description>
                    Independente do tipo e tempo de tratamento, é fundamental que você converse com seu médico para entender a frequência adequada da aplicação do medicamento prescrito e garantir melhor qualidade de vida, reduzindo as crises de enxaqueca crônica.
                </Description>
                <DivButton>
                    <Button href="tel:08008989890">
                        PARTICIPE
                    </Button>
                </DivButton>
                <Description>
                    O MELHOR CAMINHO É A INFORMAÇÃO
                </Description>
                <Description>
                    Para te ajudar no melhor entendimento do tratamento e da doença, acesse:
                </Description>
            </DivText>
            <DivSocialContainer>
                <DivSocial>
                    <SocialIcon src="/web.png" />
                    <SocialLink href="https://enxaquecacronica.com.br/">https://enxaquecacronica.com.br</SocialLink>
                </DivSocial>
            </DivSocialContainer>
            <DivSocialContainer style={{ paddingBottom: 50 }}>
                <DivSocial>
                    <SocialIcon src="/facebook.png" />
                    <SocialLink href="https://pt-br.facebook.com/enxaquecacronica.br/">@enxaquecacronica.br</SocialLink>
                </DivSocial>
                <DivSocial>
                    <SocialIcon src="/instagram.png" />
                    <SocialLink href="https://www.instagram.com/enxaquecacronica/">enxaquecacronica</SocialLink>
                </DivSocial>
            </DivSocialContainer>
        </Container>
    )
}
