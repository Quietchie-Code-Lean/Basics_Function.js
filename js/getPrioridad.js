let inputTarea = document.querySelector('#input-tarea')
let outputTarea = document.querySelector('#output-tarea')
let checkTarea = document.querySelector('#check-tarea')



checkTarea.addEventListener('click', () =>{
    /* console.log('click'); */

    if(inputTarea.value > 7){
        outputTarea.innerHTML = "Alta Importancia.";
        outputTarea.style.color = "red";
        outputTarea.style.margin = "1rem";
        
        console.log(inputTarea.value, "Alta importancia");
    }else if(inputTarea.value == 7){
        outputTarea.innerHTML = "Importancia Exacta";
        outputTarea.style.color = "yellow";
        outputTarea.style.margin = "1rem";
        console.log(inputTarea.value, "Importancia exacta");
    }else{
        outputTarea.innerHTML = "Baja Importancia.";
        outputTarea.style.color = "green";
        outputTarea.style.margin = "1rem";
        console.log(inputTarea.value, "Baja importancia");
    }
});