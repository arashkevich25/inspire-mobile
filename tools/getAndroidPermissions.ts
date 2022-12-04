import { Alert, PermissionsAndroid } from 'react-native';

export async function requestPermission(permissions: any): Promise<void> {
    try {
        const granted = await PermissionsAndroid.request(permissions, {
            title: 'Cool Photo App Camera Permission',
            message: 'Cool Photo App needs access to your camera ' + 'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
        });
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            Alert.alert('You can use the camera');
        } else {
            Alert.alert('Camera permission denied');
        }
    } catch (err) {
        Alert.alert(err);
    }
}
