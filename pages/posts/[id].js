import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from "../../styles/Home.module.css";
import React, { useEffect } from "react";
import { Typography, Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import { incrementViews } from "../../lib/firebase";

export default function Post({ postData }) {
	useEffect(() => {
		incrementViews(postData.id);
	}, []);

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Grid
					container
					item
					direction="column"
					xs={11}
					md={8}
					className={styles.description}>
					<Typography variant="h4">{postData.title}</Typography>
					<br />
					<Typography variant="body1">{postData.date}</Typography>
					<br />
					<Typography variant="body1" color="textSecondary" paragraph>
						<div
							dangerouslySetInnerHTML={{
								__html: postData.contentHtml
							}}></div>
					</Typography>
				</Grid>
			</main>
		</div>
	);
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData
		}
	};
}
