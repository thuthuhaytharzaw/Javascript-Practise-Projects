const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const continueButtonTag = document.getElementsByClassName("continueButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];

let miliseconds = 0;
    seconds = 0, 
    minutes = 0, 
    hours = 0;

const startTime = () => {
    miliseconds += 1;
    if (miliseconds === 1000){
        miliseconds = 0;
        seconds += 1;
        if(seconds === 60){
            seconds = 0;
            minutes += 1;
    
            if(minutes === 60){
                minutes = 0;
                hours += 1;
            }
    }
    }
    
    const milisecondText = miliseconds < 1000 ? "0" + miliseconds.toString() : miliseconds;
    const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
    const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const hourText = hours < 10 ? "0" + hours.toString() : hours;

    stopWatchTag.textContent = hourText+ ":" + minuteText+ ":" + secondText + ":" + milisecondText;
    console.log(hours,minutes,seconds,miliseconds);
};
let intervalId;
startButtonTag.addEventListener("click", () => {
    intervalId = setInterval(startTime, 1);
});

pauseButtonTag.addEventListener("click", () => {
    clearInterval(intervalId);
});

continueButtonTag.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = setInterval(startTime, 1);
});

restartButtonTag.addEventListener("click", () => {
    clearInterval(intervalId);
    (miliseconds = 0),(seconds = 0), (minutes = 0), (hours = 0);
    intervalId = setInterval(startTime, 1);
});

