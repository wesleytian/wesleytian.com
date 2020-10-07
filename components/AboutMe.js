import styles from '../styles/Home.module.css';
import React from 'react';
import { Typography } from '@material-ui/core';

export default function AboutMe() {
	return (
		<>
			<Typography variant="h4" gutterBottom>
				<b>About Me</b>
			</Typography>
			<Typography
				variant="body1"
				color="textSecondary"
				paragraph
				className={styles.description}
			>
				Hey, my name is Wesley Tian. I'm a founding member of{' '}
				<a href="https://tryvirtually.com/">Virtually</a>, the "Shopify
				for Online Schools". As Virtually's first hire, I help out in
				multiple domains, but my forte is software engineering. We
				recently went through Y Combinator's Summer 2020 batch and
				raised a{' '}
				<a
					href="https://www.edsurge.com/news/2020-09-28-a-shopify-for-online-schools-raises-1-75m-led-by-tiger-global"
					target="_blank"
				>
					seed round
				</a>
				.
			</Typography>
			<Typography variant="body1" color="textSecondary" paragraph>
				I was born in Mountain View, California, and spent around 30% of
				my preadult years in Milpitas, California; 15% in West Linn,
				Oregon; 10% in Taiwan, Taipei; and 45% in Shanghai, China. Since
				then, I've also resided in Amherst, Massachusetts; and Ann
				Arbor, Michigan.
			</Typography>
			<Typography variant="body1" color="textSecondary" paragraph>
				I enjoy learning, writing, building side projects, visiting
				friends in San Francisco, hiking, and working on my handstand in
				my free time.
			</Typography>
		</>
	);
}
