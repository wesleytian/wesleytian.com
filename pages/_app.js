import "../styles/globals.css";
import "regenerator-runtime/runtime.js";
import * as React from "react";
import Layout from "../components/layout";
import {
  createMuiTheme,
  MuiThemeProvider,
  // ThemeProvider,
  useMediaQuery
} from "@material-ui/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import ButtonAppBar from "../components/ButtonAppBar";
import Footer from "../components/Footer";
import JssProvider from "react-jss/lib/JssProvider";
import { useRouter } from "next/router";
import { incrementViews } from "../lib/firebase";
import Script from "next/script";
import { ThemeProvider as CustomThemeProvider } from "../lib/theme";
import ThemeToggle from "../components/ThemeToggle";

function MyApp({ Component, pageProps }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // console.log(prefersDarkMode);
  const router = useRouter();

  React.useEffect(() => {
    if (router.pathname === "/posts/[id]") {
      return;
    }
    incrementViews(
      router.pathname === "/"
        ? "home"
        : router.pathname.includes("/posts/")
        ? router.pathname.substring(7)
        : router.pathname.substring(1)
    );
  }, [router.pathname]);

  return React.createElement(CustomThemeProvider, {}, 
    React.createElement('div', {}, [
      // Google Analytics
      React.createElement(Script, {
        key: 'ga-script',
        strategy: "lazyOnload",
        src: "https://www.googletagmanager.com/gtag/js?id=G-SCT2GW3WK4"
      }),
      React.createElement(Script, {
        key: 'ga-config',
        id: "googleAnalytics", 
        strategy: "lazyOnload"
      }, `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-SCT2GW3WK4');          
      `),
      React.createElement(JssProvider, { key: 'jss' },
        React.createElement(ThemeProvider, { theme: theme }, [
          React.createElement(ThemeToggle, { key: 'toggle' }),
          React.createElement(Component, { ...pageProps, key: 'component' })
        ])
      )
    ])
  );
}

export default MyApp;

const theme = createTheme({
  // typography: {
  // 	fontFamily: ["Titillium Web"].join()
  // },
  palette: {
    // primary: {
    // 	main: "#0f3"
    // }
    // secondary: {
    // 	main: "#FF8F0C"
    // }
    mode: "dark"
    // typography: { useNextVariants: true }
  }
});
