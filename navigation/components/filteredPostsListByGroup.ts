import { ComponentId, ComponentName } from 'navigation/constants';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

export const FilteredPostsListByGroup = (groupId: number, groupName: string) => ({
    name: ComponentName.ScreenFilteredPostsListByGroup,
    id: ComponentId.ScreenFilteredPostsListByGroup,
    passProps: {
        groupId,
    },
    options: {
        topBar: {
            visible: true,
            drawBehind: false,
            elevation: 0,
            title: {
                text: groupName,
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
