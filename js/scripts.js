
// pokemonRepository
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

  let modalContainer = document.querySelector('#modal-container');
  let modal = document.querySelector('.modal');
  let modalClose = document.createElement('button');
    modalClose.classList.add('modal-close');
  let pokeName = document.createElement('h1');
    pokeName.classList.add('Pokename');
  let pokeHeight = document.createElement('p');
    pokeHeight.classList.add('Pokeheight');
  let imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');
  let pokeImage = document.createElement('img');
    pokeImage.classList.add('PokeImage');
  let pokeType = document.createElement('p');
    pokeType.classList.add('Poketypes');
    let pokeWeight = document.createElement('p');
    pokeType.classList.add('Pokeweight');
    let pokeAbilities = document.createElement('p');
    pokeType.classList.add('Pokeabilities');
  
// add pokemon
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return pokemonList;
  }

    //  addListItem
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name.toUpperCase();
    button.classList.add("pokemon-button");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    
    // add Eventlistener
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
  }

   // Load list
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
       
      });
    }).catch(function (e) {
   
    })
  }


   // Load Deatils
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {

      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = [];
      for (let i = 0; i < details.types.length; i++) {
        item.types.push(details.types[i].type.name);
      }
      item.abilities = [];
      for (let i = 0; i < details.abilities.length; i++) {
        item.abilities.push(details.abilities[i].ability.name);
      }

    }).catch(function (e) {
      console.error(e);
    });
  }


  //  showDetails function
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      console.log(pokemon);
      pokeName.innerHTML = pokemon.name.toUpperCase();
      pokeHeight.innerHTML = 'Height: ' + pokemon.height;
      pokeType.innerHTML = 'Types: ' + pokemon.types.toUpperCase;
      pokeWeight.innerHTML = 'Height: ' + pokemon.weight;
      pokeAbilities.innerHTML = 'Height: ' + pokemon.abilities;
      pokeImage.src = pokemon.imageUrl;
      modalClose.innerHTML = "Close";
      showModal();

      });
    }

      function showModal() {

        modalContainer.classList.add('is-visible');
      }

      function hideModal() {
        modalContainer.classList.remove('is-visible');
      }

      modalClose.addEventListener('click' , hideModal);

      window.addEventListener('keydown', (e) => {
        let modalContainer = document.querySelector('#modal-container');
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
          hideModal();
        }
    });

      modalContainer.addEventListener('click', (e) => {
        // Since this is also triggered when clicking INSIDE the modal
        // We only want to close if the user clicks directly on the overlay
        let target = e.target;
        if (target === modalContainer) {
        hideModal();
    }
  });

  function removeLast() {
    pokemonList.pop();
  }

  modal.appendChild(modalClose);
  modal.appendChild(pokeName);
  modal.appendChild(pokeHeight);
  modal.appendChild(pokeType);
  modal.appendChild(imageContainer);
  imageContainer.appendChild(pokeImage);


  return {
    add: add,
    getAll: getAll,
    removeLast:removeLast,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    hideModal: hideModal

  };
})();


 // forEach() Loop of the pokemonList
pokemonRepository.loadList().then(function () {
pokemonRepository.getAll().forEach(function(pokemon) {
pokemonRepository.addListItem(pokemon);
  });
});
