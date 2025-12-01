// 🚗 Завод з виробництва транспортних засобів:
// Опиши абстрактний клас VehicleFactory з фабричним методом createVehicle(). Створи кілька фабрик - CarFactory,
// BikeFactory, TruckFactory, - кожна з яких створює свій тип транспорту (Car, Bike, Truck). Мета - показати, як один і
// той самий інтерфейс фабрики може створювати різні продукти.

interface IVehicle{
  create(): string
}

class Car implements IVehicle{
  create(): string {
   return '🚗 Авто створено'
  }
}

class Bike implements IVehicle{
  create(): string {
    return '🚲 Велосипед створено'
  }
}
class Truck implements IVehicle{
  create(): string {
    return '🚚 Вантажівка створена'
  }
}


abstract class VehicleFactory {
  abstract createVehicle(): IVehicle;
}

class CarFactory implements VehicleFactory{
  createVehicle(): IVehicle {
    return new Car()
  }
}

class BikeFactory implements VehicleFactory{
  createVehicle(): IVehicle {
    return new Bike()
  }
}

class TruckFactory implements VehicleFactory{
  createVehicle(): IVehicle {
    return new Truck()
  }
}

function getVehicle(vehicleType: VehicleFactory) {
  const transport = vehicleType.createVehicle()

  return transport.create()
}

const myTransport = getVehicle(new BikeFactory())
const res = document.createElement('div')
res.textContent = myTransport
document.body.appendChild(res)