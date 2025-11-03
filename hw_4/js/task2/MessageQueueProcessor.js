// Клас: MessageQueueProcessor – має метод process(message: IMessage). Клас не створює повідомлення, але очікує на
// вхідні дані, що відповідають IMessage.
export default class MessageQueueProcessor {
    constructor(messagesList) {
        this.messagesList = messagesList;
    }
    process(message) {
        return message.topic && message.payload && message.timestamp instanceof Date;
    }
    toString() {
        let resultText = '';
        this.messagesList.forEach((message) => {
            resultText += `${message.timestamp.toLocaleDateString()}. ${message.topic} : ${message.payload.text}\n`;
        });
        return resultText;
    }
}
