import React from 'react';
import { Sizes } from '../../../../../../types/Sizes';

import LinearGradient from 'react-native-linear-gradient';

import { Text } from 'components';

import { Styles } from './styles';

interface PostTitleProps {
    title: string;
    index: number;
}

export function PostTitle(props: PostTitleProps) {
    return (
        <LinearGradient colors={['#00000000', '#0C0C0C']} style={Styles.contentContainer}>
            <Text fontSize={Sizes.Medium} numberOfLines={1} isBold={true} color="white" style={Styles.text}>
                {props.title}
            </Text>
        </LinearGradient>
    );
}
