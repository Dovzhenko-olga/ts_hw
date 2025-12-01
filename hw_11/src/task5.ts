// 🧾 Копіювання налаштувань системи (System Configuration):
// Завдання:  Опиши клас SystemConfig з властивостями: theme, language, autoUpdate, permissions.
// Реалізуй метод clone(), який дозволяє створити копію конфігурації та внести мінімальні зміни.
// Мета - навчитися створювати копії складних налаштувань без повторного задання всіх параметрів.

interface IClonable<T>{
  clone(): T
}

class SystemConfig implements IClonable<SystemConfig>{
  constructor(
    public theme: string,
    public language: string,
    public autoUpdate: boolean,
    public permissions: string
  ){}
  clone(): SystemConfig {
    return new SystemConfig(this.theme, this.language, this.autoUpdate, this.permissions)
  }
}

const settings1 = new SystemConfig('dark', 'UA', false, 'admin')
console.log('settings1')
console.log(settings1)

const settings2 = settings1.clone()
settings2.autoUpdate = true
console.log('settings2')
console.log(settings2)

const settings3 = settings2.clone()
settings3.theme = 'light'
settings3.permissions = 'guest'
console.log('settings3')
console.log(settings3)