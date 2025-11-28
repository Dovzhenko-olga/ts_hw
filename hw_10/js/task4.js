"use strict";
// Використовуючи тип параметрів createProduct (title, price,discount) розробити функцію,
// яка б формувала параметри для створення продукту.
function getProductsParameters(title, price, discount) {
    return {
        title,
        price,
        discount
    };
}
const params = ['vacuum', 15000, 3500];
const product1 = getProductsParameters(...params);
function renderProduct(user) {
    const resultList = document.createElement('ul');
    for (const [key, value] of Object.entries(user)) {
        const listEl = document.createElement('li');
        listEl.textContent = `${key}: ${value}`;
        resultList.appendChild(listEl);
    }
    document.body.appendChild(resultList);
}
renderProduct(product1);
