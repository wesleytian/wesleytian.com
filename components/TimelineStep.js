import React from "react";
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

export default function TimelineStep({ primary, secondary }) {
	return (
		<ListItem>
			<ListItemIcon>
				<CheckCircleIcon color="primary" />
			</ListItemIcon>
			<ListItemText
				primary={primary}
				secondary={
					<Typography variant="body1" color="textSecondary">
						{secondary}
					</Typography>
				}
			/>
		</ListItem>
	);
}
