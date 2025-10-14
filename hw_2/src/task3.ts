// Вводиться номер місяця або назва місяця.Створити функцію, яка повинна повертати номер пори року(1 - 4)
// якщо передаємо число, або назву пори року, якщо було введено назву місяця.Використати перевантаження функцій.

type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type StringMonth = 'january' | 'february' | 'march' | 'april' | 'may' | 'june' | 'july' | 'august' | 'september' | 'october' | 'november' | 'december'

function getSeasonValue(month: MonthNumber): number
function getSeasonValue(month: StringMonth): string



function getSeasonValue(month: MonthNumber | StringMonth): number | string{
  function throwError(message: string): never{
    throw new Error(message)
  }
  if (typeof month === 'number') {
    let result: number
  switch (month) {
    case 3:
    case 4:
    case 5:result = 2
      break
    case 6:
    case 7:
    case 8: result = 3
      break
    case 9:
    case 10:
    case 11: result = 4
      break
    case 12:
    case 1:
    case 2: result = 1
      break
    default:
      const _exCheck: never = month
      throwError('Невірний номер місяця!')
  }
  return result
  }
  else if (typeof month === 'string') {
    let result: string
  switch (month) {
    case 'march':
    case 'april':
    case 'may': result = 'spring'
      break
    case 'june':
    case 'july':
    case 'august': result = 'summer'
      break
    case 'september':
    case 'october':
    case 'november': result = 'autumn'
      break
    case 'december':
    case 'january':
    case 'february': result = 'winter'
      break
    default:
      const _exCheck: never = month
      throwError('Немає такого місяця!')
  }
  return result
   }
  else throwError('Невірний тип даних')
}

document.write(`Season number: ${getSeasonValue(7)} <br>`)
document.write(`Season name: ${getSeasonValue('december')} <br>`)