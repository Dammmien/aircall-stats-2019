import { create } from './DOM.js';
import BaseComponent from './BaseComponent.js';

export default class BarChart extends BaseComponent {

  buildChart(canvas) {
    new Chart(canvas, {
      type: 'horizontalBar',
      data: {
        labels: this.state.slice(0, 20).map(item => item.label),
        datasets: [{
          backgroundColor: this.state.map(item => '#335EEA'),
          data: this.state.slice(0, 20).map(item => item.value)
        }]
      },
      options: {
        layout: {
          padding: {
            left: 30,
            right: 40,
            top: 40,
            bottom: 20
          }
        },
        legend: { display: false },
        scales: {
          xAxes: [{
            gridLines: {
              drawBorder: false
            },
            ticks: {
              min: 0,
              fontFamily: 'HKGroteskPro',
              fontSize: 17
            }
          }],
          yAxes: [{
            gridLines: {
              display: false,
              drawBorder: false
            },
            ticks: {
              fontColor: '#335EEA',
              fontFamily: 'HKGroteskPro',
              fontSize: 17
            }
          }]
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

customElements.define('bar-chart', BarChart);
