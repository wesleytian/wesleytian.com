import styles from "../styles/Home.module.css";
import React from "react";
import { Typography, Grid, ListItem } from "@material-ui/core";

export default function ProjectsPage() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Grid item container xs={11} md={8} direction="column">
					<Typography variant="h4" color="textPrimary" gutterBottom>
						<b>Projects</b>
					</Typography>
					<Typography
						variant="body1"
						color="textSecondary"
						paragraph
						className={styles.description}>
						Please check back in a week!
					</Typography>
				</Grid>
			</main>
		</div>
	);
}
