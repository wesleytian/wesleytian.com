import styles from "../styles/Home.module.css";
import React from "react";
import { Typography, Grid } from "@material-ui/core";

export default function Header() {
	return (
		<Grid container direction="column">
			<img
				src="/posts/me.jpeg"
				style={{ width: "100px", borderRadius: "50px" }}
			/>
			<h1>👋🏼 Hey! I'm Wesley.</h1>
		</Grid>
	);
}
