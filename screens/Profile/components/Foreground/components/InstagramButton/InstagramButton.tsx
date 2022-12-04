import React from 'react';

import { Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

interface InstagramButtonProps {
    instagramUrl: string;
}

export function InstagramButton(props: InstagramButtonProps) {
    async function openInstagramProfile() {
        await Linking.openURL(props.instagramUrl);
    }

    return (
        <TouchableOpacity onPress={openInstagramProfile}>
            <Icon name="instagram" size={30} color={StylesValue(ThemeVariables.Color1)} />
        </TouchableOpacity>
    );
}
