import { isIphone, StorageKeys } from 'app-constants';
import { ComponentId } from 'navigation';

import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';
import { Navigation } from 'react-native-navigation';
import { checkMultiple, PERMISSIONS, RESULTS } from 'react-native-permissions';

import { GetLocationPermission } from 'navigation/components';
import { getItemFromStorage } from 'tools';

export async function getCurrentLocation(): Promise<GeolocationResponse> {
    const hasLocationPermissionHasAsked = await getItemFromStorage(StorageKeys.LocationPermissionHasAsked);
    const permissionIos = await checkMultiple([PERMISSIONS.IOS.LOCATION_ALWAYS, PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]);

    if (
        hasLocationPermissionHasAsked !== 'true' &&
        isIphone &&
        permissionIos[PERMISSIONS.IOS.LOCATION_ALWAYS] !== RESULTS.GRANTED &&
        permissionIos[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] !== RESULTS.GRANTED
    ) {
        await Navigation.push(ComponentId.AppHome, { component: GetLocationPermission });
        return;
    }

    return new Promise<GeolocationResponse>((res, cat) => {
        Geolocation.getCurrentPosition(
            position => res(position),
            err => cat(err),
        );
    });
}
