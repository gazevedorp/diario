import React, {
    useState
} from 'react';
import Router from 'next/router';

import api from '../services/api';

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
    Text,
    DivInf,
    Buttons,
    Button
} from '../styles/alter-password'

export default function AlterPassword() {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async () => {
        console.log(password.length)
        if (password !== confirmPassword) {
            toast.error("As senhas devem ser iguais")
        }

        else if (password.length < 8) {
            toast.error("Você precisa de 8 caracteres ou mais")
        }
        else {
            try {
                const { data } = await api.patch("/user/password", {
                    password: password,
                    password_confirmation: confirmPassword
                })

                if (data) {
                    console.log(data)
                    toast.success("Senha alterada com sucesso!");
                    setTimeout(() => {
                        Router.push("/perfil")
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
    };

    return (
        <>
            <Container>
                <DivSup>
                    <TextSup onClick={() => Router.push('/perfil')}>X FECHAR</TextSup>
                    <DivImage>
                        <Image src="./avatar.png" />
                    </DivImage>
                </DivSup>
                <DivForm>
                    <InputTitle>NOVA SENHA</InputTitle>
                    <Input
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    <InputTitle>REPITA NOVA SENHA</InputTitle>
                    <Input
                        type="password"
                        onChange={e => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                </DivForm>
                <DivInf>
                    <Buttons>
                        <Button border onClick={() => Router.push('/perfil')}>CANCELAR</Button>
                        <Button onClick={handleSubmit}>ALTERAR</Button>
                    </Buttons>
                </DivInf>
            </Container>
            <ToastContainer />
        </>
    )
}
