import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NextLink from 'next/link';
import 'styled-components';
import { Grid, Box, Button, Typography } from '@material-ui/core';

export default function ButtonAppBar() {
	return (
		<AppBar position="fixed" color="transparent" elevation={0}>
			<Grid item container justify="flex-end" xs={11}>
				<Toolbar>
					<NextLink href="/" passHref>
						<Button style={{ textTransform: 'none' }} size="large">
							<Typography variant="body1" color="textSecondary">
								Home
							</Typography>
						</Button>
					</NextLink>
					<NextLink href="/blog" passHref>
						<Button style={{ textTransform: 'none' }} size="large">
							<Typography variant="body1" color="textSecondary">
								Blog
							</Typography>
						</Button>
					</NextLink>
					<NextLink href="/library" passHref>
						<Button style={{ textTransform: 'none' }} size="large">
							<Typography variant="body1" color="textSecondary">
								Library
							</Typography>
						</Button>
					</NextLink>
					<NextLink href="/about" passHref>
						<Button style={{ textTransform: 'none' }} size="large">
							<Typography variant="body1" color="textSecondary">
								About
							</Typography>
						</Button>
					</NextLink>

					<Button style={{ textTransform: 'none' }} size="large">
						<Typography variant="body1" color="textSecondary">
							<a href="https://buttondown.email/wesleytian">
								Subscribe
							</a>
						</Typography>
					</Button>
				</Toolbar>
			</Grid>
		</AppBar>
	);
}
