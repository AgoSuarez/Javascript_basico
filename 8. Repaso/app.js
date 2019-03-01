function Jugador(nombre) {
    this.nombre = nombre;
    this.vida = 100;
    this.poder = 100;

    this.golpear = function(jugadorAGolpear) {
        if (jugadorAGolpear.vida == 0) {
            console.log(jugadorAGolpear.nombre + " ya esta muerto");
        } else if (this.poder < 10) {
            console.log("No tienes poder suficiente para golpear");
        } else {
            this.poder -= 10;
            jugadorAGolpear.vida -= 20;
            if (jugadorAGolpear.vida == 0) {
                console.log("Has matado a " + jugadorAGolpear.nombre);
            }
        }
    }

    this.curar = function(jugadorCurar) {
        if (jugadorCurar.vida == 100) {
            console.log(jugadorCurar.nombre + " tiene la vida completa");
        } else if (jugadorCurar.vida == 0) {
            console.log("No puedes revivir a " + jugadorCurar.nombre + ", ya esta muerto");
        } else if (this.vida < 20) {
            console.log("No tienes energia para curar");
        } else {
            jugadorCurar.vida += 20;
            this.vida -= 20;
        }
    }
}

var jugador1 = new Jugador("Player1");
var jugador2 = new Jugador("Player2");
jugador1.curar(jugador2);
console.log(jugador1);
console.log(jugador2);
jugador2.vida = 20;
jugador1.golpear(jugador2);
console.log(jugador1);
console.log(jugador2);
jugador1.curar(jugador2);
console.log(jugador1);
console.log(jugador2);