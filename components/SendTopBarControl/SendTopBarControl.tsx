import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

interface SendTopBarControlProps {
    pressHandle: () => void;
}

export function SendTopBarControl(props: SendTopBarControlProps) {
    function pressHandle() {
        props.pressHandle();
    }
    return (
        <View>
            <TouchableOpacity onPress={pressHandle}>
                <Icon name="send" size={22} color={StylesValue(ThemeVariables.Color1)} />
            </TouchableOpacity>
        </View>
    );
}
