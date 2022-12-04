import { isIphone } from 'app-constants';
import { ComponentId, ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';
import { bottomTabs } from '../../../e2e/selectors';

export const Profile = (userId: number): LayoutComponent => ({
    name: ComponentName.AppProfile,
    passProps: {
        userId,
    },
    options: {
        layout: {
            backgroundColor: StylesValue(ThemeVariables.BackgroundColor1),
            componentBackgroundColor: StylesValue(ThemeVariables.BackgroundColor1),
        },
        topBar: {
            visible: false,
            noBorder: true,
            drawBehind: false,
            elevation: 0,
            backButton: {
                // TODO https://github.com/wix/react-native-navigation/issues/6763
                title: '',
                visible: isIphone,
            },
        },
        bottomTab: {
            icon: require(`../assets/nonactive/profile.png`),
            testID: bottomTabs.profile,
        },
    },
});

export const RootProfile = (userId: number): LayoutComponent => ({
    id: ComponentId.AppRootProfile,
    name: ComponentName.AppRootProfile,
    passProps: {
        userId,
    },
    options: {
        layout: {
            backgroundColor: StylesValue(ThemeVariables.BackgroundColor1),
            componentBackgroundColor: StylesValue(ThemeVariables.BackgroundColor1),
        },
        topBar: {
            visible: false,
            noBorder: true,
            drawBehind: false,
            elevation: 0,
            background: {
                color: StylesValue(ThemeVariables.BackgroundColor1),
            },
        },
        bottomTab: {
            icon: require(`../assets/nonactive/profile.png`),
            testID: bottomTabs.profile,
        },
    },
});
