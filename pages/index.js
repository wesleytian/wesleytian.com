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
    paddingRight: "1rem",
  };

  const textContainerStyle = {
    maxWidth: "650px",
    margin: "0 auto",
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
        <meta property="og:title" content="Hey! I'm Wesley 👋" />
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
          <h4>Hey, I’m Wesley! 👋🏻 </h4>
          <p>
            I’m the Co-Founder and CEO of{" "}
            <a target="_blank" href="https://www.aragon.ai/">
              Aragon
            </a>
            , the world's most popular AI photography studio. We use AI to
            generate photos of people that are indistinguishable from real
            photos, eliminating the need for in-person photoshoots.
          </p>
          <p>
            We have 2M+ users, including Fortune 200 companies and our products
            have generated 34M+ photos for people. We grew to $10M+ annualized revenue in less than two years.{" "}
          </p>
          <p>
            We're profitable and raised from{" "}
            <a target="_blank" href="https://neo.com/">
              Neo
            </a>
            {" "}(invested in Ramp, Deel, Scale, Vanta, Cursor, Cognition),{" "}
            <a target="_blank" href="https://www.sequoiacap.com/">
              Sequoia
            </a>{" "}
            Scout's Fund (invested in Uber, Airbnb, Stripe, Notion, Dropbox), and the founders of Vanta ($4B), DocSend (sold for $165M), and Decagon ($1B). 
          </p>
          <p>
            I've been featured in: {" "}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            <div>
              <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                <li>
                  <a target="_blank" href="https://www.theinformation.com/articles/why-early-stage-founders-are-opting-to-seed-strap-their-startups">
                    The Information
                  </a> - <i>Why Early-Stage Founders Are Opting to 'Seed-Strap' Their Startups</i>
                </li>
                <li>
                  <a target="_blank" href="https://www.indiehackers.com/post/tech/building-one-of-the-first-ai-headshot-products-and-hitting-900k-mo-in-3-years-UK9omiPofFtha5Kps2Fj">
                    Indie Hackers
                  </a> - <i>Building one of the first AI headshot products and hitting $900k/mo</i>
                </li>
                <li>
                  <a target="_blank" href="https://www.washingtonpost.com/technology/2024/02/08/ai-professional-headshots/">
                    The Washington Post
                  </a>
                </li>
                <li><a href="https://leanaileaderboard.com/" target="_blank">
              Lean AI Leaderboard
            </a></li>
           
                
               
               
              </ul>
            </div>
            <div>
              <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
              <li>
                  <a target="_blank" href="https://www.businessinsider.com/why-aragon-ai-founder-chose-startup-accelerator-neo-over-ycombinator">
                    Business Insider
                  </a> - <i>Why I turned down Y Combinator for Neo</i>
                </li>
                <li>
                  <a target="_blank" href="https://bigthink.com/business/anatomy-ai-startup-key-lessons-first-time-founders/">
                    Big Think
                  </a> - <i>Key lessons for first-time founders</i>
                </li>
               
               
                <li>
                  <a target="_blank" href="https://youtu.be/hMvnKX0yeJw?si=Ct3p_dtDjUzXE1D7&t=1141">
                    My First Million Podcast
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.pmf.show/1st-time-founder-grows-ai-headshot-app-from-0-to-10m-arr-in-2-years-with-no-funding-wesley-tian/">
                    The Product Market Fit Show Podcast
                  </a>
                </li>
               
                <li>
                  <a target="_blank" href="https://open.spotify.com/episode/6dyNbnylQwTeEGhyyIb0Li?si=X7DOG9_YRDaLbLwQrKxW4w">
                    NeuralZen Venture Podcast
                  </a>
                </li>
                
                {/* <li>Amazon</li> */}
                
              </ul>
            </div>
          </div>

         

          <p>
            I'm also an angel investor/LP in 14+ companies and funds. Here are a select few:{" "}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            <div>
              <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                <li>
                  <a target="_blank" href="https://neo.com/">
                    Neo
                  </a> VC (first investor in <a target="_blank" href="https://cursor.com/">
                    Cursor
                  </a>, now $10B)
                </li>
                <li>
                  <a target="_blank" href="https://www.anthropic.com/">
                    Anthropic
                  </a> ($170B)
                </li>
                <li>
                  <a target="_blank" href="https://www.replit.com/">
                    Replit
                  </a> ($3B)
                </li>
                <li>
                  <a target="_blank" href="https://www.sesame.com/">
                    Sesame
                  </a> ($1B)
                </li>
                <li>
                  <a target="_blank" href="https://www.volantissemi.ai/">
                    Volantis
                  </a> (Thiel Fellow, ex-YC, backed by Sam Altman)
                </li>
                
                
              </ul>
            </div>
            <div>
              <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
              <li>
                  <a target="_blank" href="https://www.codebuff.com/">
                    Codebuff
                  </a> (YC F24)
                </li>
                <li>
                  <a target="_blank" href="https://www.salley.co/">
                    Salley
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.cloverlabs.ai/">
                    Clover
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.jooba.com/">
                    Jooba
                  </a> (a16z-backed)
                </li>
                <li>
                  <a target="_blank" href="https://www.up-to-speed.ai/">
                    UpToSpeed
                  </a> (Thiel Fellow)
                </li>
                <li>
                  <a target="_blank" href="https://www.endflow.com/">
                    Endflow
                  </a> (ex-YC)
                </li>
                <li>
                  and more...
                </li>
              </ul>
            </div>
          </div>


          <p>
            Prior to starting my company, I was a founding engineer at two {" "}
            <a
              target="_blank"
              href="https://aws.amazon.com/startups/learn/a-cup-of-innovation-chatting-with-startup-founders-at-their-favorite-cafs?sc_channel=sm&sc_publisher=LINKEDIN&sc_country=global&sc_geo=GLOBAL&sc_outcome=awareness&linkId=691394166"
            >
              Y Combinator
            </a>
            -backed startups, a software engineer at Microsoft, and an undergraduate AI
            researcher at the University of Michigan.
          </p>
          <hr></hr>
          <h4>Mountaineering & Triathlons</h4>
      
          🏔️ I enjoy climbing mountains. Here are a few notable
          experiences (click to expand):
          <ul>
            <details>
              <summary style={{ cursor: "pointer" }}>
                Mt. Kilimanjaro (19,341 ft / 5,895 m)
              </summary>
              <p>
                In January 2025, I organized 3 friends to climb the tallest
                mountain in Africa. It took us 5 days to summit and 2 days to
                descend. One of us was unable to summit due to altitude sickness
                which caused debilitating headaches, diarrhea, nausea, and
                extreme fatigue among us. At that extreme elevation, only ~50%
                of the oxygen at sea level was available to us.
              </p>
              <p>
                Early in the climb, I got severe food poisoning. At one point,
                even water made me have explosive diarrhea. Despite that, I
                still had to hike through blistering sun, rain, sleet, stinging
                hail, and snow. Summit day started at 10 p.m., and we ended up
                hiking 17 hours that day. This was the most physical suffering
                I've ever endured–even more than my Ironman.
              </p>
            </details>
            <details>
              <summary style={{ cursor: "pointer" }}>
                Mt. Whitney (14,505 ft / 4,421 m)
              </summary>
              <p>
                In 2019, I organized three friends to climb the tallest mountain
                in the contiguous US. We started the climb at 2 am, and it took
                us 17 hours to summit and descend. People usually split this
                climb into two days. We ran out of water near the summit, so one
                of us had to drink piss to survive (we filtered it).
              </p>
            </details>
            <details>
              <summary style={{ cursor: "pointer" }}>
                Mt. Fuji (12,389 ft / 3,776 m)
              </summary>
              <p>
                In 2015, I organized 3 friends to "bullet climb" the tallest
                mountain in Japan, which means to summit and descend in a single
                push without staying overnight on the mountain. It took us 14
                hours total. It’s now forbidden to bullet climb Mt. Fuji because
                too many people have been injured from attempting it. My friends
                stopped hiking after this experience because of how challenging
                it was.
              </p>
            </details>
          </ul>
          <p>
            I've wanted to climb the Seven Summits (the highest mountain on each
            continent, including Mt. Everest) ever since I was a kid. I’ve
            conquered one so far and have six more to go.
          </p>
          <p>
            🚴🏻 In 2021, I trained for and completed an Ironman Triathlon–a
            140.6-mile (226 km) endurance race consisting of a 2.4-mile swim, a
            112-mile bike ride, and a 26.2-mile marathon, all done back-to-back,
            in Cozumel, Mexico, where it was 80&deg;F (27&deg;C) with 100%
            humidity.
          </p>
          <p>
            Right after I crossed the finish line, I collapsed from <a target="_blank" href="https://en.wikipedia.org/wiki/Hyponatremia">hyponatremia </a> 
             and had to be carried away on a stretcher. For the first time in my
            life, I was scared that I had irreversibly fucked up my body–my
            entire body was cramping, including my face, and I couldn't even
            open my fists. The race took me 15 hours to finish and it was the
            hardest physical thing I've ever done.
          </p>
          <p>
            💪🏻 I've also trained to do a muscle-up, land a standing backflip,
            and bench press two plates (225 lbs / 102 kg).
          </p>
          <hr></hr>
          <h4>Fun facts:</h4>
          <ul>
            <li>
              I've moved around a lot growing up. I've lived in the San
              Francisco Bay Area, Oregon, Taiwan, Shanghai, Massachusetts,
              Michigan, and Nevada.
            </li>
            
            <li>
              I have a cameo in a Netflix documentary called{" "}
              <a target="_blank" href="https://www.netflix.com/title/81757532">
                Don't Die
              </a>
              
              .
             
             
            </li> <li>I've visited 26 countries and 6 continents.</li>
            <br/>
              In high school:
            <li>
              When I was 15, I attended a military camp in Kentucky. They shaved all of our heads as soon as we arrived, none of the bathroom stalls had doors, they made a guy run until he puked because he took too long to finish eating, I ate ants, we had to wake up every morning at 4:30 a.m. to do physical training (PT), and more. The camp shut down soon after I left due to safety concerns and lawsuits filed against them.
            </li>
            <li>
              I had a 1.9/4.00 GPA (C- average) during my junior year and graduated with a &lt;3.00. I didn't think my grades really mattered.</li>
            <li> I
            wanted to become the best League of Legends player and spent thousands of hours on the game. (I made it to semi-pro
            on the most competitive server in the world, 祖安). <a href="/posts/gpa">Blog Post</a>
            </li>
            <li>I competed on 6 sports teams, track, cross country, tennis, table tennis, swimming, and basketball.</li>
            
            
          
          </ul>
          <p>
            If you’d like to chat, you can reach me at my first name at my
            company url. You can also find me on{" "}
            <a href="https://x.com/wesleyytian" target="_blank">
              X (Twitter)
            </a>{" "}
            and{" "}
            <a href="https://www.linkedin.com/in/wesleytian/" target="_blank">
              LinkedIn
            </a>
            , where I'm somewhat active.
          </p>
          <p>Thanks for reading,</p>
          <p>Wesley Tian</p>
        </div>
        <Divider />
        <i>Last major update: August, 2025</i>
        <br></br> <br></br> <br></br>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

