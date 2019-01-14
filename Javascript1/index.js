const title =  document.getElementById('title');

function handleClick(){ //이벤트가 발생할 떄마다 이벤트 객체가 호출됨
    title.style.color = "blue";
}

title.addEventListener("click",handleClick); //handleResize함수를  이벤트로 add함 