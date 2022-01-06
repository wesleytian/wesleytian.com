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
								, a fintech startup backed by CRV, Y Combinator, and Will Smith.
							</p>
							<p>
								Previously, I was a founding member of an edtech startup called{" "}
								<a className="" href="https://www.tryvirtually.com/">
									Virtually
								</a>
								, where I wrote a ton of code and helped scale the product from
								0 to 10K+ users. I went through <b /*style={{color: "#ff4000"}}*/>Y Combinator</b> with the founder and we raised ~$2M in
								funding.
							</p>
							<p>
								Before that, I was a software engineer at <b /*style={{color: "#7FBC00"}}*/>Microsoft</b> and studied
								computer science and data science at the <b /*style={{color: "#FFCB05"}}*/>University of Michigan</b>{" "} 
								 〽️. Go Blue!
							</p>
						</div>
						<div>
							🏔️ Outside of work, I enjoy reading, writing, and staying active. My proudest personal accomplishment to date has
							been finishing an <b /*style={{color: "rgb(227,24,55)"}}*/>Ironman</b> Triathlon.
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
