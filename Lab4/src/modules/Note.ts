interface initValues {
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

    constructor(props: initValues) {
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
            <h2>${this.#title}</h2>
        `;

        return wrapper;
    }

    private changeTitle(newTitle: string): void{

    }

    private changeContent(newContent: string): void{

    }

    private changeColor(newColor: string): void{

    }

    private togglePin(): void{

    }

    /* Getters & Setters */

    get HTMLObj(): HTMLDivElement{
        return this.#HTMLObj;
    }

    get NoteInfo(): object{
        return ;
    }
}

