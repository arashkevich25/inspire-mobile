import { ComponentId } from 'navigation/constants';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Keyboard, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import { selectImagesFromCamera, selectImagesFromPicker } from 'actions';
import { Menu, menuControl, MenuItem } from 'components/BottomMenu';
import { addPost } from 'e2e/selectors';
import { Drafts } from 'navigation/components';
import { StylesValue } from 'tools';
import I18n from 'tools/translate';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

export function AddPhotoTopBarControl() {
    const dispatch = useDispatch();

    async function openCameraHandle() {
        await menuControl.closeMenu();
        dispatch(selectImagesFromCamera());
    }

    async function openPickerHandle() {
        await menuControl.closeMenu();
        dispatch(selectImagesFromPicker());
    }

    async function openDrafts() {
        await menuControl.closeMenu();
        await Navigation.push(ComponentId.AppAddPost, {
            component: Drafts,
        });
    }

    const menuChildren = (
        <Menu>
            <MenuItem
                title={I18n.t('profile.userDetails.takePhoto')}
                icon={require('../../../../assets/mobile-camera.png')}
                action={openCameraHandle}
            />
            <MenuItem
                title={I18n.t('profile.userDetails.photosFromCameraRoll')}
                icon={require('../../../../assets/picture.png')}
                action={openPickerHandle}
            />
            <MenuItem
                title={I18n.t('profile.menu.drafts')}
                icon={require('../../../../assets/draft.png')}
                action={openDrafts}
            />
        </Menu>
    );

    async function openBottomMenu() {
        Keyboard.dismiss();
        await menuControl.openMenu({ children: menuChildren });
    }

    return (
        <TouchableOpacity style={Styles.contentContainer} onPress={openBottomMenu}>
            <Icon
                testID={addPost.buttons.choosePhoto}
                name="ellipsis-h"
                size={22}
                color={StylesValue(ThemeVariables.Color1)}
            />
        </TouchableOpacity>
    );
}
