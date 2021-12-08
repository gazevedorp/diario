import React, {
    useState,
    useEffect
} from 'react';
import Router from 'next/router';

import { states } from '../utils/states';

import { ToastContainer, toast } from 'react-toastify';
import api from '../services/api.js';

import {
    Container,
    DivSup,
    TextSup,
    DivForm,
    DivImage,
    Image,
    InputTitle,
    Input,
    DivTel,
    DivDdd,
    DivCel,
    DivInf,
    DivTerms,
    LabelTerms,
    CheckTerms,
    ButtonPass,
    ButtonDelete,
    Buttons,
    Button,
    DivTermsText,
    InputSelect
} from '../styles/perfil.js'

export default function Perfil() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [ddd, setDdd] = useState("");
    const [mobile, setMobile] = useState("");
    const [crm, setCrm] = useState("");
    const [estado, setEstado] = useState("");
    const [notify, setNotify] = useState("");
    const [user, setUser] = useState();

    useEffect(() => {
        onInit();
    }, [])

    const onInit = async () => {
        try {
            const { data } = await api.post("/me")

            if (data) {
                console.log(data)
                setName(data.name)
                setEmail(data.email)
                setDdd(data.ddd)
                setMobile(data.celular)
                setEstado(data.doctor_state)
                setCrm(data.crm)
            }

            return Promise.resolve(data)
        } catch (e) {
            if (!e.response) {
                const error = 'Verifique sua conexão com a internet!'
                return Promise.reject(error)
            }

            const { data } = e.response
            if (data.message) {
                return Promise.reject(data.message)
            }
        }
    }

    const handleSubmit = async () => {
        try {
            const { data } = await api.put("perfil", {
                name: name,
                email: email,
                ddd: ddd,
                celular: mobile,
                crm: crm,
                state: estado
            })

            if (data) {
                console.log(data)
                toast.success("Dados alterados com sucesso!");
            }

            return Promise.resolve(data)
        } catch (e) {
            if (!e.response) {
                const error = 'Verifique sua conexão com a internet!'
                return Promise.reject(error)
            }

            const { data } = e.response
            if (data.message) {
                toast.error(data.message);
            }
        }
    };

    const handleDelete = async () => {
        try {
            const { data } = await api.delete("/user/delete")
            if (data) {
                console.log(data)
                toast.success("Conta excluída com sucesso!");
                setTimeout(() => {
                    localStorage.removeItem("Token")
                    Router.push("/login")
                }, 5000)
            }

            return Promise.resolve(data)
        } catch (e) {
            if (!e.response) {
                toast.error("Tente novamente mais tarde!");
                const error = 'Verifique sua conexão com a internet!'
                return Promise.reject(error)
            }

            const { data } = e.response
            if (data.message) {
                toast.error(data.message);
            }
        }
    }


    return (
        <>
            <Container>
                <DivSup>
                    <TextSup onClick={() => Router.push('/homeScreen')}>X FECHAR</TextSup>
                </DivSup>
                <DivImage>
                    <Image src="./avatar.png" />
                </DivImage>
                <DivForm>
                    <InputTitle>SEU NOME</InputTitle>
                    <Input
                        name="name"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                    <InputTitle>E-MAIL</InputTitle>
                    <Input
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <DivTel>
                        <DivDdd>
                            <InputTitle>DDD</InputTitle>
                            <Input
                                name="ddd"
                                onChange={e => setDdd(e.target.value)}
                                value={ddd}
                            />
                        </DivDdd>
                        <DivCel>
                            <InputTitle>CELULAR</InputTitle>
                            <Input
                                name="celular"
                                onChange={e => setMobile(e.target.value)}
                                value={mobile}
                            />
                        </DivCel>
                    </DivTel>
                    <DivTel>
                        <DivDdd>
                            <InputTitle>CRM</InputTitle>
                            <Input
                                name="crm"
                                onChange={e => setCrm(e.target.value)}
                                value={crm}
                            />
                        </DivDdd>
                        <DivCel>
                            <InputTitle>ESTADO</InputTitle>
                            <InputSelect
                                value={estado}
                                onChange={e => setEstado(e.target.value)}
                            >
                                <option>{states[0].label}</option>
                                {
                                    states.filter(item => item.value !== "").map(item => (
                                        <option key={item.value}>{item.value}</option>
                                    ))
                                }
                            </InputSelect>
                        </DivCel>
                    </DivTel>
                </DivForm>
                <DivInf>
                    <DivTerms>
                        <DivTermsText>
                            <div>
                                <CheckTerms
                                    type="checkbox"
                                    onChange={() => setNotify(!notify)}
                                    checked={notify}
                                />
                            </div>
                            <LabelTerms>
                                Aceito receber emails e push notifications
                            </LabelTerms>
                        </DivTermsText>
                    </DivTerms>
                    <ButtonPass
                        onClick={() => {
                            Router.push("/alter-password")
                        }}
                    >REDEFINIR SENHA</ButtonPass>
                    <ButtonDelete
                        onClick={() => {
                            var answer = window.confirm("Tem certeza que deseja deletar sua conta?");
                            if (answer) {
                                handleDelete();
                            }
                            else {
                                //some code
                            }
                        }}>
                        DELETAR MINHA CONTA
                    </ButtonDelete>
                    <Buttons>
                        <Button
                            border onClick={() => Router.push('/homeScreen')}>CANCELAR</Button>
                        <Button type="submit"
                            onClick={handleSubmit}>ALTERAR</Button>
                    </Buttons>
                </DivInf>
            </Container>
            <ToastContainer />
        </>
    )
}
