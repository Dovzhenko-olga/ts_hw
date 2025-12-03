"use strict";
// Стан світлофора (Traffic Light). Завдання: Реалізуй клас TrafficLight, який циклічно переходить між станами: Red, Yellow, Green.
// Кожен стан має метод next(), який змінює поточний стан, і signal(), який виводить колір світла. Можна додати метод
// autoCycle() для демонстрації повного циклу.
class TrafficLight {
    constructor() {
        this.state = new Red();
    }
    change() {
        this.state = this.state.next();
    }
    showSignal() {
        this.state.signal();
    }
    autoCycle(cycles = 3) {
        for (let i = 0; i < cycles; i++) {
            this.showSignal();
            this.change();
        }
    }
}
class Red {
    next() {
        return new Green();
    }
    signal() {
        console.log('🔴 Стій - червоне світло!');
    }
}
class Green {
    next() {
        return new Yellow();
    }
    signal() {
        console.log('🟢 Зелене - дорога вільна.');
    }
}
class Yellow {
    next() {
        return new Red();
    }
    signal() {
        console.log('🟡 Уважно - жовте світло.');
    }
}
const light = new TrafficLight();
light.showSignal();
light.change();
light.showSignal();
light.change();
light.showSignal();
light.change();
console.log('----Автоцикл----');
light.autoCycle(5);
