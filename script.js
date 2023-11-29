'use strict'

/* Il gioco HeresyGuesser é un quiz dove bisogna scoprire la parola nascosta associata a Dio,
- Sono consentite 6 mosse in totale

- Se nella parola inserita una lettera o piu lettere sono presenti ma si trovano nella posizione sbagliata questa si evidenzia di giallo.

- Se nella parola inserita una o piu lettere si trovano al posto giusto, saranno contrassegnate di verde  

- Tutte le lettere sbagliate saranno evidenziate di grigio e non potranno piu essere inserite 

- la griglia deve essere 6x5
*/



// variables //
const gotItButton = document.querySelector(".got-it-button");
const tutorialMessage = document.querySelector(".tutorial-message");

//Functions //

const gotFunction = function () {
    if (tutorialMessage.classList.contains("hide-class")) {
        tutorialMessage.classList.remove("hide-class");
        document.querySelector(".initial-blur").classList.remove("initial-blur");
    }
}


gotItButton.addEventListener("click", gotFunction);