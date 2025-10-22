"use strict";
// Описати тип «журнал учня» (3 поля-масиви з оцінками ). Потім на основі цього типу створити тип «менеджер оцінок»
// (додати методи знаходження середньої оцінки і найбільшої оцінки)
const progress = {
    math: [12, 10, 8, 11],
    history: [11, 10, 9],
    english: [10, 12, 11],
    getAverage(arr) {
        return arr.reduce((acc, grade) => acc += grade) / arr.length;
    },
    getMaxGrade(arr) {
        return Math.max(...arr);
    }
};
const mathArr = progress.math;
console.log(mathArr);
const historyArr = progress.history;
console.log(progress.getAverage(historyArr));
const englishArr = progress.english;
console.log(progress.getMaxGrade(englishArr));
