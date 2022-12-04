import React from 'react';
import { useDispatch } from 'react-redux';
import { Base } from '../Base';
import { Description } from '../Description';

import { Keyboard, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import { openCamera, openPicker } from 'actions';
import { Image, Text } from 'components';
import { Menu, menuControl, MenuItem } from 'components/BottomMenu';
import { GlobalStyles } from 'global-styles/globalStyles';
import { useEditUserDetails } from 'hooks';
import { StylesValue, winWidth } from 'tools';
import I18n from 'tools/translate';
import { ThemeVariables, UserIntroSetupStep } from 'types';

import { Styles } from './styles';

interface UserAvatarProps {
    isClubMember: boolean;
    progress: number;
    step: UserIntroSetupStep;
    steps: UserIntroSetupStep[];
    nextStep: () => void;
    prevStep: () => void;
}

export function UserAvatar(props: UserAvatarProps) {
    const { selectedAvatar } = useEditUserDetails(props.nextStep);
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

    function submit() {
        props.nextStep();
    }

    return (
        <Base
            headerTkey="userIntroSetup.headers.setAvatar"
            step={props.step}
            steps={props.steps}
            handleSubmit={submit}
            prevStep={props.prevStep}
            content={
                <>
                    <Description
                        illustration={
                            <Image
                                width={winWidth / 2}
                                style={Styles.illustration}
                                uri={require('../../assets/2.png')}
                            />
                        }
                        tkey="userIntroSetup.descriptions.setAvatar"
                    />
                    <View style={Styles.avatarButtonBox}>
                        <View style={GlobalStyles.shadowBasic}>
                            <TouchableOpacity onPress={openBottomMenu} style={Styles.avatarButton}>
                                <Image width={130} uri={selectedAvatar ? { uri: selectedAvatar } : null} />
                                {selectedAvatar ? null : (
                                    <View style={Styles.overlay}>
                                        <Icon
                                            name="camera"
                                            size={16}
                                            color={StylesValue(ThemeVariables.HighlightColor1)}
                                        />
                                        <Text
                                            color="blue"
                                            style={Styles.addButton}
                                            translateKey="userIntroSetup.buttons.addPhoto"
                                        />
                                    </View>
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            }
        />
    );
}
