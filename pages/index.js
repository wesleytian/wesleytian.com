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
          <p>Ethnicity: Han</p>
          {/* <p>Sex: ♂</p> */}
          <p>
            Birthday: April 22
            <a
              href="https://www.businessinsider.com/sam-altman-openai-manhattan-project-scale-ambition-agi-oppenheimer-2023-4#:~:text=%22Technology%20happens%20because%20it%20is%20possible%2C%22%20Altman%20reportedly%20said%2C%20adding%20that%20he%20and%20Oppenheimer%20shared%20the%20same%20April%2022%20birthday%2C%20per%20The%20Times.%C2%A0"
              target="_blank">
              *
            </a>
          </p>
          <p>
            Birthplace: Silicon Valley
            <a
              href="https://en.wikipedia.org/wiki/Mountain_View,_California"
              target="_blank">
              *
            </a>
          </p>
          <p>Age: 26</p>

          {/* <p>Horoscope: Taurus</p> */}
          {/* <p>Zodiac: OX</p> */}
          <Divider />

          <p>
            Company: Aragon.ai
            <a href="https://www.aragon.ai/" target="_blank">
              *
            </a>
          </p>
          {/* <p>Company Size: 10</p> */}
          <p>Role: Co-Founder & CEO</p>
          {/* <p>Pet(s): N/A</p> */}
          <Divider />

          <details open="false">
            <summary>🗞 News</summary>
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
          <details open="false">
            <summary>⚔️ Main Quests</summary>
            <ul>
              <details open="false">
                <summary> Phase 1: Explore</summary>
                <ul>
                  <li>☑️ Diamond rank in League of Legends (2014)</li>
                  <li>☑️ Get into a college. (2015)</li>
                  <li>
                    ☑️ Transfer to a top university.
                    <a
                      href="https://en.wikipedia.org/wiki/List_of_University_of_Michigan_alumni"
                      target="_blank">
                      *
                    </a>{" "}
                    (2017)
                  </li>
                  <li>☑️ Do AI research.</li>
                  <li>
                    ☑️ Get a a Big Tech
                    <a
                      href="https://en.wikipedia.org/wiki/Big_Tech"
                      target="_blank">
                      *
                    </a>{" "}
                    internship.
                  </li>
                  <li>☑️ Get a Big Tech full-time offer.</li>
                  <li>☑️ Graduate. (2019)</li>
                  <li> Get a Ph.D. in AI</li>
                  <li>☑️ Join a YC startup as employee #1. (2020)</li>
                </ul>
              </details>

              <details open="false">
                <summary>👉 Phase 2: Build</summary>
                <ul>
                  <li>☑️ Find a good co-founder. (2022)</li>
                  <li>☑️ Start a company. (2022)</li>
                  <li>
                    ☑️ Become ramen profitable.
                    <a
                      href="https://twitter.com/wesleyytian/status/1629910705251172352"
                      target="_blank">
                      📝
                    </a>{" "}
                    (2023)
                  </li>
                  <li>
                    ☑️ Get into Y Combinator.
                    <a href="https://www.ycombinator.com/" target="_blank">
                      *
                    </a>{" "}
                    (2023)
                  </li>
                  <li>
                    ☑️ Raise money from top Silicon Valley VC
                    <a href="https://neo.com/" target="_blank">
                      *
                    </a>{" "}
                    (2023)
                  </li>
                  <li>☑️ $100K annual revenue run rate (ARR) (2023)</li>
                  <li>☑️ $1M ARR (2023)</li>
                  <li>👉 $10M ARR</li>
                  <li>$100M ARR</li>
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
                  <li>☑️ Climb Mt. Fuji. (05-2015)</li>
                  <li>
                    ☑️ Climb Half Dome. (09-2015)
                    <a href="/posts/yosemite" target="_blank">
                      📝
                    </a>
                  </li>
                  <li>
                    ☑️ Climb Mt. Olympus. (05-2017)
                    <a href="/posts/olympus" target="_blank">
                      📝
                    </a>
                  </li>
                  <li>
                    ☑️ Climb Mt. Whitney. (09-2019)
                    <a href="/posts/whitney" target="_blank">
                      📝
                    </a>
                  </li>
                  <li>
                    <details>
                      <summary>
                        Complete the Explorer's Grand Slam
                        <a
                          href="https://en.wikipedia.org/wiki/Explorer%27s_Grand_Slam"
                          target="_blank">
                          *
                        </a>
                      </summary>
                      <ul>
                        <li>👉 Climb Mt. Kilimanjaro.</li>
                        <li>Climb Mt. Aconcaguo.</li>
                        <li>Climb Mt. Elbrus.</li>
                        <li>Climb Mt. Kilimanjaro.</li>
                        <li>Climb Mt. Denali.</li>
                        <li>Climb Mt. Everest.</li>
                        <li>Reach the South Pole.</li>
                        <li>Reach the North Pole.</li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </li>

              <li>
                Strength
                <ul>
                  <li>☑️ Do a pistol squat.</li>
                  <li>☑️ Do a one-arm push-up.</li>
                  <li>☑️ Bench press 225 lbs.(2021)</li>
                  <li>☑️ Do a muscle-up. (2022)</li>
                  <li>☑️ L-sit to handstand push-up (01-2024)</li>
                  {/* <li>Squat 3 plates.</li>
                <li>Deadlift 4 plates.</li>
                <li>Do a handstand for a minute.</li> */}
                </ul>
              </li>

              <li>
                Endurance
                <ul>
                  <li>☑️ Run a marathon. (11-2021)</li>
                  <li>
                    ☑️ Finish a full 140.6-mile Ironman triathlon. (11-2021)
                    <a href="/posts/ironman" target="_blank">
                      📝
                    </a>
                  </li>
                  {/* <li>Swim the English channel.</li> */}
                </ul>
              </li>

              <li>
                <details>
                  <summary>Brazilian Jiu-Jitsu (BJJ)</summary>
                  <ul>
                    <li>Blue belt.</li>
                    <li>Black belt.</li>
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
            </ul>
          </details>
          {/* <p>Skills:</p>
          <ul>
            <li>Juggling</li>
          </ul> */}
          <Divider />
          <details>
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
                06/12/2019{" "}
                <a href="/posts/gpa">How I Nearly Failed High School</a>{" "}
              </li>

              <a href="/posts/" target="_blank">
                See All
              </a>
            </ul>
          </details>

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
              <summary>✈️ Travel Log (Incomplete)</summary>
              <p>Continents Visited: 3/7</p>
              <p>Countries Visited: ~30/195 (15%)</p>
              <ul>
                {/* <li>1997: Mountain View, CA;</li>
                <li>1997: Milpitas, CA;</li>
                <li>West Linn, OR;</li>
                <li>Taipei, TW;</li>
                <li>West Linn, OR;</li>
                <li>Shanghai, CN;</li>
                <li>2015: Amherst, MA; </li>
                <li>2016:</li> */}

                <li>
                  <details>
                    <summary>2010</summary>
                    <ul>
                      <li>Bali, Indonesia (07-2010)</li>
                      <li>Singapore (07-2010)</li>
                      <li>?, China</li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>2010</summary>
                    <ul>
                      <li>?, China</li>
                      <li>Los Angeles, CA</li>
                      <li>Lakehouse</li>
                      <li></li>
                    </ul>
                  </details>
                </li>

                <li>
                  <details>
                    <summary>2013</summary>
                    <ul>
                      <li>Nepal</li>
                    </ul>
                  </details>
                </li>

                <li>
                  <details>
                    <summary>2015</summary>
                    <ul>
                      <li>Australia</li>
                      <li>Shanghai, CN</li>
                      <li>Beijing, CN</li>
                      <li>Ko Samui, Thailand</li>
                      <li>Nanjing, CN</li>
                      <li>Japan</li>
                      <li>Ordos, CN</li>
                      <li>Yosemite?</li>
                      <li>Amherst, MA</li>
                      <li>Shanghai, CN</li>
                      <li>Guangxi</li>
                    </ul>
                  </details>
                </li>

                <li>
                  <details>
                    <summary>2016</summary>
                    <ul>
                      <li>Guangxi</li>
                      {/* <li>Japan</li> */}
                      <li>Italy</li>
                      <li>Greece</li>
                      <li>West Linn, OR</li>
                    </ul>
                  </details>
                </li>

                <li>
                  <details>
                    <summary>2017</summary>
                    <ul>
                      <li>Dubai, UAE</li>
                      <li>Shanghai, CN</li>
                      <li>Amherst, MA</li>
                      <li>West Hartford, CT</li>
                      <li>Cambridge, MA</li>
                      <li>Manchester, NH</li>
                      <li>Manchester, NH</li>
                      <li>Jamaica, VT</li>
                      <li>San Diego, CA</li>
                      <li>Ann Arbor, MI</li>
                      <li>TX</li>
                      <li>Chicago, IL</li>
                      <li>Westford, MA</li>
                    </ul>
                  </details>
                </li>

                <li>
                  <details>
                    <summary>2018</summary>
                    <ul>
                      <li>Mackinac Isalnd, MI</li>
                      <li>Seattle, WA</li>
                      <li>Colombus, OH</li>
                      <li>Lansing, MI</li>
                      <li>Toronto, CA</li>
                      <li>Japan</li>
                      <li>Nanchang</li>
                    </ul>
                  </details>
                </li>

                <li>
                  <details>
                    <summary>2019</summary>
                    <ul>
                      <li>Shanghai, CN</li>
                      <li>Ann Arbor, MI</li>
                      <li>Mexico</li>
                      <li>Amherst</li>
                      <li>Redmond, WA</li>
                      <li>San Francisco, CA</li>
                      <li>Lone Pine, CA</li>
                      <li>Troy, MI?</li>
                    </ul>
                  </details>
                </li>

                <li>
                  <details>
                    <summary>2020</summary>
                    <ul>
                      <li>Spain</li>
                      <li>Ann Arbor, MI</li>
                      <li>Reno, NV</li>
                      <li>Yosemite?</li>
                    </ul>
                  </details>
                </li>

                <li>
                  <details>
                    <summary>2021</summary>
                    <ul>
                      <li>Reno, NV</li>
                      <li>Milpitas, CA</li>
                      <li>Austin, TX</li>
                      <li>Boston, MA</li>
                      <li>Iceland</li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>2022</summary>
                    <ul>
                      <li>San Francisco, CA</li>
                      <li>Lake Tahoe?</li>
                      <li>Fort Lauderdale, FL</li>
                      <li>Las Vegas, NV</li>
                      <li>Milpitas, CA</li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>2023</summary>
                    <ul>
                      <li>Texas</li>
                      <li>Los Angeles, CA</li>
                      <li>Kawaii, Hawaii</li>
                      <li>Sunriver, OR</li>
                      <li>France</li>
                      <li>England</li>
                      <li>San Diego, CA</li>
                      <li>Sequioa?</li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>2024</summary>
                    <ul>
                      <li>San Francisco, CA</li>
                      <li>New York City, NY (1/5-1/10)</li>
                      <li>Shenyang, Jinan, Nanchang, Shanghai (1/30-2/5)</li>
                      <li>New Zealand (2/5-2/17)</li>
                    </ul>
                  </details>
                </li>
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
          <p>Last updated: 01-26-2024</p>
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
