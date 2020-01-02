const  parser = new DOMParser();

export const create = (tag, attrs, eventListeners) => {
  const element = document.createElement(tag);

  for (const attr in attrs) {
    element[attr] = attrs[attr]
  }

  for (const event in eventListeners) {
    element.addEventListener(event, eventListeners[event]);
  }

  return element;
}

export const parse = str => parser.parseFromString(str, 'text/html').body.firstChild;
