import React from "react";
import { ListItemText, Typography, Grid } from "@material-ui/core";

export default function PostSnippet({ title, link, snippet, views }) {
	return (
		<a href={link}>
			<Grid container direction="row" justify="space-between">
				<Grid item xs={views ? 8 : 12}>
					<Typography variant="h6">{title}</Typography>
				</Grid>

				{views && (
					<Grid item xs={4}>
						<Typography variant="body1" color="textSecondary" align="right">
							{views.toLocaleString()} views
						</Typography>
					</Grid>
				)}
			</Grid>
		</a>
	);
}
