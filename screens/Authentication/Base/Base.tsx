import { isIphone } from 'app-constants';
import React from 'react';

import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { GlobalStyles } from 'global-styles';
import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

import { Styles } from '../styles';

interface BaseProps {
    children: any;
}

export function Base(props: BaseProps) {
    return (
        <SafeAreaView style={Styles.contentContainer}>
            <LinearGradient
                colors={[
                    StylesValue(ThemeVariables.BlackAndWhite),
                    StylesValue(ThemeVariables.LightBlueAndBlack),
                    StylesValue(ThemeVariables.LightBlueAndBlack),
                    StylesValue(ThemeVariables.LightBlueAndBlack),
                ]}
                style={Styles.linearGradient}>
                <KeyboardAvoidingView
                    style={[Styles.loginContainer, GlobalStyles.shadowBasic]}
                    behavior={isIphone ? 'padding' : undefined}>
                    {props.children}
                </KeyboardAvoidingView>
            </LinearGradient>
        </SafeAreaView>
    );
}
