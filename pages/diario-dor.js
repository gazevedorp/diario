import React, {
    useState,
    useEffect
} from 'react';
import Router from 'next/router';

import { parseISO, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Menu from '../components/menu';
import MenuButton from '../components/menu-button';

import {
    Container,
    Header,
    BackButton,
    BackButtonImage,
    HeaderPage,
    HeaderPageTitle,
    HeaderPageImage,
    ContentStep,
    ContentStepTwo,
    ContentStepThree,
    Buttons,
    Button
} from '../styles/diario-dor'

export default function DiarioDor() {
    const [step, setStep] = useState(1);
    const [textButton, setTextButton] = useState(["ADICIONAR", "CANCELAR"]);
    const [data, setData] = useState(format(new Date(), 'yyyy-MM-dd'));
    const [hour, setHour] = useState(["", ""]);

    const ChangeStepContinue = () => {
        switch (step) {
            case 1:
                setTextButton(["PRÓXIMO", "VOLTAR"]);
                setStep(2);
                break;
            case 2:
                console.log(hour, data);
                //setStep(3);
                break;
            case 3:
                //setStep(4);
                break;
            case 4:
                //setStep(5);
                break;
            case 5:
                //setTextButton(["SALVAR", "VOLTAR"]);
                break;
        }
    }

    const ChangeStepBack = () => {
        switch (step) {
            case 1:
                Router.back();
                break;
            case 2:
                setTextButton(["ADICIONAR", "CANCELAR"]);
                setStep(1);
                break;
            case 3:
                setStep(2);
                break;
            case 4:
                setStep(3);
                break;
            case 5:
                setStep(4);
                break;
            case 6:
                setStep(5);
                setTextButton(["SALVAR", "VOLTAR"]);
                break;
        }
    }

    const formaterString = value => {
        var temp = parseISO(value);
        temp = format(temp, 'dd MMMM', { locale: ptBR });
        return temp.toUpperCase()
    }

    return (
        <Container>
            <Menu />
            <Header>
                <BackButton onClick={() => Router.back()}>
                    <BackButtonImage src="/back.png" />
                </BackButton>
                <MenuButton />
            </Header>
            <HeaderPage>
                <HeaderPageTitle>
                    ADICIONAR DOR
                </HeaderPageTitle>
                <HeaderPageImage src="/diario-dor2.png" />
            </HeaderPage>
            {step === 1 &&
                <ContentStep>
                    <h4>Para cadastrar sua Dor é simples, siga os passos:</h4>
                    <br />
                    <p>1 - Clique no campo adicionar</p>
                    <p>2 - Insira a hora de início e fim</p>
                    <p>3 - Escolha a localização da dor e insira o grau da dor</p>
                    <p>4 - Clique nos sintomas</p>
                    <p>5 - Quais os fatores desencadeantes</p>
                    <p>6 - Tem alguma medicação na crise</p>
                    <p>7 - Seus resultados</p>
                    <p>8 - Clique em Salvar</p>
                </ContentStep>
            }
            {step === 2 &&
                <ContentStepTwo>
                    <h2>PERÍODO</h2>
                    <br />
                    <input value={data} onChange={e => setData(e.target.value)} type="date" />
                    <p>SELECIONE HORA DE INÍCIO E FIM</p>
                    <input value={hour[0]} onChange={e => setHour([e.target.value, hour[1]])} type="time" />
                    <input value={hour[1]} onChange={e => setHour([hour[0], e.target.value])} type="time" />
                </ContentStepTwo>
            }
            {step === 3 &&
                <ContentStepThree>
                    <h2>{formaterString(data)}</h2>
                    <h2>LOCALIZAÇÃO DA DOR</h2>
                    <br />

                </ContentStepThree>
            }
            <Buttons>
                <Button
                    backgroundColor="#7a0025"
                    color="white"
                    onClick={ChangeStepContinue}>
                    {textButton[0]}
                </Button>
                <Button
                    backgroundColor="white"
                    color="black"
                    onClick={ChangeStepBack}>
                    {textButton[1]}
                </Button>
            </Buttons>
        </Container>
    )
}