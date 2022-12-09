//Interacción Usuario//
const edad = 18;

const entrada = alert("Bienvenido al Blog #1 de Blink-182, aca vas a poder enterarte de las ultimas noticias, reproducir todas sus canciones e informarte acerca de sus tours programados; Recuerda que para obtener entradas debes ser mayor de 18 anios​");

let ingreso = parseInt( prompt ("Ingrese su edad."));
let repetir = true;

function coincide (ingreso) {
    return (18 <= ingreso)
};

if (coincide(ingreso)) {
    Swal.fire("Bien, apurate a buscar las tuyas!​");
    repetir = false;
}
while (repetir){
    if(isNaN(ingreso)){
        ingreso = parseInt(prompt("Por favor, ingrese un número válido​"));
        continue
    }else if(coincide(ingreso)) {
        Swal.fire("Bien, apurate a buscar las tuyas!​");
        repetir = false;
    }else{ 
        Swal.fire("Usted no es mayor de edad, no podra reservar entradas​");
        repetir = false;
    }
}



// Fetch //
fetch("../DataBase/DB.json")
.then((res) => res.json())
.then((data) => {
    data.forEach((post) => {
    const listado = (document.getElementById("app").innerHTML += `
    <div class="row pb-5">
        <div class="col-md-3 text-center">
            <span class="fontDMedium">${post.fecha}</span><br />
        </div>
        <div class="col-md-3 text-center">
            <span class="fontDMedium">${post.pais}</span><br />${post.lugar}
        </div>
        <div class="col-md-3 text-center d-flex align-items-center justify-content-center">
            <a href="https://bit.ly/ltl2022" class="btn-tickets mt-2" target="_blank">Tickets</a>
        </div>
        <button id="BInfo2" class="col-md-3 btn-tickets mt-2">+INFO</button>
    </div>`);
    });
});

// Array //
const recitales = [
    {
        id: 1,
        fecha: "Dom Sep 25",
        pais: "Louisville Kentucky, Estados Unidos",
        lugar: "Louder Than Life Festival",
        tickets: "Disponibles",
    },
    {
        id: 2,
        fecha: "Dom Oct 9",
        pais: "Austin Texas, Estados Unidos",
        lugar: "Austin City Limits Music Festival",
        tickets: "Disponibles",
    },
    {
        id: 3,
        fecha: "Dom Oct 16",
        pais: "Austin Texas, Estados Unidos",
        lugar: "Austin City Limits Music Festival",
        tickets: "Disponibles",
    },
    {
        id: 4,
        fecha: "Sáb Ene 21",
        pais: "Nueva Zelanda",
        lugar: "Mt. Smart Stadium",
        tickets: "Disponibles",
    },
    {
        id: 5,
        fecha: "Jue Ene 26",
        pais: "Nueva Zelanda",
        lugar: "Forsyth Barr Stadium",
        tickets: "Disponibles",
    },
    {
        id: 6,
        fecha: "Dom Ene 29",
        pais: "Australia",
        lugar: "Suncorp Stadium",
        tickets: "Disponibles",
    },
    {
        id: 7,
        fecha: "Jue Feb 02",
        pais: "Australia",
        lugar: "Accor Stadium",
        tickets: "Disponibles",
    },
    {
        id: 8,
        fecha: "Miérc Feb 07",
        pais: "Australia",
        lugar: "Marvel Stadium",
        tickets: "Agotados",
    },
    {
        id: 9,
        fecha: "Dom Feb 12",
        pais: "Australia",
        lugar: "Optus Stadium",
        tickets: "Agotados",
    },
];

// Find //
    let buscador = "Australia"
    const busqueda = recitales.find(recitales => recitales.pais === buscador)
    console.log(busqueda)

// MODAL //

let modal = document.getElementById("modalGod");

let btn = document.getElementById("BInfo");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
modal.style.display = "block";
}

span.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}

const BInfo = document.getElementById("BInfo");
const ticketContainer = document.querySelector(".ticketContainer");

BInfo.addEventListener("click", function(e) {

formSoli.style.display = 'block';
});

document.getElementById('EnviarSolicitud').onclick = function(){
Swal.fire('Gracias, pronto recibiras mas informacion sobre el recital!');
} 

// JSON STORAGE 
document.querySelector('#EnviarSolicitud').addEventListener('click', guardarSolicitud);

function guardarSolicitud(event){
event.preventDefault();
    let sNombre = document.querySelector('#txtName').value,
        sCelular = document.querySelector('#txtCelular').value,
        sCorreo = document.querySelector('#txtCorreo').value; 

addPersonaInfo(sNombre,sCelular,sCorreo);
}


let InfoRecitalBlink = [];

function addPersonaInfo(pname,pphone,pemail) {

            let newSolicitudInfoReci = {
            nombre: pname,
            celular: pphone,
            email: pemail,
            };
            console.log(newSolicitudInfoReci);
            InfoRecitalBlink.push(newSolicitudInfoReci);
            localStorageInfoRecitalBlink(InfoRecitalBlink)
}

function getInfoRecitalBlink(){
let storedList =localStorage.getItem('localInfoRecitalBlink');
if(storedList == null){
    InfoRecitalBlink =[]; 
}else{
    InfoRecitalBlink = JSON.parse(storedList);
}
return InfoRecitalBlink;
}

function localStorageInfoRecitalBlink(plist){
localStorage.setItem('localInfoRecitalBlink', JSON.stringify(plist));
}