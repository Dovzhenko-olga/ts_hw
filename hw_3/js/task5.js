"use strict";
// У localStorage зберігається об’єкт у форматі JSON. Проаналізувати чи є цей об'єкт типу Product{ title:string, price:number }
function isProduct(value) {
    return (!!value && typeof value === 'object' &&
        ['title', 'price'].every(key => key in value));
}
const product = JSON.parse('{ "title": "headphones", "price": 899 }');
if (isProduct(product)) {
    console.log(`Цей об'єкт є продуктом ${product.title}.`);
}
else
    console.log('Щось пішло не так :(');
