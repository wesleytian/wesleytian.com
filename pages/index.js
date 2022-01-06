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
								Previously, I was a founding member of an edtech startup called{" "}
								<a className="" href="https://www.tryvirtually.com/">
									Virtually
								</a>
								, where I wrote a ton of code and helped scale the product from
								0 to 10K+ users. I went through Y Combinator with the founder and we raised $2M in
								funding.
							</p>
							<p>
								Before that, I was a software engineer at Microsoft and studied
								computer science and data science at the University of Michigan {" "} 
								 〽️. Go Blue!
							</p>
						</div>
						<div>
							🏔️ Outside of work, I enjoy reading, writing, and staying active. My proudest personal accomplishment to date has
							been training for and finishing an <a href="https://en.wikipedia.org/wiki/Ironman_Triathlon">Ironman Triathlon</a>, a 140.6-mile race.
						</div>

						<div>
							<p>
								🌎 I was born in California, but I also grew up in Oregon, Taiwan, and China. Since then, I've also lived in Massachusetts, Michigan, and Nevada. I've recently moved back to California. Please don't ask me where I'm from. 
							</p>
						
						</div>
					</div>
          <div>
            <p>You can reach me at <a href="mailto:tian.wesley@gmail.com">tian.wesley@gmail.com</a>.</p>
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
