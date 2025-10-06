"use strict";
const count = 10;
let numCount = 0;
let stringCount = 0;
let randVal;
function getValues(count) {
    for (let i = 0; i < count; i++) {
        randVal = Math.random() > 0.5 ? 7 : 'Ok';
        console.log(randVal);
        if (randVal === 7)
            numCount++;
        else
            stringCount++;
    }
}
function getResultMessage(count) {
    let message = '';
    getValues(count);
    if (numCount > stringCount)
        message = 'Чисел більше, ніж рядків.';
    else if (numCount < stringCount)
        message = 'Чисел менше, ніж рядків.';
    else
        message = 'Кількість чисел і рядків однакова.';
    return message;
}
const resultMessage = getResultMessage(count);
document.write(`${resultMessage} Останнє значення: ${randVal}`);
