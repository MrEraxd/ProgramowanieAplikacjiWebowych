class Lab1App {
    private containerDOMElement: HTMLDivElement;
    private ui: UI;

    constructor(containerDOMElement: HTMLDivElement) {
        this.containerDOMElement = containerDOMElement;
        this.startApp();
    }

    private startApp() {
        this.ui = new UI(this.containerDOMElement, new Calculator());
    }
}

class UI{
    private containerDOMElement: HTMLDivElement;
    private calculator: Calculator;

    constructor(containerDOMElement: HTMLDivElement, calculator: Calculator) {
        this.containerDOMElement = containerDOMElement;
        this.calculator = calculator;
        this.createUI();
    }

    private createUI(){
        /* First Input */
        let input: HTMLInputElement = document.createElement("input");
        input.setAttribute("type", "number");
        this.containerDOMElement.appendChild(input);

        /* Button */
        let button: HTMLButtonElement = document.createElement("button");
        button.addEventListener("click", () => {
            this.createInputs(input.value);
        });
        button.innerText = "Prześlij";
        this.containerDOMElement.appendChild(button);

        /* Inputs Container */
        let inputsContainer: HTMLDivElement = document.createElement("div");
        inputsContainer.id = "inputsContainer";
        this.containerDOMElement.appendChild(inputsContainer);
    }

    private createInputs(numberOfInputs){
        if(numberOfInputs === ""){
            return;
        }

        const inputsContainer: HTMLDivElement = document.querySelector("#inputsContainer");

        for(let i = 0; i < numberOfInputs; i++){
            let inputRow: HTMLDivElement = document.createElement("div");

            let input: HTMLInputElement = document.createElement("input");
            input.classList.add("inputs");

            let deleteButton: HTMLSpanElement = document.createElement("span");
            deleteButton.innerText = "X";

            input.addEventListener("input", () => {
                this.showStats();
            });

            deleteButton.addEventListener("click", () => {
                inputRow.remove();
            })

            inputRow.appendChild(input);
            inputRow.appendChild(deleteButton);

            inputsContainer.appendChild(inputRow)
        }
    }

    showStats(){
        const values: Array<number> = this.getValues();

        document.querySelector("#min").innerHTML = "Min: " + this.calculator.calculateMin(values);
        document.querySelector("#max").innerHTML = "Max: " + this.calculator.calculateMax(values);
        document.querySelector("#avg").innerHTML = "Avg: " + this.calculator.calculateAvg(values);
        document.querySelector("#sum").innerHTML = "Avg: " + this.calculator.calculateSum(values);
    }

    getValues(){
        const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".inputs");

        let values: Array<number> = [];

        inputs.forEach(input => {
            console.log(parseFloat(input.value));
            if(isNaN(parseFloat(input.value)) === false){
                values.push(parseFloat(input.value));
            }
        });

        return values;
    }
}

class Calculator{
    calculateMin(values){
        return Math.min(...values);
    }

    calculateMax(values){
        return Math.max(...values);
    }

    calculateAvg(values){
        const factor = values.length;

        let sum = 0;
        values.forEach(value => {
            sum += value;
        })

        return sum/factor;
    }

    calculateSum(values){
        let sum = 0;
        values.forEach(value => {
            sum += value;
        })

        return sum;
    }
}