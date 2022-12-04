import { ComponentId, ComponentName } from '../constants';

import { LayoutComponent } from 'react-native-navigation';

export const Login: LayoutComponent = {
    name: ComponentName.AppLogin,
    id: ComponentId.AppLogin,
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
