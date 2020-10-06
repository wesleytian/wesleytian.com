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
					<Typography variant="h6" color="textPrimary" paragraph>
						Work in Progress
					</Typography>
					<Typography variant="body1" color="textSecondary" paragraph>
						I'm migrating everything from my previous site to this
						one built using more modern and customizable software
						libraries. Specifically, I've chosen to use TypeScript,
						React, Material-UI, MDX, Next.js, SWR Hooks, Vercel, and
						Google Firebase.
					</Typography>
					<Typography variant="body1" color="textSecondary" paragraph>
						This library page will include my highly recommended
						books, articles, podcasts, movies, etc., as well as
						summarized concepts for your benefit and my personal
						learning/reference.
					</Typography>

					{/* Startups */}
					<Typography variant="h6">All Things Startups</Typography>
					<Grid container>
						<List>
							<ListItem divider>
								<ListItemLink href="https://www.holloway.com/g/equity-compensation">
									<ListItemText
										className={styles.description}
										primary={`The Holloway Guide to Equity Compensation
										`}
										secondary={`Perhaps THE MOST useful resource on equity compensation out there. 80 pages and 361 links. This is not your average article. `}
										secondaryTypographyProps={{
											color: 'textSecondary'
										}}
									/>
								</ListItemLink>
							</ListItem>
							<ListItem divider>
								<ListItemLink href="https://blog.samaltman.com/employee-equity">
									<ListItemText
										className={styles.description}
										primary={`Employee Equity - Sam Altman (CEO of OpenAI, Former
											President of Y Combinator)`}
										secondary={`tl;dr: Give at least 10% equity to the first
										10 employees, 5% to the next 20, and 5%
										to the next 50.`}
										secondaryTypographyProps={{
											color: 'textSecondary'
										}}
									/>
								</ListItemLink>
							</ListItem>
						</List>
					</Grid>

					{/* Section 2 */}
					<Typography variant="h6">General Wisdom</Typography>
					<Grid container>
						<List>
							<ListItem divider>
								<ListItemLink href="https://www.navalmanack.com/">
									<ListItemText
										className={styles.description}
										primary={`The Almanack of Naval Ravikant
											(Co-Founder and Former CEO of AngelList,
											Early-Stage Investor in Uber, Twitter,
											OpenDoor)`}
									/>
								</ListItemLink>
							</ListItem>
						</List>
					</Grid>

					{/* Section 3 */}
					<Typography variant="h6">Life-Changing Books</Typography>
					<Grid container>
						<List>
							<ListItem divider>
								<ListItemLink href="https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316117/ref=sr_1_2?crid=330KK0BNZD03H&dchild=1&keywords=sapiens+a+brief+history+of+humankind&qid=1601971005&s=books&sprefix=sapiens%2Cstripbooks%2C257&sr=1-2">
									<ListItemText
										className={styles.description}
										primary={`Sapiens: A Brief History of Humankind`}
										secondary={`Yuval Noah Harari`}
									/>
								</ListItemLink>
							</ListItem>
							<ListItem divider>
								<ListItemLink href="https://www.amazon.com/Excellent-Sheep-Miseducation-American-Meaningful-ebook/dp/B00GEEB960/ref=sr_1_1?crid=12QL8HWVVUIVA&dchild=1&keywords=excellent+sheep&qid=1601970961&s=books&sprefix=excellent%2Cstripbooks%2C250&sr=1-1">
									<ListItemText
										className={styles.description}
										primary={`Excellent Sheep: The Miseducation of the American Elite and the Way to a Meaningful Life`}
										secondary={`William Deresiewicz`}
									/>
								</ListItemLink>
							</ListItem>
							<ListItem divider>
								<ListItemLink href="https://www.amazon.com/Zero-One-Notes-Startups-Future-ebook/dp/B00J6YBOFQ/ref=sr_1_1?crid=2G4HN36NSV6PB&dchild=1&keywords=zero+to+one&qid=1601970992&s=books&sprefix=zero+to+o%2Cstripbooks%2C239&sr=1-1">
									<ListItemText
										className={styles.description}
										primary={`Zero to One: Notes on Startups, or How to Build the Future`}
										secondary={`Peter Thiel with Blake Masters`}
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
