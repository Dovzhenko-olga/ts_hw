// Створити функцію, яка дозволяє знайти або останню цифру числа, або останній символ числа.

function getLastSymbol(userNumber: number): number
function getLastSymbol(userNumber: string): string


function getLastSymbol(userNumber: number | string): number | string{
  function throwError(message: string): never{
    throw new Error(message)
  }
  if (typeof userNumber === 'number') return userNumber % 10
   else if(typeof userNumber === 'string') return userNumber.slice(-1)
  else throwError('Невірний тип даних')
}

document.write(`Last digit: ${getLastSymbol(55461)} <br>`)
document.write(`Last symbol: ${getLastSymbol('55465')}`)