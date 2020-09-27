import React from 'react';
import Grid from '@material-ui/core/Grid';
import { List, Typography, Box } from '@material-ui/core';
import PostSnippet from './PostSnippet';

export default function New() {
	return (
		<div>
			<Box my={2} mb={-1}>
				<Grid item container justify="flex-start" direction="column">
					<Typography variant="h4" gutterBottom>
						<b>New</b>
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
					</List>
				</Grid>
			</Box>
		</div>
	);
}
