import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Text } from 'components/Text';
import { StylesValue } from 'tools';
import { BottomMenuItem, Sizes, ThemeVariables } from 'types';

import { Styles } from './styles';

interface BackBoxProps {
    child: React.ReactElement<BottomMenuItem>;
    backHandle: () => void;
}

export function BackBox(props: BackBoxProps) {
    return (
        <View style={Styles.contentContainer}>
            <TouchableOpacity style={Styles.touchableArea} onPress={props.backHandle}>
                <Icon name="chevron-left" size={18} color={StylesValue(ThemeVariables.Color1)} />
            </TouchableOpacity>
            <Text numberOfLines={1} style={Styles.label} fontSize={Sizes.Large}>
                {props.child.props.title}
            </Text>
            {props.child.props.helpText ? (
                <Text style={Styles.hintText} color="gray" fontSize={Sizes.Medium}>
                    {props.child.props.helpText}
                </Text>
            ) : null}
        </View>
    );
}
