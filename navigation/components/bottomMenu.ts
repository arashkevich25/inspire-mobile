import { ComponentId, ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

export const BottomMenu = (args: any): LayoutComponent => ({
    id: ComponentId.ComponentBottomMenu,
    name: ComponentName.ComponentBottomMenu,
    options: {
        layout: {
            componentBackgroundColor: 'transparent',
        },
        overlay: {
            interceptTouchOutside: false,
        },
    },
    passProps: {
        ...args,
    },
});
