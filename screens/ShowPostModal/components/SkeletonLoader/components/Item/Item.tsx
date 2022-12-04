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
                <View
                    style={[
                        Styles.width4,
                        {
                            height: calcPhotoHeight(ImagePostSize.Height, ImagePostSize.Width, winWidth),
                            marginTop: -50,
                        },
                    ]}
                />
                <View style={Styles.box1}>
                    <View style={[Styles.height2, Styles.width1]} />
                    <View style={[Styles.height2, Styles.width1]} />
                    <View style={[Styles.height2, Styles.width2]} />
                </View>
                <View style={Styles.box1}>
                    <View style={[Styles.height2, Styles.width3]} />
                </View>
                <View style={Styles.box2}>
                    <View style={[Styles.circle]} />
                    <View>
                        <View style={[Styles.height3, Styles.width3, Styles.box2]} />
                        <View style={[Styles.height3, Styles.width3, Styles.box2]} />
                    </View>
                    <View style={[Styles.box6]} />
                </View>
                <View style={Styles.box3}>
                    <View style={[Styles.height3, Styles.width3]} />
                    <View style={[Styles.height3, Styles.width3]} />
                    <View style={[Styles.height3, Styles.width3]} />
                    <View style={[Styles.height3, Styles.width3]} />
                    <View style={[Styles.height3, Styles.width3]} />
                    <View style={[Styles.height3, Styles.width3]} />
                    <View style={[Styles.height3, Styles.width3]} />
                    <View style={[Styles.height3, Styles.width3]} />
                </View>
                <View style={Styles.box1}>
                    <View style={[Styles.height2, Styles.width2]} />
                    <View style={[Styles.height2, Styles.width2]} />
                    <View style={[Styles.height2, Styles.width2]} />
                </View>
            </SkeletonPlaceholder>
        </View>
    );
}
