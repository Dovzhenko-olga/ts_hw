"use strict";
function isTicket(value) {
    return (!!value && typeof value === 'object' &&
        ['destination', 'price', 'name', 'date'].every(key => key in value));
}
const ticket = {
    destination: 'Mikolaiv',
    price: 254,
    name: 'OLga',
    date: new Date('2025-10-26'),
};
let ticket2;
if (isTicket(ticket))
    ticket2 = Object.assign({}, ticket);
function checkIfIsTicket(value) {
    if (!(!!value && typeof value === 'object' &&
        ['destination', 'price', 'name', 'date'].every(key => key in value)))
        throw new Error('Wrong type');
}
checkIfIsTicket(ticket2);
console.log(ticket2.destination);
