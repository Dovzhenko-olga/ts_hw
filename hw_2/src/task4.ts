// Випадковим чином генерується масив номерів робочих днів, або назв вихідних, або назв святкових днів.
// Підрахувати чого було більше: святкових чи вихідних.


if(confirm('Start?')){
  type DayType = number | string
  
  const workDays = [1, 2, 3, 4, 5]
  const weekend = ['saturday', 'sunday']
  const holydays = ['birthday', 'christmas', 'new year', 'easter']
  
function getRandomItem(arr: DayType[]) {
  const randIndex = Math.floor(Math.random()*arr.length)
  return arr[randIndex]
}

function generateDaysArray(count: number, workDays: DayType[],
  weekend: DayType[], holydays: DayType[]): DayType[]{
  const days: DayType[] = []
  
  for (let i = 0; i < count; i++){
    const randTypeNumber = 1 + Math.floor(Math.random() * 3)
    if (randTypeNumber === 1) {
      days.push(getRandomItem(workDays))
    } else if (randTypeNumber === 2) {
      days.push(getRandomItem(weekend))
    } else if (randTypeNumber === 3) {
      days.push(getRandomItem(holydays))
    }
  }
  return days
}

function checkDaysArray(days: DayType[], weekend: DayType[], holydays: DayType[]): string {
  let weekendCount = 0
  let holydaysCount = 0
  let compareResult:string

  days.forEach(day => {
    if (weekend.includes(day)) weekendCount++
    else if(holydays.includes(day)) holydaysCount++
  })
 
  if (weekendCount > holydaysCount) compareResult = 'Вихідних більше, ніж святкових днів.'
  else if (weekendCount < holydaysCount) compareResult = 'Вихідних менше, ніж святкових днів.'
  else compareResult = 'Вихідних та святкових днів була однакова кількість.'

  return compareResult
  }

  const daysCount = parseInt(prompt('Введіть кількість елементів масиву') || '7')
  
  const randArray = generateDaysArray(daysCount, workDays, weekend, holydays)
  console.log(randArray);

  const resultOfCompare = checkDaysArray(randArray, weekend, holydays)
  document.write(resultOfCompare)
}