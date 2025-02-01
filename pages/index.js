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

          {/* <p>Profile:</p> */}
          <p>Hi, welcome to my website!</p>

          <Divider />

          <span>Birthplace: Mountain View, CA</span>
          <br />
      

          {/* <span>Age: 27</span> */}
          {/* <p>Nationality: 🇺🇸</p> */}

          {/* <p>Horoscope: Taurus</p> */}
          <Divider />

          <span>
            Company: <a href="https://www.aragon.ai/">Aragon.ai</a>
          </span>
          <br />
  
          <Divider />

        
          
          <details open="false">
            <summary style={{ cursor: "pointer" }}>⚔️ Main Quests</summary>
            <ul>
              <details open="false">
            
                <ul>
                 

                  <li>
                    <input
                      type="checkbox"
                      defaultChecked="true"
                      disabled="true"
                    />
                    Do AI research
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      defaultChecked="true"
                      disabled="true"
                    />
                    Work at Microsoft
                  </li>
                  
                </ul>
              </details>

              <details open="false">
             
                <ul>
                 
                  <li>
                    <input
                      type="checkbox"
                      defaultChecked="true"
                      disabled="true"
                    />
                    Start a company
                    {/* <a
                      href="https://twitter.com/wesleyytian/status/1590426084390363136"
                      target="_blank">
                      Start a company
                    </a>{" "} */}
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      defaultChecked="true"
                      disabled="true"
                    />
                    Become{" "}
                 
                      ramen profitable
      
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      defaultChecked="true"
                      disabled="true"
                    />
                    Get acceptend into Y Combinator
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      defaultChecked="true"
                      disabled="true"
                    />
                    Raise money from Neo and founders of billion-dollar
                    companies{" "}
                    {/* <a
                      href="https://www.linkedin.com/feed/update/urn:li:activity:7084224156883435521/"
                      target="_blank">
                      top Silicon Valley VC
                    </a>{" "} */}
                  </li>
                 
                </ul>
              </details>
       
            </ul>
          </details>

          <details open="false">
            <ul>
              <li>
                Endurance
                <ul>
                  {/* <li>
                    <input
                      type="checkbox"
                      defaultChecked="true"
                      disabled="true"
                    />
                    Run a sub 6 minute mile (2013)
                  </li> */}
                
                  <li>
                    <input
                      type="checkbox"
                      defaultChecked="true"
                      disabled="true"
                    />
                  
                      Finish a full 140.6-mile Ironman triathlon
     
                  </li>
             
                </ul>
              </li>

              <li>
                Strength
                <ul>
               
             
                  <li>
                    <input
                      type="checkbox"
                      defaultChecked="true"
                      disabled="true"
                    />
                    Bench press 225 lbs
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      defaultChecked="true"
                      disabled="true"
                    />
                    Do a muscle-up
                  </li>
              
               
                </ul>
              </li>

              <li>
                Mountaineering
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      defaultChecked="true"
                      disabled="true"
                    />
                    Climb Mt. Fuji ('15)
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      defaultChecked="true"
                      disabled="true"
                    />
                    <a href="/posts/yosemite">Climb the Half Dome</a> ('15)
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      defaultChecked="true"
                      disabled="true"
                    />
                   Climb Mt. Olympus
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      defaultChecked="true"
                      disabled="true"
                    />
                    <a href="/posts/whitney">Climb Mt. Whitney</a> ('19)
                  </li>
               
               
                  <li>
                    <details>
                      
                      <ul>
                        <li>
                          <input type="checkbox" disabled="true" />
                          Climb Mt. Kilimanjaro
                        </li>
                       
                      </ul>
                    </details>
                  </li>
                </ul>
              </li>

 
            </ul>
          </details>

        
      
        
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
                <a href="/posts/gpa">How I Nearly Failed High School</a> (2019)
              </li>

              <li>
                <a href="/posts/" target="_blank">
                  See All
                </a>
              </li>
            </ul>
          </details> */}

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


          
            </p> */}
       


          {/* <Divider /> */}
          {/* <p>Last updated: 01-2024</p> */}
        </div>
        <Divider />
        <div>
          <a
            href="https://twitter.com/wesleyytian"
            // target="_blank"
            rel="noopener noreferrer">
            {/* <i className="fa fa-twitter" style={iconStyle}></i> */}
            Twitter
          </a>
          {" | "}
          <a
            href="https://www.linkedin.com/in/wesleytian/"
            // target="_blank"
            rel="noopener noreferrer">
            {/* <i className="fa fa-linkedin" style={iconStyle}></i> */}
            LinkedIn
          </a>
        </div>
        <br></br> <br></br> <br></br>
      </main>

      {/* <Footer /> */}
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
