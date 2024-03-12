'use strict';

window.onload = () => {

    let main = document.getElementById("main");

    for (let i = 1; i < 101; i++) {
        const buttonTemplate = document.querySelector("#template-button");
        const clone = buttonTemplate.content.cloneNode(true);
        let button = clone.querySelector("button");
        button.value = i;
        button.id = i;
        button.innerHTML = i;
        button.className = "square-inactive";
        main.appendChild(button);
    }
}

function onClickButton(e) {      
    simulate(e.id);
}

let nIntervId;

function onClickCountTo100() {
    for (let i = 1; i < 101; i++) {        
        setTimeout(() => {simulate(i); }, i * 2000);
    }
}

function simulate(id){
    setActive(id,setInactive);
}

function setActive(id, setInactive) {
    console.log(`set ${id} to active`);    
    let button = document.getElementById(id);
    button.className = "square-active";
    setTimeout(() => {setInactive(id); }, 1000);
}

function setInactive(id) {
    console.log(`set ${id} to inactive`);
    let button = document.getElementById(id);
    button.className = "square-inactive";
}