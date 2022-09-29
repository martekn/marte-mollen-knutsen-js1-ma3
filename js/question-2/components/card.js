import { createHtmlElement } from "../util/createHtmlElement.js";

/**
 * Creates cards for the first 8 results in array.
 * @param {Object[]} games
 * @param {HTMLElement} parent
 */
export const createCards = (games, parent) => {
  for (const [index, game] of games.entries()) {
    if (index === 8) {
      break;
    }

    const card = createHtmlElement("div", ["card"]);
    const name = createHtmlElement("h2", null, game.name);
    const rating = createHtmlElement("span", ["rating"], game.rating);
    const tagCount = createHtmlElement("span", ["tag-count"], `Tag count: ${game.tags.length}`);
    card.append(name, tagCount, rating);
    parent.appendChild(card);
  }
};
