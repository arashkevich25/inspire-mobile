import { animations } from './constants';
import { addPostStack, homeStack, inspiredStack, profileStack, wallStack } from './stacks';

import { LayoutBottomTabs } from 'react-native-navigation';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

export const bottomTabs = (userId: number): LayoutBottomTabs => ({
    children: [
        {
            stack: homeStack,
        },
        {
            stack: wallStack,
        },
        {
            stack: addPostStack,
        },
        {
            stack: inspiredStack,
        },
        {
            stack: profileStack(userId),
        },
    ],
    options: {
        animations,
        bottomTabs: {
            backgroundColor: StylesValue(ThemeVariables.BlackAndWhite),
            hideShadow: false,
            animate: false,
            borderWidth: 0,
            titleDisplayMode: 'alwaysShow',
        },
    },
});
