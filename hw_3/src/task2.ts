// Створіть union-тип для трьох типів : car (модель, власник), bus (компанія, кількість місць), airplane (швидкість, тип палива).
// Створити функцію, яка приймає параметр цього типу і виводить повну інформацію про об'єкт.

type Transport = { vehicle: 'car', model: string, owner: string }
  | { vehicle: 'bus', company: string, seats: number }
  | { vehicle: 'airplane', speed: number, fuel: string }
  
function getTransport(transport: Transport): string {
  let vehicleInfo = ''
  switch (transport.vehicle) {
    case 'car':
      vehicleInfo  = `${transport.owner} has a car ${transport.model} model.`
      break;
    case 'bus':
      vehicleInfo  = `${transport.company} has a bus with ${transport.seats} seats.`
      break;
    case 'airplane':
      vehicleInfo  = `This airplane can fly with speed ${transport.speed} and use ${transport.fuel}.`
      break;
    default:
      const _tr:never = transport
      break;
  }
  return vehicleInfo 
}
  
const myCar: Transport = {
  vehicle: 'car',
  model: 'hyundai',
  owner: 'Olga'
}
document.write(`${myCar.owner} loves her ${myCar.model}.`)