import React from 'react';

import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

export function SkeletonLoader() {
    return (
        <SkeletonPlaceholder
            backgroundColor={StylesValue(ThemeVariables.BackgroundColor2)}
            highlightColor={StylesValue(ThemeVariables.BackgroundColor4)}>
            <View style={Styles.contentContainer}>
                <View style={Styles.box} />
                <View style={Styles.box} />
                <View style={Styles.box} />
                <View style={Styles.box} />
                <View style={Styles.box} />
                <View style={Styles.box} />
                <View style={Styles.box} />
                <View style={Styles.box} />
                <View style={Styles.box} />
                <View style={Styles.box} />
                <View style={Styles.box} />
                <View style={Styles.box} />
                <View style={Styles.box} />
                <View style={Styles.box} />
                <View style={Styles.box} />
                <View style={Styles.box} />
                <View style={Styles.box} />
                <View style={Styles.box} />
            </View>
        </SkeletonPlaceholder>
    );
}
