// Керування дроном або роботом. Завдання: Опиши Command для керування рухом дрона: MoveUpCommand, MoveDownCommand, TurnLeftCommand,
// TurnRightCommand. Клас Drone (Receiver) реалізує методи руху. Клас Controller (Invoker) зберігає список виконаних
// команд і має метод undoLast().

interface ICommand{
  execute(): void
  undo():void
}

class Drone{
  moveUp(): void {
    console.log("Дрон піднявся вгору")
  }
  moveDown(): void {
    console.log("Дрон опустився вниз")
  }
  turnLeft(): void {
    console.log("Дрон повернув ліворуч")
  }
  turnRight(): void {
    console.log("Дрон повернув праворуч")
  }

}

class MoveUpCommand implements ICommand{
  constructor(private receiver: Drone){}
  execute(): void {
    this.receiver.moveUp()
  }
  undo(): void {
    this.receiver.moveDown()
  }
}

class MoveDownCommand implements ICommand{
  constructor(private receiver: Drone){}
  execute(): void {
    this.receiver.moveDown()
  }
  undo(): void {
    this.receiver.moveUp()
  }
}

class TurnLeftCommand implements ICommand{
  constructor(private receiver: Drone){}
  execute(): void {
    this.receiver.turnLeft()
  }
  undo(): void {
    this.receiver.turnRight()
  }
}

class TurnRightCommand implements ICommand{
  constructor(private receiver: Drone){}
  execute(): void {
    this.receiver.turnRight()
  }
  undo(): void {
    this.receiver.turnLeft()
  }
}

class Controller{
  private history: ICommand[] = []
  executeCommand(command: ICommand) {
    command.execute()
    this.history.push(command)
  }
  undoLast() {
    const lastCommand = this.history.pop()
    if (lastCommand)
      lastCommand.undo()
  }
}

const receiver = new Drone()
const invoker = new Controller()

invoker.executeCommand(new MoveUpCommand(receiver))
invoker.executeCommand(new MoveUpCommand(receiver))
invoker.executeCommand(new TurnLeftCommand(receiver))
invoker.executeCommand(new MoveDownCommand(receiver))

invoker.undoLast()
invoker.undoLast()