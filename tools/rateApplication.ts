import { StorageKeys } from 'app-constants';
import { setItemToStorage } from './storage';
import I18n from './translate';

import { Alert } from 'react-native';
import Rate, { AndroidMarket } from 'react-native-rate';

export function rateInspireApp() {
    const options = {
        AppleAppID: '1503408551',
        GooglePackageName: 'com.arrit.be.nspired',
        preferredAndroidMarket: AndroidMarket.Google,
        preferInApp: true,
        openAppStoreIfInAppFails: true,
        fallbackPlatformURL: 'https://www.app-inspire.net',
    };

    function switchToRated() {
        setItemToStorage(StorageKeys.applicationHasRated, 'true');
    }

    Alert.alert(
        I18n.t('dialog.rateAppTitle'),
        I18n.t('dialog.rateAppDescription'),
        [
            {
                text: I18n.t('dialog.rateAppThankYouButton'),
                onPress: switchToRated,
                style: 'cancel',
            },
            {
                text: I18n.t('dialog.rateAppRateButton'),
                onPress: () => Rate.rate(options, switchToRated),
            },
        ],
        { cancelable: false },
    );
}
