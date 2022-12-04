import { ComponentId, ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

export const PostsByTag = (tag: string): LayoutComponent => ({
    id: ComponentId.ScreenPostsByTag,
    name: ComponentName.ScreenPostsByTag,
    passProps: {
        tag,
    },
    options: {
        topBar: {
            visible: true,
            drawBehind: false,
            elevation: 0,
            leftButtonColor: StylesValue(ThemeVariables.HighlightColor1),
            title: {
                text: `#${tag}`,
                color: StylesValue(ThemeVariables.HighlightColor1),
                fontWeight: 'bold',
            },
        },
    },
});
