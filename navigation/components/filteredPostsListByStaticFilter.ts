import { ComponentId, ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

export const FilteredPostsListByStaticFilter = (text: string): LayoutComponent => ({
    name: ComponentName.ScreenFilteredPostsListByStaticFilter,
    id: ComponentId.ScreenFilteredPostsListByStaticFilter,
    options: {
        topBar: {
            visible: true,
            title: {
                text,
            },
            background: {
                color: StylesValue(ThemeVariables.LightGrayAndWhite),
            },
        },
        layout: {
            componentBackgroundColor: 'transparent',
        },
        overlay: {
            interceptTouchOutside: true,
        },
    },
});
