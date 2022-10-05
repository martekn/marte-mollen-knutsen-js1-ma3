import { createCard } from "./components/createCard.js";
import { createAlert } from "./components/createAlert.js";

const apiKey = "53af2ecdc40c48dfa807f20d4d276df1";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const main = document.querySelector("main");

const getGames = async () => {
  try {
    const req = await fetch(url);
    const res = (await req.json()).results;

    main.innerHTML = "";

    for (const [index, game] of res.entries()) {
      if (index === 8) break;

      createCard(game, main);
    }
  } catch (error) {
    main.innerHTML = "";
    console.log(error);
    createAlert("error", "Oops, something went wrong", main);
  }
};

getGames();
