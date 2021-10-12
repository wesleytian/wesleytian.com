import styles from "../styles/Home.module.css";
import React from "react";
import { IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<IconButton href="https://facebook.com/wesleytian" target="_blank">
				<FacebookIcon fontSize="large" />
			</IconButton>
			<IconButton href="https://twitter.com/wesleyytian" target="_blank">
				<TwitterIcon fontSize="large" />
			</IconButton>
			<IconButton href="https://instagram.com/wesleyclimbs" target="_blank">
				<InstagramIcon fontSize="large" />
			</IconButton>
			<IconButton href="https://linkedin.com/in/wesleytian" target="_blank">
				<LinkedInIcon fontSize="large" />
			</IconButton>
			<IconButton href="https://github.com/wesleytian" target="_blank">
				<GitHubIcon fontSize="large" />
			</IconButton>
			<IconButton href="https://strava.com/athletes/wesleytian" target="_blank">
				<img
					src="strava.png"
					style={{
						width: "32px",
						height: "32px",
						marginLeft: "0px"
					}}
				/>
			</IconButton>
			<IconButton
				href="https://www.peakbagger.com/climber/climber.aspx?cid=36250"
				target="_blank">
				<FilterHdrIcon fontSize="large" />
			</IconButton>
			<IconButton href="mailto:tian.wesley@gmail.com" target="_blank">
				<MailIcon fontSize="large" />
			</IconButton>
		</footer>
	);
}
