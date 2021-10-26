import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Diário da Enxaqueca</title>
        <link rel="/manifest" href="manifest.json" />
        <link rel="icon" type="image/png" href="favicon.png" />
        <link rel="apple-touch-icon" type="image/png" href="favicon.png" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp