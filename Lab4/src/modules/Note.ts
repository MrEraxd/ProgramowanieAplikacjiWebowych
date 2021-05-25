export type NoteType = {
    title:          string;
    content:        string;
    color:          string;
    creationDate:   string;
    isPinned:       boolean;
}

export class Note{
    #title:             string;
    #content:           string;
    #color:             string;
    #creationDate:      string;
    #isPinned:          boolean;
    readonly #HTMLObj:  HTMLDivElement;

    constructor(props: NoteType) {
        this.#title         = props.title;
        this.#content       = props.content;
        this.#color         = props.color;
        this.#creationDate  = props.creationDate;
        this.#isPinned      = props.isPinned;

        this.#HTMLObj       = this.createHTML();
    }

    private createHTML(): HTMLDivElement {
        const wrapper = document.createElement("div");

        wrapper.innerHTML = `
            <div class="note">
              <div class="note__top-bar-wrapper">
                <h2 class="note__title">${this.#title}</h2>
                <i class="fas fa-thumbtack note__pin-icon"></i>
              </div>
        
              <p>${this.#content}</p>
        
              <div class="note__bottom-bar-wrapper">
                <i class="fas fa-bell"></i>
                <i class="fas fa-palette"></i>
              </div>
            </div>
        `;

        return wrapper;
    }

    private updateData(): void{

    }

    private showChangeForm(): void{

    }

    private changeTitle(newTitle: string): void{

    }

    private changeContent(newContent: string): void{

    }

    private changeColor(newColor: string): void{

    }

    private togglePin(): void{

    }

    hide(): void{

    }

    show(): void{

    }

    /* Getters & Setters */

    get HTMLObj(): HTMLDivElement{
        return this.#HTMLObj;
    }

    get NoteInfo(): object{
        return ;
    }
}

