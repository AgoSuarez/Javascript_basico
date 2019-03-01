function Persona() {
    console.log("Soy una persona");
}
//Como las funciones son objetos podemos
Persona.nombre = "Paco";
Persona.apellido = "Perez";
Persona.direccion = {
    Calle: "El infinito",
    Numero: 23,
    Localidad: "Dos Hermanas",
    Provincia: "Sevilla",
};

Persona();
console.log(Persona);