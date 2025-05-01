let apiUrl ="https://pokeapi.co/api/v2/pokemon/"
let pokemon_Name = document.querySelector('.pokemonName')
let pokemon_Image = document.querySelector('.pokemonImage')
let pokemon_Abilities = document.querySelector('.pokemonabilities')
let input = document.querySelector('.searchbar')

function searchPokemon() {
    axios.get(apiUrl + input.value)
    .then(function(response) {
        pokemon_Name.innerHTML = response.data.forms[0].name;
        pokemon_Image.src = response.data.sprites.front_default;
        let abilities = response.data.abilities;
        let abilitiesText = "";
        
        for (let i = 0; i < abilities.length; i++) {
            abilitiesText += abilities[i].ability.name;
            if (i < abilities.length - 1) {
                abilitiesText += " • ";
            }
        }
        pokemon_Abilities.innerHTML = "Abilities: " + abilitiesText;
    })
    .catch(function(error) {
        pokemon_Name.innerHTML = "not found";
        pokemon_Image.src = "";
    })
}

let button = document.querySelector(".searchbtn")
button.addEventListener("click", searchPokemon)


