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
						<List>
							<LibraryItem
								href={"https://breakoutlist.com/career-planning/"}
								primary={`Career Planning Guide for People in the Technology Industry`}
								secondary={`Multiple Contributors`}
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
						</List>
					</Grid>
					<Typography variant="h5">Long-Form</Typography>
					<Grid container>
						<List>
							<LibraryItem
								href={
									"https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316117/ref=sr_1_2?crid=330KK0BNZD03H&dchild=1&keywords=sapiens+a+brief+history+of+humankind&qid=1601971005&s=books&sprefix=sapiens%2Cstripbooks%2C257&sr=1-2"
								}
								primary={`Sapiens: A Brief History of Humankind`}
								secondary={`Yuval Noah Harari [Genres: Nonfiction, History]`}
							/>
							<LibraryItem
								href={
									"https://www.amazon.com/Excellent-Sheep-Miseducation-American-Meaningful-ebook/dp/B00GEEB960/ref=sr_1_1?crid=12QL8HWVVUIVA&dchild=1&keywords=excellent+sheep&qid=1601970961&s=books&sprefix=excellent%2Cstripbooks%2C250&sr=1-1"
								}
								primary={`Excellent Sheep: The Miseducation of the American Elite and the Way to a Meaningful Life`}
								secondary={`William Deresiewicz [Genres: Education, Nonfiction]`}
							/>
							<LibraryItem
								href={
									"https://www.amazon.com/Zero-One-Notes-Startups-Future-ebook/dp/B00J6YBOFQ/ref=sr_1_1?crid=2G4HN36NSV6PB&dchild=1&keywords=zero+to+one&qid=1601970992&s=books&sprefix=zero+to+o%2Cstripbooks%2C239&sr=1-1"
								}
								primary={`Zero to One: Notes on Startups, or How to Build the Future`}
								secondary={`Peter Thiel, Blake Masters [Genres: Business, Nonfiction]`}
							/>
						</List>
					</Grid>
					<Typography variant="h5">Passive</Typography>
					<Grid container>
						<List>
							<LibraryItem
								href={"https://www.netflix.com/title/70143836"}
								primary={`Breaking Bad (TV Series)`}
								secondary={`Vince Gilligan [Genres: Crime, Drama, Thriller]`}
							/>
							<LibraryItem
								href={
									"https://www.amazon.com/Interstellar-Matthew-McConaughey/dp/B00TU9UFTS"
								}
								primary={`Interstellar`}
								secondary={`Christopher Nolan [Genres: Science Fiction, Action]`}
							/>
							<LibraryItem
								href={"https://films.nationalgeographic.com/free-solo"}
								primary={`Free Solo`}
								secondary={`Jimmy Chin, Elizabeth Chai Vasarhelyi [Genres: Documentary]`}
							/>
							<LibraryItem
								href={"https://www.netflix.com/title/80114855"}
								primary={`Mindhunter (TV Series)`}
								secondary={`Joe Penhall [Genres: Crime, Drama, Thriller]`}
							/>
						</List>
					</Grid>
				</Grid>
			</main>
		</div>
	);
}
