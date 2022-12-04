import { GeoDataAddress } from '@inspire/types';

import Geocoder from 'react-native-geocoding';

export function getAddressByGeoData(lat: number, lng: number): GeoDataAddress {
    // @ts-ignore
    return Geocoder.from({
        lat,
        lng,
    });
}
