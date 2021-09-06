
// pokemonRepository
var pokemonRepository = (function (){ 
  var pokemonList = [
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

  function getAll() {
    return pokemonList;
  } //returns Pokemon List

  function add(pokemon) {
    pokemonList.push(pokemon);
  } //add pokemons

  return {
    add: add,
    getAll: getAll
  };
})();

  // forEach() Loop of the pokemonList
document.write('<ol>');
pokemonRepository.getAll().forEach(function(pokemon) {
  document.write('<li>' +pokemon.name + ' is ' + pokemon.height+ ' by height'+ ' with ' + pokemon.types + ' as type category.'+ '</li>');
})
document.write('</ol>');
