// Сенсори у системі моніторингу (з можливістю вмикати/вимикати):
// Є базовий клас Sensor із методом getValue() і методами увімкнення/вимкнення.
// Підклас OfflineSensor повертає помилку замість числового значення, якщо вимкнений.
// ❌ Порушення LSP — клієнтський код очікує завжди число, але отримує виняток
// class SensorBad {
//   private _isOn: boolean = true;
//   turnOn() {
//     this._isOn = true;
//     console.log("✅ Sensor turned ON");
//   }
//   turnOff() {
//     this._isOn = false;
//     console.log("⚙️ Sensor turned OFF");
//   }
//   getValue(): number {
//     // навіть якщо сенсор "вимкнений", базовий клас усе одно повертає значення
//     return Math.random() * 100;
//   }
// }
// class OfflineSensorBad extends SensorBad {
//   getValue(): number {
//     // ❌ Порушення LSP — поведінка змінюється: замість числа — помилка
//     throw new Error("Sensor offline! Cannot read value.");
//   }
// }
import OfflineSensor from "./OfflineSensor.js";
import OnlineSensor from "./OnlineSensor.js";
const sensor1 = new OnlineSensor();
sensor1.turnOn();
console.log(sensor1.getValue());
const sensor2 = new OfflineSensor();
sensor2.turnOff();
