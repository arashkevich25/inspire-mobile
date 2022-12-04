import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import { Text } from 'components';

import { Styles } from './styles';

interface ButtonShowMoreProps {
    showMoreHandle: () => void;
    text: string;
}

export function ButtonShowMore(props: ButtonShowMoreProps) {
    return (
        <TouchableOpacity activeOpacity={1} onPress={props.showMoreHandle}>
            <View style={Styles.contentContainer}>
                <Text style={Styles.text}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
}
