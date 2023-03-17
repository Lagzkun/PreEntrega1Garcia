//Introducción al Juego
let welcome = "Hola Bienvenido a Destino Incognito";
alert(welcome);
console.log("Mensaje de Bienvenida: " +welcome);

let info = "Destino Incognito es un juego sencillo, vas a decidir si tu destino es... Positivo O Negativo eligiendo la opción que creas correcta";
alert(info);
console.log("Las Instrucciones del juego son: " +info);


let namePlayer = prompt('Primero Ingresa tu Nombre :)');
alert('Preparate ' +namePlayer + " , Vamos a comenzar!");
console.log("El nombre de usuario es: " +namePlayer);

//Preguntas 
let warning = "¡respuesta incorrecta, elige la opcion disponible!"
let example = "Comencemos con una pregunta de ejemplo:";
alert(example);

let ready = prompt('¿ Deseas hacer el tutorial ? s-si / n-no');
while(ready == "s") {
let test = prompt('¿ Es color azul el cielo ? Responde escribiendo el numero: \n 1)-si \n 2)-no')
    if ( test == "1"){
        alert("respuesta correcta! :)");
    }else if (test == "2"){
        alert("respuesta incorrecta! :(");
    }else{
        alert(warning);
    }
    ready = alert('Tutorial Completado :D')
};

let messageContinue = "Perfecto ya sabes como jugar, continuemos :D!";
alert(messageContinue);


let messageBeta = "ACTUALMENTE EN DESARROLLO <3, GRACIAS POR PROBAR";
alert(messageBeta);

//funcion 

function thanks(){
    let messageThanks = "Gracias por jugar "
    alert(messageThanks + namePlayer);
}

// ejecutar la funcion
thanks();