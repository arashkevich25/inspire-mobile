import { bottomTabs } from '../bottomTabs';

import { Navigation } from 'react-native-navigation';

export function setAppRoot(userId: number): Promise<any> {
    return Navigation.setRoot({
        root: {
            bottomTabs: bottomTabs(userId),
        },
    });
}
