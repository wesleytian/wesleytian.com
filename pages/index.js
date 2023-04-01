import React, { useState, useEffect } from "react";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import { getViews } from "../lib/firebase";
import Divider from "./Divider";
import Footer from "./Footer";
import Image from "next/image";
import attached1 from "../public/posts/attached-1.jpg";
import attached5 from "../public/posts/attached-2.jpg";
import attached3 from "../public/posts/attached.jpg";
import attached4 from "../public/posts/attached-4.jpg";
import attached2 from "../public/posts/attached-5.jpg";
import attached6 from "../public/posts/attached-6.jpg";
import attached7 from "../public/posts/attached-7.jpg";
import attached8 from "../public/posts/attached-10.jpg";
import attached9 from "../public/posts/attached-9.jpg";

export default function IndexPage() {
  const [views, setViews] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [picsCollapsed, setPicsCollapsed] = useState(true);

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

  const handleAragonClick = () => {
    window.open("https://www.aragon.ai/?utm-source=wesleytian.com", "_blank");
  };

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
            <h3>I'm an AI startup founder, futurist, and Ironman.</h3>
          </div>

          <section>
            <Divider />
            <p>
              AI will be the biggest achievement of humankind. We're living
              through it right now.
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
                  From Human-Level A.I. to Superintelligent A.I.: Scenarios,
                  Paths, and Counter Arguments
                </a>{" "}
                under Prof. Rich Thomason
              </li>
              <li>
                {" "}
                I've won multiple machine learning competitions (see below)
              </li>
            </ul>

            <p>After college, I helped build a few startups:</p>
            <ul>
              <li> Raised money to start a stock market for sports tickets</li>
              <li> Helped found Virtually (YC S20) as employee #1</li>

              <li>
                {" "}
                Went through the Y Combinator startup accelerator with
                Virtually's founder and raised $2M from Tiger Global
              </li>
              <li>
                {" "}
                Helped Fractional raised their $20M Series A as employee #4
              </li>
            </ul>

            <p>
              Now I'm returning to my AI passion. My goal is accelerate the
              development of AI. AI will further accelerate science, longevity
              research, robotics, and the commercialization of nuclear fusion.
              Nuclear propulsion is the only way we'll ever be able to escape
              our star system and explore the rest of the universe.
            </p>

            <p>
              We're working in the AI image space right now. Recently, my
              co-founder and I built the very first{" "}
              <a
                href="https://www.aragon.ai/?utm-source=wesleytian.com"
                target="_blank">
                AI headshots business
              </a>{" "}
              using cutting-edge{" "}
              <a href="https://arxiv.org/abs/2208.12242" target="_blank">
                AI research
              </a>
              . We recently became profitable. I'm excited for what's next.
            </p>
            <p>
              Here's a sample of our work. These are 100% AI-generated. No human
              photographers involved.
            </p>
            <div
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
            </div>

            {!picsCollapsed && (
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
            )}
            <div style={{ marginTop: "12px" }}>
              <p>All you need to do is upload a few selfies of yourself.</p>
              <button onClick={() => setPicsCollapsed(!picsCollapsed)}>
                {picsCollapsed ? "Show More" : "Hide"}
              </button>
              <button
                style={{ marginLeft: "12px" }}
                onClick={handleAragonClick}>
                Create Yours Now
              </button>
            </div>
          </section>
          <section id="projects-and-awards">
            <Divider />
            <h2>My Projects/Awards</h2>
            <ul style={{ lineHeight: "1.5" }}>
              <li>
                Remote Thermostat{" "}
                <a href="/posts/ac_hack" target="_blank">
                  Background
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
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    setIsCollapsed(!isCollapsed);
                  }}>
                  {isCollapsed ? "Show Pics" : "Hide Pics"}
                </a>
                {!isCollapsed && (
                  <Image
                    src="/posts/remote-thermostat-v1.0.jpeg"
                    alt="Remote Thermostat"
                    width={420}
                    height={420}
                    style={{ borderRadius: "0.5rem" }}
                  />
                )}
              </li>
              <div></div>
              <li>
                Final Project Competition @ EECS 445: Machine Learning (🏆
                #1/205)
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
                2017 (🏆 #1/12)
              </li>
              <li>
                ASSISTments Data Mining Competition (🏆 #3/74){" "}
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
                (#125/1089)
              </li>
              <li>
                UN Millenium Development Goals DrivenData Competition
                (#17/2000+)
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
                  How We Climbed the Tallest Mountain in the US and Drank Piss
                  to Survive
                </a>
              </li>

              <li>
                <a href="/posts/gpa">How I Nearly Failed High School</a>{" "}
                {/* <span style={{ color: "gray" }}>(views: {views})</span> */}
              </li>
            </ul>
            <button onClick={handleWritingClick}>See Other Writing</button>
          </section>

          <section id="story">
            <Divider />
            <h2>My Story</h2>
            <p>Work in progress.</p>
            {/* <p>Determination, Ambition, and Resilience</p>
            <ul>
              <li>
                Born in the heart of Silicon Valley, I grew up inspired by my
                father's story from a farmer in rural China to the CEO of a
                publicly traded semiconductor company.
              </li>
              <li>
                As a result, I also lived in Oregon, Taiwan, and Shanghai.
              </li>
              <li>
                This inspiration combined with my experiences growing up all
                around the world fostered my adapatability and resilience while
                nurturing my love for challenges and self-improvement, such as
                my pursuit of completing the world's hardest race, an Ironman.
              </li>
            </ul>

            <ul>
              <li></li>
            </ul>
            <p>
              My high school journey was not without its obstacles, as I faced
              academic difficulties with a GPA once dipping to 1.9 due to my
              commitment to becoming a pro League of Legends player. However, I
              overcame these challenges through determination and hard work,
              eventually attending the University of Massachusetts and later
              transferring to the University of Michigan. There, I was honored
              to lead a competitive machine learning team as president.
            </p>

            <ul>
              <li>Since </li>
            </ul>
            <p>
              My professional journey includes various enriching experiences,
              from interning at Microsoft to being a founding member of 2 Y
              Combinator startups, completing the selective Z Fellows program,
              and gaining valuable life skills through my US military
              involvement in high school.
            </p> */}
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
