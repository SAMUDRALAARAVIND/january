const video = document.querySelector("video");
const playPauseButton = document.querySelector(".play-pause");
const seekBar = document.querySelector(".seek-bar");
const forward = document.getElementById("forward");
const backward = document.getElementById("backward");

const volumeController = document.getElementById("volume"); // input
const speedController = document.getElementById("speed"); // input 
/**
 * Duration: video.duration
 * Seek time: video.currentTime (Changable)
 * State: video.paused ( true indicates video is in paused state )
 */


function changeSeekTime(direction) {
    direction === "forward" ? (video.currentTime += 25) : (video.currentTime -= 10);
}

forward.addEventListener("click", () => changeSeekTime("forward"));
backward.addEventListener("click", () => changeSeekTime("backward"));

playPauseButton.addEventListener("click", function () {
    // if the video is playing => pause the video | vice versa 
    if (video.paused) {
        // video is in paused state , play it now
        playPauseButton.innerText = "paused";
        video.play();
    }
    else {
        // video is playing , pause the video
        playPauseButton.innerText = "play_arrow";
        video.pause();
    }
});

video.addEventListener("timeupdate", function () {
    // this event will be triggered for every 1s change of the video's seek time

    let widthInPercentage = (video.currentTime * 100) / video.duration;

    // change the width of seekBar
    seekBar.style.width = `${widthInPercentage}%`; // "10%"; 
});

speedController.addEventListener("change", () => {
    let selectedSpeed = speedController.value;
    // selectedSpeed = [ 1, 6 ]
    let speedMapping = {
        1: 0.25,
        2: 0.5,
        3: 1,
        4: 1.25,
        5: 1.5,
        6: 2
    };

    // 0.25x 0.5x 1x 1.25x 1.5x 2x
    video.playbackRate = speedMapping[selectedSpeed];
})

volumeController.addEventListener("change", () => {
    // console.log("video's volume changed", volumeController.value);

    const selectedVolume = volumeController.value / 10;
    // [0, 10]
    // [0, 1]
    video.volume = selectedVolume;
})

