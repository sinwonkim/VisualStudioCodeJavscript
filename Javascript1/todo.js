const toDOform = document.querySelector(".js-toDoForm"),
    toDoInput = toDOform.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList")


const TODOS_LS = "toDos";

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos)); // key,value 
                                                         //  자바스크립트 데이타 String 객체로 변환해줌
}

function paintToDo(text) {
    const li =  document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "X";
    const span = document.createElement("span");
    const newId = toDos.length + 1; 
    span.innerText = text
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos(); // 호출 순서도 생각할 것 
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value ="";
}

function loadToDos() {
    const loadedToDos =  localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {  
        const parsedToDos = JSON.parse(loadedToDos); //JSON.parse 는 string 객체를 json객체로 변환 
        parsedToDos.forEach(function(toDo){ //array가 가진것 중에 forEach는 기본적으로 함수를 실행  array에 담겨 있는 것들 각각에 
                                              // 한번씩 함수를 실행 시켜줌   프로퍼티 리스너 방식인듯 
           paintToDo(toDo.text);                         
        });
    } 
}



function init() {
    loadToDos(); // 호출
    toDOform.addEventListener("submit",handleSubmit); //이벤트 타입,
}

init(); // 호출

