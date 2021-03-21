var Lab1App = /** @class */ (function () {
    function Lab1App(containerDOMElement) {
        this.containerDOMElement = containerDOMElement;
        this.startApp();
    }
    Lab1App.prototype.startApp = function () {
        this.ui = new UI(this.containerDOMElement, new Calculator());
    };
    return Lab1App;
}());
var UI = /** @class */ (function () {
    function UI(containerDOMElement, calculator) {
        this.containerDOMElement = containerDOMElement;
        this.calculator = calculator;
        this.createUI();
    }
    UI.prototype.createUI = function () {
        var _this = this;
        /* First Input */
        var input = document.createElement("input");
        input.setAttribute("type", "number");
        this.containerDOMElement.appendChild(input);
        /* Button */
        var button = document.createElement("button");
        button.addEventListener("click", function () {
            _this.createInputs(input.value);
        });
        button.innerText = "Prześlij";
        this.containerDOMElement.appendChild(button);
        /* Inputs Container */
        var inputsContainer = document.createElement("div");
        inputsContainer.id = "inputsContainer";
        this.containerDOMElement.appendChild(inputsContainer);
    };
    UI.prototype.createInputs = function (numberOfInputs) {
        var _this = this;
        if (numberOfInputs === "") {
            return;
        }
        var inputsContainer = document.querySelector("#inputsContainer");
        var _loop_1 = function (i) {
            var inputRow = document.createElement("div");
            var input = document.createElement("input");
            input.classList.add("inputs");
            var deleteButton = document.createElement("span");
            deleteButton.innerText = "X";
            input.addEventListener("input", function () {
                _this.showStats();
            });
            deleteButton.addEventListener("click", function () {
                inputRow.remove();
            });
            inputRow.appendChild(input);
            inputRow.appendChild(deleteButton);
            inputsContainer.appendChild(inputRow);
        };
        for (var i = 0; i < numberOfInputs; i++) {
            _loop_1(i);
        }
    };
    UI.prototype.showStats = function () {
        var values = this.getValues();
        document.querySelector("#min").innerHTML = "Min: " + this.calculator.calculateMin(values);
        document.querySelector("#max").innerHTML = "Max: " + this.calculator.calculateMax(values);
        document.querySelector("#avg").innerHTML = "Avg: " + this.calculator.calculateAvg(values);
        document.querySelector("#sum").innerHTML = "Avg: " + this.calculator.calculateSum(values);
    };
    UI.prototype.getValues = function () {
        var inputs = document.querySelectorAll(".inputs");
        var values = [];
        inputs.forEach(function (input) {
            console.log(parseFloat(input.value));
            if (isNaN(parseFloat(input.value)) === false) {
                values.push(parseFloat(input.value));
            }
        });
        return values;
    };
    return UI;
}());
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.calculateMin = function (values) {
        return Math.min.apply(Math, values);
    };
    Calculator.prototype.calculateMax = function (values) {
        return Math.max.apply(Math, values);
    };
    Calculator.prototype.calculateAvg = function (values) {
        var factor = values.length;
        var sum = 0;
        values.forEach(function (value) {
            sum += value;
        });
        return sum / factor;
    };
    Calculator.prototype.calculateSum = function (values) {
        var sum = 0;
        values.forEach(function (value) {
            sum += value;
        });
        return sum;
    };
    return Calculator;
}());
