import { StorageKeys } from 'app-constants/storageKeys';
import React from 'react';
import { useDispatch } from 'react-redux';

import { GoogleSignin, User } from '@react-native-community/google-signin';
import { TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import { googleSignIn } from 'actions/signIn';
import config from 'configs/google.config';
import { ApproveSocialLoginAppPolicy } from 'navigation/components';
import { StylesValue } from 'tools';
import { getItemFromStorage, setItemToStorage } from 'tools/storage';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

export function GoogleLogin() {
    const dispatch = useDispatch();
    async function login() {
        GoogleSignin.configure({
            scopes: ['email', 'profile'],
            webClientId: config.webClientId,
            iosClientId: config.iosClient,
            offlineAccess: false,
        });
        const userInfo: User = await GoogleSignin.signIn();

        if (userInfo) {
            dispatch(googleSignIn(userInfo.idToken as string));
            await setItemToStorage(StorageKeys.GoogleSignInRulesAccepted, 'true');
            await Navigation.dismissAllModals();
        }
    }

    async function openPolicy() {
        const rulesIsAccepted = await getItemFromStorage(StorageKeys.GoogleSignInRulesAccepted);
        if (rulesIsAccepted) {
            await login();
            return;
        }

        await Navigation.showModal({
            stack: {
                children: [
                    {
                        component: ApproveSocialLoginAppPolicy(login),
                    },
                ],
            },
        });
    }

    return (
        <TouchableOpacity style={Styles.contentContainer} onPress={openPolicy}>
            <Icon name="google" color={StylesValue(ThemeVariables.Color1)} size={28} />
        </TouchableOpacity>
    );
}
