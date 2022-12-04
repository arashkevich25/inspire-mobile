import React from 'react';

import { View } from 'react-native';

import { Text } from 'components';
import { Sizes } from 'types';

import { Styles } from './styles';

export function BottomLabel() {
    return (
        <View style={Styles.contentContainer}>
            <Text color="gray" isBold={true} style={Styles.text} fontSize={Sizes.Large}>
                Polecaj! Dziel się! Inspiruj!
            </Text>
            <Text color="gray" style={Styles.text} fontSize={Sizes.Small}>
                www.app-inspire.net
            </Text>
        </View>
    );
}
