export default {
    config: {
     apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
     authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
     databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
     projectId: "plezier-weekend",
     storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
     messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID
   }
  };
  