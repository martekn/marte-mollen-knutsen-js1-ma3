import { createHtmlElement } from "../util/createHtmlElement.js";

/**
 * Creates card from object and appends to parent
 * @param {Object[]} game
 * @param {HTMLElement} parent
 */
export const createCard = (game, parent) => {
  const card = createHtmlElement("div", ["card"]);
  const name = createHtmlElement("h2", null, game.name);
  const rating = createHtmlElement("span", ["rating"], game.rating);
  const tagCount = createHtmlElement("span", ["tag-count"], `Tag count: ${game.tags.length}`);
  card.append(name, tagCount, rating);
  parent.appendChild(card);
};
