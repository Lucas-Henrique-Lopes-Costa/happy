/* Mexendo no Console
    // { color: "red" } // isto é um objeto
    // camiseta = { color: "red" } // colocando na variável

    // camiseta == "verde" //=> verdadeiro

    // // acessando propriendades:

    // camuseta.color == "verde" // => verdadeiro

    // // acessando o HTML

    // document.body.style.backgroundColor = "blue"

    // // dando funcionalidades

    // camiseta.suja = false 
    // //ou
    // camiseta.suja = true

    // camiseta.verificarLimpeza = function () {
    //     if(camiseta.suja) {
    //         // se a camiseta estiver suja
    //         return "camiseta suja"
    //     } else {
    //         return "camiseta limpa"
    //     }
    // }

    // camiseta.verificarLimpeza()

    // CRIANDO O MAPA

    // Tipos de dados:
    // String ""
    // Number 01
    // Object {}
    // Boolean True ou False
    // Array []
*/

//create map
const map = L.map('mapid').setView([-20.1480625,-44.8850062], 15);

// create and add title
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    // Pegando do Streat Map
    // {
    // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }
).addTo(map);

// create icon

const icon = L.icon ({
    iconUrl: "./public/images/map-marker.svg", 
    iconSize: [58,68],
    iconAnchor: [29, 68]
})

// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

// Create and add marker | Adicionar um pop-up
L.
marker([-20.1480625,-44.8850062], { icon })// marcação | procura a variável
.addTo(map) // adiciona ao mapa
.bindPopup(popup) //ligue o pop-up pegando as pré-definições
// .openPopup(); // feche o pop-up