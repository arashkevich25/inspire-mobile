import React from 'react';

import FastImage from 'react-native-fast-image';

import { Styles } from './styles';

interface PhotoProps {
    photoUri: string;
    index: number;
}

export function Photo(props: PhotoProps) {
    return (
        <FastImage
            source={{ uri: props.photoUri, priority: FastImage.priority.high }}
            resizeMode={FastImage.resizeMode.cover}
            style={Styles.contentContainer}
        />
    );
}
