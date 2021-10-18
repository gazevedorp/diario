import React from 'react';
import Router from 'next/router';

import Slider from "react-slick";

import {
  Container,
  DivText,
  Text,
  DivSlider,
  DivImage,
  Image,
  Buttons,
  Button
} from '../styles/splash'

export default function Splash() {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Container>
      <DivText>
        <Text>O DIÁRIO DA ENXAQUECA É UM APLICATIVO</Text>
        <Text>QUE POSSÚI FUNCIONALIDADES QUE PODEM</Text>
        <Text>TE AJUDAR A VIVER COM MAIS BEM-ESTAR:</Text>
      </DivText>
      <DivSlider>
        <Slider  {...settings}>
          <DivImage>
            <Image src="splash01.jpg" />
          </DivImage>
          <DivImage>
            <Image src="splash02.jpg" />
          </DivImage>
          <DivImage>
            <Image src="splash03.jpg" />
          </DivImage>
          <DivImage>
            <Image src="splash04.jpg" />
          </DivImage>
        </Slider>
      </DivSlider>
      <Buttons>
        <Button border onClick={() => Router.push('/login')}>LOGAR</Button>
        <Button onClick={() => Router.push('/register')}>INSCREVER</Button>
      </Buttons>
    </Container>
  )
}
