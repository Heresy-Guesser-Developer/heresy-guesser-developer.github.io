'use strict'

/* Il gioco HeresyGuesser é un quiz dove bisogna scoprire la parola nascosta associata a Dio,
- Sono consentite 6 mosse in totale

- Se nella parola inserita una lettera o piu lettere sono presenti ma si trovano nella posizione sbagliata questa si evidenzia di giallo.

- Se nella parola inserita una o piu lettere si trovano al posto giusto, saranno contrassegnate di verde  

- Tutte le lettere sbagliate saranno evidenziate di grigio e non potranno piu essere inserite 

- la griglia deve essere lunga in base alla parola
*/



// variables //
const gotItButton = document.querySelector(".got-it-button");
const tutorialMessage = document.querySelector(".tutorial-message");
const newGameButton = document.querySelector(".new-game");
let arrayWords = ["maiale", "bastardo", "lurido", "ebreo", "maledetto", "cane", "boia"];
let randomWord;

//Functions //

const gotFunction = function () {
    if (tutorialMessage.classList.contains("hide-class")) {
        tutorialMessage.classList.remove("hide-class");
        document.querySelector(".initial-blur").classList.remove("initial-blur");
    }
}


const newGame = function () {
    const randomIndex = Math.floor((Math.random() * arrayWords.length));
    randomWord = arrayWords[randomIndex]
    console.log(randomWord);
    createGrid(randomWord.length);
    return randomWord


}

const createGrid = function (length) {
    const gridContainer = document.getElementById("grid-container");
    const cellContainer = document.querySelector(".cell-container");
    const rowContainer0 = document.querySelector(".row-container0");
    const rowContainer1 = document.querySelector(".row-container1");
    const rowContainer2 = document.querySelector(".row-container2");
    const rowContainer3 = document.querySelector(".row-container3");
    const rowContainer4 = document.querySelector(".row-container4");
    const rowContainer5 = document.querySelector(".row-container5");
    const rowContainer6 = document.querySelector(".row-container6");

    for (let col = 0; col < length; col++) {
        const cell = document.createElement("div");
        const rows = document.createElement("div");
        rows.classList.add("grid-row");
        cell.classList.add("grid-cell");
        let slicedWord = randomWord[col]
        cell.innerHTML = slicedWord;
        rows.innerHTML = slicedWord;
        cellContainer.appendChild(cell);
        rowContainer0.appendChild(rows);
        
    }
    rowContainer1.innerHTML = rowContainer0.innerHTML
    rowContainer2.innerHTML = rowContainer1.innerHTML
    rowContainer3.innerHTML = rowContainer2.innerHTML
    rowContainer4.innerHTML = rowContainer3.innerHTML
    rowContainer5.innerHTML = rowContainer4.innerHTML
    rowContainer6.innerHTML = rowContainer5.innerHTML
}

gotItButton.addEventListener("click", gotFunction); // debugging
newGameButton.addEventListener("click", newGame);
