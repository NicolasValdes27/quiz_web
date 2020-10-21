"use strict";
function show(name) {
    if (name == '0') {
        document.getElementById("text").innerHTML = 'No se a encontrado un nombre';
    }
    else {
        document.getElementById("text").innerHTML = 'Nombre: ' + name;
    }
}
