import { StorageKeys, ThemeOptions } from 'app-constants';
import {
    Club,
    ComponentId,
    ComponentName,
    OnBoarding,
    Profile,
    registerAddPostComponents,
    registerAppComponent,
    registerAuthComponents,
    registerCommonComponents,
    registerProfileComponents,
    SetNewPassword,
    ShowPostModalFromPostById,
    switcherStack,
} from 'navigation';
import { isIphone } from './app-constants/isIphone';
import { URL_SCHEMES } from './app-constants/urlSchemes';
import { store } from './store/store';

import { AppState, BackHandler, Linking, Platform, UIManager } from 'react-native';
// eslint-disable-next-line import/default
import codePush from 'react-native-code-push';
// eslint-disable-next-line import/no-named-as-default
import Config from 'react-native-config';
// @ts-ignore
import DeepLinking from 'react-native-deep-linking';
import Geocoder from 'react-native-geocoding';
import { Navigation } from 'react-native-navigation';
// @ts-ignore
import OneSignal from 'react-native-onesignal';

import { setActivity, signOutAndRedirectToSetNewPassword } from 'actions';
import { ActiveTheme } from 'models';
import { NavigationService } from 'navigation/tools/NavigationService';
import { setItemToStorage, sseListener } from 'tools';
import { appIsInit } from 'tools/appIsInit';
import { getItemFromStorage } from 'tools/storage';
import I18n from 'tools/translate';

// @ts-ignore
Geocoder.init(Config.GOOGLE_API_KEY, { language: 'pl' });

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

function start() {
    for (const scheme of URL_SCHEMES) {
        DeepLinking.addScheme(scheme);
    }

    DeepLinking.addRoute('/post/:id', async ({ id }: any) => {
        await appIsInit;
        await Navigation.push(NavigationService.activeScreen, {
            component: ShowPostModalFromPostById(id, NavigationService.activeScreen),
        });
    });

    DeepLinking.addRoute('/user/:id', async ({ id }: any) => {
        await appIsInit;
        await Navigation.push(NavigationService.activeScreen, { component: Profile(Number(id)) });
    });

    DeepLinking.addRoute('/club/:uniqueName', async ({ uniqueName }: any) => {
        await appIsInit;
        await Navigation.push(NavigationService.activeScreen, { component: Club(uniqueName) });
    });

    DeepLinking.addRoute('/user/reset-password/:uniqueToken', async ({ uniqueToken }: any) => {
        if (store.getState().authenticated.userId) {
            store.dispatch(signOutAndRedirectToSetNewPassword(store.getState().authenticated.userId, uniqueToken));
            return;
        }
        await Navigation.push(NavigationService.activeScreen, { component: SetNewPassword(uniqueToken) });
    });

    Linking.getInitialURL().then(url => {
        if (url) {
            handleOpenURL(url);
        }
    });

    OneSignal.setNotificationOpenedHandler((openedEvent: any) => {
        const { notification } = openedEvent;
        if (notification.launchURL) {
            handleOpenURL(notification.launchURL);
        }
    });

    codePush.sync({
        installMode: codePush.InstallMode.IMMEDIATE,
    });
    AppState.addEventListener('change', state => {
        if (state === 'active') {
            setActivity();
        }

        if (state === 'active' && store.getState().authenticated.userId) {
            sseListener(store.dispatch, store.getState().authenticated.userId);
        }

        // TODO WORKAROUND to change after fixes
        // https://github.com/wix/react-native-navigation/assets/issues/6923
        // https://github.com/wix/react-native-navigation/assets/issues?q=ellipsis
        if (state === 'active' && store.getState().authenticated.userId && isIphone) {
            Navigation.mergeOptions(ComponentId.HomeStack, {
                bottomTab: {
                    text: I18n.t('home.bottomBar.title'),
                    icon: require('./src/navigation/assets/nonactive/home.png'),
                },
            });
            Navigation.mergeOptions(ComponentId.WallStack, {
                bottomTab: {
                    text: I18n.t('wall.bottomBar.title'),
                    icon: require('./src/navigation/assets/nonactive/wall.png'),
                },
            });
            Navigation.mergeOptions(ComponentId.AddPostStack, {
                bottomTab: {
                    text: I18n.t('addPost.bottomBar.title'),
                    icon: require('./src/navigation/assets/nonactive/addPost.png'),
                },
            });
            Navigation.mergeOptions(ComponentId.InspiredStack, {
                bottomTab: {
                    text: I18n.t('inspired.bottomBar.title'),
                    icon: require('./src/navigation/assets/nonactive/inspired.png'),
                },
            });
            Navigation.mergeOptions(ComponentId.ProfileStack, {
                bottomTab: {
                    text: I18n.t('profile.bottomBar.title'),
                    icon: require('./src/navigation/assets/nonactive/profile.png'),
                },
            });
        }
    });
    Navigation.events().registerAppLaunchedListener(appLaunchedMajorListener);
}

function handleOpenURL(url: string) {
    DeepLinking.evaluateUrl(url);
}

function linkingListenerHandleOpenUrl({ url }: any) {
    handleOpenURL(url);
}

export async function appLaunchedMajorListener() {
    Navigation.events().registerComponentDidAppearListener(didAppearListener);
    BackHandler.removeEventListener('hardwareBackPress', backHandlerListener);
    BackHandler.addEventListener('hardwareBackPress', backHandlerListener);
    Linking.addEventListener('url', linkingListenerHandleOpenUrl);

    const color: any = await getItemFromStorage(StorageKeys.themeVersion);
    if (!color) {
        await setItemToStorage(StorageKeys.themeVersion, ThemeOptions.Light);
        ActiveTheme.setTheme(ThemeOptions.Light);
    } else {
        ActiveTheme.setTheme(color);
    }
    registerCommonComponents();
    registerAppComponent();
    registerProfileComponents();
    registerAddPostComponents();
    registerAuthComponents();

    await Navigation.setRoot({
        root: {
            stack: switcherStack,
        },
    });
    await Navigation.showOverlay({
        component: {
            name: ComponentName.ComponentNotification,
            options: {
                layout: {
                    componentBackgroundColor: 'transparent',
                },
                overlay: {
                    interceptTouchOutside: false,
                },
            },
        },
    });
    const onBoardingIsDone = await getItemFromStorage(StorageKeys.OnBoardingIsDone);
    if (!onBoardingIsDone) {
        await Navigation.showOverlay({ component: OnBoarding });
    }
}

function backHandlerListener() {
    const tabsConstants = [
        ComponentId.AppInspired,
        ComponentId.AppRootWall,
        ComponentId.AppRootProfile,
        ComponentId.AppAddPost,
    ];

    if (tabsConstants.includes(NavigationService.activeScreen)) {
        Navigation.mergeOptions(NavigationService.activeScreen, {
            bottomTabs: {
                currentTabIndex: 0,
            },
        });

        return true;
    }
    return false;
}

function didAppearListener(data: any) {
    const { componentId }: any = data;
    if (data.componentType !== 'Component') {
        return;
    }
    NavigationService.setActiveScreen(componentId);
}

export { start };
