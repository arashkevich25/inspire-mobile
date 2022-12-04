import { ComponentId } from '../constants/componentId';

import { LayoutStack, LayoutStackChildren } from 'react-native-navigation';

import { Login } from 'navigation/components/login';

const authStackComponents: LayoutStackChildren[] = [
    {
        component: Login,
    },
];

export const authStack: LayoutStack = {
    id: ComponentId.AuthStack,
    children: authStackComponents,
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
