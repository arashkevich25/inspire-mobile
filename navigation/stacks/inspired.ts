import { bottomTextsSettings } from '../constants/bottomTextsSettings';
import { ComponentId } from '../constants/componentId';

import { LayoutStack, LayoutStackChildren } from 'react-native-navigation';

import { Inspired } from 'navigation/components/inspired';
import I18n from 'tools/translate';

const inspiredStackComponents: LayoutStackChildren[] = [
    {
        component: Inspired,
    },
];

export const inspiredStack: LayoutStack = {
    id: ComponentId.InspiredStack,
    children: inspiredStackComponents,
    options: {
        topBar: {
            visible: false,
        },
        layout: {
            orientation: ['portrait'],
        },
        bottomTab: {
            text: I18n.t('inspired.bottomBar.title'),
            ...bottomTextsSettings,
        },
    },
};
