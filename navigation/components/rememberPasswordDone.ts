import { ComponentId, ComponentName } from '../constants';

import { LayoutComponent } from 'react-native-navigation';

export const RememberPasswordDone: LayoutComponent = {
    name: ComponentName.ScreenRememberPasswordDone,
    id: ComponentId.ScreenRememberPasswordDone,
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
