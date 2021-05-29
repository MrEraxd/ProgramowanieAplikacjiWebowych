import { Note, NoteType } from "./Note";
import AppStorage from "./AppStorage";

interface notesData{
    notes: Array<NoteType>;
}

export class NotesWrapper{
    #HTMLObj:   HTMLDivElement;
    #notes:     Note[];
    appStorage: AppStorage;

    constructor() {
        this.#HTMLObj = document.querySelector(".notes");
        this.#notes = [];
        this.appStorage = new AppStorage();
        this.loadNotes();
        this.addListeners();
    }

    addListeners(): void{
        window.addEventListener("reloadNotes", () => {
            this.reloadNotes();
        })

        window.addEventListener("saveNotes", () => {
            this.saveNotes();
        })

        document.querySelector(".top-nav__add-note-button")
            .addEventListener("click", () => {
                this.addNote();
            })
    }

    loadNotes(): void{
        /* Gets info from localstorage and create notes */
        const notesData: notesData | string = this.appStorage.getData<notesData>("notesData");

        if(typeof notesData === "string" || notesData === null){
            console.log("No notes to display");
            return;
        }

        this.#notes = [];

        // Clear wrappers
        this.#HTMLObj.querySelector(".notes__pinned .notes__wrapper").innerHTML = "";
        this.#HTMLObj.querySelector(".notes__unpinned .notes__wrapper").innerHTML = "";

        let havePinnedNotes = false;
        let haveUnpinnedNotes = false;

        notesData.notes.forEach((noteInfo: NoteType) => {
            let note = new Note(noteInfo);
            this.#notes.push(note);

            if(note.isPinned){
                this.#HTMLObj.querySelector(".notes__pinned .notes__wrapper")
                    .appendChild(note.HTMLObj);
                havePinnedNotes = true;
            }
            else {
                this.#HTMLObj.querySelector(".notes__unpinned .notes__wrapper")
                    .appendChild(note.HTMLObj);
                haveUnpinnedNotes = true;
            }
        })

        if(!havePinnedNotes){
            this.#HTMLObj.querySelector(".notes__pinned")
                .classList.add("notes__pinned--hidden");
        }
        else {
            this.#HTMLObj.querySelector(".notes__pinned")
                .classList.remove("notes__pinned--hidden");
        }

        if(!haveUnpinnedNotes){
            this.#HTMLObj.querySelector(".notes__unpinned")
                .classList.add("notes__unpinned--hidden");
        }
        else {
            this.#HTMLObj.querySelector(".notes__unpinned")
                .classList.remove("notes__unpinned--hidden");
        }
    }

    reloadNotes(): void{
        this.saveNotes();
        this.loadNotes();
    }

    saveNotes(): void{
        let notes = {
            // @ts-ignore
            notes: []
        }

        this.#notes.forEach((note) => {
            console.log("Saving note");
            if(!note.isDeleted){
                notes.notes.push(note.data);
            }
        })

        this.appStorage.setData("notesData", JSON.stringify(notes));
    }

    addNote(): void{
        const note = new Note();
        this.#notes.push(note);
    }
}
