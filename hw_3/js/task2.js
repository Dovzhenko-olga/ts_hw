"use strict";
// Створіть union-тип для трьох типів : car (модель, власник), bus (компанія, кількість місць), airplane (швидкість, тип палива).
// Створити функцію, яка приймає параметр цього типу і виводить повну інформацію про об'єкт.
function getTransport(transport) {
    let vehicleInfo = '';
    switch (transport.vehicle) {
        case 'car':
            vehicleInfo = `${transport.owner} has a car ${transport.model} model.`;
            break;
        case 'bus':
            vehicleInfo = `${transport.company} has a bus with ${transport.seats} seats.`;
            break;
        case 'airplane':
            vehicleInfo = `This airplane can fly with speed ${transport.speed} and use ${transport.fuel}.`;
            break;
        default:
            const _tr = transport;
            break;
    }
    return vehicleInfo;
}
const myCar = {
    vehicle: 'car',
    model: 'hyundai',
    owner: 'Olga'
};
document.write(`${myCar.owner} loves her ${myCar.model}.`);
