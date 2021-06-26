import AppStorage from "./AppStorage";
import firebase from "firebase";
import {firebaseConfig} from "../config";

const firebaseApp: firebase.app.App     = firebase.initializeApp(firebaseConfig);
const db: firebase.firestore.Firestore  = firebaseApp.firestore();

/*export default class AppFireStorage implements AppStorage{
    async loadNotes() {
        const test = await db.collection("notes").get()
            .then((res) => {
                return res.docs;
            })

        return test;
    }

    saveNotes(data: object | string): void {

    }
}*/
