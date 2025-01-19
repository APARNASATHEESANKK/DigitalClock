let hourTxt = document.querySelector(".hour");
let minTxt = document.querySelector(".min");
let secTxt = document.querySelector(".sec");
let ampmTxt = document.querySelector(".ampm");

setInterval(() => {
    let date =new Date();

    let hours = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();

    let label;
    label = hours < 12 ? "AM" : "PM" ;

    hours = hours > 12 ? hours -12 : hours;
    hours = hours == 0 ? 12 : hours;
    hours = hours < 10 ? "0" + hours : hours;

    mins = mins < 10 ? "0" + mins : mins;

    sec = sec < 10 ? "0" + sec : sec;

    hourTxt.innerText =  hours;
    minTxt.innerText = mins;
    secTxt.innerText = sec;

    ampmTxt.innerText = label;
}, 1000);
