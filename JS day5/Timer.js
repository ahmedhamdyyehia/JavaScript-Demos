window.addEventListener('load', function () {
    outer = document.getElementsByTagName("p")[0];
    outer.innerText = "00:00:00:00"
    startBtn = document.getElementsByTagName("button")[0];
    stopBtn = document.getElementsByTagName("button")[1];
    days=0;
    hours=0;
    minutes = 0;
    seconds = 0;
    startBtn.onclick = function () {
        startBtn.disabled = true;
        timerid = setInterval(function () {
            seconds++;
            outer.innerText = "0"+ days + " : " + "0"+ hours + ":" + "0" + minutes + " : " + "0" + seconds;
            if (seconds > 59) {
                seconds = 0;
                minutes++;
            }
            if (minutes > 59) {
                minutes = 0;
                hours++;
            }
            if (hours > 24) {
                hours = 0;
                days++;
            }
        }, 1000)
    }
    stopBtn.onclick = function () {
        clearInterval(timerid);
        startBtn.disabled = false;
    }
})