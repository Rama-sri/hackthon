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
    .catch((er) => console.error(er));
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
   
     let pokeTypes = document.createElement('ul') 
  

     createTypes(pokeData.types, pokeTypes) 
   pokeContainer.append(pokeName, pokeNumber,pokeTypes);   
    allPokemonContainer.appendChild(pokeContainer);       
}

function createTypes(types, ul){
    types.forEach(function(type){
        let typeLi = document.createElement('li');
        typeLi.innerText = type['type']['name'];
        ul.append(typeLi)
    })
}

function createPokeImage(pokeID, containerDiv){
    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image')

    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokeID}.png`

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}

let pokeMoves = document.createElement('ul')
function getDataById(pokeMoves) {
      fetch(`https://pokeapi.co/api/v2/move${pokeID}`)
        .then((x) => x.json())
        .then((res) => {
          console.log(res);
          document.getElementById("move").innerText = res.pokeMoves;
        })
             .catch();
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

 let search = document.getElementById("Search");
 let SearchId = document.getElementById("SearchID");
 SearchId.addEventListener('click',()=>{
    let Searched = confirm(`Search the data ${pokeID}`)
    if (Search.value){
        window.find(search.value);
    
    }
    else console.log("The data is not found");
    
    });







