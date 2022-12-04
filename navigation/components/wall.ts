import { ComponentId, ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

import { bottomTabs } from '../../../e2e/selectors';

export const Wall: LayoutComponent = {
    id: ComponentId.AppRootWall,
    name: ComponentName.AppWall,
    options: {
        topBar: {
            visible: false,
        },
        bottomTab: {
            icon: require(`../assets/nonactive/wall.png`),
            testID: bottomTabs.wall,
        },
    },
};
