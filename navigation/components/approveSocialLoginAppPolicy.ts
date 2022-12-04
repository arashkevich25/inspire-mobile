import { ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

export const ApproveSocialLoginAppPolicy = (acceptFunction: () => void): LayoutComponent => ({
    name: ComponentName.ScreenApproveSocialLoginAppPolicy,
    passProps: {
        acceptFunction,
    },
    options: {
        topBar: {
            drawBehind: false,
            visible: true,
            noBorder: true,
            elevation: 0,
            backButton: {
                visible: false,
            },
            title: {
                component: {
                    name: ComponentName.ComponentTitleLogo,
                },
            },
        },
    },
});
