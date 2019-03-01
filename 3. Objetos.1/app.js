var persona = {
    nombre: "Juan",
    apellido: "Santana",
    edad: 54,
    direccion: {
        pais: "España",
        cuidad: "Madrid"
    }
};

console.log(persona);
console.log(persona.direccion);
console.log(persona.direccion.cuidad);

//Añadir nuevo dato a los objetos
persona.direccion.barrio = "Leganes";
console.log(persona);

//para ahorrar toda la ruta para acceder a ciudad por ejemplo
//Podemos asignar a otra variable y trabajar con esa variable ya que 
//valores pasan por referencia

var direccion = persona.direccion;
console.log(direccion);
direccion.calle = "La Paz, 23";

console.log("direccion = ", direccion);
console.log("persona = ", persona);


var campo = "edad";
console.log(persona[campo])