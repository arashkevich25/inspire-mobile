import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { client } from 'configs/graphql';

function baseHook(Component: any) {
    return class extends React.Component<any, any> {
        render() {
            return (
                <Provider store={store}>
                    <ApolloProvider client={client}>
                        <Component {...this.props} />
                    </ApolloProvider>
                </Provider>
            );
        }
    };
}

export const withAppSetupWithoutSafeArea = (Component: any) => gestureHandlerRootHOC(baseHook(Component));
