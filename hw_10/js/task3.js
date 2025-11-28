"use strict";
// Мінімальні дані для таблиці. Дано тип Employee, що містить опис (перелік) полів, що можуть бути у
// працівника (ім'я, рік_народження, заробітна плата, стаж, підрозділ, адреса, спеціальність). Потім на основі цього
// типу створи новий тип даних, що буде містити тільки ім'я, підрозділ та заробітну плату)
function getEmployeeData(user) {
    const resultList = document.createElement('ul');
    for (const [key, value] of Object.entries(user)) {
        const listEl = document.createElement('li');
        listEl.textContent = `${key}: ${value}`;
        resultList.appendChild(listEl);
    }
    document.body.appendChild(resultList);
}
const u1 = { name: 'Pavlo', unit: 'engineer', salary: 21000 };
getEmployeeData(u1);
