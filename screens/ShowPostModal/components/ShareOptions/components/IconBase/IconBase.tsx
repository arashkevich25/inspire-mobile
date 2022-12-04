import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import { Image, Text } from 'components';
import { Sizes } from 'types';

import { Styles } from '../../styles';

interface IconBaseProps {
    shareHandle: () => void;
    icon: any;
    title: string;
}

export function IconBase(props: IconBaseProps) {
    return (
        <TouchableOpacity style={Styles.itemBox} onPress={props.shareHandle}>
            <View style={[Styles.iconBox, Styles.textMargin]}>
                <Image width={56} uri={props.icon} />
            </View>
            <Text fontSize={Sizes.Small}>{props.title}</Text>
        </TouchableOpacity>
    );
}
