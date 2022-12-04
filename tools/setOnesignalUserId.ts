import { StorageKeys } from 'app-constants';

import OneSignal from 'react-native-onesignal';

import { initDevice } from 'actions';
import { getItemFromStorage, getRandomString, setItemToStorage } from 'tools';

export async function setOnesignalUserId(): Promise<void> {
    const customPushMsgId = await getItemFromStorage(StorageKeys.CustomPushMsgId);
    const { userId } = await await OneSignal.getDeviceState();
    if (!customPushMsgId && !userId) {
        const randomString = getRandomString(50);
        OneSignal.setRequiresUserPrivacyConsent(true);
        OneSignal.setExternalUserId(randomString, (results: any) => {
            if (results.push && results.push.success) {
                initDevice(randomString);
                setItemToStorage(StorageKeys.CustomPushMsgId, randomString);
            }
        });
    } else if (customPushMsgId) {
        initDevice(customPushMsgId);
    } else {
        initDevice(userId);
    }
}
