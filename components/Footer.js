import styles from "../styles/Home.module.css";
import React from "react";
import { IconButton, Box, Typography, Grid } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<IconButton href="https://facebook.com/wesleytian" target="_blank">
				<FacebookIcon />
			</IconButton>
			<IconButton href="https://instagram.com/wesleyclimbs" target="_blank">
				<InstagramIcon />
			</IconButton>
			<IconButton href="https://twitter.com/wesleyytian" target="_blank">
				<TwitterIcon />
			</IconButton>
			<IconButton href="https://linkedin.com/in/wesleytian" target="_blank">
				<LinkedInIcon />
			</IconButton>
			<IconButton href="https://github.com/wesleytian" target="_blank">
				<GitHubIcon />
			</IconButton>
			<IconButton href="mailto:tian.wesley@gmail.com" target="_blank">
				<MailIcon />
			</IconButton>
		</footer>
	);
}
