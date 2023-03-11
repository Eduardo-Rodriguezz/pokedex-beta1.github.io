const URL = "https://pokeapi.co/api/v2/pokemon/";

const buscarEntrada = document.getElementById("search");
const contenedorPokedex = document.getElementById("pokedex");

function MostrarError(msg) {
    contenedorPokedex.innerHTML = `<p style="color:rgb(255, 164, 111); background-color: black; margin-top: 5px; border-radius: 5px">${msg}</p>`;
}

async function buscarPokemon() {

    const pokemon = buscarEntrada.value.toLowerCase();

    try {
        const response = await fetch(URL + pokemon);
        
        if(!response.ok) {
            MostrarError(`No se encontró ningún pokemon llamado: ${pokemon}`);
            return;
        }

        const data = await response.json();

        contenedorPokedex.innerHTML = 
       `
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}">
            <p>Número ID: ${data.id}</p>
            <p>Altura: ${data.height / 10}mt </p>
            <p>Peso: ${data.weight / 10}kg</p>
        `;
        } catch {  
            MostrarError('El campo está vacío, ingresa alguno de los datos requeridos.');
    }
}

function mostrarInfo() {
    alert('Virtual Pokedex Beta 1 - Creado por Eduardo Rodriguez')
}

function limpiar() {
    formulario.reset();
    buscarPokemon.innerHTML = '';
    contenedorPokedex.innerHTML = '';
}

document.getElementById('btn-delete').addEventListener('click', limpiar);
document.getElementById('btn-info').addEventListener('click', mostrarInfo);
document.getElementById('btn-search').addEventListener('click', buscarPokemon);