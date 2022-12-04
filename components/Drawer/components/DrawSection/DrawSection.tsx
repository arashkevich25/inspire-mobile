import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import { Text } from 'components';
import { Sizes } from 'types';

import { Styles } from './styles';

interface DrawSectionProps {
    title: string;
    value: number;
    pressHandle?: () => void;
}

export function DrawSection(props: DrawSectionProps) {
    if (!props.pressHandle) {
        return (
            <View style={Styles.contentContainer}>
                <Text fontSize={Sizes.Large} style={Styles.text}>
                    {props.value}
                </Text>
                <Text fontSize={Sizes.Small} style={Styles.text}>
                    {props.title}
                </Text>
            </View>
        );
    }
    return (
        <View style={Styles.contentContainer}>
            <TouchableOpacity onPress={props.pressHandle} style={Styles.pressContainer}>
                <Text fontSize={Sizes.Large} style={Styles.text}>
                    {props.value}
                </Text>
                <Text color="blue" fontSize={Sizes.Small} style={Styles.text}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
