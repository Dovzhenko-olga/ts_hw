import ISensor from "./ISensor"

export default class OnlineSensor implements ISensor {
 
  turnOn() {
    console.log("✅ Sensor turned ON");
  }

  getValue(): number {
    return Math.random() * 100;
  }
}