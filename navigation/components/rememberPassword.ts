import { ComponentId, ComponentName } from '../constants';

import { LayoutComponent } from 'react-native-navigation';

export const RememberPassword: LayoutComponent = {
    name: ComponentName.ScreenRememberPassword,
    id: ComponentId.ScreenRememberPassword,
    options: {
        layout: {},
        topBar: {
            visible: false,
            noBorder: true,
            drawBehind: false,
            elevation: 0,
        },
    },
};
