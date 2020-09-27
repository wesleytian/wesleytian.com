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
						Hey, I'm Wesley. I'm a software engineer and the first
						hire at Virtually, a platform for building online
						schools. We recently graduated from the Y Combinator
						Summer 2020 batch.
					</Typography>
					<Typography variant="body1" color="textSecondary" paragraph>
						I was born in California and spent around 30% of my
						pre-adult years growing up California, 15% in Oregon,
						10% in Taipei, and 45% in Shanghai. Since then, I've
						also resided in Massachusetts and Michigan.
					</Typography>
					<Typography variant="body1" color="textSecondary" paragraph>
						In my free time, I enjoy learning, building side
						projects such as this site, visiting friends in the Bay
						Area, hiking, and calisthenics.
					</Typography>
				</Grid>
			</Box>
		</div>
	);
}
