import { AddressTypes, GeoDataResult } from '@inspire/types';

export const initLocation: GeoDataResult = {
    address_components: [
        {
            long_name: '',
            short_name: '',
            types: [AddressTypes.Route],
        },
    ],
    formatted_address: '',
    geometry: {
        location: {
            lng: 0,
            lat: 0,
        },
        location_type: '',
        viewport: {
            northeast: {
                lat: 0,
                lng: 0,
            },
            southwest: {
                lat: 0,
                lng: 0,
            },
        },
    },
    place_id: '',
    types: [AddressTypes.Route],
};
