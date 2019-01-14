const title = document.querySelector('#title');

const BASE_COLOR = "blue";
const OTHER_COLOR = "#7f8c8d";

function handeClick() { //3
    const  currentColor = title.style.color; // 3-2
    if (currentColor === BASE_COLOR){ // 3-3
        title.style.color = OTHER_COLOR;
    } else { // 3-4
        title.style.color = BASE_COLOR;
    }
    
}

function init() {  // 2
    title.style.color = BASE_COLOR; // 2-1
    title.addEventListener("click",handeClick); // 2-2
}

init(); // 실행 1