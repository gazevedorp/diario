import React, {
    useState
} from 'react';
import Router from 'next/router';

import { states } from '../utils/states';

import { ToastContainer, toast } from 'react-toastify';

import {
    Container,
    DivSup,
    TextSup,
    DivForm,
    Input,
    InputSelect,
    Text,
    DivOptions,
    ContainerDoctor,
    DivDoctor,
    LabelDoctor,
    CheckDoctor,
    DivButton,
    Button,
    ButtonNoDoctor
} from '../styles/has-doctor'

export default function Login() {

    const [hasDoctor, setHasDoctor] = useState(null);
    const [crm, setCrm] = useState();
    const [state, setState] = useState();

    const handleSubmit = () => {
        if (hasDoctor && crm && state) {
            //Chamada API
            Router.push('/homeScreen')
        }
        else if (!hasDoctor) {
            Router.push('/homeScreen')
        }
        else {
            toast.error("Preencha todas as informações!");
        }
    }

    return (
        <>
            <Container>
                <DivSup>
                    <TextSup onClick={() => Router.push('/')}>X FECHAR</TextSup>
                </DivSup>
                <DivOptions>
                    <Text marginTop="50" marginHorizontal="30" marginBottom >VOCÊ JÁ FAZ TRATAMENTO DE ENXAQUECA CRÔNICA COM ALGUM MÉDICO</Text>
                    <ContainerDoctor>
                        <DivDoctor>
                            <LabelDoctor>
                                SIM
                                <CheckDoctor
                                    type="checkbox"
                                    onChange={() => setHasDoctor(true)}
                                    checked={hasDoctor === true}
                                />
                            </LabelDoctor>
                        </DivDoctor>
                        <DivDoctor>
                            <LabelDoctor>
                                NÃO
                                <CheckDoctor
                                    type="checkbox"
                                    onChange={() => setHasDoctor(false)}
                                    checked={hasDoctor === false}
                                />
                            </LabelDoctor>
                        </DivDoctor>
                    </ContainerDoctor>
                </DivOptions>
                <DivButton>
                    {hasDoctor &&
                        <>
                            <Text marginHorizontal="10" marginBottom >VOCÊ POSSUI O NÚMERO DE CRM DO SEU MÉDICO?</Text>
                            <DivForm>
                                <Input
                                    value={crm}
                                    onChange={e => setCrm(e.target.value)}
                                    placeholder="NÚMERO DE CRM"
                                />
                                <InputSelect
                                    defaultValue=""
                                    value={state}
                                    onChange={e => setState(e.target.value)}
                                >
                                    <option>{states[0].label}</option>
                                    {
                                        states.filter(item => item.value !== "").map(item => (
                                            <option key={item.value}>{item.value}</option>
                                        ))
                                    }
                                </InputSelect>
                            </DivForm>
                        </>
                    }
                    <Button onClick={handleSubmit}>ENTRAR</Button>
                    {hasDoctor &&
                        <ButtonNoDoctor onClick={() => Router.push('/homeScreen')}>NÃO TENHO NÚMERO DE CRM</ButtonNoDoctor>
                    }
                </DivButton>
            </Container>
            <ToastContainer />
        </>
    )
}
