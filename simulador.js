//Introducción al Juego
let introduction = document.getElementById('intro');

introduction.innerHTML='<h1>Hola Bienvenido a Destino Incognito</h1>'
// let welcome = "Hola Bienvenido a Destino Incognito";
// alert(welcome);
// console.log("Mensaje de Bienvenida: " +welcome);

// let info = "Destino Incognito es un juego sencillo, vas a decidir si tu destino es... Positivo O Negativo eligiendo la opción que creas correcta";
// alert(info);
// console.log("Las Instrucciones del juego son: " +info);


// let namePlayer = prompt('Primero Ingresa tu Nombre :)');
// alert('Preparate ' +namePlayer + " , Vamos a comenzar!");
// console.log("El nombre de usuario es: " +namePlayer);

//Preguntas 
// let warning = "¡respuesta incorrecta, elige la opcion disponible!"
// let example = "Comencemos con una pregunta de ejemplo:";
// alert(example);

// let ready = prompt('¿ Deseas hacer el tutorial ? s-si / n-no');
// while(ready == "s") {
// let test = prompt('¿ Es color azul el cielo ? Responde escribiendo el numero: \n 1)-si \n 2)-no')
//     if ( test == "1"){
//         alert("respuesta correcta! :)");
//     }else if (test == "2"){
//         alert("respuesta incorrecta! :(");
//     }else{
//         alert(warning);
//     }
//     ready = alert('Tutorial Completado :D')
// };

// let messageContinue = "Perfecto ya sabes como jugar, continuemos :D!";
// alert(messageContinue);

const preguntas = [
    {
        id:1,
        quest1: {
            question:"¿ Que es más profundo, el mar o el cielo ?",
            positive:"1) el cielo",
            negative:"2) el mar",
            valor: 100,
        }
    },
    {
        id:2,
        quest2: {
            question:"¿ Que duele perder más, la dignidad o el orgullo ?",
            positive:"1) la dignidad",
            negative:"2) el orgullo",
        },
        valor: 1000
    },
    {
        id:3, 
        quest3: {
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

let miBoton = document.getElementById('boton1')
let miCard = document.getElementById('card')
miBoton.addEventListener('click',agregarCard)

function agregarCard() {
    miCard.innerHTML= `
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Start
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      ${preguntas[0].quest1.question}
        <ul>
            <li>${preguntas[0].quest1.positive}</li>
            <li>${preguntas[0].quest1.negative}</li>
        </ul>
        <input type="text" placeholder="Escribe aquí">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    `
}

let miBoton2 = document.getElementById('boton2')

miBoton2.addEventListener('click', function() {
    alert('En desarrollo');
  });

let miBoton3 = document.getElementById('boton3')

miBoton3.addEventListener('click', function() {
    alert('En desarrollo');
});
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