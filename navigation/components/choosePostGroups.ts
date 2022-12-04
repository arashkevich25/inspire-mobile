import { ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

import I18n from 'tools/translate';

export const AndroidChoosePostGroups: LayoutComponent = {
    name: ComponentName.ScreenChooseGroups,
    options: {
        topBar: {
            drawBehind: false,
            visible: true,
            title: {
                text: I18n.t('addPost.titles.chooseGroup'),
            },
            backButton: {
                visible: false,
            },
        },
    },
};

export const IosChoosePostGroups: LayoutComponent = {
    name: ComponentName.ScreenChooseGroups,
    options: {
        topBar: {
            drawBehind: false,
            visible: true,
            title: {
                text: I18n.t('addPost.titles.chooseGroup'),
            },
            backButton: {
                visible: false,
            },
        },
    },
};
