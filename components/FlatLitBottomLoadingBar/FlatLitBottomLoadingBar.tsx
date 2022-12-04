import React from 'react';

import { ActivityIndicator, View } from 'react-native';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

interface FlatLitBottomLoadingBarProps {
    isLoading: boolean;
}

export function FlatLitBottomLoadingBar(props: FlatLitBottomLoadingBarProps) {
    return (
        <>
            {props.isLoading ? (
                <View style={Styles.contentContainer}>
                    <ActivityIndicator size="small" color={StylesValue(ThemeVariables.TextColor1)} />
                </View>
            ) : null}
        </>
    );
}
