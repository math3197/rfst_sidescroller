document.addEventListener("DOMContentLoaded", drawDiagramOne);

const valuesOne = [21, 79];
const offsetOne = [0];
const omkreds = Math.PI * 100;
let totalOne = 0;

let faktorOne;


valuesOne.forEach(v => totalOne += v);

faktorOne = omkreds / totalOne;

function drawDiagramOne() {
    console.log("drawDiagram");
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


drawDiagramTwo();

function drawDiagramTwo() {
    console.log("drawDiagram");
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


drawDiagramThree();

function drawDiagramThree() {
    console.log("drawDiagram");
    document.querySelectorAll(".diagram .diagram_3").forEach((cirkel, i) => {
        offsetThree.push(valuesThree[i] + offsetThree[i]);
        cirkel.style.strokeDasharray = valuesThree[i] * faktorThree + " " + omkreds;
        cirkel.style.strokeDashoffset = -offsetThree[i] * faktorThree;
    })
}
