import React from "react";
import Grid from "@material-ui/core/Grid";
import { List, Typography } from "@material-ui/core";
import PostSnippet from "./PostSnippet";

export default function MostPopular() {
	return (
		<Grid item container direction="column" xs={12}>
			<List>
				<PostSnippet
					title={"I Nearly Failed High School"}
					link={"/posts/gpa"}
					snippet={"I had a 1.9 GPA in high school. How did I turn it around?"}
				/>
				<PostSnippet
					title={"Surviving the Tallest Mountain in the Contiguous US"}
					link={"/posts/whitney"}
					snippet={"A Tale of Friendship, Altitude Sickness, and Piss"}
				/>
				{/* <PostSnippet
					title={"How I Found My Dream Job and 3 Tips On How You Can, Too"}
					link={"/posts/dream-job"}
					snippet={""}
				/> */}
			</List>
		</Grid>
	);
}
