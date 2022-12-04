import { ComponentId, ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

export const CompetitionDetails = (competitionId: number): LayoutComponent => ({
    id: ComponentId.ScreenCompetitionDetails,
    name: ComponentName.ScreenCompetitionDetails,
    passProps: {
        competitionId,
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
