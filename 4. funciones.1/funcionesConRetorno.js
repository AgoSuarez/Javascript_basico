function aleatorio() {
    return Math.random();
}
var a = aleatorio();
console.log(a);

function nombre() {
    return "Pablo";
}
console.log(nombre() + " Alvarez");

function creaPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido,
    };
}
var persona = creaPersona("Antonio", "Perez");
console.log(persona);