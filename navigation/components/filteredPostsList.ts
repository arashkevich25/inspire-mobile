import { ComponentId, ComponentName } from 'navigation/constants';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

export const FilteredPostsList = (filterId: string, text: string) => ({
    name: ComponentName.ScreenFilteredPostsList,
    id: ComponentId.ScreenFilteredPostsList,
    passProps: {
        filterId,
    },
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
