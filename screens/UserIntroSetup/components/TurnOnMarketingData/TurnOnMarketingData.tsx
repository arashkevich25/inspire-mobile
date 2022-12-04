import { StorageKeys } from 'app-constants';
import React from 'react';
import { Base } from '../Base';

import { View } from 'react-native';
import { requestTrackingPermission } from 'react-native-tracking-transparency';

import { Image } from 'components';
import { setItemToStorage, StylesValue } from 'tools';
import { ThemeVariables, UserIntroSetupStep } from 'types';

import { Styles } from '../../styles';

interface TurnOnMarketingDataProps {
    progress: number;
    nextStep: () => void;
    step: UserIntroSetupStep;
    steps: UserIntroSetupStep[];
    prevStep: () => void;
}

export function TurnOnMarketingData(props: TurnOnMarketingDataProps) {
    async function agreePermission() {
        await requestTrackingPermission();
        await setItemToStorage(StorageKeys.TrackingStatus, 'true');
        props.nextStep();
    }

    return (
        <Base
            headerTkey="userIntroSetup.headers.turnOnMarketingData"
            descriptionTkey="userIntroSetup.descriptions.turnOnMarketingData"
            step={props.step}
            steps={props.steps}
            handleSubmit={agreePermission}
            prevStep={props.prevStep}
            content={
                <View style={Styles.iconBox}>
                    <Image
                        tintColor={StylesValue(ThemeVariables.TextColor1)}
                        width={60}
                        uri={require('./assets/track.png')}
                    />
                </View>
            }
        />
    );
}
