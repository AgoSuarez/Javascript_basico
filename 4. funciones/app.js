var a = "soy a";

function miFuncion() {
    var a = 20;

    console.log(a);
}

miFuncion();
console.log(a);

var funcion = miFuncion; //le asignamos a funcion la funcion miFuncion entera
//por que la funcion es un objeto

funcion();