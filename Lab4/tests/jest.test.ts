import {Note} from "../src/modules/Note";

/* TODO
    - Zapytać o testowanie prywatnych klas
    - Zapytać czemu nie działa testowanie Eventów
 */

describe('Note', function () {
    let note: Note;
    beforeAll(() => {
        note = new Note(
            {
                title: "jest-test",
                content: "jest-content",
                color: "red",
                isPinned: false,
                isDeleted: false,
                creationDate: "26 June 2021"
            }
        );
    });
    it("getIsPinnedStatus", () => {
        const isPinned = note.isPinned;
        expect(isPinned).toBe(false);
    })
    it("getIsDeletedStatus", () => {
        const isDeleted = note.isDeleted;
        expect(isDeleted).toBe(false);
    })
    it("getData", () => {
        const data = note.data;
        expect(data).toBe({
            title: "jest-test",
            content: "jest-content",
            color: "red",
            isPinned: false,
            isDeleted: false,
            creationDate: "26 June 2021"
        });
    })
});