const clock = document.querySelector("#clock");

function getTime() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const clockText = clock.innerText;

    if (clockText === "" ||  clockText === `${hour} ${minute}`) {
        clock.innerText = `${hour}:${minute}`;
    } else {
        clock.innerText = `${hour} ${minute}`;
    }
} 

getTime();
setInterval(getTime, 1000);