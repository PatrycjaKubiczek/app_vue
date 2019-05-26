import firebase from 'firebase'

const config = {
	apiKey: "AIzaSyDKr0i5bybHR3j233MH4pddVMcSvLs025Y",
	authDomain: "vue-app-241817.firebaseapp.com",
	databaseURL: "https://vue-app-241817.firebaseio.com",
	projectId: "vue-app-241817",
	storageBucket: "vue-app-241817.appspot.com",
	messagingSenderId: "753894222897",
	appId: "1:753894222897:web:cdc3ecd87d8fb639"
};

export const db = firebase.initializeApp(config).firestore()