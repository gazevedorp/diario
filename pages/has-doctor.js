import React, {
    useEffect,
    useState
} from 'react';
import Router from 'next/router';

import api from '../services/api';
import { states } from '../utils/states';
import { useUserState } from '../services/userState';

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

export default function HasDoctor() {

    const { user, setUser, setVoucher } = useUserState();
    const [hasDoctor, setHasDoctor] = useState(null);
    const [crm, setCrm] = useState("");
    const [state, setState] = useState("");

    useEffect(() => {
        onInit();
    }, [])

    const onInit = async () => {
        console.log(user)
    }

    const handleSubmit = async () => {
        if (hasDoctor && crm && state) {

            try {
                const { data } = await api.put('/perfil', { name: user.name, email: user.email, ddd: user.ddd, celular: user.mobile, crm: crm, state: state });
                if (data) {
                    setVoucher(true);
                    Router.push('/homeScreen')
                }
            }
            catch (e) {
                if (!e.response) {
                    const error = 'Verifique sua conexão com a internet!'
                    return Promise.reject(error)
                }
                else {
                    const { data } = e.response
                    if (data.message) {
                        console.log(data.message)
                        toast.error(data.message);
                    }
                }
            }
        }
        else if (!hasDoctor) {
            setVoucher(false);
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
