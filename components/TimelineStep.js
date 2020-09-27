import React from 'react';
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import styles from '../styles/Home.module.css';

export default function TimelineStep({ primary, secondary, link }) {
	return (
		<ListItem>
			<ListItemIcon>
				<CheckCircleIcon color="primary" />
			</ListItemIcon>
			<ListItemText
				primary={primary}
				secondary={
					<Typography
						variant="body1"
						color="textSecondary"
						className={styles.description}
					>
						{secondary} {link && <a href={link}>Link here.</a>}
					</Typography>
				}
			/>
		</ListItem>
	);
}
