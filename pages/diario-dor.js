import React, {
    useState,
    useEffect
} from 'react';
import Router from 'next/router';

import { parseISO, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
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
    ContentStepFour,
    ContentStepFive,
    ContentStepSix,
    Option,
    Buttons,
    Button,
    ViewModal,
    ViewModalButtons,
    ModalButton
} from '../styles/diario-dor'

const customStyles = {
    content: {
        top: "30%",
        left: 50,
        right: 50,
        height: 200
    },
};

export default function DiarioDor() {
    const [step, setStep] = useState(1);
    const [textButton, setTextButton] = useState(["ADICIONAR", "CANCELAR"]);
    const [data, setData] = useState(format(new Date(), 'yyyy-MM-dd'));
    const [hour, setHour] = useState(["", ""]);
    const [option1, setOption1] = useState(0);
    const [option2, setOption2] = useState(0);
    const [option3, setOption3] = useState(0);
    const [option4, setOption4] = useState(0);
    const [option5, setOption5] = useState(0);
    const [option6, setOption6] = useState(0);
    const [symptom, setSymptom] = useState([]);
    const [trigger, setTrigger] = useState("");
    const [triggerEffect, setTriggerEffect] = useState("");
    const [drug, setDrug] = useState("");
    const [drugName, setDrugName] = useState("");
    const [result, setResult] = useState("");

    const [modalTrigger, setModalTrigger] = useState(false);
    const [modalDrug, setModalDrug] = useState(false);

    const ChangeStepContinue = () => {
        switch (step) {
            case 1:
                setTextButton(["PRÓXIMO", "VOLTAR"]);
                setStep(2);
                break;
            case 2:
                if (hour[0] && hour[1])
                    setStep(3);
                else
                    toast.warning("Informe a hora de início e fim!")
                break;
            case 3:
                if (option1 !== 0 || option2 !== 0 || option3 !== 0 || option4 !== 0 || option5 !== 0 || option6 !== 0)
                    setStep(4);
                else
                    toast.warning("Você precisa selecionar pelo menos um local!")
                break;
            case 4:
                if (symptom.length > 0)
                    setStep(5);
                else
                    toast.warning("Você precisa selecionar pelo menos um sintoma!")
                break;
            case 5:
                if (trigger === "") {
                    toast.warning("Você deve informar se houve algum desencadeante!")
                }
                else if (drug === "") {
                    toast.warning("Você deve informar se tomou algum medicamento na crise!")
                }
                else if (result === "") {
                    toast.warning("Você deve informar qual foi o resultado!")
                }
                else {
                    setStep(6);
                    setTextButton(["SALVAR", "VOLTAR"]);
                }
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
                setTextButton(["PRÓXIMO", "VOLTAR"]);
                break;
            case 6:
                setStep(5);
                setTextButton(["SALVAR", "VOLTAR"]);
                break;
        }
    }

    const formaterString = value => {
        var temp = parseISO(value);
        var temp1 = format(temp, 'dd', { locale: ptBR });
        var temp2 = format(temp, 'MMMM', { locale: ptBR });
        temp2 = temp2.substring(0, 3).toUpperCase();
        return `${temp1} ${temp2}`
    }

    const handleClick = e => {
        var temp = symptom.filter(item => item === e.target.value)
        console.log(temp, e.target.value)
        if (temp.length === 0) {
            console.log("if")
            setSymptom([...symptom, e.target.value])
        }
        else {
            var SymptonTemp = symptom.filter(item => item !== e.target.value)
            setSymptom(SymptonTemp)
        }
    }

    const handleCheck = value => {
        var temp = symptom.filter(item => item === value)
        console.log(temp)
        if (temp.length > 0) {
            return true
        }
        else {
            return false
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
                        <h5>Clique no círculo</h5>
                        <br />
                        <div>
                            <Option value={option1 === 1 && option1} onClick={() => setOption1(1)}>1</Option>
                            <Option value={option1 === 2 && option1} onClick={() => setOption1(2)}>2</Option>
                            <Option value={option1 === 3 && option1} onClick={() => setOption1(3)}>3</Option>
                            <p>LATERAL DIREITO</p>
                        </div>
                        <div>
                            <Option value={option2 === 1 && option2} onClick={() => setOption2(1)}>1</Option>
                            <Option value={option2 === 2 && option2} onClick={() => setOption2(2)}>2</Option>
                            <Option value={option2 === 3 && option2} onClick={() => setOption2(3)}>3</Option>
                            <p>LATERAL ESQUERDO</p>
                        </div>
                        <div>
                            <Option value={option3 === 1 && option3} onClick={() => setOption3(1)}>1</Option>
                            <Option value={option3 === 2 && option3} onClick={() => setOption3(2)}>2</Option>
                            <Option value={option3 === 3 && option3} onClick={() => setOption3(3)}>3</Option>
                            <p>TESTA E TOPO DO CRÂNIO</p>
                        </div>
                        <div>
                            <Option value={option4 === 1 && option4} onClick={() => setOption4(1)}>1</Option>
                            <Option value={option4 === 2 && option4} onClick={() => setOption4(2)}>2</Option>
                            <Option value={option4 === 3 && option4} onClick={() => setOption5(3)}>3</Option>
                            <p>FRONTAL NUCA</p>
                        </div>
                        <div>
                            <Option value={option5 === 1 && option5} onClick={() => setOption5(1)}>1</Option>
                            <Option value={option5 === 2 && option5} onClick={() => setOption5(2)}>2</Option>
                            <Option value={option5 === 3 && option5} onClick={() => setOption5(3)}>3</Option>
                            <p>FRONTAL ATRÁS DO OLHO</p>
                        </div>
                        <div>
                            <Option value={option6 === 1 && option6} onClick={() => setOption6(1)}>1</Option>
                            <Option value={option6 === 2 && option6} onClick={() => setOption6(2)}>2</Option>
                            <Option value={option6 === 3 && option6} onClick={() => setOption6(3)}>3</Option>
                            <p>PARTE POSTERIOR DA CABEÇA</p>
                        </div>
                        <br />
                        <p>1 - Dor Fraca (Não impede atividades)</p>
                        <p>2 - Dor Moderada (Interfere, mas não impede)</p>
                        <p>3 - Dor Forte (Impede atividades)</p>
                    </ContentStepThree>
                }
                {step === 4 &&
                    <ContentStepFour>
                        <h2>SINTOMAS</h2>
                        <h5>Clique no círculo</h5>
                        <label >
                            <input
                                type="checkbox"
                                value="Esforço piora"
                                checked={handleCheck("Esforço piora")}
                                onChange={e => handleClick(e)} /> Esforço piora
                        </label>
                        <label >
                            <input
                                type="checkbox"
                                value="Peso/aperto"
                                checked={handleCheck("Peso/aperto")}
                                onChange={e => handleClick(e)} /> Peso/aperto
                        </label>
                        <label >
                            <input
                                type="checkbox"
                                value="Latejante"
                                checked={handleCheck("Latejante")}
                                onChange={e => handleClick(e)} /> Latejante
                        </label>
                        <label >
                            <input
                                type="checkbox"
                                value="Náuseas"
                                checked={handleCheck("Náuseas")}
                                onChange={e => handleClick(e)} /> Náuseas
                        </label>
                        <label >
                            <input
                                type="checkbox"
                                value="Vômito"
                                checked={handleCheck("Vômito")}
                                onChange={e => handleClick(e)} /> Vômito
                        </label>
                        <label >
                            <input
                                type="checkbox"
                                value="Luz piora"
                                checked={handleCheck("Luz piora")}
                                onChange={e => handleClick(e)} /> Luz piora
                        </label>
                        <label >
                            <input
                                type="checkbox"
                                value="Barulho piora"
                                checked={handleCheck("Barulho piora")}
                                onChange={e => handleClick(e)} /> Barulho piora
                        </label>
                        <label >
                            <input
                                type="checkbox"
                                value="Aura"
                                checked={handleCheck("Aura")}
                                onChange={e => handleClick(e)} /> Aura
                        </label>
                        <label >
                            <input
                                type="checkbox"
                                value="Menstruação"
                                checked={handleCheck("Menstruação")}
                                onChange={e => handleClick(e)} /> Menstruação
                        </label>
                    </ContentStepFour>
                }
                {step === 5 &&
                    <ContentStepFive>
                        <h3>DESENCADEANTES</h3>
                        <h5>Clique no círculo</h5>
                        <div>
                            <label >
                                <input
                                    type="radio"
                                    checked={trigger === false}
                                    onClick={() => setTrigger(false)} />Não
                            </label>
                            <label >
                                <input
                                    type="radio"
                                    checked={trigger}
                                    onClick={() => {
                                        setTrigger(true)
                                        setModalTrigger(true);
                                    }} />Sim
                            </label>
                        </div>
                        <h3>MEDICAMENTO NA CRISE</h3>
                        <div>
                            <label >
                                <input
                                    type="radio"
                                    checked={drug === false}
                                    onClick={() => setDrug(false)} />Não
                            </label>
                            <label >
                                <input
                                    type="radio"
                                    value="Feminino"
                                    checked={drug}
                                    onClick={() => {
                                        setDrug(true)
                                        setModalDrug(true)
                                    }} />Sim
                            </label>
                        </div>
                        <h3>RESULTADO</h3>
                        <div>
                            <label >
                                <input
                                    type="radio"
                                    value="Ruim"
                                    checked={result === "Ruim"}
                                    onClick={e => setResult(e.target.value)} />Ruim
                            </label>
                            <label >
                                <input
                                    type="radio"
                                    value="Médio"
                                    checked={result === "Médio"}
                                    onClick={e => setResult(e.target.value)} />Médio
                            </label>

                            <label >
                                <input
                                    type="radio"
                                    value="Bom"
                                    checked={result === "Bom"}
                                    onClick={e => setResult(e.target.value)} />Bom
                            </label>
                        </div>
                    </ContentStepFive>
                }
                {step === 6 &&
                    <ContentStepSix>
                        <h3>{formaterString(data)}</h3>
                        <p>Periodo: <b>{hour[0]} - {hour[1]}</b></p>
                        <p>Localização: </p>
                        {
                            <div>
                                <p>{option1 !== 0 ? "LATERAL DIREITO" : null}</p>
                                <p>{option2 !== 0 ? "LATERAL ESQUERDO" : null}</p>
                                <p>{option3 !== 0 ? "TESTA E TOPO DO CRÂNIO" : null}</p>
                                <p>{option4 !== 0 ? "FRONTAL NUCA" : null}</p>
                                <p>{option5 !== 0 ? "FRONTAL ATRÁS DO OLHO" : null}</p>
                                <p>{option6 !== 0 ? "PARTE POSTERIOR DA CABEÇA" : null}</p>
                            </div>
                        }
                        <p>Sintomas:</p>
                        {
                            symptom.map(item =>
                                <div key={item}>
                                    <p>{item}</p>
                                </div>
                            )
                        }
                        <p>Desencadeantes: <b>{ trigger && triggerEffect ? triggerEffect : trigger ? "Sim" : "Não"}</b></p>
                        <p>Medicamentos na crise: <b>{drug && drugName ? drugName : drug ? "Sim" : "Não"}</b></p>
                        <p>Resultado: <b>{result}</b></p>
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
            <Modal
                isOpen={modalTrigger}
                onRequestClose={() => setModalTrigger(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <ViewModal>
                    <h3>Informe o efeito desencadeante</h3>
                    <input placeholder="Efeito desencadeante" value={triggerEffect} onChange={e => setTriggerEffect(e.target.value)} type="text" />
                    <ViewModalButtons>
                        <ModalButton onClick={() => {
                            setTriggerEffect("");
                            setModalTrigger(false);
                        }}>Fechar</ModalButton>
                        <ModalButton border onClick={() => {
                            if (triggerEffect !== "") {
                                setModalTrigger(false);
                            }
                            else {
                                toast.warning("Informe o efeito desencadeante!")
                            }
                        }}>Salvar</ModalButton>
                    </ViewModalButtons>
                </ViewModal>
            </Modal>
            <Modal
                isOpen={modalDrug}
                onRequestClose={() => setModalDrug(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <ViewModal>
                    <h3>Informe o medicamento utilizado na crise</h3>
                    <input placeholder="Medicamento" value={drugName} onChange={e => setDrugName(e.target.value)} type="text" />
                    <ViewModalButtons>
                        <ModalButton onClick={() => {
                            setDrugName("");
                            setModalDrug(false);
                        }}>Fechar</ModalButton>
                        <ModalButton border onClick={() => {
                            if (drugName !== "") {
                                setModalDrug(false);
                            }
                            else {
                                toast.warning("Informe o nome do medicamento!")
                            }
                        }}>Salvar</ModalButton>
                    </ViewModalButtons>
                </ViewModal>
            </Modal>
            <ToastContainer />
        </>
    )
}