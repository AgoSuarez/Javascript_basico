var a = {
    nombre: "Paco",
    edad: 23,
}

console.log("Imprimimos a");
console.log("a:", a);

var d = "unValor";
console.log("Imprimimos a y d siendo a=objeto y d=valor");
console.log("a:", a);
console.log("d:", d);

d = a;
//la asignacion se hace por referencia

console.log("Imprimimos a y d despues de asignar d=a");

console.log("a:", a);
console.log("d:", d);

a.nombre = "Francisco";
console.log("Modificamos a.nombre e imprimimos a y d");

console.log("a:", a);
console.log("d:", d);

d.edad = 50;
console.log("Modificamos d.edad e imprimimos a y d");

console.log("a:", a);
console.log("d:", d);