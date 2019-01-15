const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minute = date.getMinutes();
    const hours = date.getHours();
    const second = date.getSeconds();
    clockTitle.innerText = `${hours}:${minute}:${second}`;
}

function init() {
    getTime();
}

init();

