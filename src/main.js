import template from './src/template.handlebars';
import items from './src/countries.json';

const list = document.querySelector(`.gallery`);
const layout = template(items);
list.innerHTML = layout;
console.log(layout);
