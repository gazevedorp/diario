import React, {
    useState,
    useEffect
} from 'react';
import Router from 'next/router';

import { useUserState } from '../services/userState';

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
    ButtonPass,
    ButtonDelete,
    Buttons,
    Button,
    DivTermsText
} from '../styles/perfil.js'

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

export default function Perfil() {

    const [notify, setNotify] = useState(false);

    useEffect(() => {
        onInit();
    }, [])

    const onInit = async () => {
        console.log(user)
    }

    const { setUser, user } = useUserState();
    const { values, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            name: '',
            email: '',
            ddd: '',
            celular: '',
            crm: '',
            estado: ''
        },
        validationSchema,
        onSubmit: async values => {
            if (terms) {
                console.log(JSON.stringify(values, null, 2));
                try {
                    const { data } = await api.post('/signup', values)

                    if (data.status === "success") {
                        localStorage.setItem("Token", data.token);
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
                    <TextSup onClick={() => Router.push('/homeScreen')}>X FECHAR</TextSup>
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
                    <DivTel>
                        <DivDdd>
                            <InputTitle>CRM</InputTitle>
                            <Input
                                name="crm"
                                onChange={handleChange}
                                values={values.crm}
                            />
                            {errors.crm && touched.crm ? <ErrorLabel>{errors.crm}</ErrorLabel> : null}
                        </DivDdd>
                        <DivCel>
                            <InputTitle>ESTADO</InputTitle>
                            <Input
                                name="estado"
                                onChange={handleChange}
                                values={values.estado}
                            />
                            {errors.estado && touched.estado ? <ErrorLabel>{errors.estado}</ErrorLabel> : null}
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
                                {}
                            }
                            else {
                                //some code
                            }
                        }}
                    >DELETAR MINHA CONTA</ButtonDelete>
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
