let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
let firstEntry = true; // Variable para controlar si es la primera entrada

function increment() {
    count++;
    countEl.textContent = count;
}

function save() {
    if (!firstEntry) {
        saveEl.textContent += " - "; // Agrega un guión solo si no es la primera entrada
    }
    let countStr = count;
    saveEl.textContent += countStr;
    resetCount();
    firstEntry = false; // Desactiva la variable después de la primera entrada
}

function resetCount() {
    countEl.textContent = 0;
    count = 0;
}

function reset() {
    resetCount();
    saveEl.textContent = "Counting... ";
    firstEntry = true; // Restablece la variable a true cuando se reinicia
}
