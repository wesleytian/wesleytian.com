import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { List, Divider, Typography, Button } from '@material-ui/core';
import TimelineStep from './TimelineStep';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export default function Timeline() {
	const [isShowingFullTimeline, toggleIsShowingFullTimeline] = useState(
		false
	);

	const handleClick = () => {
		toggleIsShowingFullTimeline(!isShowingFullTimeline);
	};

	const FullTimeline = () => {
		return (
			<>
				<Divider />
				<Typography variant="h5">2018</Typography>
				<List>
					<TimelineStep
						primary={
							'Received my First Full-time Job Offer Ever–from Microsoft 🎉'
						}
						secondary={
							'I interviewed for an internship position, but to my pleasant surprise, I received a full-time offer. I wanted to graduate first, though, so I turned it down and asked for an internship. (Microsoft offered it to me when I still had three semesters left till graduation.)'
						}
					/>
				</List>
				<Divider />
				<Typography variant="h5">2017</Typography>
				<List>
					<TimelineStep primary={'Met My Girlfriend 🥰'} />
					<TimelineStep
						primary={
							'Transferred to the University of Michigan! 〽️'
						}
						secondary={'Go Blue!'}
					/>
				</List>
				<Divider />
				<Typography variant="h5">2015</Typography>
				<List>
					<TimelineStep
						primary={
							'Matriculated at the University of Massachusetts, Amherst 🥘'
						}
						secondary={
							'Besides the people, the next best thing was the food. UMass Amherst is consistently ranked 1st in the US for its campus dining. And yes, we had all-you-can-eat lobster for Halloween.'
						}
					/>
					<TimelineStep
						primary={'Climbed Mt. Fuji 🗻🇯🇵'}
						secondary={
							'As a post-graduation trip, three of my best friends and I traveled to Japan. One of those nights, we decided to pull an all-nighter and summit Mt. Fuji by sunrise. It was grueling and mind-numbing, but we did it, though!'
						}
					/>
					<TimelineStep
						primary={'Graduated High School 🦅'}
						secondary={
							'Graduated from the Shanghai American School (est. 1912). Go Eagles!'
						}
					/>
				</List>
				<Divider />
				<Typography variant="h5">2007-2015</Typography>
				<List>
					<TimelineStep
						primary={'Lived in Shanghai 🇨🇳'}
						secondary={
							'Made some amazing friends, had a great time and learned a great deal about modern Chinese culture.'
						}
					/>
				</List>
				<Divider />
				<Typography variant="h5">2002-2007</Typography>
				<List>
					<TimelineStep
						primary={'Moved 4 times in 5 years 🛫🛬 x 4'}
						secondary={
							"Moved to West Linn, Oregon; Taipei, Taiwan; back to West Linn, Oregon; and then to Shanghai, China. Why? Because of my dad's job. What does he do? Well, he's always worked in the semiconductor industry–first as an engineer and now as an executive–but let's just say he didn't let geography limit his career path."
						}
					/>
				</List>
				<Divider />
				<Typography variant="h5">1997</Typography>
				<List>
					<TimelineStep
						primary={'Born 👶🏻'}
						secondary={
							'Born on Earth Day in Mountain View, CA, the heart of Silicon Valley.'
						}
					/>
				</List>
				<Grid container justify="center">
					<Button
						endIcon={<ExpandLessIcon />}
						onClick={handleClick}
						style={{ textTransform: 'none' }}
					>
						See Less
					</Button>
				</Grid>
			</>
		);
	};

	return (
		<Grid item container justify="flex-start" direction="column">
			<Typography variant="h4" gutterBottom>
				<b>Timeline</b>
			</Typography>
			<Typography variant="h5">
				<b>2020</b>
			</Typography>
			<List>
				<TimelineStep
					primary={'Moved to Nevada 🏜 '}
					secondary={
						'My girlfriend and I packed up all of our physical belongings into my 2006 Honda Pilot and drove across the US to our new home. The trip took 4 days and around 40 hours on the road. Thankfully, we did not catch Rona.'
					}
					link={
						'https://www.instagram.com/stories/highlights/18153325603070911/'
					}
					linkName={'See my Instagram story here.'}
				/>
				<TimelineStep
					primary={'Front Page of TechCrunch! 📰'}
					secondary={`Noting that press coverage has no correlation with startup success, it was still pretty cool to see us selected as one of the top 23 of 197 companies from the YC S20 batch.`}
					link={
						'https://techcrunch.com/2020/08/25/our-12-favorite-startups-from-y-combinators-s20-demo-day-part-2/'
					}
					linkName={'Read more here.'}
				/>
				<TimelineStep
					primary={'Funding Secured 💰'}
					secondary="Right before Y Combinator's demo day, we raised a 1.75M seed round led by Tiger Global. Those 80+ hour weeks sure paid off."
					link={
						'https://www.edsurge.com/news/2020-09-28-a-shopify-for-online-schools-raises-1-75m-led-by-tiger-global'
					}
					linkName={'Read more here.'}
				/>
				<TimelineStep
					primary={'Went Through Y Combinator 🥳'}
					secondary={
						"Went through Y Combinator's famed startup accelerator program! Some other companies that went through this program are Airbnb, Dropbox, Stripe, Instacart, Reddit, DoorDash, and Cruise. You might have heard of them."
					}
				/>
				<TimelineStep
					primary={'Joined Virtually 💡'}
					secondary={
						"What began as a cold call for startup advice turned into a job offer as Virtually's first employee."
					}
				/>
				<TimelineStep
					primary={'Rejected by Ding Tea 🥤'}
					secondary={
						'Apparently, landing a job at a boba shop is harder than landing one at Microsoft.'
					}
				/>
				<TimelineStep
					primary={'Rejected by Stanford 🎒'}
					secondary={
						"In hindsight, I'm actually kinda glad I didn't get in because instead of going through Zoom schooling to prepare me to pursue my startup dream, I'm pursuing my dream right now."
					}
				/>
			</List>
			<Divider />
			<Typography variant="h5">
				<b>2019</b>
			</Typography>
			<List>
				<TimelineStep
					primary={'Graduated from the University of Michigan! 🎊'}
				/>
				<TimelineStep
					primary={'Climbed Mt. Whitney ⛰'}
					secondary={
						'Climbed the tallest mountain in the contiguous US with a couple of friends!'
					}
					link={'https://wesleytian.github.io/2019/whitney/'}
					linkName={'Read more here.'}
				/>
				<TimelineStep
					primary={'Worked at Microsoft👨🏻‍💻'}
					secondary={
						'Moved to Bellevue, Washington, and finally got the big tech FAAMG experience that I always dreamt of.'
					}
				/>
				<TimelineStep
					primary={'Trained for a Marathon 🏃🏻‍♂️'}
					secondary={
						'I trained for 4 months before injuring my hip after a 22-mile long run–right before the race. By trying to be extra prepared for the race, I overtrained myself. It was unfortunate, but I grew mentally and learned a lot about training for endurance sports.'
					}
				/>
			</List>

			{isShowingFullTimeline ? (
				<FullTimeline />
			) : (
				<Grid container justify="center">
					<Button
						endIcon={<ExpandMoreIcon />}
						onClick={handleClick}
						style={{ textTransform: 'none' }}
					>
						See More
					</Button>
				</Grid>
			)}
		</Grid>
	);
}
