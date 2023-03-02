
const btn = document.querySelector('.btn');
btn.addEventListener('click', create);

const clear = document.querySelector('.clear');
clear.addEventListener('click', ()=>eventCall(1));

function getGridValue() {
    let n = prompt("Enter no of max square on each side. \t Should be <=100");
    return n;
}

let call = 0;
let oldValue = 0;

function create() {

    let numberOf =oldValue;
    if(call === 0) {
        numberOf = 16;
        call++;
        oldValue = 16;
    }
    else {
        numberOf = getGridValue();
        if(numberOf === null || numberOf === "") numberOf = oldValue;
        else oldValue = numberOf;
    }
    while(numberOf >100) {
        numberOf = prompt("Error! Please enter valid value!");
    }
    const container = document.querySelector('.parents');
    container.innerHTML = '';
    for(let i=0; i<numberOf*numberOf; ++i){
        const content = document.createElement('div');
        content.classList.add("content");
        const size = 480/numberOf;
        content.style.width = `${size}px`;
        content.style.height = `${size}px`;
        container.appendChild(content);
    }
    eventCall("blue");
    return;
}

create();

function eventCall(color){
    const cells = document.querySelectorAll('.content');
    if(color === 1){
        cells.forEach(cell => {
                cell.style.background = "white";
            });
    }
    else {
        cells.forEach(cell => {
            cell.addEventListener('mouseover', ()=>{
                cell.style.background = `${color}`;
            });
        });
    }
    return;
}

