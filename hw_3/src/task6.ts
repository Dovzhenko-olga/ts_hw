// Описати тип квиток (куди, ціна, піб пасажира, дата). Створити функції для перевірки цього типу (Type Guard, Assert)
type Ticket = {
  destination: string
  price: number
  name: string
  date: Date
}

function isTicket(value: unknown): value is Ticket {
  return (
    !!value && typeof value === 'object' &&
    ['destination','price', 'name', 'date'].every(key => key in value)
  )
}

const ticket: unknown = {
  destination: 'Mikolaiv',
  price: 254,
  name: 'OLga',
  date: new Date('2025-10-26'),
}

let ticket2:unknown
if(isTicket(ticket)) ticket2= {...ticket}

function checkIfIsTicket(value: unknown): asserts value is Ticket{
  if (!(
    !!value && typeof value === 'object' &&
    ['destination','price', 'name', 'date'].every(key => key in value)
  )) throw new Error('Wrong type')
}

checkIfIsTicket(ticket2)
console.log(ticket2.destination)