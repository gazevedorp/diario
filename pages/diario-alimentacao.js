import React, {
    useState,
    useEffect
} from 'react';
import Router from 'next/router';

import api from '../services/api'
import { parseISO, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Modal from 'react-modal';
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
    ViewModal,
    Buttons,
    Button
} from '../styles/diario-alimentacao'

const customStyles = {
    content: {
        top: 50,
        left: 50,
        right: 50,
        bottom: 50,
    },
};

export default function DiarioAlimentacao() {
    const [step, setStep] = useState(1);
    const [textButton, setTextButton] = useState(["ADICIONAR", "CANCELAR"]);
    const [type, setType] = useState("");
    const [data, setData] = useState(format(new Date(), 'yyyy-MM-dd'));
    const [hour, setHour] = useState("");
    const [inputSearch, setInputSearch] = useState("");
    const [modalIsOpen, setIsOpen] = useState(false);
    const [foods, setFoods] = useState();
    const [qty, setQty] = useState("");
    const [foodSelected, setFoodSelected] = useState("");
    const [foodRegister, setFoodResgister] = useState([]);
    const [unit, setUnit] = useState("")

    useEffect(() => {
        searchFoods();
    }, [inputSearch])

    useEffect(() => {
        setFoodResgister(foodRegister)
    }, [foodRegister])

    const medidas = [
        {
            label: 'gramas',
            value: 1,
            format: null
        },
        {
            label: ' colher de chá',
            value: 2,
            format: null
        },
        {
            label: 'colher de sopa',
            value: 3,
            format: null
        },
        {
            label: 'colher de sobremesa',
            value: 4,
            format: null
        },
        {
            label: 'ml',
            value: 5,
            format: true
        },
        {
            label: 'copo',
            value: 6,
            format: true
        },
        {
            label: 'xicara',
            value: 7,
            format: true
        }
    ]

    const convertUnitToString = (unit) => {
        return medidas.filter(u => u.value == unit)[0].label
    }

    const searchFoods = async () => {
        const { data } = await api.get(`food-search/?term=${inputSearch}`);
        console.log(data)
        setFoods(data)
    }

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
                console.log(type);
                if (type)
                    setStep(3);
                else
                    toast.warning("Por favor escolha um tipo de refeição!")
                break;
            case 3:
                console.log(data, hour);
                if (data && hour)
                    setStep(4);
                else
                    toast.warning("Informe a hora de início!")
                break;
            case 4:
                if (foodRegister.length > 0) {
                    setStep(5);
                    setTextButton(["SALVAR", "VOLTAR"]);
                }
                else
                    toast.warning("Insira ao menos um alimento!")
                break;
            case 5:
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
                        ADICIONAR ALIMENTAÇÃO
                    </HeaderPageTitle>
                    <HeaderPageImage src="/alimentacao.png" />
                </HeaderPage>
                {step === 1 &&
                    <ContentStep>
                        <h4>Para cadastrar sua alimentação é simples, siga os passos:</h4>
                        <br />
                        <p>1 - Clique no campo adicionar</p>
                        <p>2 - Escolha o tipo de refeição</p>
                        <p>3 - Insira o dia</p>
                        <p>4 - Insira os alimentos que ingeriu</p>
                        <p>5 - Insira a quantidade</p>
                        <p>6 - Clique em Salvar</p>
                    </ContentStep>
                }
                {step === 2 &&
                    <ContentStepTwo>
                        <h2>TIPO DE REFEIÇÃO</h2>
                        <br />
                        <label >
                            <input
                                name="FoodType"
                                type="radio"
                                value="Café da manhã"
                                checked={type === "Café da manhã"}
                                onClick={e => setType(e.target.value)} /> Café da manhã
                        </label>
                        <label >
                            <input
                                name="FoodType"
                                type="radio"
                                value="Almoço"
                                checked={type === "Almoço"}
                                onClick={e => setType(e.target.value)} /> Almoço
                        </label>
                        <label >
                            <input
                                name="FoodType"
                                type="radio"
                                value="Lanche"
                                checked={type === "Lanche"}
                                onClick={e => setType(e.target.value)} /> Lanche
                        </label>
                        <label >
                            <input
                                name="FoodType"
                                type="radio"
                                value="Jantar"
                                checked={type === "Jantar"}
                                onClick={e => setType(e.target.value)} /> Jantar
                        </label>
                        <label >
                            <input
                                name="FoodType"
                                type="radio"
                                value="Ceia"
                                checked={type === "Ceia"}
                                onClick={e => setType(e.target.value)} /> Ceia
                        </label>
                    </ContentStepTwo>
                }
                {step === 3 &&
                    <ContentStepThree>
                        <h2>PERÍODO</h2>
                        <br />
                        <input value={data} onChange={e => setData(e.target.value)} type="date" />
                        <p>SELECIONE HORA DE INÍCIO</p>
                        <input value={hour} onChange={e => setHour(e.target.value)} type="time" />
                    </ContentStepThree>
                }
                {
                    step === 4 &&
                    <ContentStepFour>
                        <h2>ALIMENTOS</h2>
                        <div>
                            <button onClick={() => setIsOpen(true)}>
                                {foodSelected ?
                                    <p style={{ width: 100, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{foodSelected}</p> : "Alimento"}
                            </button>
                            <input value={qty} onChange={e => setQty(e.target.value)} placeholder="Quantidade" type="number" />
                            <select value={unit} onChange={e => setUnit(e.target.value)} >
                                <option value="">Un.</option>
                                {
                                    medidas.map(item =>
                                        <option key={item.label} value={item.label}>{item.label}</option>
                                    )
                                }
                            </select>
                        </div>
                        {
                            foodRegister && foodRegister.map(item =>
                                <div key={item} style={{ padding: 10, paddingBottom: 5, paddingTop: 0, fontSize: 14, display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
                                    <p style={{ width: 200, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{item.foodSelected}</p>
                                    <p>{item.qty}</p>
                                </div>)
                        }
                        <h4 onClick={() => {
                            if (qty, foodSelected, unit) {
                                setFoodResgister([...foodRegister, { foodSelected, qty, unit }]);
                                setQty("");
                                setFoodSelected("");
                                setUnit("");
                            }
                            else {
                                toast.warning("Preencha todos os campos!");
                            }
                        }}>Adicionar</h4>
                    </ContentStepFour>
                }
                {step === 5 &&
                    <ContentStepFive>
                        <h3>{formaterString(data)}</h3>
                        <p>Periodo: <b>{hour}</b></p>
                        <p>Tipo: <b>{type}</b></p>
                        <p>Alimentos:</p>
                        {
                            foodRegister.map(item =>
                                <div key={item} style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
                                    <p>{item.foodSelected} </p>
                                    <p style={{ textAlign: "right" }}>{item.qty} {item.unit}</p>
                                </div>
                            )
                        }
                        <p>Você ingeriu:</p>
                        <div className="footer">
                            <button onClick={() => window.location.reload()}>DELETAR</button>
                            <button onClick={() => {
                                setStep(2);
                                setTextButton(["PRÓXIMO", "VOLTAR"]);
                            }}>ALTERAR</button>
                        </div>
                    </ContentStepFive>
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
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setIsOpen(false)}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <ViewModal>
                        <input value={inputSearch} onChange={e => setInputSearch(e.target.value)} type="text" />
                        {
                            foods &&
                            foods.map(item =>
                                <p key={item.name} onClick={() => {
                                    setFoodSelected(item.name);
                                    setIsOpen(false);
                                    if (item.flag) {
                                        toast.error(`${item.name} Este alimento pode ser um gatilho para causar dores de cabeça. Fique atento e converse sobre este assunto com seu médico e/ou nutricionista.`)
                                    }
                                }
                                }>{item.name}</p>
                            )
                        }
                    </ViewModal>
                </Modal>
            </Container>
            <ToastContainer />
        </>
    )
}