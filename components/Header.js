import React from 'react';
import { Typography, Box } from '@material-ui/core';
import styles from '../styles/Home.module.css';

export default function Header() {
	return (
		<Box mt={10}>
			<Box>
				<Typography variant="h4" gutterBottom>
					<b>Hey, I'm Wesley! 😁</b>
				</Typography>
			</Box>

			<Box>
				<Typography
					variant="h5"
					color="textSecondary"
					className={styles.description}
				>
					I live in Reno, Nevada, and work virtually at{' '}
					<a href="https://tryvirtually.com/">Virtually.</a>
				</Typography>
			</Box>
		</Box>
	);
}
