import React from 'react';

import { View } from 'react-native';

import { Text } from 'components/Text';
import { getAvatarWords } from 'tools';
import { ComponentSizes } from 'types';

import { Styles } from '../../styles';

interface NameAvatarProps {
    fallback: string;
    size?: ComponentSizes;
}

export function FallbackAvatar(props: NameAvatarProps) {
    let lineHeight;
    let fontSize;
    let avatarContainer;

    switch (props.size) {
        case 'large': {
            lineHeight = 87;
            fontSize = 30;
            avatarContainer = 'largeContainer';
            break;
        }

        case 'small': {
            lineHeight = 27;
            fontSize = 14;
            avatarContainer = 'smallContainer';
            break;
        }

        case 'medium': {
            lineHeight = 37;
            fontSize = 16;
            avatarContainer = 'mediumContainer';
            break;
        }

        default: {
            lineHeight = 37;
            fontSize = 16;
            avatarContainer = 'mediumContainer';
        }
    }

    return (
        <View style={[Styles[avatarContainer], Styles.fallbackBackground]}>
            <Text color="black" style={[Styles.textAlign, { lineHeight, fontSize }]}>
                {getAvatarWords(props.fallback)}
            </Text>
        </View>
    );
}
