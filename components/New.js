import React from "react";
import Grid from "@material-ui/core/Grid";
import { List, Typography, Box } from "@material-ui/core";
import PostSnippet from "./PostSnippet";

export default function New() {
	return (
		<Grid item container justify="flex-start" direction="column">
			<Typography variant="h4">
				<b>❗New</b>
			</Typography>

			<List>
				<PostSnippet
					title={"How I Found My Dream Job and 3 Tips On How You Can, Too"}
					link={"https://wesleytian.github.io/2020/dream-job/"}
					snippet={
						"In this post, I tell my story of how I became the first employee and engineer at Virtually and what you can take away from my experience to find your dream job, too."
					}
				/>
			</List>
		</Grid>
	);
}
