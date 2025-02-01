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
            Company: <a href="https://www.aragon.ai/">Aragon.ai</a>
          </span>*/}
          {/*<br />
          <Divider />*/}
          <p>Hey,</p>
          <p>
            I’m Wesley. I’m a tech entrepreneur and I enjoy mountaineering and
            running.
          </p>
          <h3>Work</h3>
          <p>
            I’m the CEO and Co-Founder of{' '}
            <a href="https://www.aragon.ai/" rel="noopener noreferrer">
              Aragon
            </a>
            . We generate realistic photos of people using AI.
          </p>
          <p>
            We have over 1.4 million users, including Fortune 500 companies and
            our products have generated over 25 million photos for people. We’ve
            raised a million dollars from Neo and the founders of billion-dollar
            companies but are proud to have never used any of the capital as
            we’ve been able to build a capital-efficient business. We’ve been
            able to grow to $1M ARR within four months of launch and $4M ARR in
            under two years on profits alone.
          </p>
          <p>
            My company has been featured on the{' '}
            <a
              href="https://www.washingtonpost.com/technology/2024/02/08/ai-professional-headshots/"
              rel="noopener noreferrer"
            >
              Washington Post
            </a>
            ,{' '}
            <a
              href="https://www.wbaltv.com/article/professional-headshots-from-selfies-ai/46411821"
              rel="noopener noreferrer"
            >
              NBC News
            </a>
            ,{' '}
            <a href="https://www.aragon.ai/" rel="noopener noreferrer">
              the Entrepreneur
            </a>
            ,{' '}
            <a
              href="https://www.rollingstone.com/culture/culture-news/ai-headshot-generators-2024-1235080786/"
              rel="noopener noreferrer"
            >
              the Rolling Stone
            </a>
            , and the{' '}
            <a
              href="https://youtu.be/hMvnKX0yeJw?si=Ct3p_dtDjUzXE1D7&t=1141"
              rel="noopener noreferrer"
            >
              My First Million podcast
            </a>
            . I’ve also been invited to chat about my journey building my
            company on the{' '}
            <a
              href="https://www.businessinsider.com/why-aragon-ai-founder-chose-startup-accelerator-neo-over-ycombinator"
              rel="noopener noreferrer"
            >
              Business Insider
            </a>
            ,{' '}
            <a
              href="https://bigthink.com/business/anatomy-ai-startup-key-lessons-first-time-founders/"
              rel="noopener noreferrer"
            >
              Big Think
            </a>
            ,{' '}
            <a
              href="https://aws.amazon.com/startups/learn/a-cup-of-innovation-chatting-with-startup-founders-at-their-favorite-cafs?sc_channel=sm&sc_publisher=LINKEDIN&sc_country=global&sc_geo=GLOBAL&sc_outcome=awareness&linkId=691394166"
              rel="noopener noreferrer"
            >
              Amazon
            </a>
            , and the{' '}
            <a
              href="https://open.spotify.com/episode/6dyNbnylQwTeEGhyyIb0Li?si=X7DOG9_YRDaLbLwQrKxW4w"
              rel="noopener noreferrer"
            >
              NeuralZen Venture Podcast
            </a>
            .
          </p>
          <h3>Hobbies</h3>
          <p>
            I’m a huge proponent in boosting productivity by cultivating a
            healthy body and healthy relationships. Besides working on improving
            my biomarkers such as my VO2 max and maintaing my strength, I enjoy
            mountaineering and skiing.
          </p>
          <p>
            One of my dreams since I was a child is to climb the Seven Summits
            (the tallest mountain on every continent). I’ve climbed one so far
            and have six more to go.
          </p>
          Notable summits:
          <ul>
            <li>
              Mt. Kilimanjaro (Tanzania)
              <p>
                In 2025, I organized 3 friends to climb the tallest mountain in
                Africa (19,341 ft / 5,895). It took us 5 days to summit and 2
                days to descend and one of us didn’t make it due to altitude
                sickness. This climb was the most I’ve physically suffered (more
                than my Ironman race) due to getting food poisoning.
              </p>
            </li>
            <li>
              Mt. Whitney (CA, US)
              <p>
                In 2019, I organized 3 friends to climb the tallest mountain in
                the contiguous US (14,505 ft / 4,421m). We started the climb at
                2 am and it took us 17 hours to summit and descend. People
                usually split this climb into two days.
              </p>
            </li>
            <li>
              Mt. Fuji (Japan)
              <p>
                In 2015, I organized 3 friends to bullet hike Japan's tallest
                mountain (without staying overnight on the mountain) with me
                (12,389 ft / 3,776 m). It took us 16 hours to summit and
                descend. It’s now illegal to bullet hike Mt. Fuji due to people
                being injured from doing so. All 3 now refuse to hike.
              </p>
            </li>
            <li>
              Others: Mt. Olympus (Greece), Mt. Washington (NH, US), Mt. Diablo
              (CA, US), Mt. Tam, Mt. Jefferson, and many more.
            </li>
          </ul>
          <p>
            In 2021, I trained for and finished an Ironman (a race consisting of
            a back-to-back 2.4-mile swim, 112-mike bike ride, and a full
            marathon). It took me 15 hours and is still the hardest physical
            thing I’ve accomplished to date. I can also do a standing backflip,
            ride a motorcycle, and am SCUBA certified.
          </p>
          {/*  <p>
            People I am who I am today because of the people in my life. In no
            particular order, the following are some people who have been an
            influence on my life: dad, mom, sister, Henry, Douglas, Henry,
            Andrew, Edward, Rui, Nisch, Phillip, Joe, Solomon, Elon, Victor,
            Jack, Akhil, Carol, Lindy.{' '} 
          </p>*/}
          <h3>Fun facts</h3>
          <ul>
            <li>
              I have a cameo in a Netflix documentary called{' '}
              <a
                href="https://www.netflix.com/title/81757532"
                rel="noopener noreferrer"
              >
                Don’t Die
              </a>{' '}
              about Bryan Johnson, a wealthy entrepreneur who tries to defy
              aging.
            </li>
            <li>
              I nearly failed high school playing League of Legends
              competitively (I made it to the top 1%). I also played 4 sports at
              the varsity level and 2 at the JV level.
            </li>
            <li>
              I changed schools 7 times while growing up and moved to two
              different countries.
            </li>
            <li>
              I was born in the SF Bay Area but didn’t grow up there. I’ve since
              moved back 4 years ago and am proud to call it my home.
            </li>
            <li>
              In high school, I voluntarily spent a summer being hazed at a
              military school in Kentucky. It closed shortly after I left due to
              unsafe conditions.
            </li>
          </ul>
          <p>
            If you’d like to chat, feel free to email me at my last name . my
            first name at gmail period com or connect with me on LinkedIn.
          </p>
          <p>Thanks for reading,</p>
          <p> Wesley Tian</p>
        </div>
        <Divider />
        <div>
          <a
            href="https://twitter.com/wesleyytian"
            // target="_blank"
            rel="noopener noreferrer"
          >
            {/* <i className="fa fa-twitter" style={iconStyle}></i> */}
            Twitter
          </a>
          {' | '}
          <a
            href="https://www.linkedin.com/in/wesleytian/"
            // target="_blank"
            rel="noopener noreferrer"
          >
            {/* <i className="fa fa-linkedin" style={iconStyle}></i> */}
            LinkedIn
          </a>
        </div>
        <br></br> <br></br> <br></br>
      </main>

      {/* <Footer /> */}
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
