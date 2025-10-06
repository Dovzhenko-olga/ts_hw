type User = {
  name: string,
  age: number,
  isAdmin: boolean
}

const userDataObject: User = {
  name: 'Pavlo',
  age: 32,
  isAdmin: true
}


localStorage.setItem("data", JSON.stringify(userDataObject))

const jsonData = localStorage.getItem("data")!
const userData: User = JSON.parse(jsonData)

Object.entries(userData).forEach(([key, value]) => {
  document.write(`${key} - ${value} <br>`)
})