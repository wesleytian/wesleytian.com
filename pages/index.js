import styles from "../styles/Home.module.css";
import React from "react";
import Head from "next/head";
import { Grid, Typography } from "@material-ui/core";
import MostPopular from "../components/MostPopular";
import Header from "../components/Header";
import { getSortedPostsData } from "../lib/posts";

export default function IndexPage() {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:url" content="wesleytian.com" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Hey, I'm Wesley." />
				<meta
					property="og:description"
					content="Welcome to my personal site!"
				/>
				<meta property="og:image" content={"/posts/test3.jpeg"} />
			</Head>
			<main className={styles.main}>
				<Grid item container xs={11} md={8}>
					<Header />
					<Typography style={{ whiteSpace: "pre-line" }}>
						{`
						I was the first employee at Virtually (YC S20), an edtech SaaS startup. While there, I shipped over 200,000 lines of code, helped grow a product from 0 to over 10,000 paying users, and led an engineering team of 4. 

            Prior to that, I worked at Microsoft and double majored in computer science and data science at the University of Michigan 〽️.

            I'm currently focused on becoming a better engineer and entrepreneur by learning and building things. In the relatively short-term, I'd like to either bootstrap a company to $1M ARR or found a unicorn (or both).
            
            I've moved a lot growing up. So far, I've lived in
            • Milpitas, California (5 years)
            • West Linn, Oregon (3 years)
            • Taipei, Taiwan (2 years)
            • Shanghai, China (8 years)
            • Amherst, Massachusetts (2 years)
            • Ann Arbor, Michigan (3 years)
            • Reno, Nevada (1 year)
            I've since moved back to Milpitas, California. 
            `}
					</Typography>

					<Typography style={{ whiteSpace: "pre-line" }}>
						{`
            Sports has been a big part of my life. In high school, I competed in track, cross country, swimming, tennis, table tennis, and basketball. Recreationally, I've enjoyed powerlifting, calisthenics, and Brazilian jiu-jitsu. I still enjoy hiking and mountain climbing.
            
            For the past year, I've been training for an Ironman (a 2.4-mile swim, followed by a 112-mile bike ride and a 26.2-mile full marathon). I'd like to climb the Seven Summits and run an ultramarathon one day.
            
            In the past, I've also been a pianist, a violinist, and an environmental science major.

            My life philosophy can pretty much be reduced to the following:
            • You only live once.
            • Go big or go home.
            `}
					</Typography>
					<Typography
						variant="h5"
						gutterBottom
						style={{ marginTop: "32px", marginBottom: "-8px" }}>
						<b>✍️ Writing</b>
					</Typography>
					<MostPopular />
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
