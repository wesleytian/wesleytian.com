import "../styles/globals.css";
import "regenerator-runtime/runtime.js";
import React from "react";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
