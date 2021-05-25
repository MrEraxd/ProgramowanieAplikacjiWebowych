import { Note, NoteType } from "./Note";
import AppStorage from "./AppStorage";

interface notesData{
    notes: Array<NoteType>;
}

export class NotesWrapper{
    #HTMLObj: HTMLDivElement;
    appStorage: AppStorage;

    constructor() {
        this.#HTMLObj = document.querySelector("#notes-wrapper");
        this.appStorage = new AppStorage();
        this.loadNotes();
    }

    loadNotes(): void{
        /* Gets info from localstorage and create notes */
        const notesData: notesData | string = this.appStorage.getData<notesData>("notesData");

        if(typeof notesData === "string" || notesData === null){
            console.log("No notes to display");
            return;
        }

        notesData.notes.forEach((noteInfo: NoteType) => {
            let note = new Note(noteInfo);
            this.#HTMLObj.appendChild(note.HTMLObj);
        })
    }

    saveNotes(): void{

    }
}
