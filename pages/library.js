import styles from "../styles/Home.module.css";
import React from "react";
import { Typography, Grid, List } from "@material-ui/core";
import LibraryItem from "../components/LibraryItem";

export default function LibraryPage() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Grid item container xs={11} md={8}>
					<Typography variant="h4" color="textPrimary" gutterBottom>
						<b>Library</b>
					</Typography>
					<Typography
						variant="body1"
						color="textSecondary"
						paragraph
						className={styles.description}>
						There's so much information out there these days. The hard part
						isn't finding stuff to consume; it's filtering it down. Thus, I've
						tried very hard to curate this list to include only the information
						that I have found most insightful or inspiring. I find{" "}
						<a href="https://patrickcollison.com/bookshelf" target="_blank">
							lists like these
						</a>{" "}
						to be flat-out overwhelming bordering on unhelpful when looking for
						reading recommendations.
					</Typography>
					<Typography
						variant="body1"
						color="textSecondary"
						paragraph
						className={styles.description}>
						Have you recently read/seen something that you think I might like?
						If so, drop me an email at{" "}
						<a href="mailto:tian.wesley@gmail.com" target="_blank">
							tian.wesley@gmail.com
						</a>
						. Credit will be given where credit's due.
					</Typography>
					<Typography variant="h5">Short-Form</Typography>
					<Grid container>
						<List dense>
							<LibraryItem
								href={
									"https://digitalnative.substack.com/p/the-startups-transforming-education"
								}
								primary={`The Startups Transforming Education: How Technology is Improving Quality and Lowering Costs`}
								secondary={`Rex Woodbury`}
							/>
							<LibraryItem
								href={
									"https://www.susanjfowler.com/blog/2016/8/13/so-you-want-to-learn-physics"
								}
								primary={`So You Want To Learn Physics...`}
								secondary={`Susan Fowler`}
							/>
							<LibraryItem
								href={
									"https://github.com/google/eng-practices/blob/master/review/reviewer/looking-for.md"
								}
								primary={`What to look for in a code review`}
								secondary={`Google`}
							/>
							<LibraryItem
								href={"https://blog.samaltman.com/how-to-be-successful"}
								primary={`How To Be Successful`}
								secondary={`Sam Altman`}
							/>
							<LibraryItem
								href={
									"https://www.navalmanack.com/almanack-of-naval-ravikant/be-patient"
								}
								primary={`Be Patient`}
								secondary={`Naval Ravikant`}
							/>
							<LibraryItem
								href={"https://nav.al/rich"}
								primary={`How to Get Rich`}
								secondary={`Naval Ravikant`}
							/>
						</List>
					</Grid>
					<Typography variant="h5">Long-Form</Typography>
					<Grid container>
						<List dense>
							<LibraryItem
								href={
									"https://waitbutwhy.com/2015/08/how-and-why-spacex-will-colonize-mars.html"
								}
								primary={`How (and Why) SpaceX Will Colonize Mars`}
								secondary={`Tim Urban`}
							/>
							<LibraryItem
								href={
									"https://waitbutwhy.com/2015/06/how-tesla-will-change-your-life.html"
								}
								primary={`How Tesla Will Change The World`}
								secondary={`Tim Urban`}
							/>
							<LibraryItem
								href={
									"https://www.amazon.com/Rosie-Project-Novel-Graeme-Simsion/dp/1476729093"
								}
								primary={`The Rosie Project: A Novel`}
								secondary={`Graeme Simson`}
							/>
							<LibraryItem
								href={
									"https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316117/ref=sr_1_2?crid=330KK0BNZD03H&dchild=1&keywords=sapiens+a+brief+history+of+humankind&qid=1601971005&s=books&sprefix=sapiens%2Cstripbooks%2C257&sr=1-2"
								}
								primary={`Sapiens: A Brief History of Humankind`}
								secondary={`Yuval Noah Harari`}
							/>
							<LibraryItem
								href={
									"https://www.amazon.com/Excellent-Sheep-Miseducation-American-Meaningful-ebook/dp/B00GEEB960/ref=sr_1_1?crid=12QL8HWVVUIVA&dchild=1&keywords=excellent+sheep&qid=1601970961&s=books&sprefix=excellent%2Cstripbooks%2C250&sr=1-1"
								}
								primary={`Excellent Sheep: The Miseducation of the American Elite and the Way to a Meaningful Life`}
								secondary={`William Deresiewicz`}
							/>
							<LibraryItem
								href={
									"https://www.amazon.com/Zero-One-Notes-Startups-Future-ebook/dp/B00J6YBOFQ/ref=sr_1_1?crid=2G4HN36NSV6PB&dchild=1&keywords=zero+to+one&qid=1601970992&s=books&sprefix=zero+to+o%2Cstripbooks%2C239&sr=1-1"
								}
								primary={`Zero to One: Notes on Startups, or How to Build the Future`}
								secondary={`Peter Thiel, Blake Masters`}
							/>
							<LibraryItem
								href={
									"https://www.amazon.com/Be-IronFit-Time-Efficient-Training-Ultimate/dp/1493017829/ref=sr_1_1?crid=2WAIWTRMYRB7H&dchild=1&keywords=be+iron+fit&qid=1610590228&s=books&sprefix=be+iron%2Cstripbooks%2C271&sr=1-1"
								}
								primary={`Be IronFit: Time-Efficient Training Secrets for Ultimate Fitness`}
								secondary={`Don Fink, Melanie Fink`}
							/>
						</List>
					</Grid>
					<Typography variant="h5">Passive</Typography>
					<Grid container direction="row">
						<List dense>
							<LibraryItem
								href={"https://www.netflix.com/title/70143836"}
								primary={`Breaking Bad`}
								secondary={`Vince Gilligan`}
							/>
							<LibraryItem
								href={
									"https://www.amazon.com/Interstellar-Matthew-McConaughey/dp/B00TU9UFTS"
								}
								primary={`Interstellar`}
								secondary={"Christopher Nolan"}
							/>
							<LibraryItem
								href={"https://films.nationalgeographic.com/free-solo"}
								primary={`Free Solo`}
								secondary={"Elizabeth Chai Vasarhelyi, Jimmy Chin"}
							/>
							<LibraryItem
								href={"https://www.netflix.com/title/80114855"}
								primary={`Mindhunter`}
								secondary={"Joe Penhall"}
							/>
							<LibraryItem
								href={"https://myanimelist.net/anime/9253/Steins_Gate"}
								primary={`Steins;Gate`}
								secondary={"Hiroshi Hamasaki, Takuya Satō,"}
							/>
						</List>
					</Grid>
					<Typography color="textSecondary" className={styles.description}>
						Various recommendations thanks to Walt Borland, the{" "}
						<a href="https://www.morningbrew.com/daily/stories/2020/03/16/morning-brews-guide-living-best-quarantined-life?utm_source=morning_brew">
							Morning Brew
						</a>
						, <a href="https://www.gatesnotes.com/Books">Bill Gates</a>, and
						Solomon Demmessie.
					</Typography>
				</Grid>
			</main>
		</div>
	);
}
