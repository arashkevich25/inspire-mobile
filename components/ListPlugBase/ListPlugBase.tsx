import React from 'react';
import { Text } from '../Text';

import { View } from 'react-native';

import { Styles } from './styles';

interface ListPlugBaseProps {
    tkey: string;
    image: any;
}

export function ListPlugBase(props: ListPlugBaseProps) {
    return (
        <View style={Styles.contentContainer}>
            <View style={Styles.iconContainer}>{props.image}</View>
            <View style={Styles.labelContainer}>
                <Text color="gray" style={Styles.label} translateKey={props.tkey} />
            </View>
        </View>
    );
}
