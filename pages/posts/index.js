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
import { format } from "date-fns";

export default function Home({ allPostsData }) {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Grid item container xs={11} md={8} direction="column">
					<Typography variant="h4" color="textPrimary" gutterBottom>
						<b>Blog</b>
					</Typography>
					<Typography variant="body1" color="textSecondary">
						🔥: Popular&nbsp;&nbsp;&nbsp;&nbsp;🛠️:
						Technical&nbsp;&nbsp;&nbsp;&nbsp;⛰️: Hiking
					</Typography>
					<Grid container>
						<List>
							{allPostsData.map(({ id, date, title }) => {
								return (
									<Link href={`/posts/${id}`} key={id} passHref>
										<ListItem divider disableGutters button component="a">
											<ListItemText
												className={styles.description}
												primary={title}
												secondary={format(new Date(date), "PPP")}
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
