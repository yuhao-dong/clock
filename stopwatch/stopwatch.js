let startButton = document.querySelector(".start");
let resetButton = document.querySelector(".reset");
let lapButton = document.querySelector(".lap");
let clearButton = document.querySelector(".lap-clear-button");
let bg = document.querySelector(".outer-circle");

let minute = document.querySelector(".min");
let second = document.querySelector(".sec");
let centiSecond = document.querySelector(".msec");

let laps = document.querySelector(".laps");

let toggleButton = () => {
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}

let starting = true;
let isReset = true;
let minCounter = 0;
let min;
let secCounter = 0;
let sec;
let centiSec;
let centiCounter = 0;
let lapItem = 0;

let start = () => {
    if(starting && isReset){
        startButton.innerHTML = "Pause";
        bg.classList.add("animation-bg");

        min = setInterval(() => {
            minCounter++;
            let text = minCounter.toString();
            if(minCounter < 10){
                text = "0" + text;
            }
            minute.innerHTML = `${text} :`;
        }, 60000);

        sec = setInterval(() => {
                secCounter++;
                if(secCounter === 60){
                    secCounter = 0;
                }
                let text = secCounter.toString();
                if(secCounter < 10){
                    text = "0" + text;
                }
                second.innerHTML = `&nbsp;${text} .`;
            }, 1000);

        centiSec = setInterval(() => {
            centiCounter++;
                if(centiCounter === 100){
                    centiCounter = 0;
                }
                let text = centiCounter.toString();
                if(centiCounter < 10){
                    text = "0" + text;
                }

                if(centiCounter > 99){
                    console.log(centiCounter);
                }

                centiSecond.innerHTML = `&nbsp;${text}`;
            }, 10);

        starting = false;
        isReset = false;
    }
    else{
        startButton.innerHTML = "Start";
        clearInterval(sec);
        clearInterval(centiSec);
        clearTimeout(min);
        starting = true;
        isReset = true;
        bg.classList.remove("animation-bg");
    }

    toggleButton();
}

let reset = () => {
    isReset = false;
    start();
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
    minute.innerHTML = "00 :";
    second.innerHTML = "&nbsp;00 .";
    centiSecond.innerHTML = "&nbsp;00"
    secCounter = 0;
    centiCounter = 0;
    minCounter = 0;
    clearAll();
}

const lap = () => {
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timeStamp = document.createElement("span");

    li.setAttribute("class", "lap-item");
    number.setAttribute("class", "number");
    timeStamp.setAttribute("class", "time-stamp");

    let text_min = minCounter.toString();
    let text_sec = secCounter.toString();
    let text_msec = centiCounter.toString();

    if(minCounter < 10){
        text_min = "0" + text_min;
    }

    if(secCounter < 10){
        text_sec = "0" + text_sec;
    }

    if(centiCounter < 10){
        text_msec = "0" + text_msec;
    }

    timeStamp.innerHTML = `${text_min} : ${text_sec} . ${text_msec}`;
    number.innerHTML = `#${++lapItem}`;

    li.append(number, timeStamp);
    laps.append(li);

    clearButton.classList.remove("hidden");
}

let clearAll = () => {
    laps.innerHTML = "";
    laps.append(clearButton);
    lapItem = 0;
    clearButton.classList.add("hidden");
}

startButton.addEventListener("click", start);
resetButton.addEventListener("click", reset);
lapButton.addEventListener("click", lap);
clearButton.addEventListener("click", clearAll);