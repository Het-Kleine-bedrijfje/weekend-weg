import {App} from './app';
import 'firebase/firestore';

export const db = App.firestore();
export const locatieCol = db.collection("locaties");