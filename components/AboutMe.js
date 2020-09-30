import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Box } from '@material-ui/core';

export default function AboutMe() {
	return (
		<div>
			<Box mt={10}>
				<Grid item container justify="flex-start">
					<Typography variant="h4" gutterBottom>
						<b>About Me</b>
					</Typography>
					<Typography variant="body1" color="textSecondary" paragraph>
						Hey, my name is Wesley Tian. I'm a software engineer and
						the first hire at Virtually, a "Shopify for Online
						Schools." We recently went through Y Combinator's Summer
						2020 batch and raised a seed round.
					</Typography>
					<Typography variant="body1" color="textSecondary" paragraph>
						I was born in Mountain View, California, and spent
						around 30% of my preadult years in Milpitas, California;
						15% in West Linn, Oregon; 10% in Taiwan, Taipei; and 45%
						in Shanghai, China. Since then, I've also resided in
						Amherst, Massachusetts; and Ann Arbor, Michigan.
					</Typography>
					<Typography variant="body1" color="textSecondary" paragraph>
						I enjoy reading, writing, working on side projects such
						as this site, visiting friends in the Bay Area, hiking,
						and perfecting my handstand in my free time.
					</Typography>
				</Grid>
			</Box>
		</div>
	);
}
