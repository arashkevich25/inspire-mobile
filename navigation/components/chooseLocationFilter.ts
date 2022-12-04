import { ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

export const ChooseLocationFilter = (clbk: ((town: string) => void) | undefined): LayoutComponent => ({
    name: ComponentName.ScreenChooseLocationFilter,
    passProps: {
        clbk,
    },
    options: {
        topBar: {
            drawBehind: false,
            visible: false,
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
