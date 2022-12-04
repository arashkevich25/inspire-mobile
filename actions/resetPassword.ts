import { ResponseCodes } from '@inspire/types';
import { ResetPasswordActions } from 'app-constants/actionTypes';
import { ComponentId, RememberPasswordDone } from 'navigation';
import { Dispatch } from 'redux';

import { Navigation } from 'react-native-navigation';
import Toast from 'react-native-toast-message';

import { requestHub } from 'tools';
import I18n from 'tools/translate';
import { SocietyConfig } from '../configs/config';

export function resetPassword(email: string) {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: ResetPasswordActions.ResetPassword,
        });

        const { statusCode } = await requestHub<{ statusCode: ResponseCodes }>(
            'POST',
            SocietyConfig.hubEndpoints.resetPassword,
            null,
            JSON.stringify({ email }),
        );

        if (statusCode === ResponseCodes.Success) {
            dispatch({
                type: ResetPasswordActions.ResetPasswordSuccess,
            });
            Navigation.push(ComponentId.ScreenRememberPassword, { component: RememberPasswordDone });
        } else {
            dispatch({
                type: ResetPasswordActions.ResetPasswordFailed,
            });
            Toast.show({
                text1: I18n.t('signIn.text.resetPasswordFailedHeading'),
                text2: I18n.t('signIn.text.resetPasswordFailedBody'),
                type: 'error',
            });
        }
    };
}
