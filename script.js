document.addEventListener("DOMContentLoaded", () =>{

    let generateBtn = document.querySelector('#generate-pokemon');
    generateBtn.addEventListener('click', renderEverything)

    getDeleteBtn().addEventListener('click', deleteEverything);
})

function renderEverything(){
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    fetchPokemonDetails();

    getDeleteBtn().style.display = 'block'
}

function getDeleteBtn(){
    return document.querySelector('#delete-btn')
}


async function fetchPokemonDetails(){
    let response=await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })
}

function fetchPokemonData(pokemon){
    let url = pokemon.url
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
        renderPokemon(pokeData)
    })
}


function renderPokemon(pokeData){
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div")
    pokeContainer.classList.add('ui', 'card');

    createPokeImage(pokeData.id, pokeContainer);

    let pokeName = document.createElement('h4') 
    pokeName.innerText = `Name:${pokeData.name}`

    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = `No:${pokeData.id}`
   
//     let pokeTypes = document.createElement('ul') 
  

//     createTypes(pokeData.types, pokeTypes) 
   pokeContainer.append(pokeName, pokeNumber);   
    allPokemonContainer.appendChild(pokeContainer);       
}

// function createTypes(types, ul){
//     types.forEach(function(type){
//         let typeLi = document.createElement('li');
//         typeLi.innerText = type['type']['name'];
//         ul.append(typeLi)
//     })
// }

function createPokeImage(pokeID, containerDiv){
    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image')

    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokeID}.png`

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}

createPokeMove(pokeData.id, pokeContainer);
function createPokeMove(pokeID, containerDiv){
    let pokeMoveContainer = document.createElement('div')
    pokeMoveContainer.classList.add('ul')

    let pokeMove = document.createElement('ul')
    pokeMove.srcset = `https://pokeapi.co/api/v2/move${pokeID}`

    pokeMoveContainer.append(pokeMove);
    containerDiv.append(pokeMoveContainer);
}

function deleteEverything(event){
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = ""

    let generateBtn = document.createElement('button')
    generateBtn.innerText = "Generate Pokemon"
    generateBtn.id = 'generate-pokemon'
    generateBtn.classList.add('ui', 'secondary', 'button')
    generateBtn.addEventListener('click', renderEverything);

    allPokemonContainer.append(generateBtn)
}

function SearchingId(){
    let x= document.getElementById("SearchId").pokeData;
}