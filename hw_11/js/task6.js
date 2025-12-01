"use strict";
// 🏠 Інтеграція розумних пристроїв у “Smart Home”:
// Система SmartHome працює з інтерфейсом SmartDevice, який має методи turnOn() і turnOff().
// Підключається новий пристрій, що має інші методи (powerUp(), shutdown()).
// Реалізуй DeviceAdapter, щоб забезпечити взаємодію між системою та новим пристроєм.
class SmartHome {
    turnOn() {
        console.log('Пристрій ввімкнено');
    }
    turnOff() {
        console.log('Пристрій вимкнено');
    }
}
class DeviceAdapter {
    constructor(smartHome) {
        this.smartHome = smartHome;
    }
    powerUp() {
        this.smartHome.turnOn();
    }
    shutdown() {
        this.smartHome.turnOff();
    }
}
const newDevise = new DeviceAdapter(new SmartHome());
newDevise.powerUp();
newDevise.shutdown();
