import styles from "../styles/Home.module.css";
import React from "react";
import { Typography, Grid } from "@material-ui/core";

export default function Header() {
	return (
		<Grid container direction="column">
			<Typography variant="h4" gutterBottom>
				<b>Hey, I'm Wesley.</b>
			</Typography>
			<Typography
				variant="h5"
				color="textSecondary"
				className={styles.description}
				gutterBottom>
				Welcome to my personal website! 😁
			</Typography>
			<Typography
				variant="h5"
				color="textSecondary"
				className={styles.description}>
				I live in the{" "}
				<a href="https://en.wikipedia.org/wiki/Santa_Clara_Valley#San_Francisco_South_Bay">
					San Francisco Bay Area, California
				</a>
				, and work virtually for{" "}
				<a href="https://tryvirtually.com/">Virtually.</a>
			</Typography>
		</Grid>
	);
}
