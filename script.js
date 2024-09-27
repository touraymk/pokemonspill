/*Skriv om slik at vi får et player objekt, 
istedenfor 3 frittstående variabler;
- playerName
- playerImage
- playerPokemon

Bonusoppgave:
Vi har i dette prosjektet 2 forskjellige views, 
ett hovedview og ett eget for når vi har fanget en pokemon.

Lag et tredje view hvor vi kan vise hvilke pokemon vi
 har fanget, istedenfor å logge disse ut i konsollen slik 
 vi gjør nå. Du må da skrive om showPokemon() funksjonen, 
 lage dette nye viewet, og kanskje skrive litt CSS for å 
 style dette.*/

let pikachu = {
  name: "Pikachu",
  health: 45,
  image: "../images/pikachu.png",
  level: 8,
};
let bulbasaur = {
  name: "Bulbasaur",
  health: 70,
  image: "../images/bulbasaur.png",
  level: 12,
};
let oranguru = {
  name: "Oranguru",
  health: 170,
  image: "../images/oranguru.png",
  level: 45,
};

let drowzee = {
  name: "Drowzee",
  health: 90,
  image: "../images/drowzee.png",
  level: 33,
};

let galarianPonyta = {
  name: "Galarian Ponyta",
  health: 70,
  image: "../images/galarian-ponyta.png",
  level: 15,
};

let ashKetchum = {
  name: "Ash Ketchum",
  image: "../images/ash-ketchum.png",
};

let possiblePokemons = [
  {
    name: "Pikachu",
    health: 45,
    image: "../images/pikachu.png",
    level: 8,
  },

  pikachu,
  bulbasaur,
  oranguru,
  drowzee,
  galarianPonyta,
];
let randomPokemon = null;
let playerPokemon = [];

let app = document.getElementById("app");

updateView();
function updateView() {
  getRandomPokemon();
  app.innerHTML = /*html*/ `
    <div class="container">
      <div class="opposingPokemon">
        <div>${randomPokemon.name}</div>
        <div>lvl: ${randomPokemon.level}</div>
        <img src="${randomPokemon.image}" alt="" />
      </div>

      <div class="buttomScreen">
        <div class="player">
          <img src="${ashKetchum.image}" alt="" />
          <div>${ashKetchum.name}</div>
        </div>

        <div class="buttonContainer">
          <button onclick="catchPokemon()">Fang</button>
          <button onclick="updateView()">Finn en annen</button>
          <button onclick="showPokemon()">Vis dine pokemon</button>
        </div>
      </div>
    </div>
  `;
}

function caughtPokemonView() {
  app.innerHTML = /*html*/ `
    <div class="caughtContainer">
      <h1>Du fanget ${playerPokemon[playerPokemon.length - 1].name}</h1>
      <div class="buttonContainer">
        <button onclick="updateView()">Finn en annen</button>
        <button onclick="showPokemon()">Vis dine Pokemon</button>
      </div>
    </div>
  `;
}

function catchPokemon() {
  playerPokemon.push(randomPokemon);
  caughtPokemonView();
}

function caughtPokemon() {
  playerPokemon.push(randomPokemon);
  showPokemon();
}

function ownedPokemons() {
  let htmlstr = "";
  for (let i = 0; i < playerPokemon.length; i++) {
    htmlstr += /*html*/ `
    <div>
      <div>${playerPokemon[i].name}</div>
      <div>health: ${playerPokemon[i].health}</div>
      <div>lvl: ${playerPokemon[i].level}</div>
      </div>
      <img src="${playerPokemon[i].image}" alt="${playerPokemon[i].name}" />
    `;
  }
  return htmlstr;
}

function showPokemon() {
  app.innerHTML = /*html*/ ` 
    <div class="pokemonBoxDisplay">
      <h1>Dine pokemons: </h1>
      <div class="pokemonPartyContainer">
      ${ownedPokemons()}
      <div class="buttonContainer">
        <button onclick="updateView()">Finn en annen</button>
      </div>
    </div>
  `;

  console.log(playerPokemon);
}

function getRandomPokemon() {
  let randomNum = Math.floor(Math.random() * possiblePokemons.length);
  randomPokemon = possiblePokemons[randomNum];
}
