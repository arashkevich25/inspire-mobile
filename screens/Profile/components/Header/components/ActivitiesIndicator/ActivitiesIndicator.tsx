import { ComponentId } from 'navigation/constants';
import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Badge, Image } from 'components';
import { useActivity } from 'hooks';
import { Activities } from 'navigation/components';
import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

export function ActivitiesIndicator() {
    const { newActivity } = useActivity();

    async function openActivity() {
        await Navigation.push(ComponentId.AppRootProfile, {
            component: Activities,
        });
    }
    return (
        <TouchableOpacity onPress={openActivity} style={Styles.contentContainer}>
            <View style={Styles.badgeBox}>{newActivity ? <Badge /> : null}</View>
            <Image
                width={20}
                tintColor={newActivity ? StylesValue(ThemeVariables.TextColor1) : StylesValue(ThemeVariables.Color2)}
                uri={require('../../../../assets/alarm.png')}
            />
        </TouchableOpacity>
    );
}
