// Інтерфейс для перетворювача. Створи інтерфейс Transformer<T, U> з методом transform(value: T): U.
// Реалізуй кілька прикладів трансформацій: — рядок у число, — число у рядок, — об’єкт у JSON.

interface ITransformer<T, U>{
  transform(value: T): U
}

class StringTransformer implements ITransformer<string, number> {
  transform(stringValue: string) {
    const res = parseFloat(stringValue)
    if(isNaN(res)) throw new Error(`Неможливо перетворити "${stringValue}" на число :(`)
    return res
  }
}

class NumberTransformer implements ITransformer<number, string> {
  transform(numberValue: number) {
    return numberValue.toString()
  }
}

class ObjectTransformer<T> implements ITransformer<T, string> {
  transform(objectValue: T) {
    return JSON.stringify(objectValue)
  }
}

const stringToNum = new StringTransformer()
console.log(stringToNum.transform('521myString'))

const numToString = new NumberTransformer()
console.log(numToString.transform(574))

const toJSON = new ObjectTransformer()
console.log(toJSON.transform({id:1, name: 'Olya', email: 'dsf@cgrds.jd'}))

