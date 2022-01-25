import React, {
    useState
} from 'react';

import Router from 'next/router';
import axios from 'axios';

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
} from '../styles/forget'

export default function Forget() {

    const [email, setEmail] = useState("")

    const handleSubmit = () => {
        if (email) {
            axios.post('https://api.diariodaenxaqueca.com.br/api/password/email', { email })
                .then((data) => {
                    console.log(data)
                    toast.success("Email enviado com sucesso!");
                    setTimeout(() => {
                        Router.push("/login")
                    }, 3000)
                })
                .catch((error) => {
                    console.log(error)
                    toast.error("Serviço temporariamente indisponível!")
                })
        }
        else{
            toast.error("Digite seu endereço de email!")
        }
    }

    return (
        <>
            <Container>
                <DivSup>
                    <TextSup onClick={() => Router.push('/login')}>X FECHAR</TextSup>
                    <DivImage>
                        <Image src="./avatar.png" />
                    </DivImage>
                    <Text >ESQUECI MINHA SENHA</Text>
                </DivSup>
                <DivForm>
                    <InputTitle>E-MAIL</InputTitle>
                    <Input
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <Text marginTop >DIGITE AQUI SEU E-MAIL, VOCÊ RECEBERÁ NO SEU E-MAIL UM LINK, CLIQUE NO LINK E CADASTRE UMA NOVA SENHA</Text>
                </DivForm>
                <DivInf>
                    <Buttons>
                        <Button border onClick={() => Router.push('/')}>CANCELAR</Button>
                        <Button onClick={handleSubmit}>ENVIAR</Button>
                    </Buttons>
                </DivInf>
            </Container>
            <ToastContainer />
        </>
    )
}
