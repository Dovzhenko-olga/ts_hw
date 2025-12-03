"use strict";
// Керування дроном або роботом. Завдання: Опиши Command для керування рухом дрона: MoveUpCommand, MoveDownCommand, TurnLeftCommand,
// TurnRightCommand. Клас Drone (Receiver) реалізує методи руху. Клас Controller (Invoker) зберігає список виконаних
// команд і має метод undoLast().
class Drone {
    moveUp() {
        console.log("Дрон піднявся вгору");
    }
    moveDown() {
        console.log("Дрон опустився вниз");
    }
    turnLeft() {
        console.log("Дрон повернув ліворуч");
    }
    turnRight() {
        console.log("Дрон повернув праворуч");
    }
}
class MoveUpCommand {
    constructor(receiver) {
        this.receiver = receiver;
    }
    execute() {
        this.receiver.moveUp();
    }
    undo() {
        this.receiver.moveDown();
    }
}
class MoveDownCommand {
    constructor(receiver) {
        this.receiver = receiver;
    }
    execute() {
        this.receiver.moveDown();
    }
    undo() {
        this.receiver.moveUp();
    }
}
class TurnLeftCommand {
    constructor(receiver) {
        this.receiver = receiver;
    }
    execute() {
        this.receiver.turnLeft();
    }
    undo() {
        this.receiver.turnRight();
    }
}
class TurnRightCommand {
    constructor(receiver) {
        this.receiver = receiver;
    }
    execute() {
        this.receiver.turnRight();
    }
    undo() {
        this.receiver.turnLeft();
    }
}
class Controller {
    constructor() {
        this.history = [];
    }
    executeCommand(command) {
        command.execute();
        this.history.push(command);
    }
    undoLast() {
        const lastCommand = this.history.pop();
        if (lastCommand)
            lastCommand.undo();
    }
}
const receiver = new Drone();
const invoker = new Controller();
invoker.executeCommand(new MoveUpCommand(receiver));
invoker.executeCommand(new MoveUpCommand(receiver));
invoker.executeCommand(new TurnLeftCommand(receiver));
invoker.executeCommand(new MoveDownCommand(receiver));
invoker.undoLast();
invoker.undoLast();
