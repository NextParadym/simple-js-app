// Create a List of Pokemons Objects

let pokemonList = [
  {
    name: "Charmeleon",
    height: 1.1,
    types: ["fire"]
  },
  {
    name: "Nidoking",
    height: 1.4,
    types: ["ground","poison"]
  },
  {
    name: "Psyduck",
    height: 0.8,
    types: ["water"]
  },
  {
    name: "Pikachu",
    height: 0.4,
    types: ["Electric"]
  },
  {
    name: "Venusaur",
    height: 2,
    types: ["ground","poison"]
  }
];

// create a for loop to iterate over each object in the List of Pokemons Objects
document.write('<ol>');
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height >= 1.0) {
    document.write('<li>' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ')' + ' - Wow, that’s big </li>');
  } else {
    document.write('<li>' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ')' + '</li>');
  }
}
document.write('</ol>');
