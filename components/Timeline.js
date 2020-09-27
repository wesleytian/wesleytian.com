import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { List, Divider, Box, Typography } from '@material-ui/core';
import TimelineStep from './TimelineStep';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StyledButton from '../components/StyledButton';
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
						primary={'Received a Full-time Offer from Microsoft 🎉'}
						secondary={
							'I interviewed for an internship position, but received a full-time offer. I wanted to graduate first though, so I turned it down and asked for an internship.'
						}
					/>
				</List>
				<Divider />
				<Typography variant="h5">2017</Typography>
				<List>
					<TimelineStep
						primary={'Met My Girlfriend 🥰'}
						// secondary={'Met my girlfriend.'}
					/>
					<TimelineStep
						primary={'Transferred to the University of Michigan 🎊'}
						secondary={'Go Blue!'}
					/>
				</List>
				<Divider />
				<Typography variant="h5">2015</Typography>
				<List>
					<TimelineStep
						primary={
							'Matriculated at the University of Massachusetts, Amherst 🤪'
						}
						secondary={
							'ZooMass baby. #1 ranked campus food in the USA. Code, party, eat, sleep, repeat.'
						}
					/>
					<TimelineStep
						primary={'Visited Japan 🇯🇵 and Climbed Mt. Fuji 🗻'}
						secondary={
							'Pulled an all-nighter and climbed Mt. Fuji with a couple of high school friends.'
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
							'Made some amazing friends, had a great time, and learned a great deal about modern Chinese culture.'
						}
					/>
				</List>
				<Divider />
				<Typography variant="h5">2002-2007</Typography>
				<List>
					<TimelineStep
						primary={'Moved to 4 times in 5 years 🛫🛬'}
						secondary={
							'Moved to Oregon, Taiwan, back to Oregon, and then to China.'
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
					<StyledButton
						endIcon={<ExpandLessIcon />}
						onClick={handleClick}
						variant="outlined"
					>
						See Less
					</StyledButton>
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
						'My girlfriend and I packed up all of our belongings into my 2006 Honda Pilot and drove across the US to our new home. The trip took 4 days and around 40 hours on the road.'
					}
				/>
				<TimelineStep
					primary={'Funding Secured 💰'}
					secondary="Right before Y Combinator's demo day, we raised a seed round led by Tiger Global. It felt so good to see our hard work pay off. Say hello to job security!"
				/>
				<TimelineStep
					primary={'Accepted into Y Combinator 🥳'}
					secondary={
						"We went through Y Combinator's Summer 2020 seed money startup accelerator program. Famous YC companies include Airbnb, Dropbox, Stripe, Instacart, Reddit, DoorDash, Twitch, Coinbase, and Cruise."
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
						'Apparently, landing a job at a boba shop is more competitive than landing one at Microsoft.'
					}
				/>
				<TimelineStep
					primary={'Rejected by Stanford 🎒'}
					secondary={
						"I'm actually glad I didn't get in, because instead of going through virtual schooling to prepare me to pursue my startup dream, I'm doing that right now."
					}
				/>
			</List>
			<Divider />
			<Typography variant="h5">
				<b>2019</b>
			</Typography>
			<List>
				<TimelineStep
					primary={'Graduated from the University of Michigan 〽️'}
					secondary={
						"Took me 4.5 years to graduate college, but only 2.5 years for both UMich's computer science and data science programs, start to finish."
					}
				/>
				<TimelineStep
					primary={'Climbed Mt. Whitney ⛰'}
					secondary={
						'Climbed the tallest mountain in the contiguous US with a couple of friends.'
					}
				/>
				<TimelineStep
					primary={'Worked at Microsoft 👨🏻‍💻'}
					secondary={
						'Moved to Seattle, Washington, and finally got the big tech FAAMG experience that I had always dreamt of.'
					}
				/>
				<TimelineStep
					primary={'Trained For A Marathon 🏃🏻‍♂️'}
					secondary={
						'I ended up injuring my hip after my final 20-mile run before the race.'
					}
				/>
			</List>

			{isShowingFullTimeline ? (
				<FullTimeline />
			) : (
				<Grid container justify="center">
					<StyledButton
						endIcon={<ExpandMoreIcon />}
						onClick={handleClick}
						variant="outlined"
					>
						See More
					</StyledButton>
				</Grid>
			)}
		</Grid>
	);
}
