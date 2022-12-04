import { ImagePostSize } from 'app-constants/ImagePostSize';
import React from 'react';

import { TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

import { calcPhotoHeight, winWidth } from 'tools';
import { Name } from './components';

import { Styles } from './styles';

interface PhotoProps {
    uri: string;
    name: string;
    pressHandle: () => void;
}

export function Photo(props: PhotoProps) {
    return (
        <TouchableOpacity style={Styles.contentContainer} onPress={props.pressHandle} activeOpacity={1}>
            <FastImage
                resizeMode="cover"
                style={[Styles.image, { height: calcPhotoHeight(ImagePostSize.Height, ImagePostSize.Width, winWidth) }]}
                source={{ uri: props.uri, priority: FastImage.priority.high }}
            />
            <LinearGradient colors={['#00000000', '#0C0C0C']} style={Styles.nameCategoryContainer}>
                <Name name={props.name} />
            </LinearGradient>
        </TouchableOpacity>
    );
}
