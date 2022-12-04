import React from 'react';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

import { styles } from './styles';

interface FloatBackButtonProps {
    backHandle: () => void;
    disabledBackground?: boolean;
    color?: string;
}

export function FloatBackButton(props: FloatBackButtonProps) {
    return (
        <TouchableOpacity
            onPress={props.backHandle}
            style={[styles.contentContainer, props.disabledBackground ? null : styles.hasBackground]}>
            <Icon
                name="angle-left"
                size={35}
                color={
                    props.disabledBackground
                        ? props.color || StylesValue(ThemeVariables.White)
                        : props.color || StylesValue(ThemeVariables.Color1)
                }
            />
        </TouchableOpacity>
    );
}
