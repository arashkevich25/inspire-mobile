import { ResponseCodes, SuccessSignInResponse, UserId } from '@inspire/types';
import { AuthenticatedActionTypes } from 'app-constants/actionTypes';
import { StorageKeys } from 'app-constants/storageKeys';
import { Dispatch } from 'redux';
import { initHome } from './init';

import { AppleRequestResponse } from '@invertase/react-native-apple-authentication';
import Toast from 'react-native-toast-message';

import { addToQueue } from 'actions/addPost';
import { getQueuedPostsFromStorage, requestHub } from 'tools';
import { setItemToStorage } from 'tools/storage';
import I18n from 'tools/translate';
import { SocietyConfig } from '../configs/config';
import { setSensitiveItem } from '../tools/manageSecurityData';

export function signIn(email: string, password: string) {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: AuthenticatedActionTypes.Authenticated,
        });

        const { data, statusCode } = await requestHub<SuccessSignInResponse>(
            'POST',
            SocietyConfig.hubEndpoints.login,
            null,
            JSON.stringify({ email, password }),
        );

        if (statusCode === ResponseCodes.CREATED) {
            SocietyConfig.setSocietyByApiResponse(data);
            dispatch(signInSuccess(data.userId, email, data.access_token));
        } else {
            dispatch(signInFailed(statusCode));
        }
    };
}

export function facebookSignIn(token: string) {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: AuthenticatedActionTypes.Authenticated,
        });

        const { data, statusCode } = await requestHub<SuccessSignInResponse>(
            'POST',
            SocietyConfig.hubEndpoints.fbLogin,
            null,
            JSON.stringify({ token }),
        );

        if (statusCode === ResponseCodes.Success || statusCode === ResponseCodes.CREATED) {
            SocietyConfig.setSocietyByApiResponse(data);
            dispatch(signInSuccess(data.userId, data.email, data.access_token));
        } else {
            dispatch(signInFailed(statusCode));
        }
    };
}

export function googleSignIn(token: string) {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: AuthenticatedActionTypes.Authenticated,
        });

        const { data, statusCode } = await requestHub<SuccessSignInResponse>(
            'POST',
            SocietyConfig.hubEndpoints.googleLogin,
            null,
            JSON.stringify({ token }),
        );

        if (statusCode === ResponseCodes.Success || statusCode === ResponseCodes.CREATED) {
            SocietyConfig.setSocietyByApiResponse(data);
            dispatch(signInSuccess(data.userId, data.email, data.access_token));
        } else {
            dispatch(signInFailed(data.statusCode));
        }
    };
}

export function appleSignIn(authResponse: AppleRequestResponse) {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: AuthenticatedActionTypes.Authenticated,
        });

        const { data, statusCode } = await requestHub<SuccessSignInResponse>(
            'POST',
            SocietyConfig.hubEndpoints.appleLogin,
            null,
            JSON.stringify({ authResponse }),
        );

        if (statusCode === ResponseCodes.CREATED || statusCode === ResponseCodes.Success) {
            SocietyConfig.setSocietyByApiResponse(data);
            dispatch(signInSuccess(data.userId, data.email, data.access_token));
        } else {
            dispatch(signInFailed(statusCode));
        }
    };
}

function signInSuccess(userId: UserId[], email: string, accessToken: string): any {
    return async (dispatch: Dispatch) => {
        const userAppId = SocietyConfig.getUserAppId(userId);
        await setSensitiveItem(StorageKeys.AuthToken, accessToken);
        await setItemToStorage(StorageKeys.UserEmail, email);
        await setItemToStorage(StorageKeys.UserId, userAppId.toString());
        const queuedPosts = await getQueuedPostsFromStorage(userAppId.toString());
        dispatch({
            type: AuthenticatedActionTypes.AuthenticatedSuccess,
            userId: userAppId,
        });
        dispatch(initHome(Number(userAppId), email));
        queuedPosts[userAppId.toString()].forEach(item => dispatch(addToQueue(item)));
    };
}

function signInFailed(statusCode: number): any {
    return (dispatch: Dispatch) => {
        Toast.show({
            text1: 'Error',
            text2: `${statusCode}: ${I18n.t(`signUp.errors.${statusCode}`)}`,
            type: 'error',
        });
        dispatch({
            type: AuthenticatedActionTypes.AuthenticatedFailed,
        });
    };
}
