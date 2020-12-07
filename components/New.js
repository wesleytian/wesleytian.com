import React from "react";
import Grid from "@material-ui/core/Grid";
import { List, Typography } from "@material-ui/core";
import PostSnippet from "./PostSnippet";

export default function New({ newestPost }) {
	return (
		<Grid item container justify="flex-start" direction="column">
			<Typography variant="h5" gutterBottom>
				<b>❗New</b>
			</Typography>

			<List>
				<PostSnippet
					title={newestPost.title}
					link={`/posts/${newestPost.id}`}
				/>
			</List>
		</Grid>
	);
}
