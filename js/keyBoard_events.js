
document.addEventListener("keydown", function(event) {
if (event.key === "a" || event.key === "A") {
addElement();
} else if (event.key === "d" || event.key === "D") {
deleteElement();
}});

function addElement() {
const divBox = document.querySelector(".divBox");
let newElement = document.createElement("div");
newElement.textContent = "Added Element";
divBox.appendChild(newElement);
newElement.style.width = "80px";
newElement.style.height = "80px";
newElement.style.backgroundColor = "#ab63a0";
newElement.style.margin = "50px"
}
function deleteElement() {
const divBox = document.querySelector(".divBox");
let elements = divBox.querySelectorAll("div");
if (elements.length > 0) {
divBox.removeChild(elements[elements.length - 1]);
}
}