import styles from "../styles/Home.module.css";
import React from "react";
import Head from "next/head";
import { Grid, Typography } from "@material-ui/core";
import MostPopular from "../components/MostPopular";
import Header from "../components/Header";
import { getSortedPostsData } from "../lib/posts";

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="wesleytian.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="👋🏼 Hey! I'm Wesley." />
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
                🌎 I was born in Mountain View, CA and grew up in Milpitas, CA; West Linn, Oregon; Taipei, Taiwan; and Shanghai, China. Since then, I've also lived in Amherst, MA; Ann Arbor; MI; and Reno, NV. Last year, I moved back to Milpitas. I'm currently living in San Francisco.
              </p>
            </div>
            <div>
              <p>
                🧑🏻‍💻 I'm a software engineer at{" "}
                <a className="" href="https://techcrunch.com/2021/11/22/fractional-lands-5-5-million-to-let-friends-and-strangers-invest-in-real-estate-together/">
                  Fractional
                </a>
                , a seed-stage fintech startup.
              </p>
              <p>
                Previously, I helped found {" "}
                <a className="" href="https://www.edsurge.com/news/2020-09-28-a-shopify-for-online-schools-raises-1-75m-led-by-tiger-global">
                  Virtually
                </a>
                , where I wrote a ton of code and helped scale the product from
                0 to 10K+ users. I went through Y Combinator's summer 2020 batch with the founder and we raised $2M in
                funding.
              </p>
              <p>
                Before that, I was a software engineer at Microsoft and I studied
                computer science and data science at the University of Michigan.
              </p>
            </div>
            <div>
              🏔️ I currently spend my free time exploring San Francisco. Last year, I spent most of my time training for and finishing an <a href="https://en.wikipedia.org/wiki/Ironman_Triathlon">Ironman Triathlon</a>, a 140.6-mile race.
            </div>
          </div>
          <div>
            <p>You can connect with me on LinkedIn <a href="https://linkedin.com/in/wesleytian">here</a> or email me <a href="mailto:tian.wesley@gmail.com">here</a>!</p>
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
