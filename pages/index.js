import React, { useState, useEffect } from "react";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import { getViews } from "../lib/firebase";
import Footer from "./Footer";
import Divider from "./Divider";

export default function IndexPage() {
  const [, setViews] = useState(0);

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
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingLeft: "1rem",
    paddingRight: "1rem"
  };

  const textContainerStyle = {
    maxWidth: "650px",
    margin: "0 auto"
  };

  const mediaQueryStyle = `
    @media only screen and (max-width: 768px) {
      #text-container {
        max-width: 90%;
      }
    }
  `;

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
          <div styles={{ float: "left" }}></div>

          {/* <p>Profile:</p> */}
          <p>Name: Wesley Y. Tian (田)</p>

          <Divider />
          <p>Species: Homo sapien</p>
          {/* <p>Eye color: brown</p>
          <p>Hair color: black</p> */}
          <p>Ethnicity: Han Chinese</p>
          {/* <p>Sex: ♂</p> */}
          <p>Birthplace: Silicon Valley (technically Mountain View)</p>
          <p>Birthday: April 22 (same as Sam Altman and Oppenheimer) </p>
          <p>Age: 26</p>
          <p>Nationality: 🇺🇸</p>

          {/* <p>Horoscope: Taurus</p> */}
          {/* <p>Zodiac: OX</p> */}
          <Divider />

          <p>
            Company:{" "}
            <a href="https://www.aragon.ai/" target="_blank">
              Aragon.ai
            </a>
          </p>
          {/* <p>Company Size: 10</p> */}
          <p>Role: Co-Founder & CEO</p>
          {/* <p>Pet(s): N/A</p> */}
          <Divider />

          <details open="false">
            <summary>🗞 In the News</summary>
            <ul>
              <li>
                <a
                  href="https://www.businessinsider.com/why-aragon-ai-founder-chose-startup-accelerator-neo-over-ycombinator"
                  target="_blank">
                  Business Insider
                </a>
              </li>
              <li>
                <a
                  href="https://bigthink.com/business/anatomy-ai-startup-key-lessons-first-time-founders/?utm_medium=Social&utm_source=LinkedIn#Echobox=1700078940-3"
                  target="_blank">
                  Big Think
                </a>
              </li>
            </ul>
          </details>
          <Divider />

          {/* <h3></h3> */}
          <p>
            Note:{" "}
            <a>Links below take you to my corresponding journal entry. </a>
          </p>
          <details open="false">
            <summary>⚔️ Main Quests</summary>
            <ul>
              <details open="false">
                <summary> Phase 1: Explore</summary>
                <ul>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    Diamond rank in League of Legends (2014)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    <a href="/posts/gpa">Did not fail high School</a> (2015)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    Get into college (2015)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    Transfer to a top university (2017)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    Do AI research (2017)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    Get a Big Tech internship (2018)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    Get a Big Tech full-time offer (2018)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    Graduate (2019)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    Join a YC startup as employee #1 (2020)
                  </li>
                </ul>
              </details>

              <details open="false">
                <summary>Phase 2: Build</summary>
                <ul>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    Find a co-founder (2022)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    <a
                      href="https://twitter.com/wesleyytian/status/1590426084390363136"
                      target="_blank">
                      Start a company
                    </a>{" "}
                    (2022)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    Become{" "}
                    <a
                      href="https://twitter.com/wesleyytian/status/1629910705251172352"
                      target="_blank">
                      ramen profitable
                    </a>{" "}
                    (2023)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    Get into Y Combinator (2023)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    Raise money from a{" "}
                    <a
                      href="https://www.linkedin.com/feed/update/urn:li:activity:7084224156883435521/"
                      target="_blank">
                      top Silicon Valley VC
                    </a>{" "}
                    (2023)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    $100K annual revenue run rate (ARR) (2023)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    $1M ARR (2023)
                  </li>
                  <li>
                    <input type="checkbox" />
                    $10M ARR
                  </li>
                  <li>
                    <input type="checkbox" />
                    $100M ARR
                  </li>
                  <li>
                    <input type="checkbox" />
                    Found a unicorn
                  </li>
                </ul>
              </details>
              {/* <details>
                <summary>Phase 3: TBD</summary>
              </details> */}
            </ul>
          </details>
          <br />

          <details open="false">
            <summary>🗝️ Side Quests</summary>
            <ul>
              <li>
                Adventuring
                <ul>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    Climb Mt. Fuji (2015)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    <a href="/posts/yosemite" target="_blank">
                      Climb the Half Dome
                    </a>{" "}
                    (2015)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    <a href="/posts/olympus" target="_blank">
                      Climb Mt. Olympus
                    </a>{" "}
                    (2017)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    <a href="/posts/whitney" target="_blank">
                      Climb Mt. Whitney
                    </a>{" "}
                    (2019)
                  </li>
                  <li>
                    <details>
                      <summary>
                        <input type="checkbox" />
                        Complete the Explorer's Grand Slam
                      </summary>
                      <ul>
                        <li>
                          <input type="checkbox" />
                          Climb Mt. Kilimanjaro
                        </li>
                        <li>
                          <input type="checkbox" />
                          Climb Mt. Aconcagua
                        </li>
                        <li>
                          <input type="checkbox" />
                          Climb Mt. Elbrus
                        </li>
                        <li>
                          <input type="checkbox" />
                          Climb Mt. Puncak Jaya
                        </li>
                        <li>
                          <input type="checkbox" />
                          Climb Mt. Kosciuszko
                        </li>
                        <li>
                          <input type="checkbox" />
                          Climb Mt. Vinson
                        </li>
                        <li>
                          <input type="checkbox" />
                          Climb Mt. Denali
                        </li>
                        <li>
                          <input type="checkbox" />
                          Climb Mt. Everest
                        </li>
                        <li>
                          <input type="checkbox" />
                          Reach the South Pole
                        </li>
                        <li>
                          <input type="checkbox" />
                          Reach the North Pole
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </li>

              <li>
                Strength
                <ul>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    Do a pistol squat (2015)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    Do a one-arm push-up (2021)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    Bench press 225 lbs (2021)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    Do a muscle-up (2022)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    L-sit to handstand (2024)
                  </li>
                  <li>
                    <input type="checkbox" />
                    Squat 315 lbs
                  </li>
                  <li>
                    <input type="checkbox" />
                    Deadlift 405 lbs
                  </li>
                  {/* <li>Squat 3 plates.</li>
                <li>Deadlift 4 plates.</li>
                <li>Do a handstand for a minute.</li> */}
                </ul>
              </li>

              <li>
                Cardio
                <ul>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    Run a sub 6 minute mile (2013)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    Run a marathon (2021)
                  </li>
                  <li>
                    <input type="checkbox" defaultChecked="true" />
                    <a href="/posts/ironman" target="_blank">
                      Finish a full 140.6-mile Ironman triathlon
                    </a>{" "}
                    (2021)
                  </li>
                  <li>
                    <input type="checkbox" />
                    Run an ultramarathon
                  </li>
                  <li>
                    <input type="checkbox" />
                    Swim across the English channel
                  </li>
                </ul>
              </li>

              <li>
                <details>
                  <summary>Brazilian Jiu-Jitsu (BJJ)</summary>
                  <ul>
                    <li>
                      <input type="checkbox" />
                      Blue belt
                    </li>
                    <li>
                      <input type="checkbox" />
                      Black belt
                    </li>
                  </ul>
                </details>
              </li>

              {/* <li>👉 Become a millionaire.</li>
              <li>Become a billionaire.</li> */}
            </ul>
          </details>

          {/* <details>
            <summary>Intellectual Quests</summary>
            <ul>
              <li>Win a hackathon. (2017)</li>
              <li>Get a Ph.D.</li>
              <li>Learn Spanish.</li>
              <li>Learn Japanese.</li>
              <li>Chess master.</li>
            </ul>
          </details> */}

          {/* <details>
            <summary>Spiritual Quests</summary>
            <ul>
              <li>✅ Try marijuana.</li>
              <li>✅ Try magic mushrooms.</li>
              <li>✅ Try LSD.</li>
              <li>✅ Try MDMA.</li>
              <li>Try ayahuasca.</li>
              <li>Try Ketamine.</li>
              <li>Try Cocaine.</li>
              <li>Silent retreat</li>
              <li>7-day water fast</li>
            </ul>
          </details> */}
          <br />
          <details>
            <summary>📜 Retired Quests</summary>
            <ul>
              <li>Become a Navy SEAL.</li>
              <li>Become an US Air Force pilot.</li>
              <li>Become an astronaut.</li>
              <li>Get a Ph.D. in AI</li>
            </ul>
          </details>
          {/* <p>Skills:</p>
          <ul>
            <li>Juggling</li>
          </ul> */}
          {/* <Divider />
          <details open="false">
            <summary>📔 Journals</summary>
            <ul>
              <li>
                04/04/2022{" "}
                <a href="/posts/ironman">
                  The Hardest Thing I've Ever Done: Completing a 140.6-mile
                  Ironman Triathlon
                </a>
              </li>
              <li>
                08/10/2019{" "}
                <a href="/posts/whitney">
                  We Climbed the Tallest Mountain in the US and Drank Piss to
                  Survive
                </a>
              </li>

              <li>
                <a href="/posts/gpa">How I Nearly Failed High School</a> (2019)
              </li>

              <li>
                <a href="/posts/" target="_blank">
                  See All
                </a>
              </li>
            </ul>
          </details> */}

          {/* 
          <details>
            <summary>Favorite Wearables</summary>
            <ul>
              <li>Uniqlo</li>
              <li>Abercrombie & Fitch</li>
              <li>Blundstone</li>
              <li>Nike</li>
              <li>WHOOP</li>
            </ul>
          </details>

          <p>
            Favorite Consumables
            <ul>
              <li></li>
            </ul>
          </p> */}

          {/* <p>Core Memories</p> */}
          {/* <br /> */}

          <section>
            {/* <p>Hi, welcome to my personal website.</p>
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
                Aragon.ai
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
              , and other angels We also received an offer from Y Combinator,
              which we turned down. Read my viral{" "}
            
              (1M+ impressions) describing my decision-making process. I was
              also interviewed for{" "}
              
              .
            </p> */}
          </section>
          <br />
          {/* <Divider /> */}
          <section id="story">
            <details>
              <summary>✈️ World Travel Log</summary>
              <p>Continents Visited: 3/7</p>
              <p>Countries Lived In: USA, Taiwan, China</p>
              <p>Countries Visited: 22/195 (11%)</p>
              <ul>
                <li>2010: Indonesia, Singapore</li>
                <li>2011: </li>
                <li>2012: Philippines</li>
                <li>2013: Nepal</li>
                <li>2014: Cambodia</li>
                <li>2015: Australia, Thailand, Japan</li>
                <li>2016: Italy, Vatican City, Greece</li>
                <li>2017: UAE</li>
                <li>2018: Japan (2), Canada</li>
                <li>2019: Mexico</li>
                <li>2020: Spain</li>
                <li>2021: Iceland</li>
                <li>2022: </li>
                <li>2023: France, United Kingdom</li>
                <li>2024: New Zealand</li>
              </ul>
            </details>
          </section>

          {/* <Divider /> */}
          {/* <details>
            <summary>Family</summary>
            <ul>
              <li>
                Jason Tian
                <a
                  href="https://www.linkedin.com/in/jason-tian-9b710512/"
                  target="_blank">
                  *
                </a>
              </li>
              <li>Robin Tian</li>
              <li>
                Jeni Ni
                <a href="https://www.instagram.com/thejenini/" target="_blank">
                  *
                </a>
              </li>
          
              <li>
                Wang Xudong 王旭东
                <a
                  href="https://baike.baidu.com/item/%E7%8E%8B%E6%97%AD%E4%B8%9C/13352093?fr=ge_ala"
                  target="_blank">
                  *
                </a>
              </li>
            </ul>
          </details>
          <br /> */}

          {/* <details>
            <summary>Friends</summary>
            <ul>
              <li>Henry Li</li>
              <li>
                Douglas Qian
                <a
                  href="https://www.linkedin.com/in/douglas-qian/"
                  target="_blank">
                  *
                </a>
              </li>
              <li>
                Edward Liu
                <a
                  href="https://www.linkedin.com/in/edwardwliu/"
                  target="_blank">
                  *
                </a>
              </li>
              <li>
                Henry Chan
                <a
                  href="https://www.linkedin.com/in/henry-chan261/"
                  target="_blank">
                  *
                </a>
              </li>
              <li>
                Andrew Chang
                <a
                  href="https://www.linkedin.com/in/andrewechang/"
                  target="_blank">
                  *
                </a>
              </li>
              <li>
                Nisch Tamang
                <a
                  href="https://www.linkedin.com/in/nischal-tamang/"
                  target="_blank">
                  *
                </a>
              </li>
              <li>
                Phillip Michalowski
                <a href="https://phillipmichalowski.com/" target="_blank">
                  *
                </a>
              </li>
              <li>
                Joe Breda
                <a href="https://joebreda.github.io/" target="_blank">
                  *
                </a>
              </li>
              <li>
                Rui Wang
                <a
                  href="https://www.cics.umass.edu/faculty/directory/wang_rui"
                  target="_blank">
                  *
                </a>
              </li>
              <li>
                Solomon Demmessie
                <a
                  href="https://www.linkedin.com/in/solomon-demmessie-974683107/"
                  target="_blank">
                  *
                </a>
              </li>
              <li>
                Letao Chen
                <a href="https://lokto.me/#/" target="_blank">
                  *
                </a>
              </li>
              <li>
                Victor Maher
                <a
                  href="https://www.linkedin.com/in/victor-maher/"
                  target="_blank">
                  *
                </a>
              </li>
              <li>
                Alex George
                <a
                  href="https://www.linkedin.com/in/-alexgeorge/"
                  target="_blank">
                  *
                </a>
              </li>
              <li>
                Jack Li
                <a href="https://jack-x.li/" target="_blank">
                  *
                </a>
              </li>
              <li>
                Daniel Frost
                <a href="https://frostdaniel.com/" target="_blank">
                  *
                </a>
              </li>
              <li>
                Akhil Nadendla
                <a href="https://www.linkedin.com/in/akh1ln/" target="_blank">
                  *
                </a>
              </li>
            </ul>
          </details> */}
          <Divider />
          <p>Last updated: 01-2024</p>
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
