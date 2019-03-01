function Animal() {
    this.nombre = "Perro";
    this.patas = 4;
    this.tipoAnimal = function() {
        console.log("Soy un " + this.nombre);
    }
}

function vehiculo(marca, modelo, year) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
    this.imprimeVehiculo = function() {
        console.log(this.marca + " " + " " + this.modelo + " (" + this.year + ")");
    }
}

var perro = new Animal();

console.log(perro)
perro.tipoAnimal();

var toyota = new vehiculo("toyota", "corolla", 2002);
toyota.imprimeVehiculo();