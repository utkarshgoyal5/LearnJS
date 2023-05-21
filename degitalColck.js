
let clockCurrentTime = () => {

    let hrs = document.querySelector('#hr');
    let min = document.querySelector('#min');
    let sec = document.querySelector('#sec');

    let currentDateAndTime = new Date();

    hrs.textContent = currentDateAndTime.getHours();
    min.textContent = currentDateAndTime.getMinutes();
    sec.textContent = currentDateAndTime.getSeconds();

}

setInterval(clockCurrentTime, 1000);