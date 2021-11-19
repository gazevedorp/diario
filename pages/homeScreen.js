import React, {
    useState
} from 'react';
import Router from 'next/router';

import Menu from '../components/menu';
import MenuButton from '../components/menu-button';
import Modal from 'react-modal';

import {
    Container,
    Header,
    HeaderText,
    HeaderButton,
    ContainerOptions,
    Option,
    Buttons,
    Button,
    ViewModal,
} from '../styles/homeScreen'

const customStyles = {
    content: {
        top: "30%",
        marginLeft: "auto",
        marginRight: "auto",
        width: 275,
        height: 325
    },
};

export default function HomeScreen() {

    const [modal, setModal] = useState(true);

    return (
        <Container>
            <Menu />
            <Header>
                <HeaderText>
                    PROGRAMA DE SUPORTE AO PACIENTE
                </HeaderText>
                <MenuButton />
            </Header>
            <ContainerOptions>
                <Option
                    onClick={() => Router.push("diario-dor")}
                    src="diario-dor.png"
                />
                <Option src="buscar-medico.png" />
                <Option
                    onClick={() => Router.push("diario-alimentacao")}
                    src="diario-alimentacao.png"
                />
                <Option
                    onClick={() => Router.push("diario-exercicio")}
                    src="diario-exercicio.png"
                />
                <Option src="redes-sociais.png" />
                <Option src="videos.png" />
            </ContainerOptions>
            <Buttons>
                <Button>LEMBRETES</Button>
                <Button
                    onClick={() => Router.push("relatorios")}
                >RELATÓRIOS</Button>
                <Button>VISUALIZAR</Button>
            </Buttons>
            <Modal
                isOpen={modal}
                onRequestClose={() => setModal(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <ViewModal>
                    <div>
                        <button onClick={() => setModal(false)}>FECHAR X</button>
                    </div>
                    <p>Como parte do compromisso da Allergan com sua privacidade e proteção de dados, estamos publicando um Aviso de Privacidade revisado, levando em consideração a nova Lei Geral de Proteção de Dados (LGPD), isso pode ser acessado através  do seguinte link: <a href="https://www.abbvie.com.br/privacy.html" target="_blank"  rel="noopener noreferrer">Aviso de privacidade da Allergan</a></p>
                    <br />
                    <p>Nosso aviso de privacidade permite que você saiba como a Allergan protege e usa seus dados pessoais, seus direitos de privacidade e nossos dados de contato, caso você tenha alguma dúvida.</p>
                </ViewModal>
            </Modal>
        </Container>
    )
}