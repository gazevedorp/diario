import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];

    OneSignal.push(function () {
      OneSignal.init({
        appId: "59cc2a2e-39d9-46ce-b802-7d1e10acf261",
      });
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
