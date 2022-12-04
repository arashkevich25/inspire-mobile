import React from 'react';

import { View } from 'react-native';
import { WebView } from 'react-native-webview';

import { Text } from 'components';
import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

interface TextPageProps {
    title: string;
    text: string;
    isWeb: boolean;
}

export function TextPage(props: TextPageProps) {
    if (props.isWeb) {
        const textRaw = props.text.replace(
            'background-color: #f7f7f7;',
            `background-color: ${StylesValue(ThemeVariables.BackgroundColor1)};`,
        );
        const preparedText = textRaw.replace('color: white;', `color: ${StylesValue(ThemeVariables.WhiteAndBlack)};`);

        return (
            <View style={Styles.contentContainer}>
                <View style={Styles.titleContainer}>
                    <Text style={Styles.title}>{props.title}</Text>
                </View>
                <View style={Styles.webViewContainer}>
                    <WebView
                        originWhitelist={['*']}
                        startInLoadingState={false}
                        style={Styles.webView}
                        source={{
                            html: preparedText,
                        }}
                    />
                </View>
            </View>
        );
    }

    return (
        <View style={Styles.contentContainer}>
            <View style={Styles.titleContainer}>
                <Text style={Styles.title}>{props.title}</Text>
            </View>
            <View style={Styles.webViewContainer}>
                <Text isItalic={true} style={Styles.regularText}>
                    {props.text}
                </Text>
            </View>
        </View>
    );
}
