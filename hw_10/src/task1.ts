// Описати тип Auto (id, марка, колір, рік_випуску, власник). Потім описати DraftAuto для збереження неповних описів даних
// про авто у localStorage.

interface IAuto{
  id: number
  brand: string
  color: string
  year: number
  owner: string
}

type DraftAuto = Partial<IAuto>

function saveData(data: DraftAuto) {

  const savingData = localStorage.getItem('draftAuto')
  const auto = savingData ? JSON.parse(savingData) : null
  const updateData = auto ? {... auto, ...data} : {...data}

  localStorage.setItem('draftAuto', JSON.stringify(updateData))
}

saveData({brand: 'Audy', year: 2013})
saveData({color: 'grey'})