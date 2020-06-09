import {App} from './app';
import 'firebase/firestore';

// database comment
export const db = App.firestore();
export const locatieCol = db.collection("locaties");
