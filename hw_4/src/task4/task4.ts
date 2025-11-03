// Валідація величин без створення екземпляра. Статичний метод дозволяє перевіряти дані перед створенням об’єкта.
import Data from "./Data.js"
import DataValidation from "./DataValidation.js"

const data1: Data = {
  name: 'Olga',
  age: 43,
  isAdult: true,
}
const data2: Data = {
  name: 'Viktor',
  age: 17,
  isAdult: false,
}

DataValidation.checkData(data1)
DataValidation.checkData(data2)
// @ts-expect-error
DataValidation.checkData({name:'Piter', age: 23})