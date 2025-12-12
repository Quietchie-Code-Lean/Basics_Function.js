/* KittyBorder script*/


let kitty1 = document.querySelector('#img-1');
let kitty2 = document.querySelector('#img-2');
let kitty3 = document.querySelector('#img-3'); 


kitty1.addEventListener('click', function(){
    addBorders('img-1')
});
kitty2.addEventListener('click', function(){
    addBorders('img-2')
});
kitty3.addEventListener('click', function(){
    addBorders('img-3')
});

function addBorders(elementId){
    borderOn = document.querySelector('#' + elementId);
     if (!borderOn.style.border) {
        borderOn.style.border = "4px solid #ab63a0";
    } else {
        borderOn.style.border = "";
    }
}


/* Kittty borders diferent color */

let colours = ["#ab63a0", "#38bdf8", "#facc15"];

let kitties = document.querySelectorAll('.divBox-kitties img');


kitties.forEach((kitty, index) => {
    kitty.addEventListener('click', function(){
        addBorderColor(kitty, colours[index])
    });
    });

function addBorderColor(element, color){
    if(!element.style.border){
        element.style.border = "4px solid" + color;
    }else{
        element.style.border = "";
    }
}

/*  Modifying fontSize paragraph through buttons */

let decreBy5 = document.querySelector('#decreaseBy5');
let decreBy1 = document.querySelector('#decreaseBy1');
let increBy1 = document.querySelector('#increaseBy1');
let increBy5 = document.querySelector('#increaseBy5');
let outputParagraph = document.querySelector('#outputParagraph')

    
let currentFontSize = outputParagraph.style.fontSize= 12 + 'px';
    currentFontSize = parseFloat(currentFontSize)
    

    function increDecre(fontSize){
        let newFontSize = currentFontSize + fontSize;
        outputParagraph.style.fontSize = newFontSize + "px";
        currentFontSize = newFontSize;
    }


decreBy5.addEventListener('click', () =>{increDecre(-5)});
decreBy1.addEventListener('click', () =>{increDecre(-1)});
increBy1.addEventListener('click', () =>{increDecre(1)});
increBy5.addEventListener('click', () =>{increDecre(5)});




/* Create operations functions */


/* Function byTwo(){...} */

const inputBy2 = document.querySelector('#input_by_2');
const outputBy2 = document.querySelector('#output_by_2')
const btnByTwo = document.querySelector('#calculate_by_2');

function byTwo(){
    
    let outcome1 = inputBy2.value * 2;
    outputBy2.innerHTML = outcome1;
    return outcome1;
}

btnByTwo.addEventListener('click', byTwo);


/* Function byFive(){...} */

const inputBy5 = document.querySelector('#input_by_5');
const outputBy5 = document.querySelector('#output_by_5')
const btnByFive = document.querySelector('#calculate_by_5');


function byFive(){
    let outcome2 = inputBy5.value * 5;
    outputBy5.innerHTML = outcome2;
    return outcome2;
}

btnByFive.addEventListener('click', byFive);


/* Function mulptiply(num1, num2){...} */

const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const outputMultiply = document.querySelector('#output_multiply');
const btnMultiply = document.querySelector('#calculate_multiply');

function multiply(num1, num2){
    let outcome3 = num1 * num2;
    outputMultiply.innerHTML = outcome3
    return outcome3;
}

btnMultiply.addEventListener('click', function(){
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);
    multiply(num1, num2);
});

