import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import { Text } from 'components';
import { Sizes } from 'types';

import { Styles } from './styles';

interface MapButtonProps {
    text: string;
    onPress: () => void;
}

export function MapButton(props: MapButtonProps) {
    return (
        <View style={Styles.contentContainer}>
            <TouchableOpacity style={Styles.button} onPress={props.onPress}>
                <Text numberOfLines={0} fontSize={Sizes.Large} style={Styles.text}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
