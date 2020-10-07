import styles from '../styles/Home.module.css';
import React from 'react';
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography
} from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

export default function TimelineStep({ primary, secondary, link, linkName }) {
	return (
		<ListItem>
			<ListItemIcon>
				<CheckBoxIcon color="primary" />
			</ListItemIcon>
			<ListItemText
				primary={primary}
				secondary={
					<Typography
						variant="body1"
						color="textSecondary"
						className={styles.description}
					>
						{secondary} {link && <a href={link}>{linkName}</a>}
					</Typography>
				}
			/>
		</ListItem>
	);
}
