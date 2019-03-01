var persona = {
    nombre: "Juan",
    apellido: "Perez",

    comer: function() {
        //Usamos el this para referirnos a una propiedad de que pertenece a este objeto
        console.log(this.nombre + " esta comiendo");
    },
    direccion: {
        calle: "San ignacion",
        numero: 23,
        imprimirDireccion: function() {
            //En este caso this hace referencia a una propiedad
            //de objeto direccion
            console.log(this);
        }
    },
}

persona.comer();
persona.direccion.imprimirDireccion();