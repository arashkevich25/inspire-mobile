import { StorageKeys, ThemeOptions } from 'app-constants';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { addEventListener, NetInfoState } from '@react-native-community/netinfo';
// @ts-ignore
import { ActivityIndicator, useColorScheme, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import splashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';

import { initUserIntroSetupSteps, switchScreens } from 'actions';
import { Logo } from 'components/TilesLogo/components';
import { offlineLink, setClient } from 'configs/graphql';
import { useNetworkState, useQueue, useStorageQueuedPosts } from 'hooks';
import { ActiveTheme } from 'models';
import { getItemFromStorage, StylesValue } from 'tools';
import I18n from 'tools/translate';
import { ThemeVariables } from 'types';
import { BottomLabel } from './components';

import { Styles } from './styles';

export function Switcher() {
    const dispatch = useDispatch();
    const colorScheme = useColorScheme();
    const { addToQueueAction } = useQueue();
    const { rehydrateFromStorage } = useStorageQueuedPosts(addToQueueAction);
    const lastInternetState = useRef(true);
    const timeout = useRef<NodeJS.Timeout>();
    const { setInternetReachableState } = useNetworkState();

    async function start() {
        Promise.all([getItemFromStorage(StorageKeys.themeVersion), getItemFromStorage(StorageKeys.autoTheme)]).then(
            async (value: any) => {
                if (value[1] === 'true') {
                    ActiveTheme.setTheme(colorScheme);
                } else {
                    ActiveTheme.setTheme(value[0] || ThemeOptions.Light);
                }

                await Navigation.setDefaultOptions({
                    layout: {
                        orientation: ['portrait'],
                        backgroundColor: StylesValue(ThemeVariables.BlackAndWhite),
                        componentBackgroundColor: StylesValue(ThemeVariables.BlackAndWhite),
                    },
                    topBar: {
                        backButton: {
                            color: StylesValue(ThemeVariables.BlueAndWhite),
                        },
                        title: {
                            color: StylesValue(ThemeVariables.TextColor1),
                            alignment: 'center',
                        },
                        animate: false,
                        hideOnScroll: false,
                        drawBehind: true,
                        background: {
                            color: StylesValue(ThemeVariables.BlackAndWhite),
                        },
                        noBorder: false,
                    },
                    bottomTabs: {
                        backgroundColor: StylesValue(ThemeVariables.BackgroundColor1),
                    },
                    bottomTab: {
                        iconColor: StylesValue(ThemeVariables.Color1),
                        selectedIconColor: StylesValue(ThemeVariables.HighlightColor1),
                    },
                });
            },
        );
        await setClient();
        splashScreen.hide();
        dispatch(initUserIntroSetupSteps([]));
        addEventListener((state: NetInfoState) => {
            const { isInternetReachable } = state;
            if (
                isInternetReachable === null ||
                isInternetReachable === undefined ||
                lastInternetState.current === Boolean(isInternetReachable)
            ) {
                return;
            }
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
            timeout.current = setTimeout(() => {
                setInternetReachableState(Boolean(isInternetReachable));
                if (!isInternetReachable && isInternetReachable !== lastInternetState.current) {
                    offlineLink.close();
                    setTimeout(() => {
                        Toast.show({
                            text1: I18n.t('notifications.noInternetConnection'),
                            text2: I18n.t('notifications.noInternetConnectionDescription'),
                            type: 'error',
                        });
                    }, 0);
                } else {
                    offlineLink.open();
                }
                lastInternetState.current = Boolean(isInternetReachable);
            }, 100);
        });
        dispatch(switchScreens(rehydrateFromStorage));
    }

    useEffect(() => {
        start();
    }, []);

    return (
        <View style={Styles.contentContainer}>
            <Logo />
            <ActivityIndicator color={StylesValue(ThemeVariables.Color1)} />
            <BottomLabel />
        </View>
    );
}
