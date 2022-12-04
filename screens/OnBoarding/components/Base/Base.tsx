import React from 'react';

import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Image, Text } from 'components';
import { StylesValue } from 'tools';
import { Sizes, ThemeVariables } from 'types';

import { Styles } from './styles';

interface BaseProps {
    image: any;
    title: string;
    description: string;
}

export function Base(props: BaseProps) {
    return (
        <LinearGradient
            colors={[StylesValue(ThemeVariables.BlackAndWhite), StylesValue(ThemeVariables.LightBlueAndBlack)]}
            style={Styles.contentContainer}>
            <View style={Styles.logoBox}>
                <Image width={77} uri={require('../../../../assets/simplelogo.png')} />
            </View>
            <View style={Styles.illustrationContainer}>
                <Image width={350} style={Styles.mainIllustration} uri={props.image} />
                <View style={Styles.illustrationBackgroundBox}>
                    <Image width={124} style={Styles.illustrationBackground} uri={require('../../assets/b1.png')} />
                </View>
            </View>
            <View>
                <Text isBold={true} fontSize={Sizes.Large} style={Styles.titleText}>
                    {props.title}
                </Text>
                <Text color="gray" style={Styles.descriptionText}>
                    {props.description}
                </Text>
            </View>
            <View></View>
        </LinearGradient>
    );
}
