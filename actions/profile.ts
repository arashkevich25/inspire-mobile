import { AuthenticatedActionTypes } from 'app-constants/actionTypes';
import { StorageKeys } from 'app-constants/storageKeys';
import { ComponentId } from 'navigation';
import { switcherStack } from 'navigation/stacks';
import { Dispatch } from 'redux';

import { LoginManager } from 'react-native-fbsdk';
import { Navigation } from 'react-native-navigation';
import OneSignal from 'react-native-onesignal';

import { removeItemFromStorage, requestHub } from 'tools';
import { SocietyConfig } from '../configs/config';
import { SetNewPassword } from '../navigation/components/setNewPassword';
import { setAuth } from '../navigation/tools/SetAuthRoot';
import { removeSensitiveItem } from '../tools/manageSecurityData';

export function signOut(userId: number): any {
    return async (dispatch: Dispatch) => {
        await removeItemFromStorage(StorageKeys.UserId);
        await removeItemFromStorage(StorageKeys.UserEmail);
        await removeSensitiveItem(StorageKeys.AuthToken);
        await removeItemFromStorage(StorageKeys.CustomPushMsgId);
        await removeItemFromStorage(StorageKeys.SocialMediaHasAsked);
        await removeItemFromStorage(StorageKeys.AvatarHasAsked);
        OneSignal.removeExternalUserId();
        await requestHub('POST', SocietyConfig.hubEndpoints.logout, null, JSON.stringify({ userId }));

        dispatch({
            type: AuthenticatedActionTypes.AuthenticatedLogout,
        });

        LoginManager.logOut();

        await Navigation.setRoot({
            root: {
                stack: switcherStack,
            },
        });
    };
}

export function signOutAndRedirectToSetNewPassword(userId: number, uniqueToken: string): any {
    return async (dispatch: Dispatch) => {
        await removeItemFromStorage(StorageKeys.UserId);
        await removeItemFromStorage(StorageKeys.UserEmail);
        await removeSensitiveItem(StorageKeys.AuthToken);
        await removeItemFromStorage(StorageKeys.CustomPushMsgId);
        await removeItemFromStorage(StorageKeys.SocialMediaHasAsked);
        await removeItemFromStorage(StorageKeys.AvatarHasAsked);
        OneSignal.removeExternalUserId();
        await requestHub('POST', SocietyConfig.hubEndpoints.logout, null, JSON.stringify({ userId }));

        dispatch({
            type: AuthenticatedActionTypes.AuthenticatedLogout,
        });

        LoginManager.logOut();
        setAuth();
        await Navigation.push(ComponentId.AppLogin, { component: SetNewPassword(uniqueToken) });
    };
}
