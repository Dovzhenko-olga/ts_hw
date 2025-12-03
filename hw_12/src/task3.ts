// Стан світлофора (Traffic Light). Завдання: Реалізуй клас TrafficLight, який циклічно переходить між станами: Red, Yellow, Green.
// Кожен стан має метод next(), який змінює поточний стан, і signal(), який виводить колір світла. Можна додати метод
// autoCycle() для демонстрації повного циклу.

interface ITrafficState{
  next(): ITrafficState
  signal(): void
}

class TrafficLight{
  private state: ITrafficState
  constructor() {
    this.state = new Red()
  }
  
  public change(): void {
    this.state = this.state.next()
  }
  public showSignal(): void {
    this.state.signal()
  }

  public autoCycle(cycles: number = 3): void {
    for (let i = 0; i < cycles; i++) {
      this.showSignal()
      this.change()
    }
  }
}

class Red implements ITrafficState{
  next(): ITrafficState {
    return new Green()
  }
  signal(): void {
    console.log('🔴 Стій - червоне світло!')
  }
}

class Green implements ITrafficState{
  next(): ITrafficState {
    return new Yellow()
  }
  signal(): void {
    console.log('🟢 Зелене - дорога вільна.')
  }
}

class Yellow implements ITrafficState{
  next(): ITrafficState {
    return new Red()
  }
  signal(): void {
    console.log('🟡 Уважно - жовте світло.')
  }
}

const light = new TrafficLight()

light.showSignal()
light.change()

light.showSignal()
light.change()

light.showSignal()
light.change()

console.log('----Автоцикл----')
light.autoCycle(5)