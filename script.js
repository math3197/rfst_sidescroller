document.addEventListener("DOMContentLoaded", startEngine);

const pedal = document.querySelector("#pedal");
const reverseBtn = document.querySelector("#reverse");
let speed = 3;

let gearStang = document.querySelector("#reverse");

function startEngine() {
    console.log("startEngine");

    gearStang.src = "img/drive.svg";


    pedal.removeEventListener("mousedown", mouseDownBack);
    pedal.removeEventListener("mouseup", mouseUpBack);
    reverseBtn.removeEventListener("click", startEngine);

    pedal.addEventListener("mousedown", mouseDownForward);
    pedal.addEventListener("mouseup", mouseUpForward);

    reverseBtn.addEventListener("click", reverseEngine);
}

function mouseDownForward() {
    console.log("driveForward");
    timeout = setInterval(function () {
        window.scrollBy(speed, 0); // May need to be -1 to go down
        behavior: 'smooth'
    }, 0); // Play around with this number. May go too fast

    pedal.classList.add("press_pedal");
}

function mouseUpForward() {
    clearInterval(timeout);
    pedal.classList.remove("press_pedal");
}


function reverseEngine() {
    console.log("reverseEngine");

    gearStang.src = "img/reverse.svg";

    pedal.removeEventListener("mousedown", mouseDownForward);
    pedal.removeEventListener("mouseup", mouseUpForward);
    reverseBtn.removeEventListener("click", reverseEngine);

    pedal.addEventListener("mousedown", mouseDownBack);
    pedal.addEventListener("mouseup", mouseUpBack);


    reverseBtn.addEventListener("click", startEngine);
}

function mouseDownBack() {
    console.log("driveBackward");
    timeout = setInterval(function () {
        window.scrollBy(-speed, 0); // May need to be -1 to go down
    }, 0); // Play around with this number. May go too fast

    pedal.classList.add("press_pedal");
}

function mouseUpBack() {
    clearInterval(timeout);
    pedal.classList.remove("press_pedal");
}









$(document).ready(function () {
    $("#banner a").bind("click", function (event) {
        event.preventDefault();
        var target = $(this).attr("href");
        $("html, body").stop().animate({
            scrollLeft: $(target).offset().left,
            scrollTop: $(target).offset().top
        }, 1200);
    });
});
