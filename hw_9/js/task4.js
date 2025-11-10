"use strict";
// Обмеження для типів, що реалізують інтерфейс. Створи інтерфейс Printable з методом print(): void.
// Опиши узагальнену функцію printAll<T extends Printable>(items: T[]), яка викликає метод print()
// для кожного елемента масиву.
function printAll(items) {
    items.forEach(el => el.print());
}
class User {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log(`Hello ${this.name}!`);
    }
}
const users = [new User('Olya'), new User('Petro'), new User('Ivan')];
printAll(users);
