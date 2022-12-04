import React from 'react';

import { Image, View } from 'react-native';

import { Text } from 'components/Text';
import { Sizes } from 'types';

import { Styles } from './styles';

interface PostLocationProps {
    location: string;
}

export function PostLocation(props: PostLocationProps) {
    return (
        <View style={Styles.contentContainer}>
            <Image style={Styles.iconBox} source={require('./../../../assets/post/pin.png')} />
            <Text numberOfLines={1} fontSize={Sizes.XSmall} color="gray">
                {props.location}
            </Text>
        </View>
    );
}
