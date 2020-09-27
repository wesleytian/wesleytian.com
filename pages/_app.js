import "../styles/globals.css";
import "regenerator-runtime/runtime.js";
import React from "react";
import Layout from "../components/layout";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</Layout>
	);
}

export default MyApp;

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#ff9800"
		}
	}
});
