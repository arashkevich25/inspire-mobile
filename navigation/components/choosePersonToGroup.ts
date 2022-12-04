import { isIphone } from 'app-constants';
import { ComponentId, ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

export const ChoosePersonToGroup = (backTitle: string, groupId: number | null = null): LayoutComponent => ({
    id: ComponentId.ScreenChoosePersonToGroup,
    name: ComponentName.ScreenChoosePersonToGroup,
    passProps: {
        groupId,
    },
    options: {
        topBar: {
            backButton: {
                visible: isIphone,
            },
            drawBehind: false,
            visible: true,
            title: {
                component: {
                    name: ComponentName.ComponentTitleLogo,
                },
            },
            noBorder: true,
        },
        bottomTabs: {
            visible: false,
            animate: true,
        },
    },
});
