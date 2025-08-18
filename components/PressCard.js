import React from 'react';
import { Typography, Card, CardContent, CardActionArea, Box, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 320,
    margin: '0.5rem',
    transition: 'all 0.3s ease-in-out',
    borderRadius: '12px',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
    },
  },
  cardContent: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  preview: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: '1.5rem',
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
    zIndex: 1,
    display: 'none',
    borderRadius: '0 0 12px 12px',
    borderTop: '1px solid rgba(0,0,0,0.08)',
  },
  cardContainer: {
    position: 'relative',
    '&:hover $preview': {
      display: 'block',
    },
  },
  date: {
    color: theme.palette.text.secondary,
    fontSize: '0.875rem',
    marginTop: '0.75rem',
    fontFamily: 'Inter, sans-serif',
  },
  outlet: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  outletName: {
    fontWeight: 600,
    fontSize: '1rem',
    marginLeft: '0.75rem',
    fontFamily: 'Inter, sans-serif',
    color: theme.palette.text.primary,
  },
  title: {
    fontSize: '1.125rem',
    lineHeight: 1.4,
    fontWeight: 600,
    marginBottom: '0.5rem',
    fontFamily: 'Inter, sans-serif',
    color: theme.palette.text.primary,
  },
  snippet: {
    color: theme.palette.text.secondary,
    fontSize: '0.9375rem',
    lineHeight: 1.6,
    fontFamily: 'Inter, sans-serif',
  },
  logo: {
    width: 28,
    height: 28,
    borderRadius: '6px',
  },
}));

const outletLogos = {
  'The Information': '/press/the-information.png',
  'The Washington Post': '/press/washington-post.png',
  'Business Insider': '/press/business-insider.png',
  'NBC News': '/press/nbc-news.png',
  'Amazon': '/press/amazon.png',
  'Big Think': '/press/big-think.png',
};

export default function PressCard({ title, outlet, date, url, snippet }) {
  const classes = useStyles();

  return (
    <Box className={classes.cardContainer}>
      <Card className={classes.card} elevation={0}>
        <CardActionArea href={url} target="_blank" rel="noopener noreferrer">
          <CardContent className={classes.cardContent}>
            <Box className={classes.outlet}>
              <Avatar 
                src={outletLogos[outlet]} 
                alt={outlet}
                className={classes.logo}
                variant="square"
              />
              <Typography className={classes.outletName}>
                {outlet}
              </Typography>
            </Box>
            <Typography className={classes.title}>
              {title}
            </Typography>
            <Typography className={classes.date}>
              {date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Box className={classes.preview}>
        <Typography className={classes.snippet}>
          {snippet}
        </Typography>
      </Box>
    </Box>
  );
} 