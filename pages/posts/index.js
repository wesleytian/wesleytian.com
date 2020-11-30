import { getSortedPostsData } from "../../lib/posts";
import {
	Typography,
	Grid,
	List,
	ListItem,
	ListItemText
} from "@material-ui/core";
import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Home({ allPostsData }) {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Grid item container xs={11} md={8} direction="column">
					<Typography variant="h4" color="textPrimary" gutterBottom>
						<b>Blog</b>
					</Typography>
					<Typography color="textSecondary" className={styles.description}>
						Migration from old blogs{" "}
						<a href={"https://wesleytian.github.io/"} target="_blank">
							here
						</a>{" "}
						and{" "}
						<a href={"https://wesleytian.wordpress.com"} target="_blank">
							here
						</a>{" "}
						in progress.
					</Typography>
					<Grid container>
						<List>
							{allPostsData.map(({ id, date, title }) => {
								return (
									<Link href={`/posts/${id}`} target="_blank" key={id} passHref>
										<ListItem divider disableGutters button component="a">
											<ListItemText
												className={styles.description}
												primary={title}
												secondary={date}
											/>
										</ListItem>
									</Link>
								);
							})}
						</List>
					</Grid>
				</Grid>
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData
		}
	};
}
