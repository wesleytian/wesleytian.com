import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import NextLink from "next/link";
import "styled-components";
import StyledButton from "../components/StyledButton";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

export default function ButtonAppBar() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position="fixed" color="transparent" elevation={0}>
				<Toolbar>
					<NextLink href="/" passHref>
						<StyledButton color="inherit">Home</StyledButton>
					</NextLink>
					<NextLink href="/blog" passHref>
						<StyledButton color="inherit">Blog</StyledButton>
					</NextLink>
					<StyledButton color="inherit">About</StyledButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}
