import { DetailsPost } from '@inspire/types';
import React from 'react';
import { useSelector } from 'react-redux';
import { menuChildren } from './menuChildren';

import { Keyboard, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome';

import { menuControl } from 'components/BottomMenu';
import { useFollowUnFollow, useIsRoot, usePostById, useReportPostViolation } from 'hooks';
import { AppState } from 'reducers';
import { isAuthenticated } from 'selectors';
import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

// TODO styles from ./styles doesn't work
// import { Styles } from './styles';

export function PostMenu({ post, color }: { post: DetailsPost; color: string }) {
    // TODO styles from ./styles doesn't work
    const Styles = EStyleSheet.create({
        menuContainer: {
            minHeight: 40,
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
        },
    });

    const authenticated = useSelector((state: AppState) => isAuthenticated(state));
    const userId = post.user.id;

    const [isRoot, rootDetails] = useIsRoot(userId);
    const { removePost } = usePostById(post.id);
    const [isFriend, followUser, unFollowUser] = useFollowUnFollow(userId, rootDetails);
    const { reasons, report } = useReportPostViolation(post.id);

    async function openBottomMenu() {
        Keyboard.dismiss();
        await menuControl.openMenu({
            children: menuChildren(isRoot, isFriend, followUser, unFollowUser, reasons, report, removePost, post.id),
        });
    }

    async function openRootBottomMenu() {
        await menuControl.openMenu({
            children: menuChildren(isRoot, isFriend, followUser, unFollowUser, reasons, report, removePost, post.id),
        });
    }

    if (!userId) {
        return null;
    }

    if (!authenticated) {
        return <View></View>;
    }

    if (isRoot) {
        return (
            <TouchableOpacity style={Styles.menuContainer} onPress={openRootBottomMenu}>
                <Icon name="ellipsis-h" size={24} color={color || StylesValue(ThemeVariables.White)} />
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity style={Styles.menuContainer} onPress={openBottomMenu}>
            <Icon name="ellipsis-h" size={24} color={color || StylesValue(ThemeVariables.White)} />
        </TouchableOpacity>
    );
}
