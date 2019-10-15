document.addEventListener("DOMContentLoaded", start);

let intervalOne;
let intervalTwo;
let intervalThree;
let intervalFour;

const quoteOne = document.querySelector("#quotes p");
const quoteTwo = document.querySelector("#quotes p + p");
const quoteThree = document.querySelector("#quotes p + p + p");

function start() {
    console.log("startQuotes.js");
    intervalOne = setInterval(switchOne, 7000);
}

function switchOne() {
    console.log("switchOne");
    clearInterval(intervalFour);
    clearInterval(intervalOne);

    quoteOne.style.opacity = "0";
    quoteTwo.style.opacity = "1";

    intervalTwo = setInterval(switchTwo, 7000);
}


function switchTwo() {
    console.log("switchTwo");
    clearInterval(intervalTwo);

    quoteTwo.style.opacity = "0";
    quoteThree.style.opacity = "1";


    intervalThree = setInterval(switchThree, 7000);
}

function switchThree() {
    console.log("switchThree");
    clearInterval(intervalThree);

    quoteThree.style.opacity = "0";
    quoteOne.style.opacity = "1";

    intervalFour = setInterval(switchOne, 7000);
}
