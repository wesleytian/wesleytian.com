import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import { getViews } from '../lib/firebase'
import Footer from './Footer'
import Divider from './Divider'

export default function IndexPage() {
  const [, setViews] = useState(0)

  const currentYear = new Date().getFullYear()

  useEffect(() => {
    fetchViews()
  }, [])

  const fetchViews = async () => {
    const views = await getViews('gpa')
    setViews(views)
  }

  const containerStyle = {
    marginTop: 'auto',
    marginBottom: 'auto',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  }

  const textContainerStyle = {
    maxWidth: '650px',
    margin: '0 auto',
  }

  const mediaQueryStyle = `
    @media only screen and (max-width: 768px) {
      #text-container {
        max-width: 90%;
      }
    }
  `

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
        <meta property="og:image" content={'/posts/ogimage.jpeg'} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <main id="text-container" style={textContainerStyle}>
        <div>
          <div styles={{ float: 'left' }}></div>
          {/* <p>Profile:</p> */}
          {/*<p>Hi, welcome to my website!</p>*/}
          {/*<Divider />*/}
          {/*<span>Birthplace: Mountain View, CA</span>*/}
          {/*<br />*/}
          {/* <p>Nationality: 🇺🇸</p> */}
          {/* <p>Horoscope: Taurus</p> */}
          {/*<Divider />*/}
          {/* <span>
            Company: <a target="_blank"href="https://www.aragon.ai/">Aragon.ai</a>
          </span>*/}
          {/*<br /> 
          <Divider />*/}
          <p>Hey,</p>
          <p>
            I’m Wesley, an entrepreneur based in San Francisco who enjoys
            traveling, mountaineering, and running. Here's a bit about me.
          </p>
          <h4>Work</h4>
          <p>
            I’m the CEO and Co-Founder of{' '}
            <a target="_blank" href="https://www.aragon.ai/">
              Aragon
            </a>
            . We use AI to generate realistic photos of people, replacing the
            need for in-person photoshoots.
          </p>
          <p>
            We have over 1.2 million users, including Fortune 500 companies and
            our products have generated over 25 million photos for people.{' '}
          </p>
          <p>
            We’ve raised a million dollars from Neo and the founders of
            billion-dollar companies. We're proud to have never used any of the
            capital as we’ve been able to build a{' '}
            <a
              target="_blank"
              href="https://blog.eladgil.com/p/capital-efficient-businesses"
            >
              capital-efficient business
            </a>
            . On profits alone, we grew to $1M ARR within 4 months of launch and
            $4M ARR in under 2 years.
          </p>
          <p>
            We've been featured in the{' '}
            <a
              target="_blank"
              href="https://www.washingtonpost.com/technology/2024/02/08/ai-professional-headshots/"
            >
              Washington Post
            </a>
            ,{' '}
            <a
              target="_blank"
              href="https://www.wbaltv.com/article/professional-headshots-from-selfies-ai/46411821"
            >
              NBC News
            </a>
            ,{' '}
            <a
              target="_blank"
              href="https://www.rollingstone.com/culture/culture-news/ai-headshot-generators-2024-1235080786/"
            >
              Rolling Stone
            </a>
            , and on the{' '}
            <a
              target="_blank"
              href="https://youtu.be/hMvnKX0yeJw?si=Ct3p_dtDjUzXE1D7&t=1141"
            >
              My First Million
            </a>{' '}
            podcast . I’ve also been invited to chat about my startup journey on
            the{' '}
            <a
              target="_blank"
              href="https://www.businessinsider.com/why-aragon-ai-founder-chose-startup-accelerator-neo-over-ycombinator"
            >
              Business Insider
            </a>
            ,{' '}
            <a
              target="_blank"
              href="https://bigthink.com/business/anatomy-ai-startup-key-lessons-first-time-founders/"
            >
              Big Think
            </a>
            ,{' '}
            <a
              target="_blank"
              href="https://aws.amazon.com/startups/learn/a-cup-of-innovation-chatting-with-startup-founders-at-their-favorite-cafs?sc_channel=sm&sc_publisher=LINKEDIN&sc_country=global&sc_geo=GLOBAL&sc_outcome=awareness&linkId=691394166"
            >
              Amazon
            </a>
            , and the{' '}
            <a
              target="_blank"
              href="https://open.spotify.com/episode/6dyNbnylQwTeEGhyyIb0Li?si=X7DOG9_YRDaLbLwQrKxW4w"
            >
              NeuralZen Venture
            </a>{' '}
            podcast.
          </p>
          <h4>Hobbies</h4>
          <p>
            I’m a big believer that a healthy body fosters more productivity, so
            I try to spend most of my free time staying active. Besides trying
            to improve my VO2 max by running and maintain my strength by
            lifting, I enjoy physical challenges to see what my body and mind
            can do.
          </p>
          <p>
            One of my goals since I was a child is to climb the Seven Summits
            (the highest mountain on each continent). I’ve climbed one so far
            and have six more to go.
          </p>
          I've climbed over a dozen mountains. Here are a few notable ones:
          <ul>
            <li>
              Mt. Kilimanjaro (19,341 ft / 5,895 m)
              <p>
                In January 2025, I organized 3 friends to climb the tallest
                mountain in Africa. It took us 5 days to summit and 2 days to
                descend. One of us was unable to summit due to altitude
                sickness. At this extreme altitude, you have &lt;50% oxygen.
                This climb was the most I’ve physically suffered (more than my
                Ironman race) due to getting food poisoning while on the
                mountain.
              </p>
            </li>
            <li>
              Mt. Whitney (14,505 ft / 4,421 m)
              <p>
                In 2019, I organized 3 friends to climb the tallest mountain in
                the contiguous US. We started the climb at 2 am and it took us
                17 hours to summit and descend. People usually split this climb
                into two days.
              </p>
            </li>
            <li>
              Mt. Fuji (12,389 ft / 3,776 m)
              <p>
                In 2015, I organized 3 friends to "bullet climb" the tallest
                mountain in Japan–meaning summitting and descending in one push
                without staying overnight on the mountain. It took us 14 hours
                to summit and descend. It’s now illegal to bullet climb Mt. Fuji
                due to the frequency of injuries from people attempting it. My
                friends stopped hiking after this experience because of how
                challenging it was.
              </p>
            </li>
          </ul>
          <p>
            In 2021, I trained for and finished an Ironman (a race consisting of
            a 2.4-mile swim, a 112-mile bike ride, and a 26.2-mile marathon run,
            done back-to-back-to-back and completed in that order). It took me
            15 hours to finish and is the hardest physical __. i've ever
            accomplished. I've also learned how to do a standing backflip, ride
            a motorcycle, and SCUBA dive.
          </p>
          {/*  <p>
            People I am who I am today because of the people in my life. In no
            particular order, the following are some people who have been an
            influence on my life: dad, mom, sister, Henry, Douglas, Henry,
            Andrew, Edward, Rui, Nisch, Phillip, Joe, Solomon, Elon, Victor,
            Jack, Akhil, Carol, Lindy.{' '} 
          </p>*/}
          <h4>Fun facts</h4>
          <ul>
            <li>
              I was born in the San Francisco Bay Area but didn’t grow up there.
              I moved back 4 years ago and am proud to call it my home.
            </li>
            <li>
              Growing up, I lived in 3 different countries and changed schools 7
              times.
            </li>

            <li>
              In high school, I voluntarily spent a summer being hazed at a
              military school in Kentucky and becoming a US Army Cadet. It
              closed down shortly after I left due to unsafe conditions.
            </li>
            <li>
              I nearly failed high school with a 1.9 GPA because I was focused
              on playing League of Legends competitively (I made it to the top
              2% of players globally). I was also busy playing on 6 sports
              teams–4 varsisty and 2 JV.
            </li>

            <li>I've visited 25 countries and 6 continents.</li>
            <li>
              I have a cameo in Bryan Johnson's{' '}
              <a target="_blank" href="https://www.netflix.com/title/81757532">
                new Netflix documentary
              </a>
              .
            </li>
          </ul>
          <p>
            If you’d like to chat, feel free to email me at my last name . my
            first name at gmail period com. You can also find me on{' '}
            <a href="https://x.com/wesleyytian" target="_blank">
              X (Twitter)
            </a>{' '}
            and{' '}
            <a href="https://www.linkedin.com/in/wesleytian/" target="_blank">
              LinkedIn
            </a>
            , where I'm quite active.
          </p>
          <p>Thanks for reading,</p>
          <p> Wesley Tian</p>
        </div>
        <Divider />
        <br></br> <br></br> <br></br>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}
