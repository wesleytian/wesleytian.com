import styles from "../styles/Home.module.css";
import React, {useState, useEffect} from "react";
import Head from "next/head";
import { Grid, Typography } from "@material-ui/core";
import MostPopular from "../components/MostPopular";
import Header from "../components/Header";
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
                🧑🏻‍💻 I'm a software engineer at{" "}
                <a className="" href="https://techcrunch.com/2021/11/22/fractional-lands-5-5-million-to-let-friends-and-strangers-invest-in-real-estate-together/">
                  Fractional
                </a>
                , a seed-stage fintech startup. We're building the first social platform for co-investing in real estate.
              </p>
              <div>
              {/* <p>
                🌎 I'm currently living in a <a href="https://twitter.com/aurorahaus">hacker house</a> in San Francisco. But for one reason or another, I've also lived in:
                <ul>
                  <li>Milpitas, CA (5.5 yrs)</li>
                  <li>West Linn, OR (1.5 yrs)</li>
                  <li>Taipei, Taiwan (1.5yrs)</li>
                  <li>West Linn, OR (1.5 yrs)</li>
                  <li>Shanghai, China (8 yrs)</li>
                  <li>Amherst, MA (2 yrs)</li>
                  <li>Ann Arbor, MI (3 yrs)</li>
                  <li>Reno, NV (9 months)</li>
                  <li>Milpitas, CA (9 months)</li>
                </ul>
                I've also had brief stints in Manchester, NH and Bellevue, WA.
              </p> */}
            </div>
              <p>
                Previously, I helped found {" "}
                <a className="" href="https://www.edsurge.com/news/2020-09-28-a-shopify-for-online-schools-raises-1-75m-led-by-tiger-global">
                  Virtually
                </a>
                , where I wrote over 200K lines of code and helped scale the product from
                0 to more than 10K users. I went through Y Combinator's summer 2020 batch with the founder and we raised $1.7M in
                funding. 
                
               
              </p>
              <p> I also did software engineering at Microsoft and double majored in
                computer science and data science at the University of Michigan.</p>
            </div>
            {/* <div>
              🏔️ One of my proudest accomplishments to date has been completing an <a href="https://en.wikipedia.org/wiki/Ironman_Triathlon">Ironman Triathlon</a>, a 140.6-mile race, which I spent all of 2021 training for.
            </div> */}
            
          </div>
          <div><p>Interesting things about me that I've written about:</p>
            <ul>
              <li>
                <a href="/posts/gpa">I nearly failed high school because I had a 1.9 GPA and a D for two semesters.</a> (views: {views})</li>
              {/* <li>I turned down a full-time offer from Microsoft while in college.</li> */}
              {/* <li>For most of college, my life goal was to get a Ph.D. in ML and do research.</li> */}
              <li><a href="/posts/whitney">I convinced 3 friends to climb the tallest mountain in the contiguous US with me. We started at 2 AM and it took us 17 hours. One of us had to drink piss to survive.</a></li>
              <li>🆕 <a href="/posts/ironman">I did an Ironman.</a></li>
              {/* <li>I was a competitive swimmer, runner, tennis player, table tennis player, and basketball player in high school.</li> */}
            </ul>
          </div>

          <div>
            <p>What I've recently read and am currently thinking about:</p>
            <ul>
              <li>
                <a href="https://www.amazon.com/Star-Builders-Nuclear-Fusion-Planet/dp/1982130660">The Star Builders</a>: Nuclear Fusion and the Race to Power the Planet
              </li>
              <li>
                <a href="https://www.amazon.com/Molecule-More-Chemical-Creativity_and-Determine/dp/1946885118">The Molecule of More</a>: How a Single Chemical in Your Brain Drives Love, Sex, and Creativity—and Will Determine the Fate of the Human Race
              </li>
              <li>
                <a href="https://www.amazon.com/Changing-World-Order-Nations-Succeed/dp/1982160276">Principles for Dealing with the Changing World Order</a>: Why Nations Succeed and Fail
              </li>
            </ul>
          </div>
          
          <div>
            <p>Connect with me on LinkedIn <a href="https://linkedin.com/in/wesleytian">here</a> or email me <a href="mailto:tian.wesley@gmail.com">here</a>!</p>
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
