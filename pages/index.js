import React, { useState, useEffect } from "react";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import { getViews } from "../lib/firebase";
import Script from "next/script";

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
                  I'm the CEO and co-founder of Aragon AI, an applied AI company
                  currently in stealth.
                </p>
              </div>
              <p>
                Previously, I was the 3rd engineer at{" "}
                <a className="" href="https://www.fractional.app/">
                  Fractional (YC W21)
                </a>
                , a proptech company which has raised over $20M. Before that, I
                helped found{" "}
                <a className="" href="https://www.tryvirtually.com/">
                  Virtually (YC S20)
                </a>{" "}
                an edtech company as the 1st engineer. There, I wrote half the
                codebase and scaled the product from 0 to over 10,000 paying
                students.
              </p>
              <p>
                I've also worked at Microsoft, Clinc AI, and Fidelity
                Investments. I studied computer science and data science at the
                University of Michigan.
              </p>
              <br></br>
              <p>
                📍 I'm originally from California but I've also lived in Oregon,
                Taipei, Shanghai, Massachusetts, Michigan, and Nevada. I
                currently live in San Francisco.
              </p>
            </div>
          </div>
          <br></br>
          <div>
            <p>✍️ Sometimes, I like to write:</p>
            <ul>
              <li>
                05/2022 <a href="/posts/sf">I ❤️ SF</a>
              </li>

              <li>
                11/2021{" "}
                <a href="/posts/ironman">
                  The Hardest Thing I've Ever Done: Completing a 140.6-mile
                  Ironman Triathlon Race
                </a>
              </li>

              {/* <li>
                07/2020{" "}
                <a href="/posts/reno">Why You Should Move to Reno, Nevada</a>
              </li> */}

              <li>
                08/2019{" "}
                <a href="/posts/whitney">
                  We Climbed the Tallest Mountain in the Contiguous US and Had
                  To Drink Piss to Survive
                </a>
              </li>

              <li>
                06/2019 <a href="/posts/gpa">How I Nearly Failed High School</a>{" "}
                <span style={{ color: "gray" }}>(views: {views})</span>
              </li>

              <li>
                12/2017{" "}
                <a href="/projects/ai-paper.pdf">
                  From Human-Level Artificial Intelligence to Superintelligent
                  Artificial Intelligence
                </a>
              </li>
            </ul>

            <p>
              You can find some of my other pieces <a href="/posts">here</a>.
            </p>
          </div>

          <div>
            <a href="/projects">Here</a> are some fun projects that I've worked
            on.
          </div>

          <div>
            <p>
              See my LinkedIn (
              <a href="https://linkedin.com/in/wesleytian">wesleytian</a>),
              Twitter (
              <a href="https://twitter.com/wesleyytian">@wesleyytian</a>) or
              shoot me an email (
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
