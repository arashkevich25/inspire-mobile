import { Platform } from 'react-native';
// @ts-ignore
import OneSignal from 'react-native-onesignal';

import { setOnesignalUserId } from 'tools';

export function oneSignalInit() {
    if (Platform.OS === 'android') {
        setOnesignalUserId();
        return;
    }

    OneSignal.promptForPushNotificationsWithUserResponse((response: boolean) => {
        if (response) {
            setOnesignalUserId();
        }
    });
}
