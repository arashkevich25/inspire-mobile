/* eslint-disable import/no-named-as-default */
import React from 'react';

import WebView from 'react-native-webview';

import { Loader } from './components';

import { Styles } from './styles';

export function WebViewModal(props: { uri: string }) {
    return (
        <WebView
            source={{ uri: props.uri }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            renderLoading={() => <Loader />}
            startInLoadingState={true}
            allowsBackForwardNavigationGestures={true}
            style={Styles.contentContainer}
        />
    );
}
