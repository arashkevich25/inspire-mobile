import React from 'react';

import { ActivityIndicator, View } from 'react-native';

import { Styles } from './styles';

export function Loader() {
    return (
        <View style={Styles.contentContainer}>
            <ActivityIndicator />
        </View>
    );
}
