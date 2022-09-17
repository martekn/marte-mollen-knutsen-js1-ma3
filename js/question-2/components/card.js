import { appendToParent, createHtmlElement } from "../util/elements.js";

export const createCards = (games, parent) => {
  for (const [index, game] of games.entries()) {
    if (index === 8) {
      break;
    }

    const card = createHtmlElement("div", ["card"]);
    const name = createHtmlElement("h2", null, game.name);
    const rating = createHtmlElement("span", ["rating"], game.rating);
    const tagCount = createHtmlElement("span", ["tag-count"], `Tag count: ${game.tags.length}`);
    appendToParent([name, tagCount, rating], card);
    appendToParent([card], parent);
  }
};
