// Налаштування гри GameSettings (швидкість, рівень, тип ворогів). Потім на основі цього типу створити тип,
// що не можна змінювати під час гри.

interface GameSettings{
  speed: number
  level: number
  enemyType: string
}

type CurrentGameSettings = Readonly<GameSettings>

function game(s: CurrentGameSettings) {

  const resultList = document.createElement('ul')

  for (const [key, value] of Object.entries(s)) {
  const listEl = document.createElement('li')
  listEl.textContent = `${key}: ${value}`
  resultList.appendChild(listEl)
}

  document.body.appendChild(resultList)
}

const s1: CurrentGameSettings = { speed: 8, level: 56, enemyType: 'alien' }
game(s1)