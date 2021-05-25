import { NotesWrapper } from "./modules/NotesWrapper";

export class App {
    notesWrapper: NotesWrapper;

    constructor() {
        this.notesWrapper = new NotesWrapper();
    }
}