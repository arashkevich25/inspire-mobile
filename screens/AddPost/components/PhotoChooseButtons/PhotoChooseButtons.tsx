import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { addPost } from 'e2e/selectors';
import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

interface PhotoChooseButtonsProps {
    openPickerHandle: () => void;
    takePhoto: () => void;
}

export function PhotoChooseButtons(props: PhotoChooseButtonsProps) {
    return (
        <View>
            <View style={Styles.contentContainer}>
                <TouchableOpacity onPress={props.openPickerHandle} style={Styles.imageIconBox}>
                    <Icon
                        testID={addPost.buttons.photosFromGallery}
                        name="image"
                        size={40}
                        color={StylesValue(ThemeVariables.HighlightColor1)}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={props.takePhoto}>
                    <Icon
                        testID={addPost.buttons.choosePhoto}
                        name="camera"
                        size={40}
                        color={StylesValue(ThemeVariables.HighlightColor1)}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}
