import { ComponentId, ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

export const TextPage = (title: string, text: string, isWeb: boolean): LayoutComponent => ({
    id: ComponentId.ScreenTextPage,
    name: ComponentName.ScreenTextPage,
    passProps: {
        title,
        text,
        isWeb,
    },
    options: {
        topBar: {
            visible: false,
        },
    },
});
