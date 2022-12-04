import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Keyboard, TouchableOpacity, View } from 'react-native';

import { openCamera, openPicker } from 'actions';
import { Avatar as UserAvatar } from 'components';
import { Menu, menuControl, MenuItem } from 'components/BottomMenu';
import { AppState } from 'reducers';
import { getNewAvatar } from 'selectors';
import I18n from 'tools/translate';

import { Styles } from './styles';

interface AvatarProps {
    avatar: string | undefined;
    name: string | undefined;
}

export function Avatar(props: AvatarProps) {
    const selectedAvatar = useSelector((state: AppState) => getNewAvatar(state));
    const dispatch = useDispatch();

    async function openPickerHandle() {
        await menuControl.closeMenu();
        dispatch(openPicker());
    }

    async function openCameraHandle() {
        await menuControl.closeMenu();
        dispatch(openCamera());
    }

    const menuChildren = (
        <Menu>
            <MenuItem
                title={I18n.t('profile.userDetails.takePhoto')}
                icon={require('../../../../assets/picture.png')}
                action={openCameraHandle}
            />
            <MenuItem
                title={I18n.t('profile.userDetails.photosFromCameraRoll')}
                icon={require('../../../../assets/mobile-camera.png')}
                action={openPickerHandle}
            />
        </Menu>
    );

    async function openBottomMenu() {
        Keyboard.dismiss();
        await menuControl.openMenu({ children: menuChildren });
    }

    return (
        <View style={Styles.contentContainer}>
            <TouchableOpacity onPress={openBottomMenu}>
                {selectedAvatar ? (
                    <UserAvatar size="large" uri={selectedAvatar} />
                ) : (
                    <UserAvatar size="large" uri={props.avatar} fallback={props.name} />
                )}
            </TouchableOpacity>
        </View>
    );
}
