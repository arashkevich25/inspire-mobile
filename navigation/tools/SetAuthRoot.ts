import { authStack } from '../stacks';

import { Navigation } from 'react-native-navigation';

export function setAuth() {
    return Navigation.setRoot({
        root: {
            stack: authStack,
        },
    });
}
