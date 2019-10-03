document.addEventListener("DOMContentLoaded", startEngine);

const pedal = document.querySelector("#pedal");
const reverseBtn = document.querySelector("#reverse");
let speed = 5;

function startEngine() {
    console.log("startEngine");

    document.querySelector("#reverse h3").textContent = "R";

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
}

function mouseUpForward() {
    clearInterval(timeout);
}


function reverseEngine() {
    console.log("reverseEngine");

    document.querySelector("#reverse h3").textContent = "D";

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
}

function mouseUpBack() {
    clearInterval(timeout);
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
