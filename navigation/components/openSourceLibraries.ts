import { isIphone } from 'app-constants';
import { ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

export const OpenSourceLibraries: LayoutComponent = {
    name: ComponentName.ScreenOpenSourceLibraries,
    options: {
        topBar: {
            drawBehind: false,
            visible: true,
            title: {
                component: {
                    name: ComponentName.ComponentTitleLogo,
                },
            },
            backButton: {
                visible: isIphone,
            },
        },
    },
};
