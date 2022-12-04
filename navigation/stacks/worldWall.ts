import { backgroundsColor } from 'navigation/constants';

import { LayoutStackChildren } from 'react-native-navigation';
import { LayoutStack } from 'react-native-navigation/lib/src/interfaces/Layout';

import { WorldWall } from 'navigation/components/worldWall';

const worldWallStackComponents: LayoutStackChildren[] = [
    {
        component: WorldWall,
    },
];

export const worldWallStack: LayoutStack = {
    children: worldWallStackComponents,
    options: {
        topBar: {
            visible: false,
        },
        layout: {
            orientation: ['portrait'],
            ...backgroundsColor,
        },
    },
};
