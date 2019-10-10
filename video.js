document.addEventListener("DOMContentLoaded", start);

const playBtn = document.querySelector("#play_btn");
const video = document.querySelector("#video");
const playPause = document.querySelector("#play_pause");
const fullScreen = document.querySelector("#fullscreen");
const rewind = document.querySelector("#rewind");

function start() {
    console.log("start");

    playBtn.addEventListener("click", playVideo);
}

function playVideo() {
    console.log("PLAY");

    playPause.removeEventListener("click", playVideo);

    playBtn.removeEventListener("click", playVideo);
    playBtn.classList.add("btn_fade_out");
    playBtn.style.cursor = "default";

    playPause.style.display = "block";
    fullScreen.style.display = "block";
    rewind.style.display = "block";

    playPause.src = "img/pause.svg";

    video.play();

    videoPlaying();
}

function videoPlaying() {
    video.addEventListener("mouseout", () => {
        playPause.className = "";
        fullScreen.className = "";
        rewind.className = "";
        playPause.classList.add("btn_fade_out");
        fullScreen.classList.add("btn_fade_out");
        rewind.classList.add("btn_fade_out");
    })

    video.addEventListener("mouseover", () => {
        playPause.className = "";
        fullScreen.className = "";
        rewind.className = "";
        playPause.classList.add("btn_fade_in");
        fullScreen.classList.add("btn_fade_in");
        rewind.classList.add("btn_fade_in");
    })

    playPause.addEventListener("mouseover", () => {
        playPause.className = "";
        fullScreen.className = "";
        rewind.className = "";
        playPause.classList.add("btn_fade_in");
        fullScreen.classList.add("btn_fade_in");
        rewind.classList.add("btn_fade_in");
    })

    fullScreen.addEventListener("mouseover", () => {
        playPause.className = "";
        fullScreen.className = "";
        rewind.className = "";
        playPause.classList.add("btn_fade_in");
        fullScreen.classList.add("btn_fade_in");
        rewind.classList.add("btn_fade_in");
    })

    rewind.addEventListener("mouseover", () => {
        playPause.className = "";
        fullScreen.className = "";
        rewind.className = "";
        playPause.classList.add("btn_fade_in");
        fullScreen.classList.add("btn_fade_in");
        rewind.classList.add("btn_fade_in");
    })

    playPause.addEventListener("click", pauseVideo);
    fullScreen.addEventListener("click", enableFullScreen);
    rewind.addEventListener("click", rewindVideo);

}

function rewindVideo() {
    console.log("REWIND");
    video.currentTime = 0;
    video.pause();
    playPause.src = "img/play_small.svg";

    playPause.addEventListener("click", playVideo);
}

function enableFullScreen() {
    console.log("FULLSCREEN");
    video.webkitRequestFullScreen();
}

function pauseVideo() {
    console.log("PAUSE");
    playPause.removeEventListener("click", pauseVideo);
    video.pause();

    playPause.src = "img/play_small.svg";
    playPause.addEventListener("click", playVideo);
}
