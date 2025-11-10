"use strict";
//  Отримання випадкового елемента. Опиши функцію getRandom<T>, яка приймає масив будь-якого типу
// та повертає випадковий елемент з нього.
// Модулі не створювала через дуже маленькі рішення 😊
function getRandomIndex(minVal, maxVal) {
    return Math.floor(minVal + Math.random() * (maxVal - minVal + 1));
}
function getRandom(array) {
    const randIndex = getRandomIndex(0, array.length - 1);
    return array[randIndex];
}
const arrayNum = [1, 5, 8, 4, 6];
console.log(getRandom(arrayNum));
const arrayStr = ['Hello', 'my', 'perfect', 'world'];
console.log(getRandom(arrayStr));
