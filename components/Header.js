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
			<Typography variant="h4" gutterBottom style={{ paddingTop: "24px" }}>
				<b>👋 Hey! I'm Wesley.</b>
			</Typography>
			<Typography
				variant="h5"
				color="textSecondary"
				className={styles.description}
				gutterBottom>
				Welcome to my personal site.
			</Typography>
		</Grid>
	);
}
