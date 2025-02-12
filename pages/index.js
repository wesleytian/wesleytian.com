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
          <h4>Hey 👋🏻,</h4>
          <p>
            I’m Wesley–tech entrepreneur, mountaineer, and Ironman finisher.
            Here's a bit about me.
          </p>
          <h4>Work</h4>
          <p>
            I’m the CEO and Co-Founder of{' '}
            <a target="_blank" href="https://www.aragon.ai/">
              Aragon
            </a>
            . We use AI to generate hyperrealistic photos of people, eliminating
            the need for in-person photoshoots.
          </p>
          <p>
            We have over 1.2 million users, including Fortune 500 companies and
            our products have generated over 25 million photos for people.{' '}
          </p>
          <p>
            We’re funded by{' '}
            <a target="_blank" href="https://neo.com/">
              Neo
            </a>
            ,{' '}
            <a target="_blank" href="https://www.sequoiacap.com/">
              Sequoia Scout
            </a>
            , and the founders of billion-dollar companies. However, we've never
            needed to use any of the money that we've raised as we’ve been able
            to build a{' '}
            <a
              target="_blank"
              href="https://blog.eladgil.com/p/capital-efficient-businesses"
            >
              capital-efficient business
            </a>
            . Using our profits, we grew to a $1M annual run rate (ARR) within 4
            months of launching our first product and $9M ARR in under 2 years.
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
            podcast. I’ve also been invited to chat about my startup journey by{' '}
            <a
              target="_blank"
              href="https://www.businessinsider.com/why-aragon-ai-founder-chose-startup-accelerator-neo-over-ycombinator"
            >
              Business Insider
            </a>
            ,{' '}
            <a
              target="_blank"
              href="https://aws.amazon.com/startups/learn/a-cup-of-innovation-chatting-with-startup-founders-at-their-favorite-cafs?sc_channel=sm&sc_publisher=LINKEDIN&sc_country=global&sc_geo=GLOBAL&sc_outcome=awareness&linkId=691394166"
            >
              Amazon
            </a>
            ,{' '}
            <a
              target="_blank"
              href="https://bigthink.com/business/anatomy-ai-startup-key-lessons-first-time-founders/"
            >
              Big Think
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
          <p>
            Prior to starting my company, I worked at 2 early-stage{' '}
            <a
              target="_blank"
              href="https://aws.amazon.com/startups/learn/a-cup-of-innovation-chatting-with-startup-founders-at-their-favorite-cafs?sc_channel=sm&sc_publisher=LINKEDIN&sc_country=global&sc_geo=GLOBAL&sc_outcome=awareness&linkId=691394166"
            >
              Y Combinator
            </a>
            -backed startups, was a software engineer at Microsoft, and an AI
            researcher at the University of Michigan.
          </p>
          <h4>Hobbies</h4>
          <p>
            I aim to balance work and health by running, lifting, and cooking.
            When time allows, I also enjoy pushing my physical and mental
            limits with activities like mountaineering and doing an Ironman
            triathlon.
          </p>
          I've climbed over a dozen mountains. Here are a few notable
          experiences:
          <ul>
            <details>
              <summary style={{ cursor: 'pointer' }}>
                Mt. Kilimanjaro (19,341 ft / 5,895 m)
              </summary>
              <p>
                In January 2025, I organized 3 friends to climb the tallest
                mountain in Africa. It took us 5 days to summit and 2 days to
                descend. One of us was unable to summit due to altitude
                sickness. At that extreme altitude, you only have 50% of the
                oxygen available at sea level. Due to getting severe food
                poisoning early on in the climb, this was the most suffering
                I've ever had to endure (even more than during my Ironman).
              </p>
            </details>
            <details>
              <summary style={{ cursor: 'pointer' }}>
                Mt. Whitney (14,505 ft / 4,421 m)
              </summary>
              <p>
                In 2019, I organized 3 friends to climb the tallest mountain in
                the contiguous US. We started the climb at 2 am, and it took us
                17 hours to summit and descend. People usually split this climb
                into two days. We ran out of water near the summit, so one of us
                had to drink piss to survive (we filtered it).
              </p>
            </details>
            <details>
              <summary style={{ cursor: 'pointer' }}>
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
            In 2021, I trained for and finished an Ironman–a race consisting of
            a 2.4-mile swim, a 112-mile bike ride, and a 26.2-mile marathon, all
            done back-to-back. It took me 15 hours to finish and it was hardest
            physical thing I've ever done.
          </p>
          <p>
            I've also trained to do a muscle-up, land a standing backflip, and
            bench press 2 plates (225 lbs / 102 kg).
          </p>
          <h4>Fun facts</h4>
          <ul>
            <li>
              I was born in the San Francisco Bay Area but didn’t grow up there.
              I moved back 4 years ago and am proud to call it my home.
            </li>
            <li>
              Growing up, I lived in 3 countries and changed schools 7 times.
            </li>

            <li>
              In high school, I voluntarily spent a summer being hazed at a
              military school in Kentucky. I wanted to go for the experience
              (and it was a great one). It shut down shortly after I left due to
              safety concern complaints.
            </li>
            <li>
              I nearly failed high school with a 1.9 GPA because I was playing
              League of Legends competitively (I made it to the top 2% of
              players globally). I was also busy competing on 6 sports teams–4
              varsity and 2 JV.
            </li>
            <li>I've visited 25 countries and 6 continents.</li>
            <li>
              I have a cameo in Bryan Johnson's new Netflix documentary called{' '}
              <a target="_blank" href="https://www.netflix.com/title/81757532">
                Don't Die
              </a>
              .
            </li>
          </ul>
          <p>
            If you’d like to chat, you can reach me at my first name at my
            company url. You can also find me on{' '}
            <a href="https://x.com/wesleyytian" target="_blank">
              X (Twitter)
            </a>{' '}
            and{' '}
            <a href="https://www.linkedin.com/in/wesleytian/" target="_blank">
              LinkedIn
            </a>
            , where I'm somewhat active.
          </p>
          <p>Thanks for reading,</p>
          <p>Wesley Tian</p>
        </div>
        <Divider />
        <i>Last updated: 02-10-2025</i>
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
