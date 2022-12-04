import { StorageKeys } from 'app-constants';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

import { StatusBar } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { getPrepareBarStyleTheme } from 'tools';
import { getItemFromStorage } from 'tools/storage';

function baseHook(Component: any) {
    return class extends React.Component<any, any> {
        constructor(props: any) {
            super(props);
            this.state = {
                themeState: '',
            };
            this.setTheme();
        }

        async setTheme() {
            const themeState = await getItemFromStorage(StorageKeys.themeVersion);
            this.setState({
                themeState: getPrepareBarStyleTheme(themeState as any),
            });
        }

        render() {
            return (
                <Provider store={store}>
                    <StatusBar barStyle={this.state.themeState} />
                    <Component {...this.props} />
                </Provider>
            );
        }
    };
}

export const withThemeSetup = (Component: any) => gestureHandlerRootHOC(baseHook(Component));
