import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import {
	Grid,
	Box,
	Card,
	TextField,
	Typography,
	Button,
	colors
} from '@material-ui/core';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';
import { incrementViews } from '../lib/firebase';
import MostPopular from '../components/MostPopular';
import Header from '../components/Header';
// import New from '../components/New';
import ButtonAppBar from '../components/ButtonAppBar';
import { grey } from '@material-ui/core/colors';

const root = process.cwd();

export default function IndexPage({ postData }) {
	const [subscriberEmail, setSubcriberEmail] = useState(null);

	useEffect(() => {
		incrementViews('home');
	}, []);

	const handleSubscribe = (event) => {};

	return (
		<div className={styles.container}>
			<Head>
				<title>Home of Wesley Tian</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Grid item container justify="flex-start" xs={11} md={8}>
					<Header />
					<Box mt={5} mb={2}>
						<MostPopular />
					</Box>

					{/* <Grid
						item
						container
						justify="center"
						alignItems="center"
						direction="column"
						xs={12}
					>
						<Box borderRadius={4} border={1} p={2}>
							<Typography variant="body1" color="textSecondary">
								Enter your email
							</Typography>
							<Grid item container justify="center">
								<TextField
									value={subscriberEmail}
									variant="outlined"
									type="email"
									size="small"
								/>
							</Grid>
							<Box my={2}>
								<Grid item container justify="center">
									<Button
										style={{ textTransform: 'none' }}
										size="large"
										variant="contained"
										disableElevation
										onClick={handleSubscribe}
										color="primary"
									>
										Subscribe
									</Button>
								</Grid>
							</Box>
						</Box>
					</Grid> */}
					{/* </Box> */}
					{/* <iframe
						scrolling="no"
						style={{
							width: '100%',
							height: '220px',
							border: '1px solid !important'
						}}
						src="https://buttondown.email/wesleytian?as_embed=true"
					/> */}
					<Box mt={5}>
						<Timeline />
					</Box>

					{/* <form
						action="https://buttondown.email/api/emails/embed-subscribe/wesleytian"
						method="post"
						target="popupwindow"
						onsubmit="window.open('https://buttondown.email/wesleytian', 'popupwindow')"
						class="embeddable-buttondown-form"
					>
						<label for="bd-email">Enter your email</label>
						<input type="email" name="email" id="bd-email"></input>
						<input type="hidden" value="1" name="embed"></input>
						<input type="submit" value="Subscribe"></input>
					</form> */}
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
