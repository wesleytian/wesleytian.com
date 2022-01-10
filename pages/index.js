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
							<p>
								🧑🏻‍💻 I'm a product engineer at{" "}
								<a className="" href="https://www.fractional.app/">
									Fractional
								</a>
								, a fintech startup backed by CRV, <a href="https://www.ycombinator.com/">Y Combinator</a>, and Will Smith.
							</p>
							<p>
								Previously, I was a founding member of a SaaS startup called{" "}
								<a className="" href="https://www.tryvirtually.com/">
									Virtually
								</a>
								, where I wrote a ton of code and helped scale the product from
								0 to 10K+ users. I went through Y Combinator's summer 2020 batch with the founder and we raised $2M in
								funding.
							</p>
							<p>
								Before that, I was a software engineer at Microsoft and studied
								computer science and data science at the University of Michigan {" "} 
								 〽️. Go Blue!
							</p>
						</div>
						<div>
							🏔️ I currently spend my personal time reading and going to the gym. My proudest personal accomplishment to date has
							been training for and finishing an <a href="https://en.wikipedia.org/wiki/Ironman_Triathlon">Ironman Triathlon</a>, a 140.6-mile race.
						</div>

						<div>
							<p>
								🌎 I was born in California and grew up in California, Oregon, Taiwan, and China. Since then, I've also lived in Massachusetts, Michigan, and Nevada. Recently, I've moved back to California. Please don't ask me where I'm from. 😅
							</p>
						
						</div>
					</div>
          <div>
            <p>You can connect with me on LinkedIn <a href="https://linkedin.com/in/wesleytian">here</a>, follow me on Twitter <a href="https://twitter.com/wesleyytian">here</a>, or email me <a href="mailto:tian.wesley@gmail.com">here</a>!</p>
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
