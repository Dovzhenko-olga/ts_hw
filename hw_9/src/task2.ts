// Менеджер операцій. Створи клас OperationManager<T>, який зберігає список операцій будь-якого
// типу і має метод executeAll(callback: (item: T) => void) для виконання їх усіх.

class OperationManager<T>{
  constructor(private operations: T[]) { }
  executeAll(callback: (item: T) => void) {
    this.operations.forEach(operation => callback(operation))
  }
}

const operations = [
  ()=> console.log('Operation1'),
  ()=> console.log('Operation2'),
  ()=> console.log('Operation3'),
]

const manager = new OperationManager(operations)
manager.executeAll(fun => fun())