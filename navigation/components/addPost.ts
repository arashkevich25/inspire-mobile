import { ComponentId, ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

import I18n from 'tools/translate';
import { bottomTabs } from '../../../e2e/selectors';

export const AddPost: LayoutComponent = {
    id: ComponentId.AppAddPost,
    name: ComponentName.AppAddPost,
    options: {
        topBar: {
            drawBehind: false,
            noBorder: true,
            visible: true,
            elevation: 0,
            title: {
                text: I18n.t('addPost.titles.header'),
            },
            backButton: {
                visible: false,
            },
            rightButtons: [
                {
                    id: ComponentId.ComponentAddPhoto,
                    component: {
                        name: ComponentName.ComponentAddPhotoControl,
                    },
                },
            ],
        },
        bottomTab: {
            icon: require(`../assets/nonactive/addPost.png`),
            testID: bottomTabs.addPost,
        },
    },
};
