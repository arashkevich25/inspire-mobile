import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

import { SafeAreaView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { client } from 'configs/graphql';
import { ActiveTheme } from 'models';
import { getPrepareBarStyleTheme } from 'tools';
import { ThemeVariables } from 'types';

function baseHook(Component: any) {
    return class extends React.Component<any, any> {
        render() {
            return (
                <Provider store={store}>
                    <ApolloProvider client={client}>
                        <SafeAreaView style={Styles.contentContainer}>
                            <StatusBar barStyle={getPrepareBarStyleTheme(ActiveTheme.theme)} />
                            <Component {...this.props} />
                        </SafeAreaView>
                    </ApolloProvider>
                </Provider>
            );
        }
    };
}

export const Styles = EStyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: ThemeVariables.BlackAndWhite,
    },
});

export const withAppSetup = (Component: any) => gestureHandlerRootHOC(baseHook(Component));
