import { isIphone } from 'app-constants';
import React from 'react';

import { KeyboardAvoidingView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useEditUserDetails } from 'hooks';
import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';
import { BasicData } from './components';

import { Styles } from './styles';

export function EditUserDetails() {
    const {
        submitContactData,
        submitNewDetails,
        updateUserDetailsIsPending,
        profileData,
        contactData,
        selectedAvatar,
    } = useEditUserDetails();
    return (
        <LinearGradient
            colors={[StylesValue(ThemeVariables.BlackAndWhite), StylesValue(ThemeVariables.LightBlueAndBlack)]}
            style={Styles.contentContainer}>
            <KeyboardAvoidingView behavior={isIphone ? 'padding' : undefined}>
                <BasicData
                    selectedAvatar={selectedAvatar}
                    contactData={contactData}
                    updateIsPending={updateUserDetailsIsPending}
                    submitHandle={submitNewDetails}
                    submitUpdateContactData={submitContactData}
                    userDetails={profileData}
                />
            </KeyboardAvoidingView>
        </LinearGradient>
    );
}
