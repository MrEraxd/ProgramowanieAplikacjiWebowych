interface initValues {
    title:          string;
    content:        string;
    color:          string;
    creationDate:   string;
    isPinned:       boolean;
}

export class Note{
    #title:          string;
    #content:        string;
    #color:          string;
    #creationDate:   string;
    #isPinned:       boolean;
    #HTMLObj:        HTMLDivElement;

    constructor(props: initValues) {
        Object.assign(this, props);
        this.#HTMLObj = this.createHTML();
    }

    private createHTML(): HTMLDivElement {
        const wrapper = document.createElement("div");

        console.log(this.#color);

        wrapper.innerHTML = `
            <h2>${this.#title}</h2>
        `;

        return wrapper;
    }

    private static deleteNote(): void{

    }

    get HTMLObj(): HTMLDivElement{
        return this.#HTMLObj;
    }
}

