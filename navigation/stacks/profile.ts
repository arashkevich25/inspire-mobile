import { bottomTextsSettings } from '../constants/bottomTextsSettings';
import { ComponentId } from '../constants/componentId';

import { LayoutStack, LayoutStackChildren } from 'react-native-navigation';

import { RootProfile } from 'navigation/components/profile';
import I18n from 'tools/translate';

const profileStackComponents = (userId: number): LayoutStackChildren[] => [
    {
        component: RootProfile(userId),
    },
];

export const profileStack = (userId: number): LayoutStack => ({
    id: ComponentId.ProfileStack,
    children: profileStackComponents(userId),
    options: {
        topBar: {
            visible: false,
        },
        layout: {
            orientation: ['portrait'],
        },
        bottomTab: {
            text: I18n.t('profile.bottomBar.title'),
            ...bottomTextsSettings,
        },
    },
});
