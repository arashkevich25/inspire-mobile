import React from 'react';

import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

interface ItemProps {
    height: number;
}

export function Item(props: ItemProps) {
    return (
        <View style={Styles.contentContainer}>
            <SkeletonPlaceholder
                backgroundColor={StylesValue(ThemeVariables.Color2)}
                highlightColor={StylesValue(ThemeVariables.BackgroundColor2)}>
                <View style={[Styles.divider, Styles.borderRadius, { height: props.height }]} />
            </SkeletonPlaceholder>
        </View>
    );
}
