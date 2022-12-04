import React from 'react';

import { Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

interface FacebookButtonProps {
    fbLink: string;
}

export function FacebookButton(props: FacebookButtonProps) {
    async function openFbProfile() {
        await Linking.openURL(props.fbLink);
    }

    return (
        <TouchableOpacity onPress={openFbProfile}>
            <Icon name="facebook-square" size={30} color={StylesValue(ThemeVariables.Color1)} />
        </TouchableOpacity>
    );
}
