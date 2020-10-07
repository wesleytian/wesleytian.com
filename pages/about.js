import styles from '../styles/Home.module.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import AboutMe from '../components/AboutMe';

export default function AboutPage() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Grid item container xs={11} md={8}>
					<AboutMe />
				</Grid>
			</main>
		</div>
	);
}
