import React from 'react';

import { View } from 'react-native';

import { Image } from 'components/Image/Image';
import { ComponentSizes } from 'types';

import { Styles } from '../../styles';

interface ImageAvatarProps {
    image: any;
    size?: ComponentSizes;
}

export function ImageAvatar(props: ImageAvatarProps) {
    let imageSize;
    let avatarContainer;

    switch (props.size) {
        case 'large': {
            imageSize = 90;
            avatarContainer = 'largeContainer';
            break;
        }

        case 'double-large': {
            imageSize = 180;
            avatarContainer = 'doubleLargeContainer';
            break;
        }

        case 'small': {
            imageSize = 30;
            avatarContainer = 'smallContainer';
            break;
        }

        case 'medium': {
            imageSize = 40;
            avatarContainer = 'mediumContainer';
            break;
        }

        case 'l-medium': {
            imageSize = 60;
            avatarContainer = 'lMediumContainer';
            break;
        }

        default: {
            imageSize = 40;
            avatarContainer = 'mediumContainer';
        }
    }

    return (
        <View style={[Styles[avatarContainer], Styles.avatarBackground]}>
            <Image style={Styles[avatarContainer]} width={imageSize} height={imageSize} uri={props.image} />
        </View>
    );
}
