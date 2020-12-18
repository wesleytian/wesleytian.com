import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Set the configuration for your app
var config = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

// Get a reference to the database service
var database = firebase.database();

export function incrementViews(page) {
	database.ref(`views/${page}`).transaction((views) => {
		views = views || 0;
		return views + 1;
	});
}

export async function getViews(page) {
	try {
		const snapshot = await firebase
			.database()
			.ref(`views/${page}`)
			.once("value");
		return snapshot.val();
	} catch (err) {}
}
