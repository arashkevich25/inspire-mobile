import React from 'react';

import { ActivityIndicator, View } from 'react-native';
import { LoadingFooter } from 'react-native-spring-scrollview';

import { Text } from 'components/Text';
import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

export class ListMoreLoadFooter extends LoadingFooter {
    static height = 60;

    render() {
        if (this.state.status === 'allLoaded') {
            return (
                <View style={Styles.contentContainer}>
                    <Text color="gray" style={Styles.text} translateKey="text.dataAllLoaded" />
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
