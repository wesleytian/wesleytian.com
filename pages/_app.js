import "../styles/globals.css";
import "regenerator-runtime/runtime.js";
import React from "react";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
