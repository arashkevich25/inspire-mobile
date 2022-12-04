import { bottomTextsSettings } from '../constants/bottomTextsSettings';
import { ComponentId } from '../constants/componentId';

import { LayoutStack, LayoutStackChildren } from 'react-native-navigation';

import { AddPost } from 'navigation/components/addPost';
import I18n from 'tools/translate';

const addPostStackComponents: LayoutStackChildren[] = [
    {
        component: AddPost,
    },
];

export const addPostStack: LayoutStack = {
    id: ComponentId.AddPostStack,
    children: addPostStackComponents,
    options: {
        layout: {
            orientation: ['portrait'],
        },
        bottomTab: {
            text: I18n.t('addPost.bottomBar.title'),
            ...bottomTextsSettings,
        },
    },
};
