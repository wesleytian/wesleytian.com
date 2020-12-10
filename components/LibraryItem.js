import styles from "../styles/Home.module.css";
import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

export default function LibraryItem({ href, primary, secondary }) {
	return (
		<ListItem divider disableGutters>
			<ListItemLink href={href} target="_blank">
				<ListItemText
					className={styles.description}
					primary={primary}
					secondary={secondary}
				/>
			</ListItemLink>
		</ListItem>
	);
}
