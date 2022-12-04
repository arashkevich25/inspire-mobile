import React from 'react';

import { View } from 'react-native';

import { Text } from 'components';
import { Sizes } from 'types';

import { Styles } from './styles';

interface NavigationHeaderProps {
    postName: string;
    url: string;
}

export function NavigationHeader(props: NavigationHeaderProps) {
    return (
        <View style={Styles.contentContainer}>
            <Text numberOfLines={1} style={Styles.text} fontSize={Sizes.Medium}>
                {props.postName}
            </Text>
            <View style={Styles.textContainer}>
                <View style={Styles.textBox}>
                    <Text style={Styles.text} fontSize={Sizes.Small} numberOfLines={1}>
                        {props.url}
                    </Text>
                </View>
            </View>
        </View>
    );
}
