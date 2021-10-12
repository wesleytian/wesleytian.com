import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import NextLink from "next/link";
import "styled-components";
import { Grid, Button, Typography } from "@material-ui/core";

export default function ButtonAppBar() {
	return (
		<AppBar position="fixed" color="inherit" elevation={0}>
			<Grid item container justify="flex-end" xs={11}>
				<Toolbar disableGutters>
					<NextLink href="/" passHref>
						<Button style={{ textTransform: "none" }} size="large">
							<Typography variant="body1" color="textSecondary">
								Home
							</Typography>
						</Button>
					</NextLink>
					<NextLink href="/posts" passHref>
						<Button style={{ textTransform: "none" }} size="large">
							<Typography variant="body1" color="textSecondary">
								Writing
							</Typography>
						</Button>
					</NextLink>
					<NextLink href="/projects" passHref>
						<Button style={{ textTransform: "none" }} size="large">
							<Typography variant="body1" color="textSecondary">
								Projects
							</Typography>
						</Button>
					</NextLink>
				</Toolbar>
			</Grid>
		</AppBar>
	);
}
