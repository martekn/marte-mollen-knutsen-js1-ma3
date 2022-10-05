import { createHtmlElement } from "../util/createHtmlElement.js";

/**
 * Creates warning message with appropriate styling and appends to parent
 * @param {String} status
 * @param {String} content
 * @param {HTMLElement} parent
 */
export const createAlert = (status, content, parent) => {
  const container = createHtmlElement("div", ["alert", status], content);
  parent.appendChild(container);
};
