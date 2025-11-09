export default class OnlineSensor {
    turnOn() {
        console.log("✅ Sensor turned ON");
    }
    getValue() {
        return Math.random() * 100;
    }
}
