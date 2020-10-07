import React from 'react';
import styles from '../styles/Home.module.css';
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
						There's so much information out there these days. The
						hard part isn't finding information, it's filtering it
						down. Thus, I've tried very hard to curate this list to
						include only the information that I find most
						insightful. I find{' '}
						<a
							href="https://patrickcollison.com/bookshelf"
							target="_blank"
						>
							lists like these
						</a>{' '}
						to be flat out overwhelming and unhelpful when looking
						for reading recommendations.
					</Typography>
					<Typography
						variant="body1"
						color="textSecondary"
						paragraph
						className={styles.description}
					>
						Do you think you've read/seen something that I might
						like? If so, drop me an email at{' '}
						<a href="mailto:tian.wesley@gmail.com" target="_blank">
							tian.wesley@gmail.com
						</a>
						. I'll give you credit here.
					</Typography>

					{/* Section 2 */}
					<Typography variant="h6">
						Nuggets of Wisdom (Super Short-Form)
					</Typography>
					<Grid container>
						<List>
							<ListItem divider disableGutters>
								<ListItemLink
									href="https://www.navalmanack.com/almanack-of-naval-ravikant/build-or-buy-equity-in-a-business"
									target="_blank"
								>
									<ListItemText
										className={styles.description}
										primary={`Build or Buy Equity in a Business`}
										secondary={`Naval Ravikant (Co-Founder and Ex-CEO of AngelList,
											Early-Stage Investor in Uber, Twitter)`}
									/>
								</ListItemLink>
							</ListItem>
						</List>
					</Grid>

					{/* Section 2 */}
					<Typography variant="h6">
						Articles of Wisdom (Short-Form)
					</Typography>
					<Grid container>
						<List>
							<ListItem divider disableGutters>
								<ListItemLink
									href="https://www.navalmanack.com/almanack-of-naval-ravikant/build-or-buy-equity-in-a-business"
									target="_blank"
								>
									<ListItemText
										className={styles.description}
										primary={`Build or Buy Equity in a Business`}
										secondary={`Naval Ravikant (Co-Founder and Ex-CEO of AngelList,
											Early-Stage Investor in Uber, Twitter)`}
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
						</List>
					</Grid>

					{/* Section 3 */}
					<Typography variant="h6">
						Life-Changing Books (Long-Form)
					</Typography>
					<Grid container>
						<List>
							<ListItem divider disableGutters>
								<ListItemLink
									href="https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316117/ref=sr_1_2?crid=330KK0BNZD03H&dchild=1&keywords=sapiens+a+brief+history+of+humankind&qid=1601971005&s=books&sprefix=sapiens%2Cstripbooks%2C257&sr=1-2"
									target="_blank"
								>
									<ListItemText
										className={styles.description}
										primary={`Sapiens: A Brief History of Humankind`}
										secondary={`Yuval Noah Harari`}
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
										secondary={`William Deresiewicz`}
									/>
								</ListItemLink>
							</ListItem>
							<ListItem divider disableGutters>
								<ListItemLink
									href="https://www.amazon.com/Zero-One-Notes-Startups-Future-ebook/dp/B00J6YBOFQ/ref=sr_1_1?crid=2G4HN36NSV6PB&dchild=1&keywords=zero+to+one&qid=1601970992&s=books&sprefix=zero+to+o%2Cstripbooks%2C239&sr=1-1"
									target="_blank"
								>
									<ListItemText
										className={styles.description}
										primary={`Zero to One: Notes on Startups, or How to Build the Future`}
										secondary={`Peter Thiel with Blake Masters`}
									/>
								</ListItemLink>
							</ListItem>
						</List>
					</Grid>

					{/* Section 4 */}
					<Typography variant="h6">Passive Consumption</Typography>
					<Grid container>
						<List>
							<ListItem divider disableGutters>
								<ListItemLink
									href="https://www.amazon.com/Interstellar-Matthew-McConaughey/dp/B00TU9UFTS"
									target="_blank"
								>
									<ListItemText
										className={styles.description}
										primary={`Interstellar`}
										secondary={`Christopher Nolan`}
									/>
								</ListItemLink>
							</ListItem>
							<ListItem divider>
								{/* <ListItemLink href=""> */}
								<ListItemText
									className={styles.description}
									primary={`Breaking Bad (TV Series)`}
									secondary={`Vince Gilligan`}
								/>
								{/* </ListItemLink> */}
							</ListItem>
							<ListItem divider>
								{/* <ListItemLink href="https://www.netflix.com/title/80114855"> */}
								<ListItemText
									className={styles.description}
									primary={`Mindhunter (TV Series)`}
									secondary={`Joe Penhall`}
								/>
								{/* </ListItemLink> */}
							</ListItem>
							<ListItem divider disableGutters>
								<ListItemLink href="https://films.nationalgeographic.com/free-solo">
									<ListItemText
										className={styles.description}
										primary={`Free Solo`}
										secondary={`Jimmy Chin, Elizabeth Chai Vasarhelyi`}
									/>
								</ListItemLink>
							</ListItem>
						</List>
					</Grid>
				</Grid>
			</main>
		</div>
	);
}
