/* eslint-disable import/no-named-as-default */
import React from 'react';

import { ActivityIndicator, View } from 'react-native';
import WebView from 'react-native-webview';

import { ButtonFilled } from 'components';
import { lpPages } from 'configs/lpPages';

import { Styles } from './styles';

interface ApproveSocialLoginAppPolicyProps {
    acceptFunction: () => void;
}

export function ApproveSocialLoginAppPolicy(props: ApproveSocialLoginAppPolicyProps) {
    return (
        <>
            <WebView
                source={{ uri: lpPages.rules }}
                javaScriptEnabled={true}
                cacheEnabled={true}
                startInLoadingState={true}
                renderLoading={() => (
                    <View style={Styles.loaderContainer}>
                        <ActivityIndicator size="large" />
                    </View>
                )}
                style={Styles.webContent}
            />
            <View style={Styles.buttonContainer}>
                <ButtonFilled translateKey="signUp.text.termsAndConditions" onPressHandle={props.acceptFunction} />
            </View>
        </>
    );
}
