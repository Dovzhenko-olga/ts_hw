// Дано масив маркерів на карті  [lat, long, city]. Визначити найближче місто до вказаних координат

type Marker = [number, number, string]

function getMarkersList(markerNumber: number): Marker[]{
  const markersList: Marker[] = []
  for (let i = 0; i < markerNumber;){
    const data = prompt('Введіть координати і назву через пробіл')?.split(' ') || [50.45, 30.52, 'Київ'] as Marker
    
    if (!Number(data[0]) || !Number(data[1]) || !data[2]) continue
    i++

    markersList.push([
      Number(data[0]),
      Number(data[1]),
      data[2],
    ])
  }
  return markersList
}

function getClosestPlace(lat: number, long: number, markersArr: Marker[]): Marker{
  let closestMarker = markersArr[0]
  for (let i = 1; i < markersArr.length; i++){
    if (Math.abs(markersArr[i][0] - lat) < Math.abs(closestMarker[0] - lat)
      && Math.abs(markersArr[i][1] - long) < Math.abs(closestMarker[1] - long)) 
      closestMarker = markersArr[i]
    else continue
  }
return closestMarker
}

const markerNumber = parseInt(prompt('Введіть кількість маркерів') || '3')
const markersArr = getMarkersList(markerNumber)
const closestPlace = getClosestPlace(46.64, 32.61, markersArr)

// [50.45 30.52 Київ]
// [46.98 31.99 Миколаїв]
// [48.46 35.03 Дніпро]

document.write(`Найближче до вас місто ${closestPlace[2]}`)