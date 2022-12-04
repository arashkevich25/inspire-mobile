import { isIphone } from 'app-constants';
import { ComponentId, ComponentName } from 'navigation/constants';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

export const Drafts = {
    id: ComponentId.ScreenDrafts,
    name: ComponentName.ScreenDrafts,
    options: {
        topBar: {
            layout: {
                backgroundColor: StylesValue(ThemeVariables.BackgroundColor1),
                componentBackgroundColor: StylesValue(ThemeVariables.BackgroundColor1),
            },
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
            animate: false,
        },
    },
};
