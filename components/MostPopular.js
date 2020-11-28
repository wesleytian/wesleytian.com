import styles from '../styles/Home.module.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { List, Typography, Box } from '@material-ui/core';
import PostSnippet from './PostSnippet';

export default function MostPopular() {
	return (
		<Grid item container justify="flex-start" direction="column">
			<Typography variant="h4" gutterBottom>
				<b>Most Popular</b>
			</Typography>

			<List>
				<PostSnippet
					title={'I Nearly Failed High School'}
					link={'https://wesleytian.github.io/2019/gpa/'}
					snippet={
						"Read about how I went from nearly failing high school to receiving a full-time offer at Microsoft and finishing both University of Michigan's computer science and data science programs in 2.5 years while achieving University Honors."
					}
					views={2218}
				/>
				<Box my={2}>
					<PostSnippet
					title={'3 Reasons Why You Should Move to Reno'}
					link={'https://wesleytian.github.io/2020/reno/'}
					snippet={
						"With my job and my girlfriend's schooling being completely remote, we chose to move to Reno out of all of the places in the world. Why?"
					}
					views={807}
				/>
				</Box>
				<PostSnippet
						title={
							'I Climbed the Tallest Mountain in the Contiguous USA'
						}
						link={'https://wesleytian.github.io/2019/whitney/'}
						snippet="Last year, I convinced a few friends to climb Mt. Whitney (14,505 ft.) with me. This is a story of friendship, altitude sickness, and piss-drinking (out of necessity and not for fun, obviously...)"
						views={623}
					/>
			</List>
			<Typography
				variant="body1"
				color="secondary"
				className={styles.description}
				paragraph
			></Typography>
			<Typography
				variant="body1"
				color="textSecondary"
				className={styles.description}
				paragraph
			>
				<b>
					Keep up to date with my blog posts by subscribing to my
					newsletter{' '}
					<a
						href="https://buttondown.email/wesleytian"
						target="_blank"
					>
						here
					</a>
					. I promise to send you newsletters at most once every two
					weeks. Up Next: "Why I Turned Down Big Tech Out Of College."
				</b>
			</Typography>
		</Grid>
	);
}
