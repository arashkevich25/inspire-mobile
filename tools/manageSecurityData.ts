import SInfo from 'react-native-sensitive-info';

export function getSensitiveItem(key: string): Promise<string> {
    return SInfo.getItem(key, {
        sharedPreferencesName: 'mySharedPrefs',
        keychainService: 'myKeychain',
    });
}
export function setSensitiveItem(key: string, value: string): Promise<string | undefined | null> {
    return SInfo.setItem(key, value, {
        sharedPreferencesName: 'mySharedPrefs',
        keychainService: 'myKeychain',
    });
}
export function removeSensitiveItem(key: string): Promise<any> {
    return SInfo.deleteItem(key, {
        sharedPreferencesName: 'mySharedPrefs',
        keychainService: 'myKeychain',
    });
}
