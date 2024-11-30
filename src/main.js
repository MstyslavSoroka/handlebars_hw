import template from './template.handlebars';
import items from './countries.json';

const list = document.querySelector(`.gallery`);
const layout = template(items);
list.innerHTML = layout;
console.log(layout);
