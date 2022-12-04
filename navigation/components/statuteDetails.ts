import { isIphone } from 'app-constants';
import { ComponentName } from 'navigation';

import { LayoutComponent } from 'react-native-navigation';

export const StatuteDetails = (statuteId: number, title: string): LayoutComponent => ({
    name: ComponentName.ScreenStatuteDetails,
    passProps: {
        statuteId,
    },
    options: {
        topBar: {
            drawBehind: false,
            visible: true,
            backButton: {
                visible: isIphone,
            },
            title: {
                text: title,
            },
        },
    },
});
