function imprimir(fn) {
    console.log(fn);
    fn();
};


imprimir(function() {
    console.log("texto desde la funcion anonima")
});
var a = 10;
var miFuncion = function() {
    console.log("desde la funcion-variable miFuncion");
};

imprimir(miFuncion);

imprimir(() => {
    console.log("Arrow function");
})