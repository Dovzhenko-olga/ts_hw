// Обмеження для типів, що реалізують інтерфейс. Створи інтерфейс Printable з методом print(): void.
// Опиши узагальнену функцію printAll<T extends Printable>(items: T[]), яка викликає метод print()
// для кожного елемента масиву.

interface IPrintable{
  print(): void
}
function printAll<T extends IPrintable>(items: T[]) {
  items.forEach(el=> el.print())
}

class User implements IPrintable {
  constructor(private name: string) {}

  print() {
    console.log(`Hello ${this.name}!`)
  }
}

const users = [new User('Olya'), new User('Petro'), new User('Ivan')]
printAll(users)