import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { List, Button, Divider } from "@material-ui/core";
import TimelineStep from "./TimelineStep";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StyledButton from "../components/StyledButton";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { ExpandLess } from "@material-ui/icons";

export default function Timeline() {
	const [isShowingFullTimeline, toggleIsShowingFullTimeline] = useState(false);

	const handleClick = () => {
		toggleIsShowingFullTimeline(!isShowingFullTimeline);
	};

	const FullTimeline = () => {
		return (
			<>
				<Divider />
				<h3>2018</h3>
				<List>
					<TimelineStep
						primary={"Received a Full-time Offer from Microsoft"}
						secondary={
							"Too bad, I couldn't accept it because I was still in school, so I converted it into an internship."
						}
					/>
				</List>
				<Divider />
				<h3>2017</h3>
				<List>
					<TimelineStep
						primary={"Met Carol 🥰"}
						secondary={
							"Although we lost the Michigan vs. Michigan State football game that day, I met my girlfriend while tailgating."
						}
					/>
					<TimelineStep
						primary={"Transferred to the University of Michigan"}
						secondary={"Go blue!"}
					/>
				</List>
				<Divider />
				<h3>2015</h3>
				<List>
					<TimelineStep
						primary={"Matriculated at the University of Massachusetts, Amherst"}
						secondary={
							"ZooMass baby. #1 ranked campus food in the USA. Code, party, eat, sleep, repeat."
						}
					/>
					<TimelineStep
						primary={"Climbed Mt. Fuji"}
						secondary={
							"Pulled an all-nighter and climbed Mt. Fuji with a couple of high school friends."
						}
					/>
					<TimelineStep
						primary={"Graduated High School"}
						secondary={"Shanghai American School, Class of 2015!"}
					/>
				</List>
				<Divider />
				<h3>2009</h3>
				<List>
					<TimelineStep
						primary={"First Computer"}
						secondary={
							"Played a lot of Plants vs. Zombies, RuneScape, WolfTeam, and League of Legends."
						}
					/>
				</List>
				<Divider />
				<h3>2007</h3>
				<List>
					<TimelineStep
						primary={"Moved to Shanghai, China"}
						secondary={"Yet another move."}
					/>
				</List>
				<Divider />
				<h3>2005</h3>
				<List>
					<TimelineStep
						primary={"Moved Back to Oregon"}
						secondary={"See a pattern yet?"}
					/>
				</List>
				<Divider />
				<h3>2003</h3>
				<List>
					<TimelineStep
						primary={"Moved to Taipei, Taiwan"}
						secondary={"Had to move again due to my dad's job."}
					/>
				</List>
				<Divider />
				<h3>2002</h3>
				<List>
					<TimelineStep
						primary={"Moved to Oregon"}
						secondary={"Moved due to my dad's job."}
					/>
				</List>
				<Divider />
				<h3>1997</h3>
				<List>
					<TimelineStep
						primary={"Born 👶🏻"}
						secondary={
							"Born in Mountain View, California, in the heart of Silicon Valley."
						}
					/>
				</List>
				<Grid container justify="center">
					<StyledButton
						endIcon={<ExpandLessIcon />}
						onClick={handleClick}
						variant="outlined">
						See Less
					</StyledButton>
				</Grid>
			</>
		);
	};

	return (
		<Grid item container justify="flex-start" direction="column">
			<h2>Timeline</h2>
			<h3>2020</h3>
			<List>
				<TimelineStep
					primary={"Moved to Nevada 🏞 "}
					secondary={
						"After four days of driving from Ann Arbor, Michigan, my girlfriend and I finally made it to Reno. "
					}
				/>
				<TimelineStep
					primary={"Funding Secured 🤑"}
					secondary="We raised a seed round led by Tiger Global. It felt so good to see our hard work pay off. Say hello to job security!"
				/>
				{/* <TimelineStep
					primary={"Bought My First Car 🚙"}
					secondary={
						"I bought a used 2006 Honda Pilot EX-L off a guy from Craigslist."
					}
				/> */}
				<TimelineStep
					primary={"Accepted Into Y Combinator"}
					secondary={"We're a part of Y Combinator's summer 2020 batch now!"}
				/>
				<TimelineStep
					primary={"Joined Virtually 😁"}
					secondary={
						"What started as a cold call ended up turning into a job offer as Virtually's first employee."
					}
				/>
				<TimelineStep
					primary={"Rejected by Ding Tea 🥤"}
					secondary={
						"Apparently, landing a job at a boba shop is more competitive than landing one at Microsoft."
					}
				/>
				<TimelineStep
					primary={"Rejected by Stanford ❌"}
					secondary={"I'm actually so glad I didn't get in."}
				/>
			</List>
			<Divider />
			<h3>2019</h3>
			<List>
				<TimelineStep
					primary={"Graduated from the University of Michigan 〽️"}
					secondary={
						"Took me 4.5 years to graduate college, but only 2.5 years for both UMich's computer science and data science programs, start to finish."
					}
				/>
				<TimelineStep
					primary={"Climbed Mt. Whitney ⛰"}
					secondary={
						"Climbed the tallest mountain in the contiguous US with a couple of friends."
					}
				/>
				<TimelineStep
					primary={"Trained For A Marathon 🏃🏻‍♂️"}
					secondary={
						"I ended up injuring my hip after my final 20-mile run before the race."
					}
				/>
				<TimelineStep
					primary={"Worked at Microsoft 👨🏻‍💻"}
					secondary={
						"Moved to Seattle, Washington, and finally got the big tech FAAMG experience that I had always dreamt of."
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
						variant="outlined">
						See More
					</StyledButton>
				</Grid>
			)}
		</Grid>
	);
}
