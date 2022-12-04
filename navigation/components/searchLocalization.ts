import { ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

export const SearchLocalization = (handle: any, currentLocationIsEnabled: any): LayoutComponent => ({
    name: ComponentName.ScreenSearchLocalization,
    options: {
        layout: {
            backgroundColor: StylesValue(ThemeVariables.BackgroundColor1),
            componentBackgroundColor: StylesValue(ThemeVariables.BackgroundColor1),
        },
        topBar: {
            drawBehind: false,
            visible: false,
            title: {
                component: {
                    name: ComponentName.ComponentTitleLogo,
                },
            },
            noBorder: true,
        },
    },
    passProps: {
        handle,
        currentLocationIsEnabled,
    },
});
