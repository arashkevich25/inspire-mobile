import { isIphone } from 'app-constants';
import { ComponentId, ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

import { StylesValue } from 'tools';
import I18n from 'tools/translate';
import { ThemeVariables } from 'types';

export const GlobalSearch = (backTitle = ''): LayoutComponent => ({
    id: ComponentId.ComponentGlobalSearch,
    name: ComponentName.ScreenGlobalSearch,
    options: {
        layout: {
            backgroundColor: StylesValue(ThemeVariables.BackgroundColor1),
            componentBackgroundColor: StylesValue(ThemeVariables.BackgroundColor1),
        },
        topBar: {
            visible: true,
            noBorder: true,
            background: {
                color: StylesValue(ThemeVariables.LightGrayAndWhite),
            },
            drawBehind: false,
            backButton: {
                showTitle: true,
                title: backTitle,
                visible: isIphone,
            },
            elevation: 0,
            title: {
                text: I18n.t('globalSearch.title'),
            },
            animate: false,
        },
        bottomTabs: {
            visible: false,
            animate: true,
        },
    },
});
