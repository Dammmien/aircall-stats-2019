import Table from './Table.js';
import BarChart from './BarChart.js';
import PieChart from './PieChart.js';
import { create } from './DOM.js';

const main = document.querySelector('main');

fetch('./data.json').then(x => x.json()).then(x => x.forEach( item => {
  const section = create('section');
  section.appendChild(create('h1', { innerHTML: item.title, className: 'text-center mb-5 mt-10' }));

  if (item.type === 'table') {
    section.appendChild(new Table(item));
  } else if (item.type === 'chart') {
    section.appendChild(new BarChart(item.data));
  } else if (item.type === 'pie') {
    section.appendChild(new PieChart(item.data));
  }

  main.appendChild(section)
} ));
