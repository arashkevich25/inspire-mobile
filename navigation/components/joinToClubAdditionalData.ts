import { isIphone } from 'app-constants';
import { ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

export const JoinToClubAdditionalData = (text: string, uniqueName: string): LayoutComponent => ({
    name: ComponentName.ScreenJoinToClubAdditionalData,
    passProps: {
        uniqueName,
    },
    options: {
        layout: {
            backgroundColor: StylesValue(ThemeVariables.BackgroundColor1),
            componentBackgroundColor: StylesValue(ThemeVariables.BackgroundColor1),
        },
        topBar: {
            visible: true,
            title: {
                text,
            },
            backButton: {
                visible: isIphone,
                title: '',
            },
        },
        bottomTabs: {
            visible: false,
        },
    },
});
