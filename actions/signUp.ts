import { ResponseCodes, SuccessSignInResponse } from '@inspire/types';
import { AuthenticatedActionTypes } from 'app-constants/actionTypes';
import { StorageKeys } from 'app-constants/storageKeys';
import { ComponentId } from 'navigation';
import { Dispatch } from 'redux';

import { Navigation } from 'react-native-navigation';
import Toast from 'react-native-toast-message';

import { initHome } from 'actions/init';
import { requestHub } from 'tools';
import { setItemToStorage } from 'tools/storage';
import I18n from 'tools/translate';
import { SocietyConfig } from '../configs/config';
import { setSensitiveItem } from '../tools/manageSecurityData';

export function signUp(email: string, password: string) {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: AuthenticatedActionTypes.Authenticated,
        });

        const { data, statusCode } = await requestHub<SuccessSignInResponse>(
            'POST',
            SocietyConfig.hubEndpoints.signUp,
            null,
            JSON.stringify({ email, password }),
        );

        if (statusCode === ResponseCodes.Success) {
            SocietyConfig.setSocietyByApiResponse(data);
            const userAppId = SocietyConfig.getUserAppId(data.userId);
            await setItemToStorage(StorageKeys.UserEmail, data.email);
            await setSensitiveItem(StorageKeys.AuthToken, data.access_token);
            await setItemToStorage(StorageKeys.UserId, JSON.stringify(userAppId));
            dispatch({
                type: AuthenticatedActionTypes.AuthenticatedSuccess,
                userId: userAppId,
            });
            dispatch(initHome(Number(userAppId), email));
        } else {
            dispatch({
                type: AuthenticatedActionTypes.AuthenticatedFailed,
            });
            Toast.show({
                text1: 'Error',
                text2: `${statusCode}: ${I18n.t(`signUp.errors.${statusCode}`)}`,
                type: 'error',
            });
        }
    };
}

export function setPassword(uniqId: string, password: string) {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: AuthenticatedActionTypes.AuthenticatedSetNewPassword,
        });

        const { statusCode } = await requestHub<SuccessSignInResponse>(
            'POST',
            SocietyConfig.hubEndpoints.setPassword,
            null,
            JSON.stringify({ uniqId, password }),
        );

        if (statusCode === ResponseCodes.Success) {
            Navigation.popTo(ComponentId.AppLogin);
            dispatch({
                type: AuthenticatedActionTypes.AuthenticatedSetNewPasswordSuccess,
            });
        } else {
            dispatch({
                type: AuthenticatedActionTypes.AuthenticatedSetNewPasswordFailed,
            });
            Toast.show({
                text1: 'Error',
                text2: `${statusCode}: ${I18n.t(`signUp.errors.${statusCode}`)}`,
                type: 'error',
            });
        }
    };
}
