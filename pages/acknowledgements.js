import styles from "../styles/Home.module.css";
import React from "react";
import { Typography, Grid } from "@material-ui/core";

export default function AcknowledgementsPage() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Grid item container xs={11} md={8}>
					<Grid container>
						<Typography variant="h4" color="textPrimary" gutterBottom>
							<b>Acknowledgements</b>
						</Typography>
					</Grid>
					<Typography
						variant="body1"
						color="textSecondary"
						paragraph
						className={styles.description}>
						Just like books have acknowledgements, I want to thank the people
						that have contributed a lot to my life.
					</Typography>
					<Typography
						variant="body1"
						color="textSecondary"
						paragraph
						className={styles.description}
						style={{ whiteSpace: "pre-line" }}>
						{`	
            My parents

            My friends and mentors 
            Henry Li, Douglas Qian, Andrew Chang, Henry Chan, Edward Liu, Joe Breda, Philip Michalowski, Nisch
						Tamang, Letao Chen, Helena Gregg, Govind Girish, Rui Wang, Walt Borland, Akhil Nadendla, Anant Akash, 
            Nathan Leung, Anish Mahendran, and Solomon Demmessie.
            `}
					</Typography>
					<Typography
						variant="body1"
						color="textSecondary"
						paragraph
						className={styles.description}>
						If you ever meet any of these people, know that you're in good
						company.
					</Typography>
					{/* <Typography
						variant="body1"
						color="textSecondary"
						paragraph
						className={styles.description}>
						In no particular order, my parents, Henry Li, Douglas Qian, Andrew
						Chang, Henry Chan, Edward Liu, Joe Breda, Philip Michalowski, Nisch
						Tamang, Letao Chen, Helena Gregg, Govind Girish, Rui Wang, Walt
						Borland, Akhil Nadendla, Anant Akash, Nathan Leung, Anish Mahendran,
						and Solomon Demmessie.
					</Typography> */}
				</Grid>
			</main>
		</div>
	);
}
