export function getRegionForCoordinates(point: { lat: number; lng: number }) {
    let minX, maxX, minY, maxY;

    (point => {
        minX = point.lat;
        maxX = point.lat;
        minY = point.lng;
        maxY = point.lng;
    })(point);

    minX = Math.min(minX, point.lat);
    maxX = Math.max(maxX, point.lat);
    minY = Math.min(minY, point.lng);
    maxY = Math.max(maxY, point.lng);

    const midX = (minX + maxX) / 2;
    const midY = (minY + maxY) / 2;
    const deltaX = maxX - minX;
    const deltaY = maxY - minY;

    return {
        latitude: midX,
        longitude: midY,
        latitudeDelta: deltaX,
        longitudeDelta: deltaY,
    };
}
