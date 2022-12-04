import { ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

import I18n from 'tools/translate';

export const AndroidEditUserDetails: LayoutComponent = {
    name: ComponentName.ScreenEditUserDetails,
    options: {
        topBar: {
            drawBehind: false,
            visible: true,
            title: {
                text: I18n.t('profile.userDetails.title'),
            },
            noBorder: true,
            elevation: 0,
        },
    },
};
export const IosEditUserDetails: LayoutComponent = {
    name: ComponentName.ScreenEditUserDetails,
    options: {
        topBar: {
            drawBehind: false,
            visible: true,
            noBorder: true,
            elevation: 0,
            title: {
                component: {
                    name: ComponentName.ComponentTitleLogo,
                },
            },
        },
    },
};
