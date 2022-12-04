import { StorageKeys } from 'app-constants/storageKeys';
import React from 'react';
import { useDispatch } from 'react-redux';

import { appleAuth, AppleButton } from '@invertase/react-native-apple-authentication';
import { Navigation } from 'react-native-navigation';

import { appleSignIn } from 'actions/signIn';
import { ApproveSocialLoginAppPolicy } from 'navigation/components';
import { getItemFromStorage } from 'tools';

import { Styles } from './styles';

export function AppleLogin() {
    const dispatch = useDispatch();
    async function authLogin() {
        const appleAuthRequestResponse = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });

        const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

        if (credentialState === appleAuth.State.AUTHORIZED) {
            dispatch(appleSignIn(appleAuthRequestResponse));
            await Navigation.dismissAllModals();
        }
    }

    async function openPolicy() {
        const rulesIsAccepted = await getItemFromStorage(StorageKeys.FbSignInRulesAccepted);
        if (rulesIsAccepted) {
            authLogin();
            return;
        }

        await Navigation.showModal({
            stack: {
                children: [
                    {
                        component: ApproveSocialLoginAppPolicy(authLogin),
                    },
                ],
            },
        });
    }

    return (
        <AppleButton
            buttonStyle={AppleButton.Style.DEFAULT}
            buttonType={AppleButton.Type.SIGN_IN}
            style={Styles.contentContainer}
            onPress={openPolicy}
        />
    );
}
