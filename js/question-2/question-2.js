import { createCards } from "./components/card.js";
import { createWarning } from "./components/warning.js";

const apiKey = "53af2ecdc40c48dfa807f20d4d276df1";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const main = document.querySelector("main");

const getGames = async () => {
  try {
    const req = await fetch(url);
    const res = await req.json();

    main.innerHTML = "";
    createCards(res.results, main);
  } catch (error) {
    main.innerHTML = "";
    console.log(error);
    createWarning("error", "Oops, something went wrong", main);
  }
};

getGames();
