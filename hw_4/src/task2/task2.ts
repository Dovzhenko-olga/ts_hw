import IMessage from "./IMessage.js"
import MessageQueueProcessor from "./MessageQueueProcessor.js"

const messagesList: IMessage[] = [
  {
    topic: 'topic1',
    payload: { 'text': 'Hello, world!' },
    timestamp: new Date(),
  },
  {
    topic: 'topic2',
    payload: { 'text': 'Be brave like Ukrainians!' },
    timestamp: new Date(),
  },
  {
    topic: 'topic3',
    payload: { 'text': 'Glory to the heroes!' },
    timestamp: new Date(),
  },
]

const processor = new MessageQueueProcessor(messagesList)
console.log(processor.toString())
