import React from 'react';

import { Image, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

const navStyles = EStyleSheet.create({
    icons: {
        width: 20,
        height: 20,
    },
    dash: {
        backgroundColor: ThemeVariables.HighlightColor1,
        height: 3,
        position: 'absolute',
        top: -15,
        left: -20,
        right: -20,
    },
});

const inspiredIcon = EStyleSheet.create({
    icon: {
        width: 5,
        height: 20,
    },
});

export function WallIcon({ focused }: any) {
    return (
        <IconDash isFocused={focused}>
            <Image
                source={
                    focused
                        ? require('../../assets/navigation/active/wall.png')
                        : require('../../assets/navigation/nonactive/wall.png')
                }
                style={navStyles.icons}
            />
        </IconDash>
    );
}

export function WorldWallIcon({ focused }: any) {
    return (
        <IconDash isFocused={focused}>
            <Image
                source={
                    focused ? require('../../assets/nonactive/home.png') : require('../../assets/nonactive/home.png')
                }
                style={navStyles.icons}
            />
        </IconDash>
    );
}

export function AddPostIcon({ focused }: any) {
    return (
        <IconDash isFocused={focused}>
            <Image
                source={
                    focused
                        ? require('../../assets/navigation/active/addPost.png')
                        : require('../../assets/navigation/nonactive/addPost.png')
                }
                style={navStyles.icons}
            />
        </IconDash>
    );
}

export function ProfileIcon({ focused }: any) {
    return (
        <IconDash isFocused={focused}>
            <Image
                source={
                    focused
                        ? require('../../assets/navigation/active/profile.png')
                        : require('../../assets/navigation/nonactive/profile.png')
                }
                style={navStyles.icons}
            />
        </IconDash>
    );
}

function IconDash({ isFocused, children }: any) {
    if (isFocused) {
        return (
            <View>
                <View style={navStyles.dash} />
                <View>{children}</View>
            </View>
        );
    }

    return <View>{children}</View>;
}

export function IconInspired({ focused }: any) {
    return (
        <IconDash isFocused={focused}>
            <Image
                source={
                    focused
                        ? require('../../assets/navigation/active/inspired.png')
                        : require('../../assets/navigation/nonactive/inspired.png')
                }
                style={inspiredIcon.icon}
            />
        </IconDash>
    );
}
