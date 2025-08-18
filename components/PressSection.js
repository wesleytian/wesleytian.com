import React from 'react';
import { Typography, Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PressCard from './PressCard';

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: '4rem',
    marginBottom: '4rem',
    backgroundColor: theme.palette.background.default,
    padding: '3rem 0',
  },
  title: {
    marginBottom: '2.5rem',
    fontSize: '2rem',
    fontWeight: 700,
    fontFamily: 'Inter, sans-serif',
    color: theme.palette.text.primary,
    textAlign: 'center',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  container: {
    maxWidth: '1200px',
    padding: '0 2rem',
  },
}));

const pressItems = [
  {
    title: "Why Early-Stage Founders Are Opting to Seed-Strap Their Startups",
    outlet: "The Information",
    date: "February 2024",
    url: "https://www.theinformation.com/articles/why-early-stage-founders-are-opting-to-seed-strap-their-startups",
    snippet: "Aragon AI's Wesley Tian discusses how his company achieved profitability without using venture capital, focusing on capital efficiency and sustainable growth.",
  },
  {
    title: "AI Professional Headshots",
    outlet: "The Washington Post",
    date: "February 2024",
    url: "https://www.washingtonpost.com/technology/2024/02/08/ai-professional-headshots/",
    snippet: "Aragon AI's innovative approach to generating professional headshots using artificial intelligence is changing the photography industry.",
  },
  {
    title: "Why Aragon AI Founder Chose Startup Accelerator Neo Over YCombinator",
    outlet: "Business Insider",
    date: "2023",
    url: "https://www.businessinsider.com/why-aragon-ai-founder-chose-startup-accelerator-neo-over-ycombinator",
    snippet: "Wesley Tian shares his journey of building Aragon AI and why he chose Neo as the right accelerator for his company's growth.",
  },
  {
    title: "Professional Headshots From Selfies Using AI",
    outlet: "NBC News",
    date: "2023",
    url: "https://www.wbaltv.com/article/professional-headshots-from-selfies-ai/46411821",
    snippet: "Aragon AI's technology is making professional headshots accessible to everyone through the power of artificial intelligence.",
  },
  {
    title: "A Cup of Innovation: Chatting with Startup Founders",
    outlet: "Amazon",
    date: "2023",
    url: "https://aws.amazon.com/startups/learn/a-cup-of-innovation-chatting-with-startup-founders-at-their-favorite-cafs",
    snippet: "Wesley Tian discusses the future of AI in photography and how Aragon AI is leading the way in this innovative space.",
  },
  {
    title: "Anatomy of an AI Startup: Key Lessons from First-Time Founders",
    outlet: "Big Think",
    date: "2023",
    url: "https://bigthink.com/business/anatomy-ai-startup-key-lessons-first-time-founders/",
    snippet: "Insights from Aragon AI's journey in building a successful AI startup and the lessons learned along the way.",
  },
];

export default function PressSection() {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <Container className={classes.container}>
        <Typography variant="h2" className={classes.title}>
          Press & Media
        </Typography>
        <Box className={classes.grid}>
          {pressItems.map((item, index) => (
            <PressCard key={index} {...item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
} 