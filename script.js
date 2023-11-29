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

const createGrid = function (wordLength) {
    const gridContainer = document.getElementById("grid-container");
    const numColumns = 10;
    gridContainer.innerHTML = '';

    let charIndex = 0;


    const totalColumns = Math.ceil(wordLength / 5) * 5;


    for (let col = 0; col < totalColumns && charIndex < wordLength; col++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        cell.textContent = randomWord[charIndex];
        gridContainer.appendChild(cell);
        charIndex++;
    }
}

gotItButton.addEventListener("click", gotFunction);
newGameButton.addEventListener("click", newGame);
