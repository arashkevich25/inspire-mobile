import { isIphone, StorageKeys } from 'app-constants';
import { ThemeOptions } from 'app-constants/ThemeOptions';
import { ComponentId } from 'navigation/constants';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Animated, Platform, TouchableOpacity } from 'react-native';
import { getVersion } from 'react-native-device-info';
import { Navigation } from 'react-native-navigation';
import RNRestart from 'react-native-restart';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/FontAwesome';

import { signOut } from 'actions';
import { Menu, menuControl, MenuGroup, MenuItem } from 'components/BottomMenu';
import { lpPages } from 'configs/lpPages';
import { useUserIntroSetup } from 'hooks/useUserIntroSetup';
import {
    AndroidEditUserDetails,
    IosEditUserDetails,
    OnBoarding,
    OpenSourceLibraries,
    WebView,
} from 'navigation/components';
import { StylesValue } from 'tools';
import { setItemToStorage } from 'tools/storage';
import I18n from 'tools/translate';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

interface RootUserProps {
    scroll: Animated.Value;
    rootUserId: number;
}

export function RootUserMenu({ rootUserId }: RootUserProps) {
    const dispatch = useDispatch();
    const { openSelectCategories } = useUserIntroSetup();

    async function openUserDetails() {
        await menuControl.closeMenu();
        await Navigation.showModal({
            stack: {
                children: [{ component: isIphone ? IosEditUserDetails : AndroidEditUserDetails }],
            },
        });
    }

    async function openTermsAndConditions() {
        await menuControl.closeMenu();
        await Navigation.showModal({
            stack: { children: [{ component: WebView(lpPages.rules) }] },
        });
    }

    async function openHelp() {
        await menuControl.closeMenu();
        await Navigation.showModal({
            stack: { children: [{ component: WebView(lpPages.manual) }] },
        });
    }

    async function openContact() {
        await menuControl.closeMenu();
        await Navigation.showModal({
            stack: { children: [{ component: WebView(lpPages.contact) }] },
        });
    }

    async function openSelectCategoriesHandle() {
        await menuControl.closeMenu();
        openSelectCategories();
    }

    async function openSource() {
        await menuControl.closeMenu();
        await Navigation.push(ComponentId.AppRootProfile, {
            component: OpenSourceLibraries,
        });
    }

    async function reportBug() {
        await menuControl.closeMenu();
        await Navigation.showModal({
            stack: { children: [{ component: WebView('https://benspired.wufoo.com/forms/znnzjqb1ldp221/') }] },
        });
    }

    async function openTutorial() {
        await menuControl.closeMenu();
        await Navigation.showOverlay({ component: OnBoarding });
    }

    async function setDarkTheme() {
        const theme = StylesValue(ThemeVariables.Theme);
        if (theme === ThemeOptions.Dark) {
            return;
        }
        await setItemToStorage(StorageKeys.themeVersion, ThemeOptions.Dark);
        await setItemToStorage(StorageKeys.autoTheme, 'false');
        RNRestart.Restart();
    }

    async function setLightTheme() {
        const theme = StylesValue(ThemeVariables.Theme);
        if (theme === ThemeOptions.Light) {
            return;
        }
        await setItemToStorage(StorageKeys.themeVersion, ThemeOptions.Light);
        await setItemToStorage(StorageKeys.autoTheme, 'false');
        RNRestart.Restart();
    }

    async function setAutoTheme() {
        await setItemToStorage(StorageKeys.autoTheme, 'true');
        RNRestart.Restart();
    }

    async function shareApp() {
        await menuControl.closeMenu();
        const url = lpPages.getApp;
        const title = '!NSPiRE';
        const message = I18n.t('profile.menu.shareAppMessage');
        const icon = 'data:<data_type>/<file_extension>;base64,<base64_data>';
        const options: any = Platform.select({
            ios: {
                activityItemSources: [
                    {
                        placeholderItem: { type: 'text', content: message },
                        item: {
                            default: { type: 'text', content: `${message} ${url}` },
                            message: null,
                        },
                        linkMetadata: {
                            title,
                            icon: icon,
                        },
                    },
                ],
            },
            default: {
                title,
                subject: title,
                message: `${message} ${url}`,
            },
        });
        await Share.open(options);
    }

    async function signOutHandle() {
        await menuControl.closeMenu();
        dispatch(signOut(rootUserId));
    }

    const menuChildren = (
        <Menu>
            <MenuGroup title={I18n.t('profile.menu.settings')} icon={require('../../../../assets/settings.png')}>
                <MenuGroup title={I18n.t('profile.menu.theme')}>
                    <MenuItem
                        title={I18n.t('profile.menu.autoTheme')}
                        icon={require('../../../../assets/day-night.png')}
                        action={setAutoTheme}
                    />
                    <MenuItem
                        title={I18n.t('profile.menu.darkTheme')}
                        icon={require('../../../../assets/night.png')}
                        action={setDarkTheme}
                    />
                    <MenuItem
                        title={I18n.t('profile.menu.lightTheme')}
                        icon={require('../../../../assets/day.png')}
                        action={setLightTheme}
                    />
                </MenuGroup>
            </MenuGroup>
            <MenuGroup title={I18n.t('profile.menu.account')} icon={require('../../../../assets/account.png')}>
                <MenuItem
                    title={I18n.t('profile.menu.userDetails')}
                    icon={require('../../../../assets/user.png')}
                    action={openUserDetails}
                />
                <MenuItem
                    title={I18n.t('profile.menu.categories')}
                    icon={require('../../../../assets/categories.png')}
                    action={openSelectCategoriesHandle}
                />
                <MenuItem
                    title={I18n.t('profile.menu.logout')}
                    icon={require('../../../../assets/logout.png')}
                    action={signOutHandle}
                />
            </MenuGroup>
            <MenuGroup
                title={I18n.t('profile.menu.aboutApp')}
                icon={require('../../../../assets/app.png')}
                helpText={`${I18n.t('profile.menu.versionApp')}: ${getVersion()}`}>
                <MenuItem
                    title={I18n.t('profile.menu.tutorial')}
                    icon={require('../../../../assets/mobile.png')}
                    action={openTutorial}
                />
                <MenuItem
                    title={I18n.t('profile.menu.shareApp')}
                    icon={require('../../../../assets/share.png')}
                    action={shareApp}
                />
                <MenuItem
                    title={I18n.t('profile.menu.reportBug')}
                    icon={require('../../../../assets/bug.png')}
                    action={reportBug}
                />
                <MenuItem
                    title={I18n.t('profile.menu.termsAndConditions')}
                    icon={require('../../../../assets/terms.png')}
                    action={openTermsAndConditions}
                />
                <MenuItem
                    title={I18n.t('profile.menu.help')}
                    icon={require('../../../../assets/question.png')}
                    action={openHelp}
                />
                <MenuItem
                    title={I18n.t('profile.menu.contact')}
                    icon={require('../../../../assets/email.png')}
                    action={openContact}
                />
                <MenuItem
                    title={I18n.t('profile.menu.licenses')}
                    icon={require('../../../../assets/open-source.png')}
                    action={openSource}
                />
            </MenuGroup>
        </Menu>
    );

    async function openBottomMenu() {
        await menuControl.openMenu({ children: menuChildren });
    }

    return (
        <TouchableOpacity style={Styles.contentContainer} onPress={openBottomMenu}>
            <Icon name="bars" size={20} color={StylesValue(ThemeVariables.Color1)} />
        </TouchableOpacity>
    );
}
