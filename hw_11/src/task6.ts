// 🏠 Інтеграція розумних пристроїв у “Smart Home”:
// Система SmartHome працює з інтерфейсом SmartDevice, який має методи turnOn() і turnOff().
// Підключається новий пристрій, що має інші методи (powerUp(), shutdown()).
// Реалізуй DeviceAdapter, щоб забезпечити взаємодію між системою та новим пристроєм.

interface ISmartDevice{
  turnOn():void
  turnOff():void
}

class SmartHome implements ISmartDevice{
  turnOn(): void {
    console.log('Пристрій ввімкнено')
  }
  turnOff(): void {
    console.log('Пристрій вимкнено')
  }
}

interface INewDevice{
  powerUp(): void
  shutdown(): void
}

class DeviceAdapter implements INewDevice{
  constructor(
    private smartHome: SmartHome
  ){}
  powerUp(): void {
    this.smartHome.turnOn()
  }
  shutdown(): void {
    this.smartHome.turnOff()
  }
}

const newDevise = new DeviceAdapter(new SmartHome())

newDevise.powerUp()
newDevise.shutdown()