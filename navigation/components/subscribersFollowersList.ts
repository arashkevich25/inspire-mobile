import { User } from '@inspire/types';
import { isIphone } from 'app-constants';
import { ComponentName } from 'navigation';

import { LayoutComponent } from 'react-native-navigation';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

export const SubscribersFollowersList = (users: User[], backTitle: string, title = ''): LayoutComponent => ({
    name: ComponentName.ScreenSubscribersFollowersList,
    passProps: {
        users,
    },
    options: {
        layout: {
            backgroundColor: StylesValue(ThemeVariables.BackgroundColor1),
            componentBackgroundColor: StylesValue(ThemeVariables.BackgroundColor1),
        },
        topBar: {
            drawBehind: false,
            visible: true,
            backButton: {
                visible: isIphone,
                title: backTitle,
            },
            title: {
                text: title,
            },
        },
    },
});
