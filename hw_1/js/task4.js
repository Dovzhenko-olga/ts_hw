"use strict";
var _a;
if (confirm('Готові відповідати?')) {
    const weekend = ['sun', 'sat', 1, 7];
    const workDays = ['mon', 'tue', 'wed', 'thu', 'fri', 2, 3, 4, 5, 6];
    const usersDay = (_a = prompt('Який сьогодні день? (sun/mon/tue/wed/thu/fri/sat або 1-7)')) !== null && _a !== void 0 ? _a : 'sun';
    const currentDay = isNaN(parseInt(usersDay)) ? usersDay : parseInt(usersDay);
    function kindOfDay(rest, work, current) {
        let result = '';
        if (rest.includes(current))
            result = 'Ура! Сьогодні вихідний! :)';
        else if (work.includes(current))
            result = 'Согодні робочий день';
        else
            result = 'Введіть корректну інформацію';
        return result;
    }
    document.write(kindOfDay(weekend, workDays, currentDay));
}
