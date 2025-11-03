// Клас: DataProcessor
// Метод: processData(input: ProcessableInput) – метод повинен використовувати перевірку типів (typeof, instanceof) для обробки кожного варіанту.

import ProcessableInput from "./ProcessableInput.js"

export default class DataProcessor {
  
  static processData(input: ProcessableInput) {
    if (typeof input === 'string') console.log(`${input[0].toUpperCase() + input.slice(1).toLowerCase()} - це рядок.`)
    else if (typeof input === 'number') console.log(`${input} - це число`)
    else if (Array.isArray(input) && input.every(el => typeof el === 'string'))
      console.log('Ви ввели массив рядків.')
    else throw new Error('Тип даних не підтримується ((')
  }
}