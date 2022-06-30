import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import { getViews } from "../lib/firebase";

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
    <div>
      <Head>
        <title>Wesley Tian</title>
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
      <main
        style={{
          marginTop: "auto",
          marginBottom: "auto",
          marginLeft: "auto",
          marginRight: "auto",

          paddingTop: "4rem",
          paddingBottom: "4rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",

          maxWidth: "600px"
        }}>
        <div>
          <div styles={{ float: "left" }}>
            <img
              src="/posts/me.jpeg"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50px",
                objectFit: "cover"
              }}
            />
            <h1 styles={{ position: "relative" }}>👋🏼 Hey! I'm Wesley.</h1>
          </div>
          <div>
            <div>
              <div>
                <p>
                  🧑🏻‍💻 During the day I build software to help homies buy homes together via <a
                    className=""
                    href="https://techcrunch.com/2021/11/22/fractional-lands-5-5-million-to-let-friends-and-strangers-invest-in-real-estate-together/">
                    Fractional
                  </a>
                  .
                </p>
				<p>
					In the evenings and weekends, I enjoy playing basketball, working on my handstand, reading about nuclear fusion, listening to new albums, and working on side projects.
				</p>
              </div>
              <p>
                Previously, I helped found an{" "}
                <a
                  className=""
                  href="https://www.edsurge.com/news/2020-09-28-a-shopify-for-online-schools-raises-1-75m-led-by-tiger-global">
                  edtech startup
                </a>
                , where I wrote half the codebase, led an engineering team of 4,
                and scaled the product from 0 to over 10K users. I went through
                Y Combinator's summer 2020 batch with the founder and we raised
                $1.7M in funding.
              </p>
              <p>
                I was also briefly a software engineer at Microsoft and I studied computer
                science and data science at the University of Michigan.
              </p>
              <p>
                📍 I'm currently based out of San Francisco, but I'm originally
                from Mountain View, California and I grew up in Milpitas,
                California; West Linn, Oregon; Taipei, Taiwan; Shanghai, China;
                Amherst, Massachusetts; Ann Arbor, Michigan; and Reno, Nevada
                (in that order 😆).
              </p>
            </div>
          </div>
          <div>
            <p>✍️ I sometimes write for fun:</p>
            <ul>
              <li>
                05/2022 <a href="/posts/sf">I &lt;3 SF</a>
              </li>

              <li>
                11/2021{" "}
                <a href="/posts/ironman">
                  The Hardest Thing I've Ever Done: Completing a 140.6-mile Ironman Triathlon Race
                </a>
              </li>

              <li>
                07/2020{" "}
                <a href="/posts/reno">Why You Should Move to Reno, Nevada</a>
              </li>

              <li>
                08/2019{" "}
                <a href="/posts/whitney">	
                  We Climbed the Tallest Mountain in the 
                  Contiguous US and Had To Drink Piss to Survive
                </a>
              </li>

              <li>
                06/2019 <a href="/posts/gpa">How I Nearly Failed High School</a>{" "}
                <span style={{ color: "gray" }}>(views: {views})</span>
              </li>
            </ul>

            <p>
              You can find some of my other pieces <a href="/posts">here</a>.
            </p>
          </div>
          <div>
            <p>
              You can also reach me on Twitter (<a href="https://twitter.com/wesleyytian">wesleyytian</a>),
              LinkedIn (
              <a href="https://linkedin.com/in/wesleytian">wesleytian</a>), or
              via email (
              <a href="mailto:tian.wesley@gmail.com">tian.wesley@gmail.com</a>).
            </p>
          </div>
        </div>
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
