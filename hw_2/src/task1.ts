// Вводиться перший номер місяця якоїсь пори року (3,6,9,12). Визначити пору року. Передбачити перевірку і генерувати
//     помилку якщо некоректний місяць (1-12) і генерувати помилку якщо це не перший місяць пори року. Використати never.

const FIRST_MONTH = 1
const LAST_MONTH = 12

enum Seasons {
  "spring" = 3,
  "summer" = 6,
  "autumn" = 9,
  "winter" = 12,
}

function throwError(message: string): never{
  throw new Error(message)
}

function getSeason(month: number): string{
  if (month < FIRST_MONTH || month > LAST_MONTH) throwError('Некорректний номер місяця')
  
  let result: string
  switch (month) {
    case Seasons.spring: result = Seasons[Seasons.spring]
      break
    case Seasons.summer: result = Seasons[Seasons.summer]
      break
    case Seasons.autumn: result = Seasons[Seasons.autumn]
      break
    case Seasons.winter: result = Seasons[Seasons.winter]
      break
    default:
      throwError('Цей місяць не є першим у своєму сезоні')
  }
  return result
}


const userMonth = parseInt(prompt('Введіть номер місяця (3/6/9/12)') || '3')
document.write(`Month ${userMonth} is the beginning of ${getSeason(userMonth)}.`)