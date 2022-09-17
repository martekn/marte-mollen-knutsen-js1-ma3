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

export const appendToParent = (children, parent) => {
  if (Array.isArray(children)) {
    for (const child of children) {
      parent.appendChild(child);
    }
  } else {
    parent.appendChild(children);
  }
};
