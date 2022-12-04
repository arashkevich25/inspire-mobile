import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Image } from 'components';
import { StylesValue, winWidth } from 'tools';
import { ThemeVariables } from 'types';
import { Styles as BasicPostPhotoStyles } from '../../../../../../../../../AddBasicPost/components/AddForm/components/HeaderImageScroll/components/ImageSlider/styles';

import { Styles } from './styles';

interface PhotoProps {
    photo: string;
    unselectPhoto: (uri: string) => void;
}

export function Photo(props: PhotoProps) {
    function removePress() {
        props.unselectPhoto(props.photo);
    }
    return (
        <View style={Styles.contentContainer}>
            <Image width={(winWidth - 50) / 3} uri={{ uri: props.photo }} />
            <View style={BasicPostPhotoStyles.removeIconContainer}>
                <TouchableOpacity onPress={removePress}>
                    <Icon name="remove" size={22} color={StylesValue(ThemeVariables.Color1)} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
