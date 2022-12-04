import { isIphone } from 'app-constants';

import { Linking } from 'react-native';
import { check, checkMultiple, PERMISSIONS, request, RESULTS } from 'react-native-permissions';

export function getPhotoLibraryPermission() {
    if (isIphone) {
        check(PERMISSIONS.IOS.PHOTO_LIBRARY).then(async result => {
            if (result === RESULTS.BLOCKED) {
                await Linking.openSettings();
            }

            if (result === RESULTS.DENIED) {
                await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
                return;
            }
        });
        return;
    }

    check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then(async result => {
        if (result === RESULTS.BLOCKED) {
            await Linking.openSettings();
        }

        if (result === RESULTS.DENIED) {
            await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
            await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
            return;
        }
    });
}

export function getPhotoCameraPermission() {
    if (isIphone) {
        check(PERMISSIONS.IOS.CAMERA).then(async result => {
            if (result === RESULTS.BLOCKED) {
                await Linking.openSettings();
            }

            if (result === RESULTS.DENIED) {
                await request(PERMISSIONS.IOS.CAMERA);
                return;
            }
        });
        return;
    }

    check(PERMISSIONS.ANDROID.CAMERA).then(async result => {
        if (result === RESULTS.BLOCKED) {
            await Linking.openSettings();
        }

        if (result === RESULTS.DENIED) {
            await request(PERMISSIONS.ANDROID.CAMERA);
            return;
        }
    });
}

export function getLocalizationPermission(tryAgainCallBack: () => void) {
    if (isIphone) {
        checkMultiple([PERMISSIONS.IOS.LOCATION_ALWAYS, PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]).then(async result => {
            if (
                result[PERMISSIONS.IOS.LOCATION_ALWAYS] === RESULTS.BLOCKED &&
                result[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] === RESULTS.BLOCKED
            ) {
                await Linking.openSettings();
                return;
            }

            if (
                result[PERMISSIONS.IOS.LOCATION_ALWAYS] === RESULTS.DENIED &&
                result[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] === RESULTS.DENIED
            ) {
                await request(PERMISSIONS.IOS.LOCATION_ALWAYS);
                return;
            }
        });
        tryAgainCallBack();
        return;
    }

    check(PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION).then(async result => {
        if (result === RESULTS.BLOCKED) {
            await Linking.openSettings();
            return;
        }

        if (result === RESULTS.DENIED) {
            await request(PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION);
            return;
        }
        tryAgainCallBack();
    });
}
