import styles from '../styles/Home.module.css';
import React from 'react';
import {
	Typography,
	Grid,
	List,
	ListItem,
	ListItemText
} from '@material-ui/core';

function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

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
						className={styles.description}
					>
						There's so much reading material out there these days.
						The hard part isn't finding stuff to read; it's
						filtering it down. Thus, I've tried very hard to curate
						this list to include only the information that I have
						found most insightful or inspiring. I find{' '}
						<a
							href="https://patrickcollison.com/bookshelf"
							target="_blank"
						>
							lists like these
						</a>{' '}
						to be flat-out overwhelming bordering on unhelpful when
						looking for reading recommendations.
					</Typography>
					<Typography
						variant="body1"
						color="textSecondary"
						paragraph
						className={styles.description}
					>
						Have you recently read/seen something that you think I
						might like? If so, drop me an email at{' '}
						<a href="mailto:tian.wesley@gmail.com" target="_blank">
							tian.wesley@gmail.com
						</a>
						. Credit will be given where credit's due.
					</Typography>
					<Typography variant="h5">Short-Form</Typography>
					<Grid container>
						<List>
							<ListItem divider disableGutters>
								<ListItemLink
									href="https://digitalnative.substack.com/p/the-startups-transforming-education"
									target="_blank"
								>
									<ListItemText
										className={styles.description}
										primary={`The Startups Transforming Education: How Technology is Improving Quality and Lowering Costs`}
										secondary={`Rex Woodbury`}
									/>
								</ListItemLink>
							</ListItem>
							<ListItem divider disableGutters>
								<ListItemLink
									href="https://www.navalmanack.com/almanack-of-naval-ravikant/be-patient"
									target="_blank"
								>
									<ListItemText
										className={styles.description}
										primary={`Be Patient`}
										secondary={`Naval Ravikant`}
									/>
								</ListItemLink>
							</ListItem>
							<ListItem divider disableGutters>
								<ListItemLink
									href="https://blog.samaltman.com/how-to-be-successful"
									target="_blank"
								>
									<ListItemText
										className={styles.description}
										primary={`How To Be Successful`}
										secondary={`Sam Altman`}
									/>
								</ListItemLink>
							</ListItem>
						</List>
					</Grid>
					<Typography variant="h5">Long-Form</Typography>
					<Grid container>
						<List>
							<ListItem divider disableGutters>
								<ListItemLink
									href="https://www.amazon.com/Zero-One-Notes-Startups-Future-ebook/dp/B00J6YBOFQ/ref=sr_1_1?crid=2G4HN36NSV6PB&dchild=1&keywords=zero+to+one&qid=1601970992&s=books&sprefix=zero+to+o%2Cstripbooks%2C239&sr=1-1"
									target="_blank"
								>
									<ListItemText
										className={styles.description}
										primary={`Zero to One: Notes on Startups, or How to Build the Future`}
										secondary={`Peter Thiel, Blake Masters [Genres: Business, Nonfiction]`}
									/>
								</ListItemLink>
							</ListItem>
							<ListItem divider disableGutters>
								<ListItemLink
									href="https://www.amazon.com/Excellent-Sheep-Miseducation-American-Meaningful-ebook/dp/B00GEEB960/ref=sr_1_1?crid=12QL8HWVVUIVA&dchild=1&keywords=excellent+sheep&qid=1601970961&s=books&sprefix=excellent%2Cstripbooks%2C250&sr=1-1"
									target="_blank"
								>
									<ListItemText
										className={styles.description}
										primary={`Excellent Sheep: The Miseducation of the American Elite and the Way to a Meaningful Life`}
										secondary={`William Deresiewicz [Genres: Education, Nonfiction]`}
									/>
								</ListItemLink>
							</ListItem>
							<ListItem divider disableGutters>
								<ListItemLink
									href="https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316117/ref=sr_1_2?crid=330KK0BNZD03H&dchild=1&keywords=sapiens+a+brief+history+of+humankind&qid=1601971005&s=books&sprefix=sapiens%2Cstripbooks%2C257&sr=1-2"
									target="_blank"
								>
									<ListItemText
										className={styles.description}
										primary={`Sapiens: A Brief History of Humankind`}
										secondary={`Yuval Noah Harari [Genres: Nonfiction, History]`}
									/>
								</ListItemLink>
							</ListItem>
						</List>
					</Grid>
					<Typography variant="h5">Passive</Typography>
					<Grid container>
						<List>
							<ListItem divider disableGutters>
								<ListItemLink href="https://films.nationalgeographic.com/free-solo">
									<ListItemText
										className={styles.description}
										primary={`Free Solo`}
										secondary={`Jimmy Chin, Elizabeth Chai Vasarhelyi [Genres: Documentary]`}
									/>
								</ListItemLink>
							</ListItem>
							<ListItem divider>
								{/* <ListItemLink href="https://www.netflix.com/title/80114855"> */}
								<ListItemText
									className={styles.description}
									primary={`Mindhunter (TV Series)`}
									secondary={`Joe Penhall [Genres: Crime, Drama, Thriller]`}
								/>
								{/* </ListItemLink> */}
							</ListItem>
							<ListItem divider disableGutters>
								<ListItemLink
									href="https://www.amazon.com/Interstellar-Matthew-McConaughey/dp/B00TU9UFTS"
									target="_blank"
								>
									<ListItemText
										className={styles.description}
										primary={`Interstellar`}
										secondary={`Christopher Nolan [Genres: Science Fiction, Action]`}
									/>
								</ListItemLink>
							</ListItem>
							<ListItem divider>
								{/* <ListItemLink href=""> */}
								<ListItemText
									className={styles.description}
									primary={`Breaking Bad (TV Series)`}
									secondary={`Vince Gilligan [Genres: Crime, Drama, Thriller]`}
								/>
								{/* </ListItemLink> */}
							</ListItem>
						</List>
					</Grid>
				</Grid>
			</main>
		</div>
	);
}
