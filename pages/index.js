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
								I'm a product engineer at{" "}
								<a className="" href="https://www.fractional.app/">
									Fractional
								</a>
								, a fintech startup.
							</p>
							<p>
								Previously, I was a founding member of an edtech SaaS startup
								called{" "}
								<a className="" href="https://www.tryvirtually.com/">
									Virtually
								</a>
								, where I shipped 200,000+ lines of code, helped grow a product
								from 0 to 10,000+ users, and led an engineering team of 4.
							</p>
							<p>
								Prior to that, I worked at Microsoft as a software engineer and
								studied computer science, data science at the University of
								Michigan 〽️. Go Blue!
							</p>
						</div>
						<div>
							Outside of work, I enjoy challenging myself from time to time.
							Some of my proudest accomplishments include:
							<ul>
								<li>
									Finishing an Ironman Triathlon (a 2.4-mile swim, 112-mile
									bicycle ride and a marathon 26.2-mile run, raced in that
									order)
								</li>
								<li>Climbing the highest mountain in the contiguous US</li>
							</ul>
						</div>

						<div>
							<p>
								Much of who I am today was shaped by my moves growing up 🌎. So
								far, I've lived in:
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
							<p>
								I've since moved back to Milpitas. But I'm getting bored
								already, so I'm hoping to move to San Francisco soon.
							</p>
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
