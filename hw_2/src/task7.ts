// Згенерувати масив нагород (золота, срібна, бронзова медалі та грамота). Підрахувати кількість кожної з нагород.
// Використати enum. Можете і never якось застосувати.

if (confirm(`Let's play?`)) {
  
  enum Awards {
    "Gold" = 'gold',
    "Silver" = 'silver',
    "Bronze" = 'bronze',
    "Charter" = 'charter',
  }

  type AwardsCount = {
    gold: number,
    silver: number,
    bronze: number,
    charter: number,
  }

  function throwError(message: string): never{
    throw new Error(message)
  }

  function generateAwardsArray(count: number): Awards[]{
  if(!count) throwError('Некоректна кількість елементів масиву.')
  
  const awardsList: Awards[] = []
  
  for (let i = 0; i < count; i++){
    const randTypeNumber = 1 + Math.floor(Math.random() * 4)
    if (randTypeNumber === 1) {
      awardsList.push(Awards.Gold)
    } else if (randTypeNumber === 2) {
      awardsList.push(Awards.Silver)
    } else if (randTypeNumber === 3) {
      awardsList.push(Awards.Bronze)
    } else if (randTypeNumber === 4) {
      awardsList.push(Awards.Charter)
    }
  }
  return awardsList
}

function checkAwardsList(awardsList: Awards[]): AwardsCount {
  let awardsCount: AwardsCount = {
    gold: 0,
    silver: 0,
    bronze: 0,
    charter: 0,
  }

  awardsList.forEach(award => {
    awardsCount[award]+=1
  })
 
  return awardsCount
  }

  const awardsNumber = parseInt(prompt('Введіть кількість елементів масиву') || '7')
  
  const randArray = generateAwardsArray(awardsNumber)
  console.log(randArray);

  const resultOfCompare = checkAwardsList(randArray)
  console.log(resultOfCompare)
}