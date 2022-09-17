import { appendToParent, createHtmlElement } from "../util/elements.js";

export const createWarning = (status, content, parent) => {
  const container = createHtmlElement("div", ["alert", status], content);
  appendToParent([container], parent);
};
