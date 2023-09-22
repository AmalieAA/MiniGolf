import Dialog from "./dialog.js";

export default class ScoreBoard {

    constructor(numberOfHoles) {

        for (let i = 0; i < numberOfHoles; i++) {
            // byg huller
            this.createHoles();
        }


        const resetButton =  document.querySelector("#resetButton");
        const newGameButton = document.querySelector("#newGameButton");

        resetButton.addEventListener("click", () => this.resetScore());
        newGameButton.addEventListener("click", () => this.newGame());

    }

    increment(e){
        const parentDiv = e.currentTarget.parentNode;
        const numberBox = parentDiv.querySelector("input");
        numberBox.value = parseInt(numberBox.value) +1;
        this.calculateTotal();

    }

    decrement(e){
        const parentDiv = e.currentTarget.parentNode;
        const numberBox = parentDiv.querySelector("input");
        numberBox.value = parseInt(numberBox.value) -1;
        this.calculateTotal();
    }

    calculateTotal(){
        const scoreCounters = document.querySelectorAll(".score-counter");
        let total = 0;

        scoreCounters.forEach(scoreCounter => {
            const value = parseInt(scoreCounter.value) || 0;
            total += value;
        });

        const totalScoreCounter = document.querySelector("#TotalScore");
        totalScoreCounter.innerHTML = "<h5 class='fw-normal'>I alt: " + total + "</h5>";

    }


    async resetScore(){

        const resetDialog = new Dialog();

        const confirmReset = await resetDialog.confirm()

        if (confirmReset === true){

            const scoreCounters = document.querySelectorAll(".score-counter");

            scoreCounters.forEach(scoreCounter => {
                scoreCounter.value = 0;
            });

            this.calculateTotal();
        }

    }

    async newGame(){
        const newGameDialog = new Dialog({
            questionText:"Vil du starte forfra?",
            trueButtonText:"Ja",
            falseButtonText:"Nej",
            });

        const confirmReset = await newGameDialog.confirm()

        if (confirmReset === true){

            const scoreCounters = document.querySelectorAll(".score-counter");

            scoreCounters.forEach(scoreCounter => {
                scoreCounter.value = 0;
            });

            this.calculateTotal();
        }
    }

    createHoles() {
        const parentDiv = document.createElement("div");
        const minusButton = document.createElement("button");
        const input = document.createElement("input");
        const addButton = document.createElement("button");


        parentDiv.classList.add("col-12", "text-center", "input-group", "py-3");
        minusButton.classList.add("minus-button", "btn", "btn-primary");
        minusButton.textContent = "-";

        input.classList.add("score-counter", "form-control");
        input.type = "number";
        input.value = "0";

        addButton.classList.add("add-button", "btn", "btn-primary");
        addButton.textContent = "+";

        parentDiv.appendChild(minusButton);
        parentDiv.appendChild(input);
        parentDiv.appendChild(addButton);


        addButton.addEventListener("click", (e) => this.increment(e));
        minusButton.addEventListener("click", (e) => this.decrement(e));
        input.addEventListener("change", () => this.calculateTotal());

        const holesContainer = document.querySelector("#ScoreCounter");
        holesContainer.appendChild(parentDiv);
    }


}