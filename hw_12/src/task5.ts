// Перевірка доступу до API.
// Завдання:  Реалізуй ланцюг безпеки для API-запиту:
// TokenValidationHandler - перевіряє, чи токен існує;
// RoleCheckHandler - перевіряє, чи користувач має потрібну роль (admin, user);
// RateLimitHandler - перевіряє, чи не перевищено ліміт запитів.
// Якщо всі перевірки пройдені, запит обробляє RequestProcessor. Мета: моделювати middleware-ланцюг у стилі Express.js / NestJS.

interface IHandler{
  setNext(handler: IHandler): IHandler
  handle(request: string): void
}

class BaseHandler implements IHandler{
  private nextHandler: IHandler | null = null

  setNext(handler: IHandler): IHandler {
    this.nextHandler = handler
    return handler
  }
  handle(request: string): void {
    if(this.nextHandler) this.nextHandler.handle(request)
  }
}

class TokenValidationHandler extends BaseHandler{
  handle(request: string): void {
    if (request.includes('token')){
      console.log('Авторизація успішна')
      super.handle(request)
    } else
      console.log('Токен не знайдено - доступ заборонено.')
  }
}

class RoleCheckHandler extends BaseHandler{
  handle(request: string): void {
    if (request.includes('admin')){
      console.log('Права адміністратора підтверджено!')
      super.handle(request)
    } else if (request.includes('user')){
      console.log('Вітаємо шановний користувач.')
      super.handle(request)
    } else console.log('Гостевий режим.')
  }
}

class RateLimitHandler extends BaseHandler{
  handle(request: string): void {
    if (!request.includes('limit_exceeded')){
      console.log('Можна працювати!')
      super.handle(request)
    } else
      console.log('Вибачте. Ліміт кількості запитів перевищено. Спробуйте ще раз пізніше.')
  }
}

const handler = new TokenValidationHandler()
handler.setNext(new RoleCheckHandler()).setNext(new RateLimitHandler())
console.log('----Request 1----')
handler.handle('token: 1215 admin')
console.log('----Request 2----')
handler.handle('')
console.log('----Request 3----')
handler.handle('token: 12fd15 user limit_exceeded')
console.log('----Request 4----')
handler.handle('token: 1215ly ')