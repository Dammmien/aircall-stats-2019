export default class BaseComponent extends HTMLElement {

  constructor(state) {
    super();

    this.state = state;

    if (typeof this.render === 'function') {
      this.render();
    }
  }

  update(newState) {
    this.state = { ...this.state, ...newState };

    if (typeof this.onUpdate === 'function') {
      this.onUpdate();
    } else if (typeof this.render === 'function') {
      this.render();
    }
  }

}

customElements.define('base-component', BaseComponent);
