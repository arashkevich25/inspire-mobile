import React from 'react';

import { View } from 'react-native';

import { Text } from 'components/Text';

import { Styles } from './styles';

interface EmptyPlugProps {
    text: string;
}

export function EmptyPlug(props: EmptyPlugProps) {
    return (
        <View style={Styles.contentContainer}>
            <Text style={Styles.text}>{props.text}</Text>
        </View>
    );
}
