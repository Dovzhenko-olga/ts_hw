"use strict";
// Дано масив маркерів на карті  [lat, long, city]. Визначити найближче місто до вказаних координат
function getMarkersList(markerNumber) {
    var _a;
    const markersList = [];
    for (let i = 0; i < markerNumber;) {
        const data = ((_a = prompt('Введіть координати і назву через пробіл')) === null || _a === void 0 ? void 0 : _a.split(' ')) || [50.45, 30.52, 'Київ'];
        if (!Number(data[0]) || !Number(data[1]) || !data[2])
            continue;
        i++;
        markersList.push([
            Number(data[0]),
            Number(data[1]),
            data[2],
        ]);
    }
    return markersList;
}
function getClosestPlace(lat, long, markersArr) {
    let closestMarker = markersArr[0];
    for (let i = 1; i < markersArr.length; i++) {
        if (Math.abs(markersArr[i][0] - lat) < Math.abs(closestMarker[0] - lat)
            && Math.abs(markersArr[i][1] - long) < Math.abs(closestMarker[1] - long))
            closestMarker = markersArr[i];
        else
            continue;
    }
    return closestMarker;
}
const markerNumber = parseInt(prompt('Введіть кількість маркерів') || '3');
const markersArr = getMarkersList(markerNumber);
const closestPlace = getClosestPlace(46.64, 32.61, markersArr);
// [50.45 30.52 Київ]
// [46.98 31.99 Миколаїв]
// [48.46 35.03 Дніпро]
document.write(`Найближче до вас місто ${closestPlace[2]}`);
