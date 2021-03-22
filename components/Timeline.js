import React, { useState } from "react";
import { List, Divider, Typography, Button, Grid } from "@material-ui/core";
import TimelineStep from "./TimelineStep";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { incrementViews } from "../lib/firebase";

export default function Timeline() {
	const [isShowingFullTimeline, toggleIsShowingFullTimeline] = useState(false);

	const handleClick = () => {
		toggleIsShowingFullTimeline(!isShowingFullTimeline);
		incrementViews("see-more");
	};

	const FullTimeline = () => {
		return (
			<>
				<TimelineStep
					primary={"Accepted into Y Combinator! 🥳"}
					secondary={
						"Got into Y Combinator's famed startup accelerator program! Other companies that have gone through this program include Airbnb, Dropbox, Stripe, Instacart, Reddit, DoorDash, and Cruise. You might have heard of them."
					}
				/>
				<TimelineStep
					primary={"Joined Virtually 💡"}
					secondary={
						"What began as a cold call for startup advice somehow turned into a job offer as Virtually's first founding member and software engineer."
					}
					link={"/posts/dream-job/"}
					linkName={"Read about how I landed the job here."}
				/>
				<TimelineStep
					primary={"Ghosted by Ding Tea 🥤"}
					secondary={
						"Apparently, landing a job at a boba shop is harder than landing one at Microsoft."
					}
				/>
				<TimelineStep
					primary={"Rejected by Stanford Graduate School🎒"}
					secondary={
						"In hindsight, I'm actually kinda glad I didn't get in because instead of going through Zoom schooling to prepare me to pursue my startup dream, I'm pursuing my dream right now."
					}
				/>
				<Divider />
				<Typography variant="h5">
					<b>2019</b>
				</Typography>
				<List>
					<TimelineStep
						primary={"Graduated From the University of Michigan! 🎊"}
					/>
					<TimelineStep
						primary={"Climbed Mt. Whitney ⛰"}
						secondary={
							"Climbed the tallest mountain in the contiguous US with a couple of friends!"
						}
						link={"posts/whitney/"}
						linkName={"Read about it here."}
					/>
					<TimelineStep
						primary={"Worked at Microsoft👨🏻‍💻"}
						secondary={
							"Moved to Bellevue, Washington, and finally got the Big Tech experience that I had always dreamt of."
						}
					/>
					<TimelineStep
						primary={"Trained for a Marathon 🏃🏻‍♂️"}
						secondary={
							"I trained for 4 months before injuring my hip after a 22-mile long run–right before the race. By trying to be extra prepared for the race, I overtrained myself. It was dissapointing, but I grew mentally and learned a lot about training for endurance sports."
						}
					/>
				</List>
				<Divider />
				<Typography variant="h5">2018</Typography>
				<List>
					<TimelineStep
						primary={
							"Received My First Full-Time Job Offer Ever From Microsoft 🎉"
						}
						secondary={
							"I interviewed for an internship position, but to my pleasant surprise, I received a full-time offer. I wanted to graduate first, though, so I turned it down and asked for an internship. (I still had 3 semesters left until graduation at the time.)"
						}
					/>
				</List>
				<Divider />
				<Typography variant="h5">2017</Typography>
				<List>
					<TimelineStep primary={"Met My Girlfriend 🥰"} />
					<TimelineStep
						primary={"Transferred To the University of Michigan! 〽️"}
						secondary={"Go Blue!"}
					/>
				</List>
				<Divider />
				<Typography variant="h5">2016</Typography>
				<List>
					<TimelineStep
						primary={"Built a Google Nest for Window ACs 🤓"}
						secondary={
							"Developed a smart thermostat that works with window ACs instead of central HVAC systems. I built everything myself–including the hardware and the software. As a result, Google reached out to interview me. –I didn't end up getting the offer."
						}
						link={"https://wesleytian.github.io/2016/ac_hack/"}
						linkName={"Read more here."}
					/>
					<TimelineStep
						primary={"First Job + Became Housemates With A Professor 😎"}
						secondary={
							"My UMass Amherst computer science professor let me live at his house over the summer while working for his IoT startup. Without his close mentorship, I probably wouldn't be where I am today. For that, I am forever grateful."
						}
						link={"https://wesleytian.github.io/2016/independence/"}
						linkName={"Read more here."}
					/>
				</List>
				<Divider />
				<Typography variant="h5">2015</Typography>
				<List>
					<TimelineStep
						primary={
							"Matriculated at the University of Massachusetts, Amherst 🥘"
						}
					/>
					<TimelineStep
						primary={"Climbed Mt. Fuji 🗻🇯🇵"}
						secondary={
							"As a post-graduation trip, three of my best friends and I traveled to Japan. One of those nights, we decided to pull an all-nighter and summit Mt. Fuji by sunrise. It was grueling and mind-numbing, but we did it!"
						}
					/>
					<TimelineStep
						primary={"Graduated High School 🦅"}
						secondary={
							"Graduated from the Shanghai American School (est. 1912). Go Eagles!"
						}
					/>
				</List>
				<Divider />
				<Typography variant="h5">2007-2015</Typography>
				<List>
					<TimelineStep
						primary={"Lived in Shanghai 🇨🇳"}
						secondary={
							"Made some amazing friends, had a great time, and experienced China's explosive growth first-hand."
						}
					/>
				</List>
				<Divider />
				<Typography variant="h5">2002-2007</Typography>
				<List>
					<TimelineStep
						primary={"Moved 4 times in 5 years 🛫🛬 x 4"}
						secondary={
							"Moved to Oregon, Taiwan, back to Oregon, and then finally to Shanghai, China."
						}
					/>
				</List>
				<Divider />
				<Typography variant="h5">1997</Typography>
				<List>
					<TimelineStep
						primary={"Born 👶🏻"}
						secondary={"Born in Mountain View, the heart of Silicon Valley."}
					/>
				</List>
				<Grid container justify="center">
					<Button
						endIcon={<ExpandLessIcon />}
						onClick={handleClick}
						style={{ textTransform: "none" }}>
						See Less
					</Button>
				</Grid>
			</>
		);
	};

	return (
		<Grid item container justify="flex-start" direction="column">
			<Typography variant="h4" gutterBottom>
				<b>🗓️ Timeline</b>
			</Typography>
			<Typography variant="h5">
				<b>2021</b>
			</Typography>
			<List>
				<TimelineStep
					primary={"Moving to the Bay Area this summer! 😁"}
					secondary={
						"After moving 8 times around the world, I'm ecstatic to be moving back to my childhood home in the South Bay soon!"
					}
				/>
			</List>
			<Divider />
			<Typography variant="h5">
				<b>2020</b>
			</Typography>
			<List>
				<TimelineStep
					primary={"Signed up for My First Ironman 🏊🚴🏃‍♂️"}
					secondary={
						"The first 4 months will be running base training using the MAF method (training in an 100% aerobic heartrate zone). The actual 7-month Ironman training program will begin in late March, 2021."
					}
					link={"http://strava.com/athletes/wesleytian"}
					linkName={"Follow me on Strava!"}
				/>
				<TimelineStep
					primary={"Moved to Reno 🏜"}
					secondary={
						"My girlfriend and I packed all of our physical belongings into my car and drove from Michigan to our new home in Nevada. The trip took 4 days and about 40 hours on the road. Thankfully, we didn't catch Rona."
					}
				/>
				<TimelineStep
					primary={"We Made It To the Front Page of TechCrunch! 📰"}
					link={
						"https://techcrunch.com/2020/08/25/our-12-favorite-startups-from-y-combinators-s20-demo-day-part-2/"
					}
					linkName={
						"Read about us here. (Unfortunately, you'll need a subscription.)"
					}
				/>
				<TimelineStep
					primary={"Funding Secured 😉"}
					secondary="We successfully raised a $1.8M seed round led by Tiger Global! Those 80 hour weeks sure paid off."
					link={
						"https://www.edsurge.com/news/2020-09-28-a-shopify-for-online-schools-raises-1-75m-led-by-tiger-global"
					}
					linkName={"Press release here."}
				/>
			</List>

			{isShowingFullTimeline ? (
				<FullTimeline />
			) : (
				<Grid container justify="center">
					<Button
						endIcon={<ExpandMoreIcon />}
						onClick={handleClick}
						style={{ textTransform: "none" }}>
						See More
					</Button>
				</Grid>
			)}
		</Grid>
	);
}
