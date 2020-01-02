import { create } from './DOM.js';
import BaseComponent from './BaseComponent.js';

export default class CustomTable extends BaseComponent {

  get table() {
    const table = create('table', { className: 'table table-striped m-0' });
    table.appendChild(this.thead);
    table.appendChild(this.tbody);
    return table;
  }

  get thead() {
    return create('thead', {
      innerHTML: `<tr>${this.state.headers.map(th => `<th>${th}</th>`).join('')}</tr>`
    });
  }

  get tbody() {
    return create('tbody', {
      innerHTML: this.state.list.map(item => `<tr>${item.map(td => `<td>${td}</td>`).join('')}</tr>`).join('')
    });
  }

  render() {
    this.className = 'card';
    this.appendChild(this.table);
  }

}

customElements.define('custom-table', CustomTable);
