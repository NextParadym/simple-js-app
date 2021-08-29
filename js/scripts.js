
// Create a List of Pokemons Objects

let pokemonList = [
  {
    name: "Charmeleon",
    height: 1.1,
    type: "fire"
  },

  {
    name: "Nidoking",
    height: 1.4,
    type: ["ground","poison"]
  },

  {
    name: "Psyduck",
    height: 0.8,
    type: "water"
  },

  {
    name: "Pikachu",
    height: 0.4,
    type: "Electric"
  },

  {
    name: "Venusaur",
    height: 2,
  type: ["ground","poison"]
  }
];

//a loop with each pokemon name and their respective height
//a label if a pokemon is bigger than 1.5

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 1.1) {
    document.write('<p>' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ')' + ' -Big Pokemon! </p>');
  } else {
    document.write('<p>' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ')' + '</p>');
  }
}
