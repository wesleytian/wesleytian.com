import React from 'react';
import styles from '../styles/Home.module.css';
import { Typography, Grid } from '@material-ui/core';

export default function LibraryPage() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Grid item container xs={11} md={8}>
					<Typography variant="h6" color="textPrimary" paragraph>
						Work in Progress
					</Typography>
					<Typography variant="body1" color="textSecondary" paragraph>
						I'm migrating everything from my previous site to this
						one built using more modern and customizable software
						libraries. Specifically, I've chosen to use TypeScript,
						React, Material-UI, MDX, Next.js, SWR Hooks, Vercel, and
						Google Firebase.
					</Typography>
					<Typography variant="body1" color="textSecondary" paragraph>
						This library page will include my highly recommended
						books, articles, podcasts, movies, etc., as well as
						summarized concepts for your benefit and my personal
						learning/reference.
					</Typography>
				</Grid>
			</main>
		</div>
	);
}
