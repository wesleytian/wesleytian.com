import React from 'react';
import { ListItemText, Typography, Grid, Box } from '@material-ui/core';

export default function PostSnippet({ title, link, snippet, views }) {
	const primary = (
		<Grid container justify="space-between">
			<Grid item xs={8}>
				<Typography variant="h6">
					<b>{title}</b>
				</Typography>
			</Grid>

			<Grid item xs={4}>
				<Typography variant="body1" color="textSecondary" align="right">
					{views.toLocaleString()}+ views
				</Typography>
			</Grid>
		</Grid>
	);

	return (
		<a href={link}>
			<ListItemText
				secondaryTypographyProps={{
					variant: 'body1',
					color: 'textSecondary'
				}}
				primary={primary}
				secondary={snippet}
			/>
		</a>
	);
}
