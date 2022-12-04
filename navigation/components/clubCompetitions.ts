import { ComponentId, ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

export const ClubCompetitions = (uniqueName: string): LayoutComponent => ({
    id: ComponentId.ScreenClubCompetitions,
    name: ComponentName.ScreenClubCompetitions,
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
