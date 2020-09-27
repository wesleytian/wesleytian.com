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
						"Though I ended up receiving a full-time offer at Microsoft and finishing both University of Michigan's computer science and data science programs within 2.5 years while achieving University Honors, I nearly failed high school due to abysmal grades."
					}
					views={2169}
				/>
				<Box my={2}>
					<PostSnippet
						title={
							'Climbing the Tallest Mountain in the Contiguous USA'
						}
						link={'https://wesleytian.github.io/2019/whitney/'}
						snippet="After half a year of planning, my friends and I finally climbed Mt. Whitney, the tallest mountain in the contiguous US."
						views={604}
					/>
				</Box>
				<PostSnippet
					title={'3 Reasons Why You Should Move to Reno'}
					link={'https://wesleytian.github.io/2020/reno/'}
					snippet={
						"With both my job and my girlfriend's schooling being completely remote, we chose to move to Reno out of all of the places in the world. Why?"
					}
					views={386}
				/>
			</List>
		</Grid>
	);
}
