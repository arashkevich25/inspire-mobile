import { backgroundsColor } from 'navigation/constants';
import { bottomTextsSettings } from '../constants/bottomTextsSettings';
import { ComponentId } from '../constants/componentId';

import { LayoutStackChildren } from 'react-native-navigation';
import { LayoutStack } from 'react-native-navigation/lib/src/interfaces/Layout';

import { Home } from 'navigation/components';
import I18n from '../../tools/translate';

const homeStackComponents: LayoutStackChildren[] = [
    {
        component: Home,
    },
];

export const homeStack: LayoutStack = {
    id: ComponentId.HomeStack,
    children: homeStackComponents,
    options: {
        topBar: {
            visible: false,
        },
        layout: {
            orientation: ['portrait'],
            ...backgroundsColor,
        },
        bottomTab: {
            text: I18n.t('home.bottomBar.title'),
            ...bottomTextsSettings,
        },
    },
};
