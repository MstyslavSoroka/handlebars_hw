import template from 'template/template.handlebars';
import items from 'data/countries.json';

const list = document.querySelector(`.gallery`);
const layout = template(items);
list.innerHTML = layout;
console.log(layout);
