import { ComponentId, ComponentName } from '../constants';

import { LayoutComponent } from 'react-native-navigation';

export const SignUp: LayoutComponent = {
    name: ComponentName.ScreenSignUp,
    id: ComponentId.ScreenSignUp,
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
