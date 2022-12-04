import { StorageKeys } from 'app-constants/storageKeys';

import AsyncStorage from '@react-native-community/async-storage';

export async function setItemToStorage(key: StorageKeys, value: string): Promise<void> {
    return await AsyncStorage.setItem(key, value);
}

export async function getItemFromStorage(key: StorageKeys): Promise<string | null> {
    return await AsyncStorage.getItem(key);
}

export async function removeItemFromStorage(key: string): Promise<void> {
    return await AsyncStorage.removeItem(key);
}
