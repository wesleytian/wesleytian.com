import styles from "../styles/Home.module.css";
import React, {useState, useEffect} from "react";
import Head from "next/head";
import { Grid, Typography } from "@material-ui/core";
import MostPopular from "../components/MostPopular";
import Header from "../components/Header";
import { getSortedPostsData } from "../lib/posts";
import { getViews } from "../lib/firebase";
import { Icon, IconButton } from "@mui/material";
import { LinkedIn, Twitter } from "@mui/icons-material";

export default function IndexPage() {

 	const [views, setViews] = useState(0);

	useEffect(() => {
		fetchViews();
	}, []);

	const fetchViews = async () => {
		const views = await getViews("gpa");
		setViews(views);
	};

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="wesleytian.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="👋🏼 Hey! I'm Wesley Tian." />
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
                🧑🏻‍💻 During the day, I'm a software engineer at an early-stage {" "}
                <a className="" href="https://techcrunch.com/2021/11/22/fractional-lands-5-5-million-to-let-friends-and-strangers-invest-in-real-estate-together/">
             real estate startup
                </a>. At night, I read and write about startups, nuclear fusion, space, and nutrition.
              </p>
              <div>
              <p>
                🌎 I'm currently living in a co-living house in San Francisco, but I grew up in San Jose, CA; metro Portland, Oregon; Taipei, Taiwan; and Shanghai, China.
              </p>
            </div>
              <p>
                Previously, I helped found {" "}
                <a className="" href="https://www.edsurge.com/news/2020-09-28-a-shopify-for-online-schools-raises-1-75m-led-by-tiger-global">
                  Virtually
                </a>
                , where I wrote half the codebase and helped scale the product from
                0 to over 10K users. I went through Y Combinator's summer 2020 batch with the founder and we raised $1.7M in
                funding. 
                
               
              </p>
              <p> I also did software engineering at Microsoft and double majored in
                computer science and data science at the University of Michigan.</p>
            </div>

          </div>
          <div><p>I enjoy writing and reflecting on my life:</p>
            <ul>
              <li>
                <a href="/posts/gpa">I nearly failed high school.</a> (views: {views})</li>
              <li><a href="/posts/whitney">I convinced 3 friends to climb the tallest mountain in the contiguous US with me and we had to drink piss to survive.</a></li>
              <li>🆕 <a href="/posts/ironman">I did an Ironman (a 140.6-mile race).</a></li>
              <li><a href="/posts/reno">Why I moved to Reno, NV.</a></li>
              
            </ul>
            You can find some of my other less polished pieces <a href="/posts">here</a>.
          </div>
          <div>
            <p>Follow me on Twitter<a href="https://twitter.com/wesleyytian"> here</a>, connect with me on LinkedIn <a href="https://linkedin.com/in/wesleytian">here</a>, and email me <a href="mailto:tian.wesley@gmail.com">here</a>.</p>
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
