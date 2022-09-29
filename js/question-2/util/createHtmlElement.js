/**
 * Creates an html element, adds classes if any, and content if any.
 * @param {String} tag
 * @param {String[] | String} classes
 * @param {String} content
 * @returns {HTMLElement} html element
 */
export const createHtmlElement = (tag, classes, content) => {
  const element = document.createElement(tag);
  if (classes) {
    for (const className of classes) {
      element.classList.add(className);
    }
  }
  if (content) {
    element.innerText = content;
  }

  return element;
};
