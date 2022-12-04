import React from 'react';

import { View } from 'react-native';

import { Photo } from 'components';

import { Styles } from './styles';

interface PhotoGridProps {
    photos: string[];
    unselectPhoto: (uri: string) => void;
}

export function PhotoGrid(props: PhotoGridProps) {
    return (
        <View style={Styles.contentContainer}>
            {props.photos.map(photo => (
                <Photo unselectPhoto={props.unselectPhoto} key={photo} photo={photo} />
            ))}
        </View>
    );
}
