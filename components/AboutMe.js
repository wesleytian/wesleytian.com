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
						Hey, my name is Wesley Tian. I'm a software engineer,
						entrepreneur, and the first hire at Virtually, a
						platform for building online schools. We recently
						graduated from Y Combinator's Summer 2020 batch.
					</Typography>
					<Typography variant="body1" color="textSecondary" paragraph>
						I was born in California and spent around 30% of my
						preadult years growing up in California, 15% in Oregon,
						10% in Taipei, and 45% in Shanghai. Since then, I've
						also resided in Massachusetts and Michigan.
					</Typography>
					<Typography variant="body1" color="textSecondary" paragraph>
						I enjoy learning, building side projects such as this
						site, visiting friends in the Bay Area, hiking, and
						perfecting my handstand in my free time.
					</Typography>
				</Grid>
			</Box>
		</div>
	);
}
