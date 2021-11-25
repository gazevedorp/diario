import React from 'react';
import Router from 'next/router';

import api from '../services/api';

import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
    Container,
    DivSup,
    TextSup,
    DivForm,
    DivImage,
    Image,
    InputTitle,
    Input,
    ErrorLabel,
    Text,
    DivInf,
    Buttons,
    Button
} from '../styles/login'

const validationSchema = Yup.object({
    email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
    password: Yup.string()
        .min(8, 'Você precisa de 8 caracteres ou mais')
        .required('Campo obrigatório'),
});

export default function Login() {

    const { values, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: async values => {
            try {
                const { data } = await api.post('/auth', { email: values.email, password: values.password });
                if (data) {
                    console.log("Token: ", data.access_token)
                    Router.push('/homeScreen')
                    localStorage.setItem("Token", data.access_token);

                }
            }
            catch (e) {
                if (!e.response) {
                    const error = 'Verifique sua conexão com a internet!'
                    console.log(error)
                }

                const { data } = e.response
                if (data.message === "Usuário ou senha inválidos") {
                    toast.error("Usuário ou senha inválidos!");
                }
            }
        },
    });

    return (
        <>
            <Container>
                <DivSup>
                    <TextSup onClick={() => Router.push('/')}>X FECHAR</TextSup>
                </DivSup>
                <DivForm>
                    <DivImage>
                        <Image src="./avatar.png" />
                    </DivImage>
                    <InputTitle>E-MAIL</InputTitle>
                    <Input
                        name="email"
                        onChange={handleChange}
                        values={values.email}
                    />
                    {errors.email && touched.email ? <ErrorLabel>{errors.email}</ErrorLabel> : null}
                    <InputTitle>SENHA</InputTitle>
                    <Input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        values={values.password}
                    />
                    {errors.password && touched.password ? <ErrorLabel>{errors.password}</ErrorLabel> : null}
                    <Text marginTop onClick={() => Router.push('/forget')}>ESQUECI MINHA SENHA</Text>
                </DivForm>
                <DivInf>
                    <Text marginBottom onClick={() => Router.push('/register')}>NÃO TEM CADASTRO, INSCREVA-SE</Text>
                    <Buttons>
                        <Button border onClick={() => Router.push('/')}>CANCELAR</Button>
                        <Button type="submit" onClick={handleSubmit}>ENTRAR</Button>
                    </Buttons>
                </DivInf>
            </Container>
            <ToastContainer />
        </>
    )
}
