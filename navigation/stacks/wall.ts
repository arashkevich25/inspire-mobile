import { bottomTextsSettings } from '../constants/bottomTextsSettings';
import { ComponentId } from '../constants/componentId';

import { LayoutStack, LayoutStackChildren } from 'react-native-navigation';

import { Wall } from 'navigation/components/wall';
import I18n from 'tools/translate';

const wallStackComponents: LayoutStackChildren[] = [
    {
        component: Wall,
    },
];

export const wallStack: LayoutStack = {
    id: ComponentId.WallStack,
    children: wallStackComponents,
    options: {
        topBar: {
            visible: false,
        },
        layout: {
            orientation: ['portrait'],
        },
        bottomTab: {
            text: I18n.t('wall.bottomBar.title'),
            ...bottomTextsSettings,
        },
    },
};
