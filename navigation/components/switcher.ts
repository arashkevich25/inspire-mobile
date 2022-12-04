import { ComponentId, ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

export const Switcher: LayoutComponent = {
    id: ComponentId.AppSwitcher,
    name: ComponentName.AuthSwitcher,
    options: {
        topBar: {
            visible: false,
        },
        bottomTabs: {
            visible: false,
        },
    },
};
