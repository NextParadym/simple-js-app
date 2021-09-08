
// pokemonRepository
var pokemonRepository = (function () {
  var repository = [
    {
      name: "Charmeleon",
      height: 1.1,
      types: ["fire"]
    },
    {
      name: "Nidoking",
      height: 1.4,
      types: ["ground", "poison"]
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
      types: ["ground", "poison"]
    }
  ];


  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return repository;

  //  showDetails function and console

    function showDetails(pokemon) {
    }
    console.log(showDetails(pokemon));

  }
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

    // add Eventlistener
    button.addEventListener('click', function (event) {
    });

  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };

})();

pokemonRepository.add({ name: "Hoothoot", height: 0.7, types: ["normal","plug"] });

 // forEach() Loop of the pokemonList

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
})

console.log(pokemonRepository.getAll());

 // forEach() Loop of the pokemonList
document.write('<ul>');
pokemonRepository.getAll().forEach(function(pokemon) {
  document.write('<li>' +pokemon.name + ' is ' + pokemon.height+ ' by height'+ ' with ' + pokemon.types + ' as type category.'+ '</li>');
})
document.write('</ul>');
