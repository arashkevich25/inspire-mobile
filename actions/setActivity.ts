import { StorageKeys } from 'app-constants/storageKeys';

import { getUniqueId } from 'react-native-device-info';

import { client, setClient } from 'configs/graphql';
import { SET_ACTIVITY } from 'schemes';
import { getItemFromStorage, setItemToStorage } from 'tools/storage';

export async function setActivity() {
    const userIdRaw = await getItemFromStorage(StorageKeys.UserId);

    if (!client) {
        await setClient();
    }

    if (userIdRaw) {
        await client.mutate({ mutation: SET_ACTIVITY(Number(userIdRaw), '') });
        return;
    }

    let uniqueUserId = await getItemFromStorage(StorageKeys.UniqueUserId);

    if (!uniqueUserId) {
        uniqueUserId = getUniqueId();
        await setItemToStorage(StorageKeys.UniqueUserId, uniqueUserId);
    }

    await client.mutate({ mutation: SET_ACTIVITY(0, uniqueUserId) });
}
