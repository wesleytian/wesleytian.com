import React, { useState, useEffect } from "react";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import { getViews } from "../lib/firebase";
import Divider from "./Divider";
import Footer from "./Footer";
import Image from "next/image";
// import attached1 from "../public/posts/attached-1.jpg";
// import attached5 from "../public/posts/attached-2.jpg";
// import attached3 from "../public/posts/attached.jpg";
// import attached4 from "../public/posts/attached-4.jpg";
// import attached2 from "../public/posts/attached-5.jpg";
// import attached6 from "../public/posts/attached-6.jpg";
// import attached7 from "../public/posts/attached-7.jpg";
// import attached8 from "../public/posts/attached-10.jpg";
// import attached9 from "../public/posts/attached-9.jpg";

export default function IndexPage() {
  const [views, setViews] = useState(0);
  // const [isCollapsed, setIsCollapsed] = useState(true);
  // const [picsCollapsed, setPicsCollapsed] = useState(true);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetchViews();
  }, []);

  const fetchViews = async () => {
    const views = await getViews("gpa");
    setViews(views);
  };

  const containerStyle = {
    marginTop: "auto",
    marginBottom: "auto",
    paddingTop: "4rem",
    paddingBottom: "4rem",
    paddingLeft: "1rem",
    paddingRight: "1rem"
  };

  const textContainerStyle = {
    maxWidth: "600px",
    margin: "0 auto"
  };

  const mediaQueryStyle = `
    @media only screen and (max-width: 768px) {
      #text-container {
        max-width: 90%;
      }
    }
  `;

  const handleWritingClick = () => {
    window.open("/posts", "_blank");
  };

  const handleProjectsClick = () => {
    window.open("/projects", "_blank");
  };

  // const handleAragonClick = () => {
  //   window.open("https://www.aragon.ai/?utm-source=wesleytian.com", "_blank");
  // };

  return (
    <div style={containerStyle}>
      <style>{mediaQueryStyle}</style>
      <Head>
        <title>Wesley Tian</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="wesleytian.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="👋 Hey! I'm Wesley Tian." />
        <meta
          property="og:description"
          content="Welcome to my personal site."
        />
        <meta property="og:image" content={"/posts/ogimage.jpeg"} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <main id="text-container" style={textContainerStyle}>
        <div>
          <div styles={{ float: "left" }}>
            <img
              src="/posts/me.jpeg"
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "0.5rem",
                objectFit: "cover"
              }}
            />
            <h1 styles={{ position: "relative" }}>👋🏼 Hey! I'm Wesley Tian.</h1>
            <h3>I'm an AI startup founder/CEO, futurist, and Ironman.</h3>
          </div>

          <section>
            <Divider />
            <p>
              AI will be the biggest achievement of humankind. It's going to be
              bigger than the internet and we're living through it right now.
            </p>

            <p>I've been passionate about AI since I was 17.</p>
            <ul>
              <li>
                I did applied AI research under Prof. Jenna Wiens at the
                University of Michigan
              </li>
              <li>
                I wrote{" "}
                <a href="/projects/ai-paper.pdf" target="_blank">
                  From Human-Level AI to Superintelligent AI
                </a>{" "}
                under Prof. Rich Thomason
              </li>
              <li> I did some competitive machine learning (see below)</li>
            </ul>

            <p>
              I had the opportunity to pursue research, but I was jaded by
              academia, so I pursued the next impactful and challenging thing,
              startups.
            </p>
            <ul>
              <li> Founded a stock market for sports tickets (pre-seed)</li>
              <li>
                Helped found Virtually (YC S20) as employee #1, went through Y
                Combinator with the founder, and became their tech lead (now
                acquired)
              </li>
              <li>
                Scaled Fractional (YC W21) to ~100M valuation as engineer #3
              </li>
            </ul>

            <p>
              My company,{" "}
              <a
                href="https://www.aragon.ai/?utm_source=wesleytian-blog&utm_medium=blog_post&utm_campaign=business_referral"
                target="_blank">
                Aragon
              </a>
              , is an AI platform that generates photorealistic images of
              individuals. Our first product offers professional headshots. In
              months, we’ve exponentially grown to hundreds of thousands of
              users, mostly organically. We’ve also onboarded dozens of
              businesses–with thousands more in the pipeline. Our vision: unlock
              an era of hyper-personalization, where individuals become the
              models in marketing campaigns, online shopping experiences, and
              more.
            </p>
            <p>
              We're a lean but mighty team and are backed by{" "}
              <a href="https://www.neo.com/" target="_blank">
                Neo
              </a>
              ,{" "}
              <a href="https://www.zfellows.com/" target="_blank">
                Z Fellows
              </a>
              ,{" "}
              <a
                href="https://www.linkedin.com/in/erik-goldman/"
                target="_blank">
                Erik Goldman
              </a>
              , and other angels from{" "}
              <a href="https://openai.com/" target="_blank">
                OpenAI
              </a>
              , Vanta, Scale, Niantic, and many more. We also received an offer
              from Y Combinator, which we turned down. Read my viral{" "}
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7084224156883435521/"
                target="_blank">
                LinkedIn post
              </a>{" "}
              (1M+ impressions) describing my decision-making process. I was
              also interviewed for{" "}
              <a
                href="https://www.businessinsider.com/why-aragon-ai-founder-chose-startup-accelerator-neo-over-ycombinator"
                target="_blank">
                Business Insider
              </a>
              .
            </p>
            {/* 
            <p>
              My life goal is to accelerate the development of AI and eventually
              nuclear fusion. Development of AI technologies will further
              permeate the sciences, longevity research, robotics, and the
              commercialization of nuclear fusion. Nuclear propulsion is the
              only way we'll ever be able to escape our star system and explore
              the rest of the universe. Now wouldn't that be exciting?
            </p> */}

            {/* <p>
              Here's a sample of our work. These are 100% AI-generated. No human
              photographers involved.
            </p> */}
            {/* <div
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}>
              <Image
                src={attached1}
                alt="Remote Thermostat"
                width={197}
                height={351}
                style={{ borderRadius: "0.5rem" }}
              />
              <Image
                src={attached2}
                alt="Remote Thermostat"
                width={197}
                height={351}
                style={{ borderRadius: "0.5rem" }}
              />
              <Image
                src={attached3}
                alt="Remote Thermostat"
                width={197}
                height={351}
                style={{ borderRadius: "0.5rem" }}
              />
            </div> */}

            {/* {!picsCollapsed && (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "4px"
                  }}>
                  <Image
                    src={attached4}
                    alt="Remote Thermostat"
                    width={197}
                    height={351}
                    style={{ borderRadius: "0.5rem" }}
                  />
                  <Image
                    src={attached5}
                    alt="Remote Thermostat"
                    width={197}
                    height={351}
                    style={{ borderRadius: "0.5rem" }}
                  />
                  <Image
                    src={attached6}
                    alt="Remote Thermostat"
                    width={197}
                    height={351}
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "4px"
                  }}>
                  <Image
                    src={attached7}
                    alt="Remote Thermostat"
                    width={197}
                    height={351}
                    style={{ borderRadius: "0.5rem" }}
                  />
                  <Image
                    src={attached8}
                    alt="Remote Thermostat"
                    width={197}
                    height={351}
                    style={{ borderRadius: "0.5rem" }}
                  />
                  <Image
                    src={attached9}
                    alt="Remote Thermostat"
                    width={197}
                    height={351}
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
              </>
            )} */}
            {/* <div style={{ marginTop: "12px" }}>
              <p>All you need to do is upload a few selfies of yourself.</p>
              <button onClick={() => setPicsCollapsed(!picsCollapsed)}>
                {picsCollapsed ? "Show More" : "Hide"}
              </button>
              <button
                style={{ marginLeft: "12px" }}
                onClick={handleAragonClick}>
                Create Yours Now
              </button>
            </div> */}
          </section>
          <section id="projects-and-awards">
            <Divider />
            <h2>My Projects/Awards</h2>
            <ul style={{ lineHeight: "1.5" }}>
              <li>
                Remote Thermostat{" "}
                <a href="/posts/ac_hack" target="_blank">
                  Background
                </a>{" "}
                <div
                  style={{
                    width: "1px",
                    height: "10px",
                    backgroundColor: "#333",
                    display: "inline-block",
                    margin: "0 10px"
                  }}></div>
                <a
                  href="https://github.com/wesleytian/thermostat-pro"
                  target="_blank">
                  GitHub
                </a>
                {/* <div
                  style={{
                    width: "1px",
                    height: "10px",
                    backgroundColor: "#333",
                    display: "inline-block",
                    margin: "0 10px"
                  }}></div> */}
                {/* <a
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    setIsCollapsed(!isCollapsed);
                  }}>
                  {isCollapsed ? "Show Pics" : "Hide Pics"}
                </a>
                {!isCollapsed && ( */}
                <div>
                  <span style={{ marginRight: "0.5rem" }}>
                    <Image
                      src="/posts/thermostat-pro-prototype2.png"
                      alt="Remote Thermostat"
                      width={284}
                      height={200}
                      style={{ borderRadius: "0.5rem" }}
                    />
                  </span>
                  <Image
                    src="/posts/remote-thermostat-v1.0.jpeg"
                    alt="Remote Thermostat"
                    width={200}
                    height={200}
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                {/* )} */}
              </li>
              <div></div>
              <li>
                Final Project Competition @ EECS 445: Machine Learning (🏆
                #1/205 students)
              </li>
              <li>
                White Cane @ MHacks 11{" "}
                <a href="https://devpost.com/software/unblind" target="_blank">
                  Devpost
                </a>
              </li>
              <li>
                Fashion Filtr @ HampHack 2017 (🏆 #1){" "}
                <a
                  href="https://devpost.com/software/fashion-filtr"
                  target="_blank">
                  Devpost
                </a>
              </li>

              <li>
                Digital Interview Experience @ Fidelity Investments Hackathon
                2017 (🏆 #1/12 teams)
              </li>
              <li>
                ASSISTments Data Mining Competition (🏆 #3/74 teams){" "}
                <a href="/projects/assistments-report.pdf" target="_blank">
                  Report
                </a>
                <div
                  style={{
                    width: "1px",
                    height: "10px",
                    backgroundColor: "#333",
                    display: "inline-block",
                    margin: "0 10px"
                  }}></div>
                <a
                  href="https://jedm.educationaldatamining.org/index.php/JEDM/article/view/486"
                  target="_blank">
                  Publication
                </a>
              </li>

              <li>
                Google Analytics Customer Revenue Prediction Kaggle Competition
                (#123/1084 teams){" "}
                <a
                  href="https://www.kaggle.com/competitions/ga-customer-revenue-prediction/"
                  target="_blank">
                  Details
                </a>
              </li>
              <li>
                UN Millenium Development Goals DrivenData Competition (#17/2000+
                teams)
              </li>
            </ul>
            {/* <button onClick={handleProjectsClick}>See All Projects</button> */}
          </section>

          <section id="writing">
            <Divider />
            <h2>My Writing</h2>
            <p>Over 30,000 total reads.</p>
            <ul>
              <li>
                <a href="/posts/ironman">
                  The Hardest Thing I've Ever Done: Completing a 140.6-mile
                  Ironman Triathlon
                </a>
                <Image
                  src="/posts/ironman-finish.JPG"
                  alt="Ironman Finish"
                  width={420}
                  height={420}
                  style={{ borderRadius: "0.5rem" }}
                />
              </li>
              <li>
                {/* 08/2019{" "} */}
                <a href="/posts/whitney">
                  We Climbed the Tallest Mountain in the US and Drank Piss to
                  Survive
                </a>
              </li>

              <li>
                <a href="/posts/gpa">How I Nearly Failed High School</a>{" "}
                {/* <p>Though I had a 1.9 GPA in high school</p> */}
                {/* <span style={{ color: "gray" }}>(views: {views})</span> */}
              </li>
            </ul>
            <button onClick={handleWritingClick}>See Other Writing</button>
          </section>

          <section id="story">
            <Divider />
            <h2>My Influences</h2>
            {/* <p>Some of my life-defining experiences:</p> */}
            <ul>
              <li>
                <p>
                  I've moved around a lot growing up. Places where I've lived:
                </p>
                <ul>
                  <li>Born in Mountain View, CA</li>
                  <li>Milpitas, CA (5 years)</li>
                  <li>Oregon (1 year)</li>
                  <li>Taiwan (2 years)</li>
                  <li>Oregon (1 year)</li>
                  <li>Shanghai (8 years)</li>
                  <li>Massachusetts (2 years)</li>
                  <li>Michigan (3 years)</li>
                  <li>Nevada (1 year)</li>
                  <li>Milpitas, CA (1 year)</li>
                  <li>I currently live in San Francisco, CA (1 year)</li>
                </ul>
                <p>
                  These moves taught me adaptability, resilience, and
                  open-mindedness.
                </p>
              </li>

              <li>
                <p>
                  One of my biggest inspirations is my father, who was forced to
                  spend his teenage years manually farming due to China's
                  Cultural Revolution. He carried buckets of water on his
                  shoulders to his family everyday and has multiple scars on his
                  hands from using farming scythes. He never got the chance to
                  finish middle or high school. Through extreme grit, he
                  eventually made it to the USA, studied electrical engineering,
                  dropped out of his PhD, and moved to Silicon Valley to
                  contribute to the semiconductor and computing industry.
                  Against all odds, he's now the CEO of a public semiconductor
                  company.
                </p>
                <p>
                  He's been an inspiration for my interest in deep tech, my
                  ambition for advancing humanity, and the belief that anything
                  is possible.
                </p>
              </li>
              <li>Elon Musk</li>
              <li>The many other people I've met in my life.</li>
              {/* <li>
                <p>
                  Other inspirations in my life include my sister, Jeni, who is
                  also an entrepreneur and co-founded Frilly; my grandparents,
                  one of whom is a famous painter and art professor, and the
                  other a famous musician, composer, and conductor; and of
                  course, Elon Musk, one of the greatest entrepreneurs of all
                  time.
                </p>
              </li> */}

              {/* <li>
                During high school, I spent a summer attending military camp in
                Kentucky. It was as legit as you can imagine. We all got
                buzzcuts, the bathroom stalls had no doors, we had no access to
                electronics for the entire summer, we had to fold hospital
                corners every morning, we had PT at 5 am every morning, and.
              </li> */}

              {/* <li>I grew up playing tons of sports. </li> */}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
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
