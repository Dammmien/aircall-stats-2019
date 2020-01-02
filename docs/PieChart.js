import { create } from './DOM.js';
import BaseComponent from './BaseComponent.js';

export default class PieChart extends BaseComponent {

  buildChart(canvas) {
    new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: this.state.slice(0,10).map(item => item.label),
        datasets: [{
          data: this.state.slice(0,10).map(item => item.value.toFixed(1)),
          backgroundColor: ['#007BFF', '#6610F2', '#6F42C1', '#E83E8C', '#DC3545', '#FD7E14', '#FFC107', '#28A745', '#20C997', '#17A2B8', '#869AB8', '#384C74', '#335EEA', '#506690', '#42BA96', '#7C69EF', '#DF4759', '#2B354F', '#6C8AEC', '#161C2D']
        }]
      },
      options: {
        layout: {
          padding: {
            left: 30,
            right: 30,
            top: 30,
            bottom: 30
          }
        }
      }
    });
  }

  render() {
    this.className = 'card';
    const canvas = create('canvas');
    canvas.style.height = '575px';
    canvas.height = '575px';
    this.appendChild(canvas);
    this.buildChart(canvas);
  }

}

customElements.define('pie-chart', PieChart);
