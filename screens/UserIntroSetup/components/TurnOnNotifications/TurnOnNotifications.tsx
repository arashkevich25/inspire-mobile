import { StorageKeys } from 'app-constants';
import React from 'react';
import { Base } from '../Base';

import { View } from 'react-native';

import { Image } from 'components';
import { oneSignalInit, setItemToStorage, StylesValue } from 'tools';
import { ThemeVariables, UserIntroSetupStep } from 'types';

import { Styles } from '../../styles';

interface TurnOnNotificationsProps {
    progress: number;
    nextStep: () => void;
    step: UserIntroSetupStep;
    steps: UserIntroSetupStep[];
    prevStep: () => void;
}

export function TurnOnNotifications(props: TurnOnNotificationsProps) {
    async function agreePermission() {
        oneSignalInit();
        await setItemToStorage(StorageKeys.NotificationPermissionHasAsked, 'true');
        props.nextStep();
    }
    return (
        <Base
            headerTkey="getNotificationPermission.title"
            descriptionTkey="getNotificationPermission.description"
            step={props.step}
            steps={props.steps}
            handleSubmit={agreePermission}
            prevStep={props.prevStep}
            content={
                <View style={Styles.iconBox}>
                    <Image
                        tintColor={StylesValue(ThemeVariables.TextColor1)}
                        width={60}
                        uri={require('./assets/alert.png')}
                    />
                </View>
            }
        />
    );
}
