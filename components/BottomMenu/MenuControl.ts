import { ComponentId } from 'navigation/constants';

import { Navigation } from 'react-native-navigation';

import { BottomMenu } from 'navigation/components';

export const menuControl = {
    openMenu: async (args: any) => {
        await Navigation.showOverlay({ component: BottomMenu(args) });
    },
    closeMenu: async () => {
        await Navigation.dismissOverlay(ComponentId.ComponentBottomMenu);
    },
};
