type Payload = {
  text: string
}

export default interface IMessage{
  topic: string,
  payload: Payload,
  timestamp: Date
}