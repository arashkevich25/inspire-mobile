import { isIphone } from 'app-constants';
import { ComponentName } from 'navigation';

import { LayoutComponent } from 'react-native-navigation';

import { StylesValue } from 'tools';
import I18n from 'tools/translate';
import { ThemeVariables } from 'types';

export const StatutesList = (
    cbk: () => void,
    buttonText: string,
    clubClubUniqueName = '',
    competitionId = 0,
): LayoutComponent => ({
    name: ComponentName.ScreenStatutesList,
    passProps: {
        clubClubUniqueName,
        competitionId,
        cbk,
        buttonText,
    },
    options: {
        layout: {
            backgroundColor: StylesValue(ThemeVariables.BackgroundColor1),
            componentBackgroundColor: StylesValue(ThemeVariables.BackgroundColor1),
        },
        topBar: {
            drawBehind: false,
            visible: true,
            title: {
                text: I18n.t('statute.listTitle'),
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
