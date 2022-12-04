import { FormikProps } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormValues } from '../../../../types/FormValues';

import { TouchableOpacity, View } from 'react-native';

import { openCamera, openPicker } from 'actions';
import { Avatar } from 'components';
import { menuControl } from 'components/BottomMenu';
import { Menu, MenuItem } from 'components/BottomMenu/components/Menu';
import { AppState } from 'reducers';
import { getNewAvatar } from 'selectors';
import { winHeight } from 'tools';
import I18n from 'tools/translate';
import { groups } from '../../../../../../../e2e/selectors/groups';
import { InputForm } from '../../../../../../tools/formFields';

import { Styles } from './styles';

interface AvatarNameFieldProps extends FormikProps<FormValues> {
    editedAvatar?: string;
}

export function AvatarNameField(props: AvatarNameFieldProps) {
    const dispatch = useDispatch();
    const avatar = useSelector((state: AppState) => getNewAvatar(state));

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
                icon={require('../../../../../../assets/picture.png')}
                action={openCameraHandle}
            />
            <MenuItem
                title={I18n.t('profile.userDetails.photosFromCameraRoll')}
                icon={require('../../../../../../assets/mobile-camera.png')}
                action={openPickerHandle}
            />
        </Menu>
    );

    async function openBottomMenu() {
        await menuControl.openMenu({ children: menuChildren });
    }

    return (
        <View style={Styles.contentContainer}>
            <TouchableOpacity style={Styles.avatarBox} onPress={openBottomMenu}>
                {avatar ? (
                    <Avatar size={winHeight <= 570 ? 'medium' : 'large'} uri={avatar} />
                ) : (
                    <Avatar
                        size={winHeight <= 570 ? 'medium' : 'large'}
                        uri={props.editedAvatar}
                        fallback={props.values.groupName ? props.values.groupName : 'GN'}
                    />
                )}
            </TouchableOpacity>
            <View>
                <InputForm
                    hasHighlight={false}
                    testID={groups.fields.name}
                    name="groupName"
                    translateKey="profile.groups.fields.name"
                    value={props.values.groupName}
                    size="large"
                    textAlign="center"
                    style={Styles.fieldContainer}
                    onChangeText={props.handleChange('groupName')}
                />
            </View>
        </View>
    );
}
