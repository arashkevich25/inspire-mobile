import React from 'react';

import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

export function Item() {
    return (
        <View style={Styles.contentContainer}>
            <SkeletonPlaceholder
                backgroundColor={StylesValue(ThemeVariables.BackgroundColor1)}
                highlightColor={StylesValue(ThemeVariables.BackgroundColor2)}>
                <View style={Styles.contentBox}>
                    <View style={Styles.box1} />
                    <View style={Styles.box2}>
                        <View style={Styles.box3} />
                        <View style={Styles.box4} />
                    </View>
                </View>
            </SkeletonPlaceholder>
        </View>
    );
}
