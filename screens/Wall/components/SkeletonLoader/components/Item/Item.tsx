import { ImagePostSize } from 'app-constants/ImagePostSize';
import React from 'react';

import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { calcPhotoHeight, StylesValue, winWidth } from 'tools';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

export function Item() {
    return (
        <View style={Styles.contentContainer}>
            <SkeletonPlaceholder
                backgroundColor={StylesValue(ThemeVariables.Color2)}
                highlightColor={StylesValue(ThemeVariables.BackgroundColor2)}>
                <View style={Styles.box1}>
                    <View style={Styles.box2}>
                        <View style={Styles.box3} />
                        <View style={Styles.box4} />
                    </View>
                    <View>
                        <View style={Styles.box5} />
                    </View>
                </View>
                <View
                    style={[
                        Styles.fullWidth,
                        {
                            height: calcPhotoHeight(ImagePostSize.Height, ImagePostSize.Width, winWidth),
                        },
                    ]}
                />
                <View style={Styles.box6}>
                    <View style={Styles.box7} />
                    <View style={Styles.box8} />
                </View>
                <View style={Styles.box9}>
                    <View style={Styles.box10} />
                </View>
                <View style={Styles.box11}>
                    <View style={Styles.box12} />
                </View>
            </SkeletonPlaceholder>
        </View>
    );
}
