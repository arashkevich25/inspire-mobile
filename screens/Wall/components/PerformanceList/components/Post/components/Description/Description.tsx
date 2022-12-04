import React from 'react';

import { TouchableOpacity } from 'react-native';

import { Text } from 'components';

import { Styles } from './styles';

interface DescriptionProps {
    onPressHandle: () => void;
    desc: string;
}

export function Description(props: DescriptionProps) {
    return (
        <TouchableOpacity style={Styles.contentContainer} onPress={props.onPressHandle}>
            <Text style={Styles.text} numberOfLines={1}>
                {props.desc}
            </Text>
        </TouchableOpacity>
    );
}
