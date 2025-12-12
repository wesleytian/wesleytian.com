import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from "../../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import { Typography, Grid } from "@material-ui/core";
import { incrementViews, isTestEnvironment } from "../../lib/firebase";
import { format } from "date-fns";
import Disqus from "disqus-react";
import { makeStyles } from "@material-ui/core/styles";

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData
		}
	};
}

export default function Post({ postData }) {
	const classes = useStyles();
  // const [width, setWidth] = useState(window.innerWidth);
  // const isMobile = width <= 768;
	const { title, date, contentHtml } = postData;
	const disqusShortname = "www-wesleytian-com";
	const disqusConfig = {
		url: `${
			isTestEnvironment() ? "localhost:8000" : "https://wesleytian.com"
		}/posts/${postData.id}`,
		identifier: postData.id,
		title
	};

  // function handleWindowSizeChange() {
  //   setWidth(window.innerWidth);
  // }

  // useEffect(() => {
  //     window.addEventListener('resize', handleWindowSizeChange);
  //     return () => {
  //         window.removeEventListener('resize', handleWindowSizeChange);
  //     }
  // }, []);


	useEffect(() => {
		incrementViews(postData.id);
	}, []);
  
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Grid
					container
					item
					direction="column"
					xs={11}
					sm={10}
					md={7}
					className={styles.description}>
					<Typography style={{
            fontFamily: '"IBM Plex Sans", sans-serif', 
            // fontFamily: "libre franklin",
            // fontStyle: "italic",
            fontSize:"2.4rem"}}>{title}</Typography>
					<br />
					<Typography variant="body1" style={{fontFamily: '"IBM Plex Sans", sans-serif', fontSize: "1.2rem"}}>
						{format(new Date(date), "PPP")}
					</Typography>
					<br />
					<Typography variant="body1" paragraph>
						<div
							dangerouslySetInnerHTML={{
								__html: contentHtml,
                
							              }} style={{
                fontFamily: '"IBM Plex Sans", sans-serif',
                fontSize: "1rem",
                lineHeight: "1.6"
              }}></div>
					</Typography>
				</Grid>
			</main>
			{/* <div className={classes.root}>
				<Disqus.DiscussionEmbed
					shortname={disqusShortname}
					config={disqusConfig}
				/>
			</div> */}
		</div>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		[theme.breakpoints.down("sm")]: {
			marginLeft: "5%",
			marginRight: "5%"
		},
		[theme.breakpoints.between("sm", "md")]: {
			marginLeft: "10%",
			marginRight: "10%"
		},
		[theme.breakpoints.up("md")]: {
			marginLeft: "10%",
			marginRight: "10%"
		}
	}
}));
