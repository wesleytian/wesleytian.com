import React from "react";
import Grid from "@material-ui/core/Grid";
import { List, Typography } from "@material-ui/core";
import PostSnippet from "./PostSnippet";

export default function MostPopular() {
	return (
		<Grid item container direction="column" xs={12}>
			<Typography variant="h5">
				<b>🔥 Popular</b>
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
					title={"Surviving the Tallest Mountain in the Contiguous US"}
					link={"/posts/whitney"}
					snippet={"A Tale of Friendship, Altitude Sickness, and Piss"}
				/>
			</List>
		</Grid>
	);
}
