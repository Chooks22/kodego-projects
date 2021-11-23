/**
 * @template {keyof HTMLElementTagNameMap} T
 * @param {T} tagName
 * @param {object} data
 * @param {string|HTMLElement|(string|HTMLElement)[]} children
 * @returns HTMLElementTagNameMap[T]
 */
export function createElement(tagName, data = null, children = null) {
  const elem = document.createElement(tagName);

  if (children !== null) {
    if (Array.isArray(children)) {
      elem.append(...children);
    } else {
      elem.append(children);
    }
  }

  if (data !== null) {
    Object.assign(elem, data);
  }

  return elem;
}

/**
 * @param {HTMLElement} app
 * @param {HTMLElement} root
 */
export function render(app, root) {
  root.append(app);
}
