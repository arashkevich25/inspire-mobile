import { ViolationReason } from '@inspire/types';
import { ReportUserViolationActions } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';

import Toast from 'react-native-toast-message';

import { client } from 'configs/graphql';
import { REPORT_USER_VIOLATION } from 'schemes';
import { RollbarLogging } from 'tools';
import I18n from 'tools/translate';

export function reportUserViolation(userId: number, reasonId: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ReportUserViolationActions.ReportViolation,
        });

        client
            .mutate({ mutation: REPORT_USER_VIOLATION(userId, reasonId) })
            .then(() => {
                Toast.show({
                    text1: I18n.t('violation.messageHeading.successReport'),
                    text2: I18n.t('violation.messageBody.successReport'),
                    type: 'info',
                });
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'reportUserViolation');
            });
    };
}

export function setUserViolationReasons(reasons: ViolationReason[]) {
    return {
        type: ReportUserViolationActions.SetUserViolationReasons,
        reasons,
    };
}
