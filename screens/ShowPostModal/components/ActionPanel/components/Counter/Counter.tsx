import React from 'react';

import { View } from 'react-native';

import { Text } from 'components';
import { Sizes } from 'types';

import { Styles } from './styles';

interface CounterProps {
    counter: number;
}

export function Counter(props: CounterProps) {
    return (
        <View style={Styles.contentContainer}>
            <Text style={Styles.text} isBold={true} fontSize={Sizes.XSmall}>
                {props.counter}
            </Text>
        </View>
    );
}
