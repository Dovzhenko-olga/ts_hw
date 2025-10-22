// Створити два інтерфейс студента (піб, курс, факультет). На основі цього інтерфейсу створити інтерфейс старости
//(додати поле з номером групи)

interface Student {
  name: string
  course: number
  faculty: string
}

interface Head extends Student {
  group: number
}

const headOfGroup: Head = {
  name: 'Ivan',
  course: 5,
  faculty: 'Computer engineering',
  group: 5411,
}
document.write(`Студент ${headOfGroup.name} староста групи ${headOfGroup.group}.`)