import { PostCoordinates } from '@inspire/types';
import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import openMap from 'react-native-open-maps';

import { Image, Text } from 'components';
import { StylesValue } from 'tools';
import { Sizes, ThemeVariables } from 'types';

import { Styles as LocalizationStyles } from './styles';

interface LocalizationProps {
    coords: PostCoordinates;
    text: string;
}

export function Localization(props: LocalizationProps) {
    function openMapHandle() {
        openMap({
            zoom: 18,
            latitude: props.coords.lat,
            longitude: props.coords.lng,
            navigate_mode: 'navigate',
            travelType: 'walk',
        });
    }

    return (
        <View style={LocalizationStyles.contentContainer}>
            <TouchableOpacity style={LocalizationStyles.touchable} onPress={openMapHandle}>
                <View style={LocalizationStyles.imageBox}>
                    <Image
                        width={20}
                        height={20}
                        tintColor={StylesValue(ThemeVariables.HighlightColor1)}
                        uri={require('../../../../assets/post/pin.png')}
                    />
                </View>
                <Text numberOfLines={1} fontSize={Sizes.Small} color="blue">
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
