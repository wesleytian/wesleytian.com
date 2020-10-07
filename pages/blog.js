import styles from '../styles/Home.module.css';
import React from 'react';
import { Typography, Grid } from '@material-ui/core';

export default function BlogPage() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Grid container direction="column" xs={11} md={8}>
					<Typography variant="h4" color="textPrimary" gutterBottom>
						<b>Blog</b>
					</Typography>
					<Typography variant="body1" color="textSecondary" paragraph>
						Work in Progress
					</Typography>
					<Typography variant="body1" color="textSecondary" paragraph>
						I'm migrating everything from my previous site to this
						one built using more modern and customizable software
						libraries. Specifically, I've chosen to use TypeScript,
						React, Material-UI, MDX, Next.js, SWR Hooks, Vercel, and
						Google Firebase.
					</Typography>
					<Typography
						variant="body1"
						color="textSecondary"
						className={styles.description}
					>
						Visit my previous blog{' '}
						<a href={'https://wesleytian.github.io/'}>here</a>.
					</Typography>
				</Grid>
			</main>
		</div>
	);
}
