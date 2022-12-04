import * as mime from 'react-native-mime-types';

export function getMimeTypeFromFile(path: string): string {
    return mime.lookup(path);
}
