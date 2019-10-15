document.addEventListener("DOMContentLoaded", start);

const valuesOne = [21, 79];
const offsetOne = [0];
const omkreds = Math.PI * 100;
let totalOne = 0;

let faktorOne;


valuesOne.forEach(v => totalOne += v);

faktorOne = omkreds / totalOne;

function start() {
    console.log("startDiagram.js");
    let diagramView = document.querySelector(".diagram_1");
    let diagramView2 = document.querySelector(".diagram_2");
    let diagramView3 = document.querySelector(".diagram_3");

    //STJÅLET FRA https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
    let isInViewport = function (elem) {
        var bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    window.addEventListener('scroll', function (event) {
        if (isInViewport(diagramView)) {
            drawDiagramOne();
            drawDiagramTwo();
            drawDiagramThree();
        }
    }, false);
    window.addEventListener('scroll', function (event) {
        if (isInViewport(diagramView3)) {
            drawDiagramOne();
            drawDiagramTwo();
            drawDiagramThree();
        }
    }, false);
}

function drawDiagramOne() {
    document.querySelectorAll(".diagram .diagram_1").forEach((cirkel, i) => {
        offsetOne.push(valuesOne[i] + offsetOne[i]);
        cirkel.style.strokeDasharray = valuesOne[i] * faktorOne + " " + omkreds;
        cirkel.style.strokeDashoffset = -offsetOne[i] * faktorOne;
    })
}

const valuesTwo = [42, 58];
const offsetTwo = [0];
let totalTwo = 0;
let faktorTwo;


valuesTwo.forEach(v => totalTwo += v);

faktorTwo = omkreds / totalTwo;


function drawDiagramTwo() {
    document.querySelectorAll(".diagram .diagram_2").forEach((cirkel, i) => {
        offsetTwo.push(valuesTwo[i] + offsetTwo[i]);
        cirkel.style.strokeDasharray = valuesTwo[i] * faktorTwo + " " + omkreds;
        cirkel.style.strokeDashoffset = -offsetTwo[i] * faktorTwo;
    })
}

const valuesThree = [38, 62];
const offsetThree = [0];
let totalThree = 0;
let faktorThree;


valuesThree.forEach(v => totalThree += v);

faktorThree = omkreds / totalThree;


function drawDiagramThree() {
    document.querySelectorAll(".diagram .diagram_3").forEach((cirkel, i) => {
        offsetThree.push(valuesThree[i] + offsetThree[i]);
        cirkel.style.strokeDasharray = valuesThree[i] * faktorThree + " " + omkreds;
        cirkel.style.strokeDashoffset = -offsetThree[i] * faktorThree;
    })
}

function showText() {

}
