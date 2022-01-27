import React, { useState, useEffect } from 'react';
import Router from 'next/router';

import axios from 'axios';
import { useServiceState } from '../services/serviceState';
import { useUserState } from '../services/userState';

import { format } from 'date-fns';
import MenuButton from '../components/menu-button';
import Menu from '../components/menu';

import Modal from 'react-modal';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import {
    Container,
    Header,
    BackButton,
    BackButtonImage,
    HeaderPage,
    HeaderPageTitle,
    HeaderPageImage,
    DivCalendar,
    DivDescription,
    ButtonModal
} from '../styles/calendario'

export default function Calendario() {

    const { setPainSelected } = useServiceState();
    const { user } = useUserState();
    const [value, onChange] = useState(new Date());
    const [dataValue, setDataValue] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState("")
    const [dataTemp, setDataTemp] = useState([])
    const [dateSelected, setDateSelected] = useState("")
    const [qty, setQty] = useState([])

    const customStyles = {
        content: {
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
        },
    };

    const onInit = async (value1, value2) => {
        console.log(value1)
        axios.get(`https://diariodaenxaqueca-api.k8s.diariodaenxaqueca.com.br/calendar?id=${user.id}&start=${value1}&end=${value2}`)
            .then((data) => {
                console.log(data.data.data)
                setDataValue(data.data.data)
            })
            .catch((error) => console.log(error))
    }

    const handleClick = async (value) => {
        const temp = dataValue[format(value, 'yyyy-MM-dd')]
        if (temp) {
            setDateSelected(value)
            setStartDate(format(value, 'dd/MM/yyyy'))
            setDataTemp(temp)
            setIsOpen(true);
        }
    }

    const getDateRange = (value) => {
        console.log("value: ", value)
        var date = value ? value : new Date();
        console.log("date: ", date)
        var primeiroDia = new Date(date.getFullYear(), date.getMonth(), 1);
        var ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        console.log(format(primeiroDia, 'yyyy-MM-dd'), format(ultimoDia, 'yyyy-MM-dd'))
        onInit(format(primeiroDia, 'yyyy-MM-dd'), format(ultimoDia, 'yyyy-MM-dd'));
    }

    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }

    useEffect(() => {
        console.log(dataTemp)
    }, [dataTemp])

    useEffect(() => {
        getDateRange();
    }, [])

    return (
        <Container>
            <Menu />
            <Header>
                <BackButton onClick={() => Router.push("/homeScreen")}>
                    <BackButtonImage src="/back.png" />
                </BackButton>
                <MenuButton />
            </Header>
            <HeaderPage>
                <HeaderPageTitle>
                    CALENDÁRIO
                </HeaderPageTitle>
                <HeaderPageImage src="/menu-icon-calendar.png" />
            </HeaderPage>
            <DivCalendar>
                <Calendar
                    locale="pt-BR"
                    onClickDay={value => handleClick(value)}
                    onActiveStartDateChange={value => getDateRange(value.activeStartDate)}
                    value={value}
                    showNeighboringMonth={false}
                    tileContent={({ date, view }) => view === 'month' && dataValue[format(date, 'yyyy-MM-dd')] ?
                        <>
                            <div style={{ width: 5, height: 5, backgroundColor: "brown", borderRadius: 30, marginLeft: 25, marginTop: -20, position: "absolute" }} />
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "flex-end", paddingTop: 5, paddingBottom: 5 }}>
                                {dataValue[format(date, 'yyyy-MM-dd')].filter(
                                    result =>
                                        result.config.pain_location.frontal_atras_olho === 1 ||
                                        result.config.pain_location.frontal_nuca === 1 ||
                                        result.config.pain_location.lateral_direito === 1 ||
                                        result.config.pain_location.lateral_esquerdo === 1 ||
                                        result.config.pain_location.posterior_cabeca === 1 ||
                                        result.config.pain_location.testa_topo_cranio === 1
                                ).length > 0 &&
                                    ((qty.filter(item => item.date === date && item.type === "leve").length === 0 && qty.push({ date: date, type: "leve" })),
                                        < div style={{ width: 5, height: 5, backgroundColor: "green", borderRadius: 30 }} />)
                                }
                                {dataValue[format(date, 'yyyy-MM-dd')].filter(
                                    result =>
                                        result.config.pain_location.frontal_atras_olho === 2 ||
                                        result.config.pain_location.frontal_nuca === 2 ||
                                        result.config.pain_location.lateral_direito === 2 ||
                                        result.config.pain_location.lateral_esquerdo === 2 ||
                                        result.config.pain_location.posterior_cabeca === 2 ||
                                        result.config.pain_location.testa_topo_cranio === 2
                                ).length > 0 &&
                                    ((qty.filter(item => item.date === date && item.type === "moderada").length === 0 && qty.push({ date: date, type: "moderada" })),
                                        <div style={{ width: 5, height: 5, backgroundColor: "darkorange", borderRadius: 30 }} />)
                                }
                                {dataValue[format(date, 'yyyy-MM-dd')].filter(
                                    result =>
                                        result.config.pain_location.frontal_atras_olho === 3 ||
                                        result.config.pain_location.frontal_nuca === 3 ||
                                        result.config.pain_location.lateral_direito === 3 ||
                                        result.config.pain_location.lateral_esquerdo === 3 ||
                                        result.config.pain_location.posterior_cabeca === 3 ||
                                        result.config.pain_location.testa_topo_cranio === 3
                                ).length > 0 &&
                                    ((qty.filter(item => item.date === date && item.type === "forte").length === 0 && qty.push({ date: date, type: "forte" })),
                                        <div style={{ width: 5, height: 5, backgroundColor: "red", borderRadius: 30 }} />)
                                }
                                {dataValue[format(date, 'yyyy-MM-dd')].filter(result => result.config.symptoms.menstruacao === true).length > 0 && <div style={{ width: 5, height: 5, backgroundColor: "blue", borderRadius: 30 }} />}
                                {dataValue[format(date, 'yyyy-MM-dd')].filter(result => result.config.triggers === true).length > 0 && <div style={{ width: 5, height: 5, backgroundColor: "brown", borderRadius: 30 }} />}
                            </div>
                        </>
                        : null}
                />
            </DivCalendar>
            <DivDescription>
                <p style={{ fontSize: 10, marginBottom: 5, fontWeight: "bold" }}>
                    CORES RELACIONADAS A INTENSIDADE DA DOR INSERIDA NO DIARIO DA ENXAQUECA
                </p>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <div style={{ width: 5, height: 5, backgroundColor: "green", borderRadius: 30 }} />
                    <p style={{ fontSize: 10, marginLeft: 5 }}>DOR FRACA (NÃO IMPEDE ATIVIDADE)</p>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <div style={{ width: 5, height: 5, backgroundColor: "darkorange", borderRadius: 30 }} />
                    <p style={{ fontSize: 10, marginLeft: 5 }}>DOR MODERADA (INTERFERE, MAS NÃO IMPEDE)</p>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <div style={{ width: 5, height: 5, backgroundColor: "red", borderRadius: 30 }} />
                    <p style={{ fontSize: 10, marginLeft: 5 }}>DOR FORTE (IMPEDE ATIVIDADE)</p>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <div style={{ width: 5, height: 5, backgroundColor: "blue", borderRadius: 30 }} />
                    <p style={{ fontSize: 10, marginLeft: 5 }}>MENSTRUAÇÃO</p>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <div style={{ width: 5, height: 5, backgroundColor: "brown", borderRadius: 30 }} />
                    <p style={{ fontSize: 10, marginLeft: 5 }}>ALIMENTOS DESENCADEANTES</p>
                </div>
            </DivDescription>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>
                    <h3 style={{ color: "#7f30af" }}>Selecione a dor</h3>
                    <h4 style={{ color: "gray", marginTop: 5, marginBottom: 10 }}>{startDate}</h4>
                    <p style={{ textAlign: "center", color: "gray" }}>Registradas {qty.filter(item => item.date === dateSelected).length} intensidades de dor nesta data</p>
                    <div style={{ paddingTop: 10, paddingBottom: 10, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderBottom: "1px solid gray" }}>
                        {dateSelected && dataValue[format(dateSelected, 'yyyy-MM-dd')].filter(
                            result =>
                                result.config.pain_location.frontal_atras_olho === 1 ||
                                result.config.pain_location.frontal_nuca === 1 ||
                                result.config.pain_location.lateral_direito === 1 ||
                                result.config.pain_location.lateral_esquerdo === 1 ||
                                result.config.pain_location.posterior_cabeca === 1 ||
                                result.config.pain_location.testa_topo_cranio === 1
                        ).length > 0 &&
                            <div style={{ marginLeft: 2, marginRight: 2, width: 10, height: 10, backgroundColor: "green", borderRadius: 30 }} />
                        }
                        {dateSelected && dataValue[format(dateSelected, 'yyyy-MM-dd')].filter(
                            result =>
                                result.config.pain_location.frontal_atras_olho === 2 ||
                                result.config.pain_location.frontal_nuca === 2 ||
                                result.config.pain_location.lateral_direito === 2 ||
                                result.config.pain_location.lateral_esquerdo === 2 ||
                                result.config.pain_location.posterior_cabeca === 2 ||
                                result.config.pain_location.testa_topo_cranio === 2
                        ).length > 0 &&
                            <div style={{ marginLeft: 2, marginRight: 2, width: 10, height: 10, backgroundColor: "darkorange", borderRadius: 30 }} />
                        }
                        {dateSelected && dataValue[format(dateSelected, 'yyyy-MM-dd')].filter(
                            result =>
                                result.config.pain_location.frontal_atras_olho === 3 ||
                                result.config.pain_location.frontal_nuca === 3 ||
                                result.config.pain_location.lateral_direito === 3 ||
                                result.config.pain_location.lateral_esquerdo === 3 ||
                                result.config.pain_location.posterior_cabeca === 3 ||
                                result.config.pain_location.testa_topo_cranio === 3
                        ).length > 0 &&
                            <div style={{ marginLeft: 2, marginRight: 2, width: 10, height: 10, backgroundColor: "red", borderRadius: 30 }} />
                        }
                    </div>
                    {dataTemp.map(item => {
                        console.log(item.config.pain_location.frontal_atras_olho === 3)
                        var start_hour = addZero(new Date(item.start_time).getUTCHours());
                        var start_minute = addZero(new Date(item.start_time).getUTCMinutes());
                        var end_hour = addZero(new Date(item.end_time).getUTCHours());
                        var end_minute = addZero(new Date(item.end_time).getUTCMinutes());

                        var leve = []
                        var moderada = []
                        var forte = []

                        item.config.pain_location.frontal_atras_olho === 1 ? leve.push("Frontal atrás do olho") : {}
                        item.config.pain_location.frontal_nuca === 1 ? leve.push("Frontal da nuca") : {}
                        item.config.pain_location.lateral_direito === 1 ? leve.push("Frontal lado direito") : {}
                        item.config.pain_location.lateral_esquerdo === 1 ? leve.push("Frontal lado esquerdo") : {}
                        item.config.pain_location.posterior_cabeca === 1 ? leve.push("Frontal posterior") : {}
                        item.config.pain_location.testa_topo_cranio === 1 ? leve.push("Testa/topo do crânio") : {}

                        item.config.pain_location.frontal_atras_olho === 2 ? moderada.push("Frontal atrás do olho") : {}
                        item.config.pain_location.frontal_nuca === 2 ? moderada.push("Frontal da nuca") : {}
                        item.config.pain_location.lateral_direito === 2 ? moderada.push("Frontal lado direito") : {}
                        item.config.pain_location.lateral_esquerdo === 2 ? moderada.push("Frontal lado esquerdo") : {}
                        item.config.pain_location.posterior_cabeca === 2 ? moderada.push("Frontal posterior") : {}
                        item.config.pain_location.testa_topo_cranio === 2 ? moderada.push("Testa/topo do crânio") : {}

                        item.config.pain_location.frontal_atras_olho === 3 ? forte.push("Frontal atrás do olho") : {}
                        item.config.pain_location.frontal_nuca === 3 ? forte.push("Frontal da nuca") : {}
                        item.config.pain_location.lateral_direito === 3 ? forte.push("Frontal lado direito") : {}
                        item.config.pain_location.lateral_esquerdo === 3 ? forte.push("Frontal lado esquerdo") : {}
                        item.config.pain_location.posterior_cabeca === 3 ? forte.push("Frontal posterior") : {}
                        item.config.pain_location.testa_topo_cranio === 3 ? forte.push("Testa/topo do crânio") : {}

                        return (
                            <div key={item} style={{ paddingTop: 10, cursor: "pointer" }} onClick={() => {
                                setPainSelected(item)
                                Router.push("diario-dor")
                            }}>
                                <p style={{ marginBottom: 5, color: "#7f30af" }}>Período</p>
                                <p>{start_hour}:{start_minute} - {end_hour}:{end_minute}</p>
                                <p style={{ marginTop: 10, color: "#7f30af" }}>Locais</p>
                                <div style={{ marginBottom: 10, paddingBottom: 10, borderBottom: "1px solid gray" }} >
                                    {
                                        item.config.pain_location.frontal_atras_olho === 1 ||
                                            item.config.pain_location.frontal_nuca === 1 ||
                                            item.config.pain_location.lateral_direito === 1 ||
                                            item.config.pain_location.lateral_esquerdo === 1 ||
                                            item.config.pain_location.posterior_cabeca === 1 ||
                                            item.config.pain_location.testa_topo_cranio === 1
                                            ?
                                            <div style={{ marginBottom: 10, display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                <div style={{ marginTop: 2, marginBottomt: 2, width: 10, height: 10, backgroundColor: "green", borderRadius: 30 }} />
                                                <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", }}>
                                                    {leve && leve.map(item2 => <p key={item2} style={{ marginLeft: 2, fontSize: 14 }}>{item2},</p>)}
                                                </div>
                                            </div>
                                            :
                                            <></>
                                    }
                                    {
                                        item.config.pain_location.frontal_atras_olho === 2 ||
                                            item.config.pain_location.frontal_nuca === 2 ||
                                            item.config.pain_location.lateral_direito === 2 ||
                                            item.config.pain_location.lateral_esquerdo === 2 ||
                                            item.config.pain_location.posterior_cabeca === 2 ||
                                            item.config.pain_location.testa_topo_cranio === 2
                                            ?
                                            <div style={{ marginBottom: 10, display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                <div style={{ marginTop: 2, marginBottomt: 2, width: 10, height: 10, backgroundColor: "darkorange", borderRadius: 30 }} />
                                                <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", }}>
                                                    {moderada && moderada.map(item2 => <p key={item2} style={{ marginLeft: 2, fontSize: 14 }}>{item2},</p>)}
                                                </div>
                                            </div>
                                            :
                                            <></>
                                    }
                                    {
                                        item.config.pain_location.frontal_atras_olho === 3 ||
                                            item.config.pain_location.frontal_nuca === 3 ||
                                            item.config.pain_location.lateral_direito === 3 ||
                                            item.config.pain_location.lateral_esquerdo === 3 ||
                                            item.config.pain_location.posterior_cabeca === 3 ||
                                            item.config.pain_location.testa_topo_cranio === 3
                                            ?
                                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                <div style={{ marginTop: 2, marginBottomt: 2, width: 10, height: 10, backgroundColor: "red", borderRadius: 30 }} />
                                                <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", }}>
                                                    {forte && forte.map(item2 => <p key={item2} style={{ marginLeft: 2, fontSize: 14 }}>{item2},</p>)}
                                                </div>
                                            </div>
                                            :
                                            <></>
                                    }
                                </div>
                            </div>
                        )
                    })}
                    <ButtonModal border onClick={() => {
                        setIsOpen(false)
                    }}>FECHAR</ButtonModal>
                </div>
            </Modal>
        </Container>
    )
}
