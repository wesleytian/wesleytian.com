import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import ButtonAppBar from "../components/ButtonAppBar";
import Grid from "@material-ui/core/Grid";
import Timeline from "../components/Timeline";
import Footer from "../components/Footer";

const root = process.cwd();

export default function IndexPage({ postData }) {
	return (
		<>
			<ButtonAppBar />
			<div className={styles.container}>
				<Head>
					<title>Wesley Tian</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main className={styles.main}>
					<Grid container justify="center" xs={10} sm={8} md={8} lg={6}>
						<h1 className={styles.title}>Hey, I'm Wesley! 😁</h1>

						<p className={styles.description}>
							I'm a software engineer, entrepreneur, and writer.
						</p>

						<Grid item container justify="flex-start" direction="column">
							<h2>Most Popular</h2>
							<ul>
								{postData.map((data) => (
									<li>
										<Link href="/blog/[slug]" as={`/blog/${data.slug}`}>
											<a>{data.frontMatter.title}</a>
										</Link>
									</li>
								))}
							</ul>
						</Grid>
						<Timeline />
						{/* <div className={styles.grid}>
						<a href="https://nextjs.org/docs" className={styles.card}>
							<h3>Documentation &rarr;</h3>
							<p>Find in-depth information about Next.js features and API.</p>
						</a>

						<a href="https://nextjs.org/learn" className={styles.card}>
							<h3>Learn &rarr;</h3>
							<p>Learn about Next.js in an interactive course with quizzes!</p>
						</a>

						<a
							href="https://github.com/vercel/next.js/tree/master/examples"
							className={styles.card}>
							<h3>Examples &rarr;</h3>
							<p>Discover and deploy boilerplate example Next.js projects.</p>
						</a>

						<a
							href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
							className={styles.card}>
							<h3>Deploy &rarr;</h3>
							<p>
								Instantly deploy your Next.js site to a public URL with Vercel.
							</p>
						</a>
					</div> */}
					</Grid>
				</main>

				<Footer />
			</div>
		</>
	);
}
export async function getStaticProps() {
	const contentRoot = path.join(root, "content");
	const postData = fs.readdirSync(contentRoot).map((p) => {
		const content = fs.readFileSync(path.join(contentRoot, p), "utf8");
		return {
			slug: p.replace(/\.mdx/, ""),
			content,
			frontMatter: matter(content).data
		};
	});
	return { props: { postData } };
}
