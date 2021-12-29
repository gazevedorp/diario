import React, {
    useEffect,
    useState
} from 'react';
import Router from 'next/router';

import { useUserState } from '../services/userState';

import Menu from '../components/menu';
import MenuButton from '../components/menu-button';
import Modal from 'react-modal';

import {
    Container,
    Header,
    HeaderText,
    ContainerOptions,
    OptionSocial,
    OptionSocialImage,
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

    const { voucher } = useUserState();
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        onInit();
    }, [])

    const onInit = () => {
        if (typeof window !== 'undefined') {
            const modalTemp = localStorage.getItem("Consentimento");
            if (modalTemp !== "true") {
                setModal(true);
            }

            console.log(voucher)
            setLoading(false);
        }

    }

    if (!loading)
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
                        src="Home/Diario_dor.png"
                    />
                    {voucher ?
                        <Option
                            onClick={() => Router.push("/term_consent")}
                            src="Home/Prog_vencedor.png"
                        />
                        :
                        <a href="https://enxaquecacronica.com.br/encontre-um-medico">
                            <Option
                                src="Home/encontremedico.png"
                            />
                        </a>
                    }
                    <Option
                        onClick={() => Router.push("diario-alimentacao")}
                        src="Home/Diario_nutricao.png"
                    />
                    <Option
                        onClick={() => Router.push("diario-exercicio")}
                        src="Home/Diario_exercicios.png"
                    />
                    <OptionSocial>
                        <a
                            href="https://enxaquecacronica.com.br/"
                            /*target="_blank" rel="noopener noreferrer"*/>
                            <OptionSocialImage
                                src="Home/menu-web.png"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/enxaquecacronica/"
                            /*</OptionSocial>target="_blank" rel="noopener noreferrer"*/>
                            <OptionSocialImage
                                src="Home/menu-instagram.png"
                            />
                        </a>
                        <a
                            href="https://pt-br.facebook.com/enxaquecacronica.br/"
                            /*target="_blank" rel="noopener noreferrer"*/>
                            <OptionSocialImage
                                src="Home/menu-facebook.png"
                            />
                        </a>
                        <a
                            href="https://www.youtube.com/c/EnxaquecaCr%C3%B4nica"
                            /*target="_blank" rel="noopener noreferrer"*/>
                            <OptionSocialImage
                                src="Home/menu-youtube.png"
                            />
                        </a>
                    </OptionSocial>
                    <Option
                        onClick={() => Router.push("videos")}
                        src="Home/videos.png" />
                </ContainerOptions>
                <Buttons>
                    <Button>LEMBRETES</Button>
                    <Button
                        onClick={() => Router.push("relatorios")}
                    >RELATÓRIOS</Button>
                    <Button
                        onClick={() => Router.push("calendario")}
                    >VISUALIZAR</Button>
                </Buttons>
                <Modal
                    isOpen={modal}
                    onRequestClose={() => setModal(false)}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <ViewModal>
                        <div>
                            <button onClick={() => {
                                localStorage.setItem("Consentimento", "true");
                                setModal(false)
                            }}>FECHAR X</button>
                        </div>
                        <p>Como parte do compromisso da Allergan com sua privacidade e proteção de dados, estamos publicando um Aviso de Privacidade revisado, levando em consideração a nova Lei Geral de Proteção de Dados (LGPD), isso pode ser acessado através  do seguinte link: <a href="https://www.abbvie.com.br/privacy.html" target="_blank" rel="noopener noreferrer">Aviso de privacidade da Allergan</a></p>
                        <br />
                        <p>Nosso aviso de privacidade permite que você saiba como a Allergan protege e usa seus dados pessoais, seus direitos de privacidade e nossos dados de contato, caso você tenha alguma dúvida.</p>
                    </ViewModal>
                </Modal>
            </Container>
        )

    else
        return (<></>)
}