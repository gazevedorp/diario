import React, {
    useState,
    useEffect
} from 'react';
import Router from 'next/router';

import api from '../services/api'
import { parseISO, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Menu from '../components/menu';
import MenuButton from '../components/menu-button';
import { ToastContainer, toast } from 'react-toastify';

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
    ContentStepFour,
    ContentStepFive,
    ContentStepSix,
    Buttons,
    Button
} from '../styles/diario-exercicio'

export default function DiarioExercicio() {
    const [step, setStep] = useState(1);
    const [textButton, setTextButton] = useState(["ADICIONAR", "CANCELAR"]);
    const [type, setType] = useState("");
    const [exerciseWeight, setExerciseWeight] = useState("");
    const [data, setData] = useState(format(new Date(), 'yyyy-MM-dd'));
    const [hour, setHour] = useState(["", ""]);
    const [sex, setSex] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");

    useEffect(() => {
        console.log(hour)
    }, [hour])

    const formaterString = value => {
        var temp = parseISO(value);
        var temp1 = format(temp, 'dd', { locale: ptBR });
        var temp2 = format(temp, 'MMMM', { locale: ptBR });
        temp2 = temp2.substring(0, 3).toUpperCase();
        return `${temp1} ${temp2}`
    }

    const ChangeStepContinue = () => {
        switch (step) {
            case 1:
                setTextButton(["PRÓXIMO", "VOLTAR"]);
                setStep(2);
                break;
            case 2:
                if (sex && weight && age)
                    setStep(3);
                else
                    toast.warning("Preencha todos os campos!")
                break;
            case 3:
                if (hour[0] && hour[1])
                    setStep(4);
                else
                    toast.warning("Informe a hora de início e fim!")
                break;
            case 4:
                if (type)
                    setStep(5);
                else
                    toast.warning("Selecione o tipo de exercício!")
                break;
            case 5:
                if (exerciseWeight) {
                    setTextButton(["SALVAR", "VOLTAR"]);
                    setStep(6);
                }
                else
                    toast.warning("Selecione o nível de esforço!")
                break;
            case 6:
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
                setTextButton(["ADICIONAR", "CANCELAR"]);;
                break;
        }
    }

    return (
        <>
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
                        DIÁRIO DE EXERCÍCIOS
                    </HeaderPageTitle>
                    <HeaderPageImage src="/diario-exercicio2.png" />
                </HeaderPage>
                {step === 1 &&
                    <ContentStep>
                        <h4>Para cadastrar seu exercício é simples, siga os passos:</h4>
                        <br />
                        <p>1 - Clique no campo adicionar</p>
                        <p>2 - Insira seu peso, idade e sexo</p>
                        <p>3 - Insira a hora de início e fim</p>
                        <p>4 - Escolha o tipo de exercício</p>
                        <p>5 - Clique no seu esforço</p>
                        <p>6 - Clique em Salvar</p>
                    </ContentStep>
                }
                {step === 2 &&
                    <ContentStepTwo>
                        <h2>SEXO</h2>
                        <div>
                            <label >
                                <input
                                    type="radio"
                                    value="Masculino"
                                    checked={sex === "Masculino"}
                                    onClick={e => setSex(e.target.value)} />Masculino
                            </label>
                            <label >
                                <input
                                    type="radio"
                                    value="Feminino"
                                    checked={sex === "Feminino"}
                                    onClick={e => setSex(e.target.value)} />Feminino
                            </label>
                        </div>
                        <div>
                            <h2>PESO</h2>
                            <h2>IDADE</h2>
                        </div>
                        <div>
                            <label >
                                <input
                                    type="number"
                                    value={weight}
                                    onChange={e => setWeight(e.target.value)} />Kg
                            </label>

                            <label >
                                <input
                                    type="number"
                                    value={age}
                                    onChange={e => setAge(e.target.value)} />Anos
                            </label>
                        </div>
                    </ContentStepTwo>
                }
                {step === 3 &&
                    <ContentStepThree>
                        <h2>PERÍODO</h2>
                        <input value={data} onChange={e => setData(e.target.value)} type="date" />
                        <p>SELECIONE HORA DE INÍCIO E FIM</p>
                        <input value={hour[0]} onChange={e => setHour([e.target.value, hour[1]])} type="time" />
                        <input value={hour[1]} onChange={e => setHour([hour[0], e.target.value])} type="time" />
                    </ContentStepThree>
                }
                {step === 4 &&
                    <ContentStepFour>
                        <h2>TIPO DE EXERCÍCIO</h2>
                        <br />
                        <label >
                            <input
                                name="ExerciseType"
                                type="radio"
                                value="Caminhada"
                                checked={type === "Caminhada"}
                                onClick={e => setType(e.target.value)} /> Caminhada
                        </label>
                        <label >
                            <input
                                name="ExerciseType"
                                type="radio"
                                value="Corrida"
                                checked={type === "Corrida"}
                                onClick={e => setType(e.target.value)} /> Corrida
                        </label>
                        <label >
                            <input
                                name="ExerciseType"
                                type="radio"
                                value="Bicicleta"
                                checked={type === "Bicicleta"}
                                onClick={e => setType(e.target.value)} /> Bicicleta
                        </label>
                        <label >
                            <input
                                name="ExerciseType"
                                type="radio"
                                value="Fitness"
                                checked={type === "Fitness"}
                                onClick={e => setType(e.target.value)} /> Fitness
                        </label>
                    </ContentStepFour>
                }
                {
                    step === 5 &&
                    <ContentStepFive>
                        <h2>ESFORÇO</h2>
                        <br />
                        <label >
                            Baixo <input
                                name="ExerciseWeight"
                                type="radio"
                                value="Baixo"
                                checked={exerciseWeight === "Baixo"}
                                onClick={e => setExerciseWeight(e.target.value)} />
                        </label>
                        <label >
                            Médio <input
                                name="ExerciseWeight"
                                type="radio"
                                value="Médio"
                                checked={exerciseWeight === "Médio"}
                                onClick={e => setExerciseWeight(e.target.value)} />
                        </label>
                        <label >
                            Alto <input
                                name="ExerciseWeight"
                                type="radio"
                                value="Alto"
                                checked={exerciseWeight === "Alto"}
                                onClick={e => setExerciseWeight(e.target.value)} />
                        </label>
                    </ContentStepFive>
                }
                {step === 6 &&
                    <ContentStepSix>
                        <h3>{formaterString(data)}</h3>
                        <p>Período: <b>{hour[0]} - {hour[1]}</b></p>
                        <p>Tipo: <b>{type}</b></p>
                        <p>Esforço: <b>{weight}</b></p>
                        <p>Você percorreu:</p>
                        <div className="footer">
                            <button onClick={() => window.location.reload()}>DELETAR</button>
                            <button onClick={() => {
                                setStep(2);
                                setTextButton(["PRÓXIMO", "VOLTAR"]);
                            }}>ALTERAR</button>
                        </div>
                    </ContentStepSix>
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
            <ToastContainer />
        </>
    )
}