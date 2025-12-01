// ⚙️ Система логування:
// Створи клас Logger, який відповідає за ведення журналу подій у консоль або файл. Забезпеч, щоб усі частини програми
// використовували один і той самий екземпляр логера.

class Logger {
  private static _instance: Logger | null = null
  private constructor(
    public start: string,
    public saving: string,
    public close: string) { }
  
  public static getInstance(
    start = '',
    saving = '',
    close = '') {
      if (!Logger._instance) {
        Logger._instance = new Logger(start, saving, close)
      }
      return Logger._instance
    }
}

const conf1 = Logger.getInstance('Початок роботи', 'файл записан', 'завершення програми')
const conf2 = Logger.getInstance('Починаємо...', 'збереження', 'кінець')

console.log(conf1 === conf2)
console.log(conf2)