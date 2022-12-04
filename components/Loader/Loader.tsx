import React from 'react';

import { ActivityIndicator, View } from 'react-native';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

export function Loader() {
    return (
        <View style={Styles.contentContainer}>
            <ActivityIndicator size="small" color={StylesValue(ThemeVariables.TextColor1)} />
        </View>
    );
}
