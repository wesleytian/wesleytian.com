import styles from "../styles/Home.module.css";
import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { getPostData } from "../lib/posts";

export default function AboutPage({ postData }) {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Grid
					item
					container
					xs={11}
					md={8}
					direction="column"
					className={styles.description}>
					<Typography variant="h4" color="textPrimary" gutterBottom>
						<b>About</b>
					</Typography>
					<Typography variant="body1" color="textSecondary">
						<div
							dangerouslySetInnerHTML={{
								__html: postData.contentHtml
							}}
						/>
					</Typography>
				</Grid>
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const postData = await getPostData("about");
	return {
		props: {
			postData
		}
	};
}
