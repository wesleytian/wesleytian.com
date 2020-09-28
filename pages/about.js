import React from 'react';
import styles from '../styles/Home.module.css';
import Grid from '@material-ui/core/Grid';
import AboutMe from '../components/AboutMe';

export default function AboutPage() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Grid item container justify="flex-start" xs={11} md={8}>
					<AboutMe />
					{/* <iframe
						height="280"
						src={
							'https://www.google.com/maps/d/embed?mid=1nkhsz-sMRmwjimcGwn-dva4yiPueixfR&usp=en'
						}
						title="Wesley's Travel Map"
						width="100%"
					/> */}
				</Grid>
			</main>
		</div>
	);
}
