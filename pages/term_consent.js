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
    ButtonModal,
    Description,
    DescriptionTitle
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
                <TextModal>
                    <DescriptionTitle>
                        TERMO DE CONSENTIMENTO E PARTICIPAÇÃO NO PROGRAMA VENCEDOR
                    </DescriptionTitle>
                    <Description>
                        Ao tomar conhecimento dos serviços e benefícios oferecidos pelo Programa, solicito e confirmo minha participação no Programa Vencedor. Estou ciente de que posso ter acesso a serviços específicos, materiais desenvolvidos especificamente para o tratamento de enxaqueca crônica, benefícios na aquisição do medicamento Botox®, além de contar com acompanhamento de cunho educativo por central de relacionamento especializada em saúde, sempre de acordo com a prescrição e indicação médica.
                    </Description>
                    <Description>
                        Para tanto, autorizo o registro, armazenamento e uso de meus dados pessoais e de saúde, sabendo que toda e qualquer informação solicitada ou coletada tem relação direta com os benefícios ofertados e somente será usada pelos prestadores de serviços do Programa Vencedor para gestão dos serviços e benefícios a mim oferecidos, bem como a análise estatística e aprimoramento das operações e do atendimento do Programa, sempre de forma que minha identidade seja preservada em toda forma de publicação de resultados, com dados anonimizados. Estou ciente de que poderei, a qualquer momento, ter acesso, solicitar correção ou exclusão dos meus dados. Estou ciente, ainda, e de acordo, com o armazenamento dos meus dados por mais  12 meses para fins de auditoria, mesmo após minha saída do Programa Vencedor. Autorizo a prestação de informações acerca de meus dados pessoais e de saúde às autoridades competentes para atendimento de exigências legais.
                    </Description>
                    <Description>
                        Permito ainda que o Programa Vencedor entre em contato comigo para organizar demandas relativas aos serviços e benefícios e para avaliar a qualidade do atendimento oferecido, para tanto me comprometo a informar e manter meus dados cadastrais atualizados sempre que solicitado.
                    </Description>
                    <Description>
                        Entendo que o médico responsável pelo meu acompanhamento poderá consultar a todas as informações compartilhadas por mim com o Programa Vencedor.
                    </Description>
                    <Description>
                        Também estou ciente de que posso cancelar minha participação no Programa a qualquer momento, e que a única consequência deste ato seria a suspensão dos serviços e benefícios oferecidos. Fui devidamente informado(a) de que serei excluído(a) do Programa Vencedor, com a cessação de todos os benefícios, no caso de o meu médico suspender a prescrição do medicamento Botox®.
                    </Description>
                    <Description>
                        Comprometo-me, ainda, a seguir estritamente todas as orientações do meu médico, estando ciente de que o resultado do meu tratamento depende diretamente de seguir essas orientações.
                    </Description>
                    <Description>
                        Com pleno entendimento dos objetivos e escopo do Programa Vencedor, declaro meu interesse em participar do Programa Vencedor, estando totalmente ciente de que não há nenhum valor financeiro a receber ou a pagar, por minha participação.
                    </Description>
                </TextModal>
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
