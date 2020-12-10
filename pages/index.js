import styles from "../styles/Home.module.css";
import React, { useEffect } from "react";
import Head from "next/head";
import { Grid, Typography } from "@material-ui/core";
import Timeline from "../components/Timeline";
import { incrementViews } from "../lib/firebase";
import MostPopular from "../components/MostPopular";
import Header from "../components/Header";
import New from "../components/New";
import { getSortedPostsData } from "../lib/posts";

const root = process.cwd();

export default function IndexPage({ allPostsData }) {
	useEffect(() => {
		incrementViews("home");
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Grid item container xs={11} md={8}>
					<Header />
					<Typography variant="h4" gutterBottom style={{ marginTop: "24px" }}>
						<b>✍️ Writing</b>
					</Typography>
					<New newestPost={allPostsData[0]} />
					<MostPopular />
					<Timeline />
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
