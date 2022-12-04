import { isIphone } from 'app-constants';
import { ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

export const NoConnectionStatus = (title: string): LayoutComponent => ({
    name: ComponentName.ScreenNoConnectionStatus,
    options: {
        topBar: {
            visible: true,
            backButton: {
                title,
                visible: isIphone,
            },
            title: {
                component: {
                    name: ComponentName.ComponentTitleLogo,
                },
            },
        },
        bottomTabs: {
            visible: false,
        },
    },
});
