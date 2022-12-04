import { ComponentId } from '../constants/componentId';

import { LayoutStack, LayoutStackChildren } from 'react-native-navigation';

import { Switcher } from 'navigation/components/switcher';

const switcherStackComponents: LayoutStackChildren[] = [
    {
        component: Switcher,
    },
];

export const switcherStack: LayoutStack = {
    id: ComponentId.SwitcherStack,
    children: switcherStackComponents,
    options: {
        topBar: {
            visible: false,
        },
        bottomTabs: {
            visible: false,
        },
        layout: {
            orientation: ['portrait'],
        },
    },
};
