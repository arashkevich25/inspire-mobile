import { ComponentId, ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

import { bottomTabs } from '../../../e2e/selectors';

export const Inspired: LayoutComponent = {
    id: ComponentId.AppInspired,
    name: ComponentName.AppInspired,
    options: {
        topBar: {
            visible: false,
        },
        bottomTab: {
            icon: require(`../assets/nonactive/inspired.png`),
            testID: bottomTabs.inspired,
        },
    },
};
