import { Note } from './modules/Note';

export class App {
    note: Note;

    constructor() {
        this.note = new Note({title: "test", color: "red", content: "value", creationDate: "data", isPinned: true});
        console.log(this.note.HTMLObj);
    }
}