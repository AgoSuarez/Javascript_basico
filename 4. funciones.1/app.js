function imprimir(param1) {
    console.log(param1);
}
var nombre = "pepe";
imprimir(nombre);
imprimir("otra cosa");

function imprimir2(param1 = "Pepe", param2 = "") {
    console.log("Nombre completo: ", param1, param2);
}

imprimir2("Juan", "Santana");
imprimir2();

function imprimir3(persona) {
    console.log(persona);
}

function modifica(persona) {
    persona.nombre = "Sancho";
    persona.apellido = "Panza";
}

imprimir3({
    nombre: "Antonio",
    apellido: "Alvarez"
});
var obj = {
    nombre: "pancho",
    apellido: "sancho"
};
imprimir3(obj);
//al pasarlo como parametro lo pasamos como referencia como toda asignacion
//de objetos por lo que si modificamos dentro de la funcion afecta al objeto
//original

modifica(obj);
imprimir3(obj);