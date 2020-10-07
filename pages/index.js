import styles from '../styles/Home.module.css';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React, { useEffect } from 'react';
import Head from 'next/head';
import { Grid, Box } from '@material-ui/core';
import Timeline from '../components/Timeline';
import { incrementViews } from '../lib/firebase';
import MostPopular from '../components/MostPopular';
import Header from '../components/Header';

const root = process.cwd();

export default function IndexPage() {
	useEffect(() => {
		incrementViews('home');
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Home of Wesley Tian</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Grid item container xs={11} md={8}>
					<Header />
					<Box mt={5} mb={2}>
						<MostPopular />
					</Box>
					<Box mt={5}>
						<Timeline />
					</Box>
				</Grid>
			</main>
		</div>
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
