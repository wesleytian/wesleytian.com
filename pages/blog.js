import React from 'react';
import styles from '../styles/Home.module.css';
import { Typography, Grid } from '@material-ui/core';
// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';

export default function BlogPage() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Grid item container xs={11} md={8}>
					<Typography variant="h6" color="textPrimary" paragraph>
						Work in Progress
					</Typography>
					<Typography variant="body1" color="textSecondary" paragraph>
						I'm migrating everything from my previous site to this
						one built using more modern and customizable software
						libraries. Specifically, I've chosen to use TypeScript,
						React, Material-UI, MDX, Next.js, SWR Hooks, Vercel, and
						Google Firebase.
					</Typography>
					<Typography
						variant="body1"
						color="textSecondary"
						className={styles.description}
					>
						Visit my previous blog{' '}
						<a href={'https://wesleytian.github.io/'}>here</a>.
					</Typography>
					{/* <Grid
						item
						container
						justify="flex-start"
						direction="column"
					> */}
					{/* <h2>Most Popular</h2> */}
					{/* <ul> */}
					{/* {postData.map((data) => (
								<li>
									<Link
										href="/blog/[slug]"
										as={`/blog/${data.slug}`}
									>
										<a>{data.frontMatter.title}</a>
									</Link>
								</li>
							))} */}
					{/* </ul> */}
					{/* </Grid> */}
				</Grid>
			</main>
		</div>
	);
}

// export async function getStaticProps() {
// 	const contentRoot = path.join(root, 'content');
// 	const postData = fs.readdirSync(contentRoot).map((p) => {
// 		const content = fs.readFileSync(path.join(contentRoot, p), 'utf8');
// 		return {
// 			slug: p.replace(/\.mdx/, ''),
// 			content,
// 			frontMatter: matter(content).data
// 		};
// 	});
// 	return { props: { postData } };
// }
