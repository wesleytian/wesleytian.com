import styles from "../styles/Home.module.css";
import React from "react";
import { Box, Divider, Typography } from "@material-ui/core";

export default function AboutMe() {
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
				Hey, my name is Wesley Tian. I'm a founding member of{" "}
				<a href="https://tryvirtually.com/">Virtually</a>, the "Shopify for
				Online Schools". As Virtually's first hire, I help out in multiple
				domains, but my forte is software engineering. We went through Y
				Combinator's startup accelerator program this past summer which
				culminated in a 1.8M{" "}
				<a
					href="https://www.edsurge.com/news/2020-09-28-a-shopify-for-online-schools-raises-1-75m-led-by-tiger-global"
					target="_blank">
					seed round
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
				free time. I'm also training for an Ironman Triathlon.
			</Typography>
			<Box my={3}>
				<Divider />
			</Box>
			<Typography variant="h4" gutterBottom>
				<b>About This Site</b>
			</Typography>
			<Typography color="textSecondary" paragraph>
				This site has gone through multiple iterations, from a JavaScript-free
				pure HTML and CSS page to one hosted on Wordpress, Jekyll, Hugo, and now
				a completely custom site built using modern frameworks such as{" "}
				<a href="https://reactjs.org/" target="_blank">
					React
				</a>
				,{" "}
				<a href="https://material-ui.com/" target="_blank">
					Material-UI
				</a>
				, JavaScript,{" "}
				<a href="https://firebase.google.com/docs/database" target="_blank">
					Google Firebase's Realtime Database
				</a>
				,{" "}
				<a href="https://nextjs.org/" target="_blank">
					Next.js
				</a>{" "}
				for server-side rendering,{" "}
				<a href="https://vercel.com/" target="_blank">
					Vercel
				</a>{" "}
				for hosting and deployment, and{" "}
				<a href="https://remark.js.org/" target="_blank">
					remark
				</a>{" "}
				for Markdown processing. This iteration has taken the longest to build
				by far, but has also been the most rewarding, both from a technical
				learning viewpoint, but also from a customizability and design
				perspective. I've been using what I've learned from my day-to-day job on
				this site, and using what I'm learning from this site in my day-to-day
				job. Some things that I'm still working on are integrating{" "}
				<a href="https://swr.vercel.app/" target="_blank">
					SWR hooks
				</a>{" "}
				for faster data fetching,{" "}
				<a href="https://www.typescriptlang.org/" target="_blank">
					TypeScript
				</a>
				, and{" "}
				<a href="https://mdxjs.com/" target="_blank">
					MDX
				</a>{" "}
				for supporting JSX in Markdown docs to this site.
			</Typography>

			<Typography color="textSecondary" paragraph>
				All views expressed on this site are my own and do not represent the
				opinions of any entity whatsoever with which I have been, am now, or
				will be affiliated.
			</Typography>

			<Typography color="textSecondary" paragraph>
				Find a typo on my site? Fork my site and make a pull request{" "}
				<a href={"https://github.com/wesleytian/nextjs"} target="_blank">
					here
				</a>
				. Contributors: Kiernan Roche, Your Name Here
			</Typography>
			<Typography color="textSecondary" paragraph>
				Total views: 12,139* <i>Last updated at Nov 27, 2020 17:22 PT.</i>
			</Typography>
			<Typography color="textSecondary" paragraph>
				*This view count is according to Google Analytics. So, it's going to be
				an underestimate,{" "}
				<a
					href={
						"https://pando.com/2020/07/14/13-my-website-visitors-block-google-analytics/#:~:text=TL%3BDR%3A%20Blocking%20rate%20ranges,website%20you're%20on)."
					}
					target="_blank">
					by roughly 15%.
				</a>
			</Typography>
		</>
	);
}
