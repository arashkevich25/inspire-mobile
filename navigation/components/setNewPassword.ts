import { ComponentId, ComponentName } from '../constants';

import { LayoutComponent } from 'react-native-navigation';

export const SetNewPassword = (token: string): LayoutComponent => ({
    name: ComponentName.ScreenChangePassword,
    passProps: {
        token,
    },
    id: ComponentId.ScreenChangePassword,
    options: {
        layout: {},
        topBar: {
            visible: false,
            noBorder: true,
            drawBehind: false,
            elevation: 0,
        },
    },
});
