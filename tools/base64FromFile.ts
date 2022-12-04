import fs from 'react-native-fs';

export function base64FromFile(path: string): Promise<string> {
    return fs.readFile(path, 'base64');
}
