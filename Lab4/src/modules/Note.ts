export type NoteType = {
    title:          string;
    content:        string;
    color:          string;
    creationDate:   string;
    isPinned:       boolean;
    isDeleted:      boolean;
}

export class Note{
    #title:             string;
    #content:           string;
    #color:             string;
    #isPinned:          boolean;
    #creationDate:      string;
    #isDeleted:         boolean;
    #reloadNotesEvent:  Event;
    readonly #HTMLObj:  HTMLDivElement;

    constructor(props?: NoteType) {
        this.#title             = props?.title ?? "";
        this.#content           = props?.content ?? "";
        this.#color             = props?.color ?? "";
        this.#isPinned          = props?.isPinned ?? false;
        this.#creationDate      = props?.creationDate ?? Note.getTimestamp();
        this.#isDeleted         = false;
        this.#reloadNotesEvent  = new Event("reloadNotes");

        this.#HTMLObj       = this.createHTML();
        this.addEventListeners();

        if(props === undefined){
            this.showEditForm(this.data);
        }
    }

    private static getTimestamp(): string{
        const date = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        return date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear();
    }

    private static createID(): string{
        const timestamp: string = new Date().getTime().toString();
        let hash: string = "", chr: string = '';

        for(let i = 0; i < timestamp.length; i++){
            chr = timestamp[i];
            // @ts-ignore
            hash = ((hash << 5) - hash) + chr;
            // @ts-ignore
            hash |= 0;
        }

        return hash;
    }

    private createHTML(): HTMLDivElement {
        const wrapper = document.createElement("div");
        const pinnedClass = this.isPinned ? "note__pinned-button--pinned" : "";

        wrapper.innerHTML = `
            <div class="note note--color_${this.#color}">
              <div class="note__top-bar">
                <div class="note__title">${this.#title}</div>
                <i class="note__button note__pinned-button ${pinnedClass} fas fa-thumbtack"></i>
              </div>

              <p class="note__content">
                ${this.#content}
              </p>

              <span class="note__creation-date">${this.#creationDate}</span>
              <div class="note__bottom_nav bottom-nav">
                <i class="note__bottom-button note__button note__bottom-button--edit far fa-edit"></i>
                <!--<i class="note__bottom-button note__button fas fa-bell"></i>-->
                <div data-color="red" class="note__bottom-button note__button bottom-nav__color-change-button bottom-nav__color-change-button--red"></div>
                <div data-color="blue" class="note__bottom-button note__button bottom-nav__color-change-button bottom-nav__color-change-button--blue"></div>
                <div data-color="yellow" class="note__bottom-button note__button bottom-nav__color-change-button bottom-nav__color-change-button--yellow"></div>
                <div data-color="green" class="note__bottom-button note__button bottom-nav__color-change-button bottom-nav__color-change-button--green"></div>
                <i class="note__bottom-button note__bottom-button--trash note__button fas fa-trash"></i>
              </div>
            </div>
          </div>
        `;

        return wrapper;
    }

    private addEventListeners(): void{
        this.HTMLObj.querySelector(".note__bottom-button--edit")
            .addEventListener("click", () => {
                this.showEditForm(this.data);
            })

        this.HTMLObj.querySelector(".note__bottom-button--trash")
            .addEventListener("click", () => {
                this.delete();
            })

        this.HTMLObj.querySelector(".note__pinned-button")
            .addEventListener("click", () => {
                this.togglePin();
            })

        let colorButtons = this.HTMLObj.querySelectorAll(".bottom-nav__color-change-button");

        colorButtons.forEach((elem: HTMLDivElement) => {
            elem.addEventListener("click", () => {
                console.log("Changing color to: " + elem.dataset.color);
                this.#color = elem.dataset.color;

                window.dispatchEvent(this.#reloadNotesEvent);
            })
        })
    }

    private togglePin(): void{
        if(this.#isPinned){
            this.#isPinned = false;
            this.HTMLObj.querySelector(".note__pinned-button")
                .classList.remove("note__pinned-button--pinned");
        }
        else{
            this.#isPinned = true;
            this.HTMLObj.querySelector(".note__pinned-button")
                .classList.add("note__pinned-button--pinned");
        }

        window.dispatchEvent(this.#reloadNotesEvent);
    }

    private showEditForm(data: NoteType): void{
        console.log(this.data);

        // Hide placeholder
        document.querySelector(".big-note__placeholder").classList.add("big-note__placeholder--hidden");

        // Show Form
        document.querySelector(".big-note__form").classList.remove("big-note__form--hidden");

        // Remove previous listener
        let button = document.querySelector(".big-note-form__save-button");
        let clone = button.cloneNode(true);
        button.replaceWith(clone);

        // @ts-ignore
        document.querySelector(".big-note-form__title").value = data.title;

        // @ts-ignore
        document.querySelector(".big-note-form__content").value = data.content;

        if(data.isPinned){
            document.querySelector(".big-note-form__pinned-button")
                .classList.add("big-note-form__pinned-button--pinned")
        }
        else {
            document.querySelector(".big-note-form__pinned-button")
                .classList.remove("big-note-form__pinned-button--pinned")
        }

        document.querySelector(".big-note-form__save-button")
            .addEventListener("click", () => {
                this.saveForm();
                Note.hideEditForm();
                window.dispatchEvent(this.#reloadNotesEvent);
            })
    }

    private static hideEditForm(): void{
        // Show placeholder
        document.querySelector(".big-note__placeholder").classList.remove("big-note__placeholder--hidden");

        // Hide Form
        document.querySelector(".big-note__form").classList.add("big-note__form--hidden");
    }

    private saveForm(): void{
        // @ts-ignore
        this.title = document.querySelector(".big-note-form__title").value;
        // @ts-ignore
        this.content = document.querySelector(".big-note-form__content").value;
        this.updateNote();

        window.dispatchEvent(this.#reloadNotesEvent);
    }

    private updateNote(): void{
        // @ts-ignore
        this.#HTMLObj.querySelector(".note__title").innerHTML = this.#title;
        // @ts-ignore
        this.#HTMLObj.querySelector(".note__content").innerHTML = this.#content;
    }

    private delete(): void{
        this.HTMLObj.remove();
        this.#isDeleted = true;

        window.dispatchEvent(this.#reloadNotesEvent);
    }

    /* Getters & Setters */

    get isPinned(): boolean{
        return this.#isPinned;
    }

    get HTMLObj(): HTMLDivElement{
        return this.#HTMLObj;
    }

    get data(): NoteType{
        return {
            "title": this.#title,
            "content": this.#content,
            "color": this.#color,
            "isPinned": this.#isPinned,
            "isDeleted": this.#isDeleted,
            "creationDate": this.#creationDate
        }
    }

    get isDeleted(): boolean{
        return this.#isDeleted;
    }

    set title(newTitle: string){
        this.#title = newTitle;
    }

    set content(newContent: string){
        this.#content = newContent;
    }

    set color(newColor: string){
        this.#color = newColor;
    }
}

