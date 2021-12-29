import React, {
    useState,
    useEffect
} from 'react';
import Router from 'next/router';

import api from '../services/api';

import Modal from 'react-modal';

import {
    Container,
    DivSup,
    TextSup,
    Text,
    DivOptions,
    ContainerDoctor,
    DivDoctor,
    LabelDoctor,
    CheckDoctor,
    DivButton,
    Button,
    TextModal,
    ButtonModal
} from '../styles/term_consent'

export default function TermConsent() {

    const [termConsent, setTermConsent] = useState();
    const [modalIsOpen, setIsOpen] = useState(false);

    const customStyles = {
        content: {
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
        },
    };

    useEffect(() => {
        onInit();
    }, [])

    const onInit = () => {
        if (typeof window !== 'undefined') {
            const temp = localStorage.getItem("TermConsent");
            if (temp === "true") {
                Router.push("/vencedor")
            }
        }

    }

    const handleSubmit = () => {
        if (typeof window !== 'undefined') {
            if (termConsent) {
                localStorage.setItem("TermConsent", "true");
                Router.push("/vencedor")
            }
        }

    }

    return (
        <Container>
            <DivSup>
                <TextSup onClick={() => Router.push('/homeScreen')}>X FECHAR</TextSup>
            </DivSup>
            <DivOptions>
                <Text marginTop="50" marginHorizontal="30" marginBottom >VOCÊ ACEITA OS TERMOS DE CONSENTIMENTO PARA PARTICIPAR DO PROGRAMA VENCEDOR?</Text>
                <ContainerDoctor>
                    <DivDoctor>
                        <LabelDoctor>
                            SIM
                            <CheckDoctor
                                type="checkbox"
                                onChange={() => setIsOpen(true)}
                                checked={termConsent === true}
                            />
                        </LabelDoctor>
                    </DivDoctor>
                    <DivDoctor>
                        <LabelDoctor>
                            NÃO
                            <CheckDoctor
                                type="checkbox"
                                onChange={() => setTermConsent(false)}
                                checked={termConsent === false}
                            />
                        </LabelDoctor>
                    </DivDoctor>
                </ContainerDoctor>
            </DivOptions>
            <DivButton>
                <Button onClick={handleSubmit}>ENTRAR</Button>
            </DivButton>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <TextModal>TERMO DE CONSENTIMENTO</TextModal>
                <ButtonModal border onClick={() => {
                    setTermConsent(true);
                    setIsOpen(false)
                }}>ACEITAR</ButtonModal>
                <ButtonModal onClick={() => {
                    setIsOpen(false)
                }}>FECHAR</ButtonModal>
            </Modal>
        </Container>
    )
}
