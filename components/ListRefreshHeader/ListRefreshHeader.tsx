import React from 'react';

import { ActivityIndicator, View } from 'react-native';
import { RefreshHeader } from 'react-native-spring-scrollview/RefreshHeader';

import { StylesValue } from 'tools/StylesValue';
import { ThemeVariables } from 'types/ThemeVariables';

import { Styles } from './styles';

export class ListRefreshHeader extends RefreshHeader {
    static height = 60;

    render() {
        return (
            <View style={Styles.contentContainer}>
                <ActivityIndicator size="small" color={StylesValue(ThemeVariables.TextColor1)} />
            </View>
        );
    }
}
