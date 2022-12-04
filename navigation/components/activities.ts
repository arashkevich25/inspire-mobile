import { isIphone } from 'app-constants';
import { ComponentId, ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

export const Activities: LayoutComponent = {
    id: ComponentId.ScreenActivities,
    name: ComponentName.ScreenActivities,
    options: {
        topBar: {
            backButton: {
                // title: I18n.t('profile.title'),
                // TODO https://github.com/wix/react-native-navigation/issues/6763
                title: '',
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
