import React from 'react';
import styles from '../styles/Home.module.css';
import { Typography, Grid } from '@material-ui/core';

export default function AboutPage() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Grid item container justify="flex-start" xs={11} md={8}>
					<Typography variant="body1" color="textPrimary">
						Work in Progress
					</Typography>
				</Grid>
			</main>
		</div>
	);
}
