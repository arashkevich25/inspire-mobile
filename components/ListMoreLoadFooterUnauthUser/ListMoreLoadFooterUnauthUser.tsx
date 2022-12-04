import React from 'react';
import { Text } from '../Text';

import { ActivityIndicator, View } from 'react-native';
import { LoadingFooter } from 'react-native-spring-scrollview';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types/ThemeVariables';

import { Styles } from './styles';

export class ListMoreLoadFooterUnauthUser extends LoadingFooter {
    static height = 60;

    render() {
        if (this.state.status === 'allLoaded') {
            return (
                <View style={Styles.contentContainer}>
                    <Text color="gray" style={Styles.text} translateKey="text.dataAllLoadedUnauthUser" />
                </View>
            );
        }

        return (
            <View style={Styles.contentContainer}>
                <ActivityIndicator size="small" color={StylesValue(ThemeVariables.TextColor1)} />
            </View>
        );
    }
}
