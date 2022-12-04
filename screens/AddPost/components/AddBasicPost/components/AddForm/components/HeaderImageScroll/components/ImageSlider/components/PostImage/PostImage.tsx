import React from 'react';

import { Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

interface PostImageProps {
    imgUri: string;
    removeHandle: (uri: string) => void;
}

export function PostImage(props: PostImageProps) {
    function removePress() {
        props.removeHandle(props.imgUri);
    }
    return (
        <View style={Styles.contentContainer}>
            <Image style={Styles.image} source={{ uri: props.imgUri }} />
            <View style={Styles.removeIconContainer}>
                <TouchableOpacity onPress={removePress}>
                    <Icon name="remove" size={22} color={StylesValue(ThemeVariables.White)} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
