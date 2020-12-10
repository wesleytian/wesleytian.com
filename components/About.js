import styles from "../styles/Home.module.css";
import React from "react";
import { Box, Divider, Typography } from "@material-ui/core";

export default function About() {
	return (
		<>
			<Typography variant="h4" gutterBottom>
				<b>About Me</b>
			</Typography>
			<Typography
				variant="body1"
				color="textSecondary"
				paragraph
				className={styles.description}>
				Hey, my name is Wesley Y. Tian. I'm a founding member of{" "}
				<a href="https://tryvirtually.com/">Virtually</a>, the "Shopify for
				Online Schools". As Virtually's first hire, I help out in multiple
				domains, but my forte is software engineering. We went through Y
				Combinator's startup accelerator program this past summer which
				culminated in a{" "}
				<a
					href="https://www.edsurge.com/news/2020-09-28-a-shopify-for-online-schools-raises-1-75m-led-by-tiger-global"
					target="_blank">
					1.75M seed round led by Tiger Global
				</a>
				.
			</Typography>
			<Typography variant="body1" color="textSecondary" paragraph>
				I was born in Mountain View, California, and spent around 30% of my
				preadult years in Milpitas, California; 15% in West Linn, Oregon; 10% in
				Taiwan, Taipei; and 45% in Shanghai, China. Since then, I've also
				resided in Amherst, Massachusetts; and Ann Arbor, Michigan for my
				undegraduate studies.
			</Typography>
			<Typography variant="body1" color="textSecondary" paragraph>
				I enjoy reading, writing, hanging out with friends, and hiking in my
				free time. I'm also currently training for{" "}
				<a href="https://www.ironman.com/im-california">Ironman California</a>.
			</Typography>
			<Box my={3}>
				<Divider />
			</Box>
			<Typography variant="h4" gutterBottom>
				<b>About This Site</b>
			</Typography>
			<blockquote>
				<Typography color="textSecondary" paragraph>
					All views expressed on this site are my own and do not represent the
					opinions of any entity whatsoever with which I have been, am now, or
					will be affiliated.
				</Typography>
			</blockquote>
			<Typography color="textSecondary" paragraph>
				This site was built using{" "}
				<a href="https://reactjs.org/" target="_blank">
					React
				</a>
				,{" "}
				<a href="https://material-ui.com/" target="_blank">
					Material-UI
				</a>
				,{" "}
				<a href="https://www.javascript.com/" target="_blank">
					JavaScript
				</a>
				,{" "}
				<a href="https://firebase.google.com/docs/database" target="_blank">
					Google Firebase Realtime Database
				</a>
				,{" "}
				<a href="https://nextjs.org/" target="_blank">
					Next.js
				</a>
				,{" "}
				<a href="https://vercel.com/" target="_blank">
					Vercel
				</a>
				,{" "}
				<a href="http://github.com/" target="_blank">
					GitHub
				</a>
				, and{" "}
				<a href="https://remark.js.org/" target="_blank">
					remark
				</a>
				. Previous iterations of this site were built using{" "}
				<a href="https://wordpress.com/" target="_blank">
					WordPress
				</a>
				,{" "}
				<a href="http://github.com/" target="_blank">
					GitHub
				</a>
				,{" "}
				<a href="https://jekyllrb.com/" target="_blank">
					Jekyll
				</a>
				, and{" "}
				<a href="https://gohugo.io/" target="_blank">
					Hugo
				</a>{" "}
				.
			</Typography>
			<Typography color="textSecondary" paragraph>
				Find a typo on my site? Fork my site and make a pull request{" "}
				<a href={"https://github.com/wesleytian/nextjs"} target="_blank">
					here
				</a>
				. Contributors: Kiernan Roche, Your Name Here
			</Typography>
			<Typography color="textSecondary" paragraph>
				Views: 13,080 and counting
			</Typography>
		</>
	);
}
