import { ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

export const WebView = (uri: string): LayoutComponent => ({
    name: ComponentName.ComponentWebView,
    passProps: {
        uri,
    },
    options: {
        topBar: {
            drawBehind: false,
            visible: true,
            title: {
                component: {
                    name: ComponentName.ComponentTitleLogo,
                },
            },
            noBorder: true,
        },
        bottomTab: {
            icon: require(`../assets/nonactive/home.png`),
            iconColor: StylesValue(ThemeVariables.Color1),
            selectedIconColor: StylesValue(ThemeVariables.HighlightColor1),
        },
    },
});
