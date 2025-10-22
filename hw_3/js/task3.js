"use strict";
// Задача “Події календаря”. Події можуть бути Meeting (має participants), Deadline (має dueDate), Reminder (має note).
// Кожна подія може бути mandatory або optional. Створити тип CalendarEvent, який об’єднує тип події та її важливість,
// використовуючи перетини та об’єднання типів.
const myEvent = {
    participants: ['Ivan', 'Liza', 'Dmytro'],
    importance: 'mandatory',
};
const event2 = {
    dueDate: new Date('2025-10-26'),
    importance: 'optional',
};
const event3 = {
    note: new Date(2025, 9, 25, 12),
    importance: 'mandatory',
};
document.write(`Remind me ${event3.note} about deadline.`);
