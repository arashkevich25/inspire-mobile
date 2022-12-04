import { ComponentId, ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

export const Home: LayoutComponent = {
    id: ComponentId.AppHome,
    name: ComponentName.AppHome,
    options: {
        layout: {
            orientation: ['portrait'],
            backgroundColor: StylesValue(ThemeVariables.BlackAndWhite),
            componentBackgroundColor: StylesValue(ThemeVariables.BlackAndWhite),
        },
        topBar: {
            visible: false,
        },
        bottomTab: {
            icon: require('../assets/nonactive/home.png'),
        },
    },
};
