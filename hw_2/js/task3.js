"use strict";
// Вводиться номер місяця або назва місяця.Створити функцію, яка повинна повертати номер пори року(1 - 4)
// якщо передаємо число, або назву пори року, якщо було введено назву місяця.Використати перевантаження функцій.
function getSeasonValue(month) {
    function throwError(message) {
        throw new Error(message);
    }
    if (typeof month === 'number') {
        let result;
        switch (month) {
            case 3:
            case 4:
            case 5:
                result = 2;
                break;
            case 6:
            case 7:
            case 8:
                result = 3;
                break;
            case 9:
            case 10:
            case 11:
                result = 4;
                break;
            case 12:
            case 1:
            case 2:
                result = 1;
                break;
            default:
                const _exCheck = month;
                throwError('Невірний номер місяця!');
        }
        return result;
    }
    else if (typeof month === 'string') {
        let result;
        switch (month) {
            case 'march':
            case 'april':
            case 'may':
                result = 'spring';
                break;
            case 'june':
            case 'july':
            case 'august':
                result = 'summer';
                break;
            case 'september':
            case 'october':
            case 'november':
                result = 'autumn';
                break;
            case 'december':
            case 'january':
            case 'february':
                result = 'winter';
                break;
            default:
                const _exCheck = month;
                throwError('Немає такого місяця!');
        }
        return result;
    }
    else
        throwError('Невірний тип даних');
}
document.write(`Season number: ${getSeasonValue(7)} <br>`);
document.write(`Season name: ${getSeasonValue('december')} <br>`);
