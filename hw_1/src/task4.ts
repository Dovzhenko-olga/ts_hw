if (confirm('Готові відповідати?')) {

  const weekend: Array <string | number> = ['sun', 'sat', 1, 7]
  const workDays: Array <string | number> = ['mon', 'tue', 'wed', 'thu', 'fri', 2, 3, 4, 5, 6]
  const usersDay = prompt(
    'Який сьогодні день? (sun/mon/tue/wed/thu/fri/sat або 1-7)'
  ) ?? 'sun'

  const currentDay: string | number = isNaN(parseInt(usersDay)) ? usersDay : parseInt(usersDay)

  function kindOfDay(rest: Array <string | number>,work: Array <string | number>,current: string | number) {
    let result = ''
  
    if (rest.includes(current)) result = 'Ура! Сьогодні вихідний! :)'
    else if (work.includes(current)) result = 'Согодні робочий день'
    else result = 'Введіть корректну інформацію'
    return result
  }

  document.write(kindOfDay(weekend,workDays,currentDay))
}