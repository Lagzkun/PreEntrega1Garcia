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


// objetos

const preguntas = [
    {
        id:1,
        quest: {
            question:"¿ Que es más profundo, el mar o el cielo ?",
            positive:"1) el cielo",
            negative:"2) el mar",
            valor: 100,
        }
    },
    {
        id:2,
        quest: {
            question:"¿ Que duele perder más, la dignidad o el orgullo ?",
            positive:"1) la dignidad",
            negative:"2) el orgullo",
        },
        valor: 1000
    },
    {
        id:3, 
        quest: {
            question:"¿ Que prefieres más, viajar o tiempo ?",
            positive:"1) tiempo",
            negative:"2) viajar",
        },
        valor: 1000000
    },
    {
        id:4,
        quest: {
            question:"¿ elige un superpoder, volar o invisible ?",
            positive:"1) volar",
            negative:"2) invisible",
        },
        valor: 10000
    }
]
console.log(preguntas.length)

const filtrarPreguntas = preguntas.filter((number) =>number.id);
console.table(filtrarPreguntas);

for(const pregunta of preguntas){
    prompt(pregunta.quest.question)
}
alert(pregunta)


let messageBeta = "ACTUALMENTE EN DESARROLLO <3, GRACIAS POR PROBAR";
alert(messageBeta);


//funcion 

function thanks(){
    let messageThanks = "Gracias por jugar "
    alert(messageThanks + namePlayer);
}

// ejecutar la funcion
thanks();