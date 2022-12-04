import { ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';
import { Options } from 'react-native-navigation/lib/src/interfaces/Options';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

const base: { options: Options } = {
    options: {
        layout: {
            orientation: ['portrait'],
            backgroundColor: StylesValue(ThemeVariables.BlackAndWhite),
            componentBackgroundColor: StylesValue(ThemeVariables.BlackAndWhite),
        },
        topBar: {
            visible: false,
        },
        bottomTabs: {
            visible: false,
            animate: false,
        },
    },
};

export const ShowPostModalFromWorldWall = (postId: string, componentId: any, backTitle: string): LayoutComponent => ({
    name: ComponentName.ScreenShowPostModalFromWorldWall,
    passProps: {
        postId,
        componentId,
        backTitle,
    },
    ...base,
});

export const ShowPostModalFromWall = (postId: string, componentId: any, backTitle: string): LayoutComponent => ({
    name: ComponentName.ScreenShowPostModalFromWall,
    passProps: {
        postId,
        componentId,
        backTitle,
    },
    ...base,
});

export const ShowPostModalFromInspired = (postId: string, componentId: any, backTitle: string): LayoutComponent => ({
    name: ComponentName.ScreenShowPostModalFromInspired,
    passProps: {
        postId,
        componentId,
        backTitle,
    },
    ...base,
});

export const ShowPostModalFromGroup = (postId: string, componentId: any, backTitle: string): LayoutComponent => ({
    name: ComponentName.ScreenShowPostModalFromGroup,
    passProps: {
        postId,
        componentId,
        backTitle,
    },
    ...base,
});

export const ShowPostModalFromPostById = (postId: string, componentId: any, backTitle = ''): LayoutComponent => ({
    name: ComponentName.ScreenShowPostModalFromPostById,
    passProps: {
        postId,
        componentId,
        backTitle,
    },
    ...base,
});

export const ShowPostModalFromProfile = (
    postId: string,
    componentId: any,
    backTitle: string,
    userId: number,
): LayoutComponent => ({
    name: ComponentName.ScreenShowPostModalFromProfile,
    passProps: {
        postId,
        componentId,
        backTitle,
        userId,
    },
    ...base,
});
