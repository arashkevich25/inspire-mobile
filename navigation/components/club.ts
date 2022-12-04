import { ComponentId, ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

export const Club = (uniqueName: string): LayoutComponent => ({
    id: ComponentId.ScreenClub,
    name: ComponentName.ScreenClub,
    passProps: {
        uniqueName,
    },
    options: {
        layout: {
            backgroundColor: StylesValue(ThemeVariables.BackgroundColor1),
            componentBackgroundColor: StylesValue(ThemeVariables.BackgroundColor1),
        },
        bottomTabs: {
            visible: false,
        },
    },
});
