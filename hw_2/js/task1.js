"use strict";
// Вводиться перший номер місяця якоїсь пори року (3,6,9,12). Визначити пору року. Передбачити перевірку і генерувати
//     помилку якщо некоректний місяць (1-12) і генерувати помилку якщо це не перший місяць пори року. Використати never.
const FIRST_MONTH = 1;
const LAST_MONTH = 12;
var Seasons;
(function (Seasons) {
    Seasons[Seasons["spring"] = 3] = "spring";
    Seasons[Seasons["summer"] = 6] = "summer";
    Seasons[Seasons["autumn"] = 9] = "autumn";
    Seasons[Seasons["winter"] = 12] = "winter";
})(Seasons || (Seasons = {}));
function throwError(message) {
    throw new Error(message);
}
function getSeason(month) {
    if (month < FIRST_MONTH || month > LAST_MONTH)
        throwError('Некорректний номер місяця');
    let result;
    switch (month) {
        case Seasons.spring:
            result = Seasons[Seasons.spring];
            break;
        case Seasons.summer:
            result = Seasons[Seasons.summer];
            break;
        case Seasons.autumn:
            result = Seasons[Seasons.autumn];
            break;
        case Seasons.winter:
            result = Seasons[Seasons.winter];
            break;
        default:
            throwError('Цей місяць не є першим у своєму сезоні');
    }
    return result;
}
const userMonth = parseInt(prompt('Введіть номер місяця (3/6/9/12)') || '3');
document.write(`Month ${userMonth} is the beginning of ${getSeason(userMonth)}.`);
