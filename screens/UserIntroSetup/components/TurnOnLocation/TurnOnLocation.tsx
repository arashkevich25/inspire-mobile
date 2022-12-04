import { StorageKeys } from 'app-constants';
import React from 'react';
import { Base } from '../Base';

import Geolocation from '@react-native-community/geolocation';
import { View } from 'react-native';

import { Image } from 'components';
import { setItemToStorage, StylesValue } from 'tools';
import { ThemeVariables, UserIntroSetupStep } from 'types';

import { Styles } from '../../styles';

interface TurnOnLocationProps {
    progress: number;
    nextStep: () => void;
    step: UserIntroSetupStep;
    steps: UserIntroSetupStep[];
    prevStep: () => void;
}

export function TurnOnLocation(props: TurnOnLocationProps) {
    function agreePermission() {
        Geolocation.requestAuthorization();
        setItemToStorage(StorageKeys.LocationPermissionHasAsked, 'true');
        props.nextStep();
    }
    return (
        <Base
            headerTkey="getLocationPermission.title"
            descriptionTkey="getLocationPermission.description"
            step={props.step}
            steps={props.steps}
            handleSubmit={agreePermission}
            prevStep={props.prevStep}
            content={
                <View style={Styles.imageBox}>
                    <Image
                        tintColor={StylesValue(ThemeVariables.TextColor1)}
                        width={60}
                        uri={require('./assets/location.png')}
                    />
                </View>
            }
        />
    );
}
