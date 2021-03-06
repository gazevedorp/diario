import React, {
    useState,
    useEffect
} from 'react';
import Router from 'next/router';

import { useServiceState } from '../services/serviceState';
import { parseISO, format, addSeconds } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import api from '../services/api';

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

export default function DiarioDor(props) {

    const { painSelected, setPainSelected } = useServiceState();
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
    const [newId, setNewId] = useState("")

    const [modalTrigger, setModalTrigger] = useState(false);
    const [modalDrug, setModalDrug] = useState(false);

    const ChangeStepContinue = async () => {
        switch (step) {
            case 1:
                setTextButton(["PR??XIMO", "VOLTAR"]);
                setStep(2);
                break;
            case 2:
                if (hour[0] && hour[1])
                    setStep(3);
                else
                    toast.warning("Informe a hora de in??cio e fim!")
                break;
            case 3:
                if (option1 !== 0 || option2 !== 0 || option3 !== 0 || option4 !== 0 || option5 !== 0 || option6 !== 0)
                    setStep(4);
                else
                    toast.warning("Voc?? precisa selecionar pelo menos um local!")
                break;
            case 4:
                if (symptom.length > 0)
                    setStep(5);
                else
                    toast.warning("Voc?? precisa selecionar pelo menos um sintoma!")
                break;
            case 5:
                if (trigger === "") {
                    toast.warning("Voc?? deve informar se houve algum desencadeante!")
                }
                else if (drug === "") {
                    toast.warning("Voc?? deve informar se tomou algum medicamento na crise!")
                }
                else if (result === "") {
                    toast.warning("Voc?? deve informar qual foi o resultado!")
                }
                else {
                    console.log(data)
                    console.log(hour[0])
                    console.log(hour[1])

                    var data_inicio = `${data} ${hour[0]}:00`
                    var data_fim = `${data} ${hour[1]}:00`

                    try {
                        if (!newId) {
                            const { data } = await api.post('/dor', {
                                date: data_inicio,
                                start_time: data_inicio,
                                end_time: data_fim,
                                config: {
                                    date: data_inicio,
                                    pain_location: {
                                        lateral_direito: option1,
                                        lateral_esquerdo: option2,
                                        testa_topo_cranio: option3,
                                        frontal_nuca: option4,
                                        frontal_atras_olho: option5,
                                        posterior_cabeca: option6
                                    },
                                    symptoms: {
                                        esforco_piora: symptom.filter(item => item === "Esfor??o piora").length > 0 ? true : false,
                                        peso_aperto: symptom.filter(item => item === "Peso/aperto").length > 0 ? true : false,
                                        latejante: symptom.filter(item => item === "Latejante").length > 0 ? true : false,
                                        nauseas: symptom.filter(item => item === "N??useas").length > 0 ? true : false,
                                        vomito: symptom.filter(item => item === "V??mito").length > 0 ? true : false,
                                        luz_piora: symptom.filter(item => item === "Luz piora").length > 0 ? true : false,
                                        barulho_piora: symptom.filter(item => item === "Barulho piora").length > 0 ? true : false,
                                        aura: symptom.filter(item => item === "Aura").length > 0 ? true : false,
                                        menstruacao: symptom.filter(item => item === "Menstrua????o").length > 0 ? true : false,
                                    },
                                    triggers: trigger && triggerEffect !== "" ? triggerEffect : trigger,
                                    medicine_in_crisis: drug && drugName !== "" ? drugName : drug,
                                    result: result,
                                    origin: "pwa"
                                }
                            }
                            );
                            if (data) {
                                setNewId(data.data.id)
                                toast.success("Seu registro de dor foi adicionado com sucesso!");
                                console.log(data)
                            }
                        }
                        else {
                            const { data } = await api.put(`/dor/${newId}`, {
                                date: data_inicio,
                                start_time: data_inicio,
                                end_time: data_fim,
                                config: {
                                    date: data_inicio,
                                    pain_location: {
                                        lateral_direito: option1,
                                        lateral_esquerdo: option2,
                                        testa_topo_cranio: option3,
                                        frontal_nuca: option4,
                                        frontal_atras_olho: option5,
                                        posterior_cabeca: option6
                                    },
                                    symptoms: {
                                        esforco_piora: symptom.filter(item => item === "Esfor??o piora").length > 0 ? true : false,
                                        peso_aperto: symptom.filter(item => item === "Peso/aperto").length > 0 ? true : false,
                                        latejante: symptom.filter(item => item === "Latejante").length > 0 ? true : false,
                                        nauseas: symptom.filter(item => item === "N??useas").length > 0 ? true : false,
                                        vomito: symptom.filter(item => item === "V??mito").length > 0 ? true : false,
                                        luz_piora: symptom.filter(item => item === "Luz piora").length > 0 ? true : false,
                                        barulho_piora: symptom.filter(item => item === "Barulho piora").length > 0 ? true : false,
                                        aura: symptom.filter(item => item === "Aura").length > 0 ? true : false,
                                        menstruacao: symptom.filter(item => item === "Menstrua????o").length > 0 ? true : false,
                                    },
                                    triggers: trigger && triggerEffect !== "" ? triggerEffect : trigger,
                                    medicine_in_crisis: drug && drugName !== "" ? drugName : drug,
                                    result: result,
                                    origin: "pwa"
                                }
                            }
                            );
                            if (data) {
                                console.log(data)
                                toast.success("Seu registro de dor foi alterado com sucesso!");
                            }
                        }
                    }
                    catch (e) {
                        if (!e.response) {
                            console.log(e)
                            const error = 'Verifique sua conex??o com a internet!'
                            return Promise.reject(error)
                        }
                        else {
                            const { data } = e.response
                            if (data.message) {
                                console.log(data.message)
                                toast.error(data.message);
                            }
                        }
                    }

                    setStep(6);
                    setTextButton(["ADICIONAR"]);
                }
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
                setTextButton(["PR??XIMO", "VOLTAR"]);
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

    const handleDelete = async () => {
        try {
            const { data } = await api.delete(`/dor/${newId}`);
            if (data.status === "success") {
                window.location.reload();
            }
        }
        catch (e) {
            if (!e.response) {
                const error = 'Verifique sua conex??o com a internet!'
                return Promise.reject(error)
            }
            else {
                const { data } = e.response
                if (data.message) {
                    console.log(data.message)
                    toast.error("Tente novamente mais tarde!");
                }
            }
        }
    }

    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }

    const onInit = () => {
        if (painSelected.length !== 0) {
            console.log(painSelected)

            var start_hour = addZero(new Date(painSelected.start_time).getUTCHours());
            var start_minute = addZero(new Date(painSelected.start_time).getUTCMinutes());
            var end_hour = addZero(new Date(painSelected.end_time).getUTCHours());
            var end_minute = addZero(new Date(painSelected.end_time).getUTCMinutes());

            setData(format(new Date(painSelected.start_time), 'yyyy-MM-dd'));
            setHour([`${start_hour}:${start_minute}`, `${end_hour}:${end_minute}`]);
            setOption1(painSelected.config.pain_location.lateral_direito);
            setOption2(painSelected.config.pain_location.lateral_esquerdo);
            setOption3(painSelected.config.pain_location.testa_topo_cranio);
            setOption4(painSelected.config.pain_location.frontal_nuca);
            setOption5(painSelected.config.pain_location.frontal_atras_olho);
            setOption6(painSelected.config.pain_location.posterior_cabeca);
            setTrigger(painSelected.config.triggers === true ? true : painSelected.config.triggers === false ? false : true);
            setTriggerEffect(painSelected.config.triggers === true ? "" : painSelected.config.triggers === false ? "" : painSelected.config.triggers);
            setDrug(painSelected.config.medicine_in_crisis === true ? true : painSelected.config.medicine_in_crisis === false ? false : true);
            setDrugName(painSelected.config.medicine_in_crisis === true ? "" : painSelected.config.medicine_in_crisis === false ? "" : painSelected.config.medicine_in_crisis);
            setResult(painSelected.config.result);
            setNewId(painSelected.id)

            painSelected.config.symptoms.aura === true ? symptom.push("Aura") : {}
            painSelected.config.symptoms.barulho_piora === true ? symptom.push("Barulho piora") : {}
            painSelected.config.symptoms.esforco_piora === true ? symptom.push("Esfor??o piora") : {}
            painSelected.config.symptoms.latejante === true ? symptom.push("Latejante") : {}
            painSelected.config.symptoms.luz_piora === true ? symptom.push("Luz piora") : {}
            painSelected.config.symptoms.menstruacao === true ? symptom.push("Menstrua????o") : {}
            painSelected.config.symptoms.nauseas === true ? symptom.push("N??useas") : {}
            painSelected.config.symptoms.peso_aperto === true ? symptom.push("Peso aperto") : {}
            painSelected.config.symptoms.vomito === true ? symptom.push("V??mito") : {}

            setStep(6);
            setTextButton(["ADICIONAR"]);
        }
    }

    const intensityColor = (value) => {
        if (value === 1) {
            return <div style={{ width: 8, height: 8, backgroundColor: "green", borderRadius: 30 }} />
        }
        else if (value === 2) {
            return <div style={{ width: 8, height: 8, backgroundColor: "darkorange", borderRadius: 30 }} />
        }
        else {
            return <div style={{ width: 8, height: 8, backgroundColor: "red", borderRadius: 30 }} />
        }
    }

    useEffect(() => {
        onInit();
    }, [])

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
                        <h4>Para cadastrar sua Dor ?? simples, siga os passos:</h4>
                        <br />
                        <p>1 - Clique no campo adicionar</p>
                        <p>2 - Insira a hora de in??cio e fim</p>
                        <p>3 - Escolha a localiza????o da dor e insira o grau da dor</p>
                        <p>4 - Clique nos sintomas</p>
                        <p>5 - Quais os fatores desencadeantes</p>
                        <p>6 - Tem alguma medica????o na crise</p>
                        <p>7 - Seus resultados</p>
                        <p>8 - Clique em Salvar</p>
                    </ContentStep>
                }
                {step === 2 &&
                    <ContentStepTwo>
                        <h2>PER??ODO</h2>
                        <br />
                        <input value={data} onChange={e => setData(e.target.value)} type="date" />
                        <p>SELECIONE HORA DE IN??CIO E FIM</p>
                        <input value={hour[0]} onChange={e => setHour([e.target.value, hour[1]])} type="time" />
                        <input value={hour[1]} onChange={e => setHour([hour[0], e.target.value])} type="time" />
                    </ContentStepTwo>
                }
                {step === 3 &&
                    <ContentStepThree>
                        <h2>{formaterString(data)}</h2>
                        <h2>LOCALIZA????O DA DOR</h2>
                        <h5>Clique no c??rculo</h5>
                        <br />
                        <div>
                            <Option value={option1 === 1 && option1} onClick={() => setOption1(1)}>
                                {option1 === 1 ? <img src='/raio.png' /> : "1"}
                            </Option>
                            <Option value={option1 === 2 && option1} onClick={() => setOption1(2)}>
                                {option1 === 2 ? <img src='/raio.png' /> : "2"}
                            </Option>
                            <Option value={option1 === 3 && option1} onClick={() => setOption1(3)}>
                                {option1 === 3 ? <img src='/raio.png' /> : "3"}
                            </Option>
                            <p>LATERAL DIREITO</p>
                        </div>
                        <div>
                            <Option value={option2 === 1 && option2} onClick={() => setOption2(1)}>
                                {option2 === 1 ? <img src='/raio.png' /> : "1"}
                            </Option>
                            <Option value={option2 === 2 && option2} onClick={() => setOption2(2)}>
                                {option2 === 2 ? <img src='/raio.png' /> : "2"}
                            </Option>
                            <Option value={option2 === 3 && option2} onClick={() => setOption2(3)}>
                                {option2 === 3 ? <img src='/raio.png' /> : "3"}
                            </Option>
                            <p>LATERAL ESQUERDO</p>
                        </div>
                        <div>
                            <Option value={option3 === 1 && option3} onClick={() => setOption3(1)}>
                                {option3 === 1 ? <img src='/raio.png' /> : "1"}
                            </Option>
                            <Option value={option3 === 2 && option3} onClick={() => setOption3(2)}>
                                {option3 === 2 ? <img src='/raio.png' /> : "2"}
                            </Option>
                            <Option value={option3 === 3 && option3} onClick={() => setOption3(3)}>
                                {option3 === 3 ? <img src='/raio.png' /> : "3"}
                            </Option>
                            <p>TESTA E TOPO DO CR??NIO</p>
                        </div>
                        <div>
                            <Option value={option4 === 1 && option4} onClick={() => setOption4(1)}>
                                {option4 === 1 ? <img src='/raio.png' /> : "1"}
                            </Option>
                            <Option value={option4 === 2 && option4} onClick={() => setOption4(2)}>
                                {option4 === 2 ? <img src='/raio.png' /> : "2"}
                            </Option>
                            <Option value={option4 === 3 && option4} onClick={() => setOption4(3)}>
                                {option4 === 3 ? <img src='/raio.png' /> : "3"}
                            </Option>
                            <p>FRONTAL NUCA</p>
                        </div>
                        <div>
                            <Option value={option5 === 1 && option5} onClick={() => setOption5(1)}>
                                {option5 === 1 ? <img src='/raio.png' /> : "1"}
                            </Option>
                            <Option value={option5 === 2 && option5} onClick={() => setOption5(2)}>
                                {option5 === 2 ? <img src='/raio.png' /> : "2"}
                            </Option>
                            <Option value={option5 === 3 && option5} onClick={() => setOption5(3)}>
                                {option5 === 3 ? <img src='/raio.png' /> : "3"}
                            </Option>
                            <p>FRONTAL ATR??S DO OLHO</p>
                        </div>
                        <div>
                            <Option value={option6 === 1 && option6} onClick={() => setOption6(1)}>
                                {option6 === 1 ? <img src='/raio.png' /> : "1"}
                            </Option>
                            <Option value={option6 === 2 && option6} onClick={() => setOption6(2)}>
                                {option6 === 2 ? <img src='/raio.png' /> : "2"}
                            </Option>
                            <Option value={option6 === 3 && option6} onClick={() => setOption6(3)}>
                                {option6 === 3 ? <img src='/raio.png' /> : "3"}
                            </Option>
                            <p>PARTE POSTERIOR DA CABE??A</p>
                        </div>
                        <br />
                        <p>1 - Dor Fraca (N??o impede atividades)</p>
                        <p>2 - Dor Moderada (Interfere, mas n??o impede)</p>
                        <p>3 - Dor Forte (Impede atividades)</p>
                    </ContentStepThree>
                }
                {step === 4 &&
                    <ContentStepFour>
                        <h2>SINTOMAS</h2>
                        <h5>Clique no c??rculo</h5>
                        <label >
                            <input
                                type="checkbox"
                                value="Esfor??o piora"
                                checked={handleCheck("Esfor??o piora")}
                                onChange={e => handleClick(e)} /> Esfor??o piora
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
                                value="N??useas"
                                checked={handleCheck("N??useas")}
                                onChange={e => handleClick(e)} /> N??useas
                        </label>
                        <label >
                            <input
                                type="checkbox"
                                value="V??mito"
                                checked={handleCheck("V??mito")}
                                onChange={e => handleClick(e)} /> V??mito
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
                                value="Menstrua????o"
                                checked={handleCheck("Menstrua????o")}
                                onChange={e => handleClick(e)} /> Menstrua????o
                        </label>
                    </ContentStepFour>
                }
                {step === 5 &&
                    <ContentStepFive>
                        <h3>DESENCADEANTES</h3>
                        <h5>Clique no c??rculo</h5>
                        <div>
                            <label >
                                <input
                                    type="radio"
                                    checked={trigger === false}
                                    onClick={() => setTrigger(false)} />N??o
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
                                    onClick={() => setDrug(false)} />N??o
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
                                    value="M??dio"
                                    checked={result === "M??dio"}
                                    onClick={e => setResult(e.target.value)} />M??dio
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
                        <p>Localiza????o: </p>
                        {
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div style={{marginLeft: 80}}>
                                    {option1 !== 0 ?
                                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                            {intensityColor(option1)}
                                            <p>LATERAL DIREITO</p>
                                        </div>
                                        : null}
                                </div>
                                <div style={{marginLeft: 80}}>
                                    {option2 !== 0 ?
                                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                            {intensityColor(option2)}
                                            <p>LATERAL ESQUERDO</p>
                                        </div>
                                        : null}
                                </div>
                                <div style={{marginLeft: 80}}>
                                    {option3 !== 0 ?
                                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                            {intensityColor(option3)}
                                            <p>TESTA E TOPO DO CR??NIO</p>
                                        </div>
                                        : null}
                                </div>
                                <div style={{marginLeft: 80}}>
                                    {option4 !== 0 ?
                                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                            {intensityColor(option4)}
                                            <p>FRONTAL NUCA</p>
                                        </div>
                                        : null}
                                </div>
                                <div style={{marginLeft: 80}}>
                                    {option5 !== 0 ?
                                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                            {intensityColor(option5)}
                                            <p>FRONTAL ATR??S DO OLHO</p>
                                        </div>
                                        : null}
                                </div>
                                <div style={{marginLeft: 80}}>
                                    {option6 !== 0 ?
                                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                            {intensityColor(option6)}
                                            <p>PARTE POSTERIOR DA CABE??A</p>
                                        </div>
                                        : null}
                                </div>
                            </div>
                        }
                        <p style={{margin: 0, padding: 0}}>Sintomas:</p>
                        {
                            symptom.map(item =>
                                <div  key={item}>
                                    <p style={{marginLeft: 80}}>{item}</p>
                                </div>
                            )
                        }
                        <p style={{marginTop: 5}}>Desencadeantes: <b>{trigger && triggerEffect ? triggerEffect : trigger ? "Sim" : "N??o"}</b></p>
                        <p>Medicamentos na crise: <b>{drug && drugName ? drugName : drug ? "Sim" : "N??o"}</b></p>
                        <p>Resultado: <b>{result}</b></p>
                        <div className="footer">
                            <button onClick={() => {
                                var answer = window.confirm("Deseja realmente remover esse registro?");
                                if (answer) {
                                    handleDelete();
                                }
                                else {
                                    //some code
                                }
                            }}>DELETAR</button>
                            <button onClick={() => {
                                setStep(2);
                                setTextButton(["PR??XIMO", "VOLTAR"]);
                            }}>ALTERAR</button>
                        </div>
                    </ContentStepSix>
                }
                <Buttons marginBottom={!textButton[1]}>
                    <Button
                        backgroundColor="#7a0025"
                        color="white"
                        onClick={() => step < 6 ? ChangeStepContinue() : window.location.reload()}>
                        {textButton[0]}
                    </Button>
                    {textButton[1] &&
                        <Button
                            backgroundColor="white"
                            color="black"
                            onClick={ChangeStepBack}>
                            {textButton[1]}
                        </Button>
                    }
                </Buttons>
            </Container >
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