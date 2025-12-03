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