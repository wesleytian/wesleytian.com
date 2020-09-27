import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import ButtonAppBar from '../components/ButtonAppBar';
import Grid from '@material-ui/core/Grid';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';
import { Button, Typography } from '@material-ui/core';
import { incrementViews } from '../lib/firebase';

const root = process.cwd();

export default function IndexPage({ postData }) {
	useEffect(() => {
		incrementViews();
	}, []);

	return (
		<>
			{/* <ButtonAppBar /> */}
			<div className={styles.container}>
				<Head>
					<title>Wesley Tian</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main className={styles.main}>
					<Grid
						item
						container
						justify="center"
						xs={11}
						sm={11}
						md={6}
						lg={6}
					>
						<h1>Hey, I'm Wesley! 😁</h1>

						<p className={styles.description}>
							I live in Reno and work virtually at{' '}
							<a href="https://tryvirtually.com/">Virtually</a>.
						</p>
						{/* <Button onClick={() => incrementViews()}>
							Increment Views
						</Button> */}

						<Timeline />
					</Grid>
				</main>

				<Footer />
			</div>
		</>
	);
}
export async function getStaticProps() {
	const contentRoot = path.join(root, 'content');
	const postData = fs.readdirSync(contentRoot).map((p) => {
		const content = fs.readFileSync(path.join(contentRoot, p), 'utf8');
		return {
			slug: p.replace(/\.mdx/, ''),
			content,
			frontMatter: matter(content).data
		};
	});
	return { props: { postData } };
}
