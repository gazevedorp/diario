import React, { useEffect, useState } from 'react';
import Router from 'next/router';

import api from '../services/api';

import Modal from 'react-modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';

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
    ErrorLabel,
    Buttons,
    Button,
    TextModal,
    ButtonModal,
    DivTermsText
} from '../styles/register'
import { useUserState } from '../services/userState';
import Login from './has-doctor';

const validationSchema = Yup.object({
    name: Yup.string().required('Campo obrigatório'),
    email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
    ddd: Yup.string()
        .min(2, 'O DDD precisa ter pelo menos 2 dígitos')
        .max(3, 'O DDD pode ter até 3 dígitos')
        .required('Campo obrigatório'),
    celular: Yup.string()
        .min(9, 'O celular precisa ter pelo menos 9 dígitos')
        .required('Campo obrigatório'),
    password: Yup.string()
        .min(8, 'Você precisa de 8 caracteres ou mais')
        .required('Campo obrigatório'),
    password_confirmation: Yup.string()
        .min(8, 'Você precisa de 8 caracteres ou mais')
        .oneOf([Yup.ref('password'), ''], 'As senhas devem ser iguais')
        .required('Campo obrigatório'),
});

export default function Register() {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [termsContent, setTermsContent] = useState("")
    const [terms, setTerms] = useState(false);
    const [messages, setMessages] = useState(false);
    const [notify, setNotify] = useState(false);

    useEffect(() => {
        onInit();
    }, [])

    const customStyles = {
        content: {
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
        },
    };

    const onInit = async () => {
        const response = await api.get("terms-of-use");
        setTermsContent(response.data.content);
    }

    const { setUser, user } = useUserState();
    const { values, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            name: '',
            email: '',
            ddd: '',
            celular: '',
            password: '',
            password_confirmation: '',
            terms_of_use: true
        },
        validationSchema,
        onSubmit: async values => {
            if (terms) {
                console.log(JSON.stringify(values, null, 2));
                try {
                    const { data } = await api.post('/signup', values)

                    if (data.status === "success") {
                        handleLogin(values);
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

                    const errors = Object.keys(data.errors).reduce((prev, curr) => {
                        return {
                            ...prev,
                            [curr]: prev[curr][0]
                        }
                    }, data.errors)

                    toast.error("Este email já está sendo utilizado!");
                    return Promise.reject(errors)
                }
            }
            else {
                console.log("Error: ", error)
                toast.error("Você precisa aceitar os termos de uso!");
            }
        },
    });

    const handleLogin = async (values) => {
        try {
            const { data } = await api.post('/auth', { email: values.email, password: values.password });

            if (data) {
                setUser({ name: data.name, email: data.email, ddd: data.contact.ddd, mobile: data.contact.mobile })
                console.log("Token: ", data.access_token);
                localStorage.setItem("Token", data.access_token);
                Router.push('/has-doctor');
            }
        }
        catch {
            const error = 'Verifique sua conexão com a internet!'
            return Promise.reject(error)
        }
    }

    return (
        <>
            <Container>
                <DivSup>
                    <TextSup onClick={() => Router.push('/')}>X FECHAR</TextSup>
                </DivSup>
                <DivImage>
                    <Image src="./avatar.png" />
                </DivImage>
                <DivForm>
                    <InputTitle>SEU NOME</InputTitle>
                    <Input
                        name="name"
                        onChange={handleChange}
                        values={values.name}
                    />
                    {errors.name && touched.name ? <ErrorLabel>{errors.name}</ErrorLabel> : null}
                    <InputTitle>E-MAIL</InputTitle>
                    <Input
                        name="email"
                        onChange={handleChange}
                        values={values.email}
                    />
                    {errors.email && touched.email ? <ErrorLabel>{errors.email}</ErrorLabel> : null}
                    <DivTel>
                        <DivDdd>
                            <InputTitle>DDD</InputTitle>
                            <Input
                                name="ddd"
                                onChange={handleChange}
                                values={values.ddd}
                            />
                            {errors.ddd && touched.ddd ? <ErrorLabel>{errors.ddd}</ErrorLabel> : null}
                        </DivDdd>
                        <DivCel>
                            <InputTitle>CELULAR</InputTitle>
                            <Input
                                name="celular"
                                onChange={handleChange}
                                values={values.celular}
                            />
                            {errors.celular && touched.celular ? <ErrorLabel>{errors.celular}</ErrorLabel> : null}
                        </DivCel>
                    </DivTel>
                    <InputTitle>SENHA</InputTitle>
                    <Input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        values={values.password}
                    />
                    {errors.password && touched.password ? <ErrorLabel>{errors.password}</ErrorLabel> : null}
                    <InputTitle>CONFIRME A SENHA</InputTitle>
                    <Input
                        type="password"
                        name="password_confirmation"
                        onChange={handleChange}
                        values={values.password_confirmation}
                    />
                    {errors.password_confirmation && touched.password_confirmation ? <ErrorLabel>{errors.password_confirmation}</ErrorLabel> : null}
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
                                Eu autorizo receber da "Allergan" comunicações sobre seus produtos, serviços, pesquisas, eventos, programas e outras informações que possam ser de interesse para mim usando as informações de contato que forneço. Posso retirar meu consentimento a qualquer momento.
                            </LabelTerms>
                        </DivTermsText>
                        <DivTermsText>
                            <div>
                                <CheckTerms
                                    type="checkbox"
                                    onChange={() => setMessages(!messages)}
                                    checked={messages}
                                />
                            </div>
                            <LabelTerms>
                                Eu concordo em receber mensagens de texto recoorrentes de "Allergan", incluindo atualizações de serviços e mensagens de marketing, para o número acima. Podem ser aplicadas taxas de dados e mensagens. Não sou obrigado a consentir ou fornecer meu consentimento como condição para receber quaisquer bens ou serviços.
                            </LabelTerms>
                        </DivTermsText>
                        <LabelTerms onClick={() => terms ? setTerms(false) : setIsOpen(true)}>
                            <CheckTerms
                                type="checkbox"
                                onChange={() => terms ? setTerms(false) : setIsOpen(true)}
                                checked={terms}
                            />
                            LI E ACEITO OS TERMOS DE USO
                        </LabelTerms>
                    </DivTerms>
                    <Buttons>
                        <Button
                            border onClick={() => Router.push('/')}>CANCELAR</Button>
                        <Button type="submit"
                            onClick={handleSubmit}>ENTRAR</Button>
                    </Buttons>
                </DivInf>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setIsOpen(false)}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <TextModal>{termsContent}</TextModal>
                    <ButtonModal border onClick={() => {
                        setTerms(true);
                        setIsOpen(false)
                    }}>ACEITAR</ButtonModal>
                    <ButtonModal onClick={() => {
                        setIsOpen(false)
                    }}>FECHAR</ButtonModal>
                </Modal>
            </Container>
            <ToastContainer />
        </>
    )
}
