import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

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

export function incrementViews() {
	database.ref('views/blog-post').transaction((views) => {
		views = views || 0;
		return views + 1;
	});
}