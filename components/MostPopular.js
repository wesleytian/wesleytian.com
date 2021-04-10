import React from "react";
import Grid from "@material-ui/core/Grid";
import { List, Typography } from "@material-ui/core";
import PostSnippet from "./PostSnippet";

export default function MostPopular() {
	return (
		<Grid item container direction="column" xs={12}>
			<Typography variant="h5">
				<b>🔥 Most Popular</b>
			</Typography>

			<List>
				<PostSnippet
					title={"I Nearly Failed High School"}
					link={"/posts/gpa"}
					snippet={
						"It is true... I had a 1.95 GPA during my junior year of high school. How did I turn it around?"
					}
				/>
				<PostSnippet
					title={"How I Found My Dream Job and 3 Tips On How You Can, Too"}
					link={"/posts/dream-job"}
					snippet={
						"Who knew that a cold call for startup advice could turn into a job offer as Employee #1 of a YC-backed startup?"
					}
				/>
				<PostSnippet
					title={"3 Reasons Why You Should Move to Reno"}
					link={"/posts/reno"}
					snippet={
						"1. The Location 2. The Nature. 3. The COL. This post is also featured on the front-page of remotelyrenotahoe.com!"
					}
				/>
			</List>
		</Grid>
	);
}
