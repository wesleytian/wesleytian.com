import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from "../../styles/Home.module.css";
import React, { useEffect } from "react";
import { Typography, Grid } from "@material-ui/core";
import { incrementViews } from "../../lib/firebase";
import { format } from "date-fns";

export default function Post({ postData }) {
	useEffect(() => {
		incrementViews(postData.id);
	}, []);
	const { title, date, contentHtml } = postData;

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Grid
					container
					item
					direction="column"
					xs={11}
					sm={10}
					md={7}
					className={styles.description}>
					<Typography variant="h4">{title}</Typography>
					<br />
					<Typography variant="body1">
						{format(new Date(date), "PPP")}
					</Typography>
					<br />
					<Typography variant="body1" paragraph>
						<div
							dangerouslySetInnerHTML={{
								__html: contentHtml
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
