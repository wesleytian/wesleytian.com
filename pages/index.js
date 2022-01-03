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
				<meta property="og:title" content="👋🏼 Hey! I'm Wesley." />
				<meta
					property="og:description"
					content="Welcome to my personal site."
				/>
				<meta property="og:image" content={"/posts/ogimage.jpeg"} />
			</Head>
			<main className={styles.main}>
				<Grid item container xs={11} md={8}>
					<Header />
					<div>
						<div>
							{/* <h3>Work</h3> */}
							<p>
								🧑🏻‍💻 I'm a product engineer at{" "}
								<a className="" href="https://www.fractional.app/">
									Fractional
								</a>
								, a fintech startup backed by CRV, Y Combinator, and Will Smith.
							</p>
							<p>
								Previously, I was a founding member of an edtech startup called{" "}
								<a className="" href="https://www.tryvirtually.com/">
									Virtually
								</a>
								, where I wrote a ton of code and helped scale the product from
								0 to 10K+ users. We went through Y Combinator and raised ~$2M in
								funding.
							</p>
							<p>
								Before that, I was a software engineer at Microsoft and studied
								computer science and data science at the University of Michigan
								〽️. Go Blue!
							</p>
						</div>
						<div>
							🏔️ Outside of work, I enjoy reading, writing, and challenging
							myself from time to time. My proudest accomplishment to date has
							been finishing an Ironman Triathlon (a 2.4-mile swim, 112-mile
							bicycle ride and a marathon 26.2-mile run, raced in that order).
						</div>

						<div>
							<p>
								🌎 My many moves growing up have shaped who I am today. In
								chronological order, I've lived in:
							</p>
							<ul>
								<li>Milpitas, California (5 years)</li>
								<li>West Linn, Oregon (3 years)</li>
								<li>Taipei, Taiwan (2 years)</li>
								<li>Shanghai, China (8 years)</li>
								<li>Amherst, Massachusetts (2 years)</li>
								<li>Ann Arbor, Michigan (3 years)</li>
								<li>Reno, Nevada (1 year)</li>
							</ul>
						</div>
					</div>
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
