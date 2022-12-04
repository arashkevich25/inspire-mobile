import React from 'react';
import { Sizes } from '../../types/Sizes';
import { ThemeVariables } from '../../types/ThemeVariables';
import { Text } from '../Text';

import { TextInput, TextInputProps, View } from 'react-native';

import { ActiveTheme } from 'models';
import { StylesValue } from 'tools';
import { PlaceholderColor } from 'types';

import { Styles } from './styles';

interface InputBorderedProps extends TextInputProps {
    translateKey?: string;
    isEditable?: boolean;
    placeholderColor?: PlaceholderColor;
    innerRef?: any;
    topTitle?: string;
    error?: any;
    errorIsPossible?: boolean;
    children?: any;
    hasBackground?: boolean;
}

export function InputBordered(props: InputBorderedProps) {
    return (
        <View style={Styles.contentContainer}>
            {props.topTitle ? (
                <Text color="color1" fontSize={Sizes.Medium} style={Styles.topTitleText}>
                    {props.topTitle}
                </Text>
            ) : null}
            <TextInput
                ref={props.innerRef}
                keyboardAppearance={ActiveTheme.theme}
                allowFontScaling={false}
                placeholderTextColor={StylesValue(ThemeVariables.Color1)}
                editable={props.isEditable}
                style={[
                    Styles.inputBox,
                    props.error ? Styles.error : null,
                    props.hasBackground ? Styles.background : null,
                    props.multiline ? Styles.alignTop : null,
                ]}
                {...props}
            />
            {props.errorIsPossible ? (
                <Text fontSize={Sizes.XSmall} style={[Styles.errorText, props.error ? Styles.errorTextVisible : null]}>
                    {props.error}
                </Text>
            ) : null}
            {props.children}
        </View>
    );
}
