import { ComponentName } from 'navigation/constants/componentName';

import { LayoutComponent } from 'react-native-navigation';

export const OnBoarding: LayoutComponent = {
    name: ComponentName.ScreenOnBoarding,
    options: {
        topBar: {
            visible: false,
        },
    },
};
