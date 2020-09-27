import 'firebase/auth';
import firebase from 'firebase';

var database = firebase.database();

export function incrementViews() {
	database.ref('views/').set({
		'blog-post': 2
	});
}
