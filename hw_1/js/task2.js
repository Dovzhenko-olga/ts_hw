"use strict";
const userDataObject = {
    name: 'Pavlo',
    age: 32,
    isAdmin: true
};
localStorage.setItem("data", JSON.stringify(userDataObject));
const jsonData = localStorage.getItem("data");
const userData = JSON.parse(jsonData);
Object.entries(userData).forEach(([key, value]) => {
    document.write(`${key} - ${value} <br>`);
});
