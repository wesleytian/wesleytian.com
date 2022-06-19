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
                🌎 I'm currently living in San Francisco, but I grew up in San Jose, CA; metro Portland, Oregon; Taipei, Taiwan; and Shanghai, China.
              </p>
              <div>
              <p>
                🧑🏻‍💻 I spend most of my time helping build a platform for purchasing fractional ownership of homes at an {" "}
                <a className="" href="https://techcrunch.com/2021/11/22/fractional-lands-5-5-million-to-let-friends-and-strangers-invest-in-real-estate-together/">
                early-stage startup
                </a>.
              </p>
            </div>
              <p>
                Previously, I helped found an {" "}
                <a className="" href="https://www.edsurge.com/news/2020-09-28-a-shopify-for-online-schools-raises-1-75m-led-by-tiger-global">
                  edtech startup
                </a>
                , where I wrote half the codebase, led an engineering team of 4, and scaled the product from
                0 to over 10K users. I went through Y Combinator's summer 2020 batch with the founder and we raised $1.7M in
                funding. 
                
               
              </p>
              <p> I also did software engineering at Microsoft and double majored in
                computer science and data science at the University of Michigan.</p>
            </div>

          </div>
          <div>
            <p>I sometimes post my reflections on life:</p>
            <ul>
              <li>May, 2022 <a href="/posts/sf">I fucking love SF</a></li>

              <li>November, 2021 <a href="/posts/ironman">I did a 140.6-mile Ironman race (draft)</a></li>

              <li>July, 2020 <a href="/posts/reno">Why did I move to to Reno, Nevada?</a></li>

              <li>August, 2019 <a href="/posts/whitney">I convinced 3 friends to climb the tallest mountain in the contiguous US with me and we had to drink piss to survive</a></li>
              
              <li>
                June 2019 <a href="/posts/gpa">I nearly failed high school</a> <span style={{color: "gray"}}>(views: {views})</span></li>
              
            </ul>

            <p>You can find some of my other pieces <a href="/posts">here</a>.</p>
          </div>
          <div>
            <p>Follow me on Twitter<a href="https://twitter.com/wesleyytian"> here</a> (I'll follow you back), connect with me on LinkedIn <a href="https://linkedin.com/in/wesleytian">here</a>, and email me <a href="mailto:tian.wesley@gmail.com">here</a>.</p>
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
