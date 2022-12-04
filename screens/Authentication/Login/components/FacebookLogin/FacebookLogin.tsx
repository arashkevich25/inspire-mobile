import { StorageKeys } from 'app-constants';
import React from 'react';
import { useDispatch } from 'react-redux';

import { TouchableOpacity } from 'react-native';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { Navigation } from 'react-native-navigation';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/FontAwesome';

import { facebookSignIn } from 'actions';
import { ApproveSocialLoginAppPolicy } from 'navigation/components';
import { StylesValue } from 'tools';
import { getItemFromStorage, setItemToStorage } from 'tools/storage';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

export function FacebookLogin() {
    const dispatch = useDispatch();

    function login() {
        LoginManager.logInWithPermissions(['email', 'public_profile']).then(
            result => {
                if (!result.isCancelled) {
                    AccessToken.getCurrentAccessToken().then(async data => {
                        dispatch(facebookSignIn(data!.accessToken.toString()));
                        await setItemToStorage(StorageKeys.FbSignInRulesAccepted, 'true');
                        await Navigation.dismissAllModals();
                    });
                }
            },
            function(error) {
                Toast.show({
                    text1: 'Error',
                    text2: error,
                    type: 'error',
                });
            },
        );
    }

    async function openPolicy() {
        const rulesIsAccepted = await getItemFromStorage(StorageKeys.FbSignInRulesAccepted);
        if (rulesIsAccepted) {
            login();
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
            <Icon name="facebook" color={StylesValue(ThemeVariables.Color1)} size={28} />
        </TouchableOpacity>
    );
}
