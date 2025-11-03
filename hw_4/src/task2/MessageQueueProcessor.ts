// Клас: MessageQueueProcessor – має метод process(message: IMessage). Клас не створює повідомлення, але очікує на
// вхідні дані, що відповідають IMessage.

import IMessage from "./IMessage.js"

export default class MessageQueueProcessor{
  constructor(private messagesList: IMessage[]) { }
  
  private process(message: IMessage) {
    return message.topic && message.payload && message.timestamp instanceof Date
  }

  toString() {
    let resultText = ''
    this.messagesList.forEach((message) => {
      resultText += `${message.timestamp.toLocaleDateString()}. ${message.topic} : ${message.payload.text}\n`
    })
    return resultText
  }
}