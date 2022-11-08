let entrada = alert ("Bienvenido al Blog #1 de Blink-182, aca vas a poder enterarte de las ultimas noticias, reproducir todas sus canciones e informarte acerca de sus tours programados; Recuerda que para obtener entradas debes ser mayor de 18 anios");

let ingresoPag = parseInt( prompt ("Ingrese su edad."));
let coincidir = (edad <= ingreso);
let repetir = true;

while (repetir){
    if (coincidir){
        alert("Bien, apurate a buscar las tuyas!");
        repetir = false;
    }else if (ingresoPag < edad){
        alert ("Usted no es mayor de edad, no podra reservar entradas");
        repetir = false;
    } else {
        ingreso = parseInt( prompt("Por favor, ingrese un numero valido"));
        coincidir = (edad <= ingresoPag);
    }
}


