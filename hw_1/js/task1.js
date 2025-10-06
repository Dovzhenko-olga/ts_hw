"use strict";
const myObject1 = {
    field1: 'Hello',
    field2: 3
};
const myObject2 = {
    field1: 'Hi',
    field2: 'people'
};
const randNumber = Math.random() > 0.5 ? 1 : 2;
if (randNumber === 1)
    localStorage.setItem("data", JSON.stringify(myObject1));
else
    localStorage.setItem("data", JSON.stringify(myObject2));
const data = JSON.parse(localStorage.getItem("data"));
const searchField = data.field2;
if (typeof searchField === 'string')
    document.write(`Довжина рядка ${searchField.length}`);
else if (searchField % 2 === 0)
    document.write(`Число ${searchField} парне.`);
else
    document.write(`Число ${searchField} непарне.`);
