import firebase from 'firebase'
import credentials from './credentials'

export const App = firebase.initializeApp(credentials.config);