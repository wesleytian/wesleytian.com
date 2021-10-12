import React, { useEffect, useState } from "react";
import { Typography, Grid } from "@material-ui/core";
import { getViews } from "../lib/firebase";

export default function PostSnippet({ title, link, snippet }) {
	const [views, setViews] = useState(0);

	useEffect(() => {
		fetchViews();
	}, []);

	const fetchViews = async () => {
		const views = await getViews(link.substring(7));
		setViews(views);
	};

	return (
		<a href={link}>
			<Grid
				container
				direction="row"
				justify="space-between"
				style={{
					marginTop: "12px",
					borderStyle: "solid",
					borderWidth: "1px",
					borderRadius: "12px",
					borderColor: "lightgray",
					padding: "12px"
				}}>
				<Grid item xs={views ? 8 : 12}>
					<Typography variant="h6">{title}</Typography>
				</Grid>

				{views && (
					<Grid item xs={4}>
						<Typography variant="body1" color="textSecondary" align="right">
							{views.toLocaleString()} views
						</Typography>
					</Grid>
				)}
				{snippet && <Typography color="textSecondary">{snippet}</Typography>}
			</Grid>
		</a>
	);
}
