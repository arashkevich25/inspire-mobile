import React from 'react';
import { Text } from '../Text';

import { ActivityIndicator, Keyboard, TouchableOpacity, View } from 'react-native';

import { GlobalStyles } from 'global-styles';
import { StylesValue } from 'tools';
import { Sizes, ThemeVariables } from 'types';

import { Styles } from './styles';

interface ButtonFilledProps {
    text?: string;
    onPressHandle: () => void;
    isLoading?: boolean;
    loaderPxSize?: number;
    translateKey?: string;
    isDisabled?: boolean;
    fontSize?: Sizes;
    children?: any;
    icon?: any;
}

export function ButtonFilled(props: ButtonFilledProps) {
    function onPress() {
        Keyboard.dismiss();
        props.onPressHandle();
    }
    return (
        <TouchableOpacity
            disabled={props.isDisabled}
            style={[Styles.contentContainer, GlobalStyles.shadowBasic, props.isDisabled ? Styles.disabled : null]}
            onPress={onPress}
            {...props}>
            {props.translateKey ? (
                <Text
                    color="white"
                    fontSize={props.fontSize || Sizes.Large}
                    isBold={true}
                    translateKey={props.translateKey}
                />
            ) : (
                <Text color="white" fontSize={props.fontSize || Sizes.Large} isBold={true}>
                    {props.text}
                </Text>
            )}
            {props.icon}
            {props.isLoading ? (
                <View style={Styles.loaderBox}>
                    <ActivityIndicator color={StylesValue(ThemeVariables.WhiteAndBlue)} />
                </View>
            ) : null}
        </TouchableOpacity>
    );
}
