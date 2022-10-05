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
    if (Array.isArray(classes)) {
      element.classList.add(...classes);
    } else {
      element.classList.add(classes);
    }
  }
  if (content) {
    element.innerText = content;
  }

  return element;
};
