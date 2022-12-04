import { ViolationReason } from '@inspire/types';
import { ReportPostViolationActions } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';

import Toast from 'react-native-toast-message';

import { client } from 'configs/graphql';
import { REPORT_POST_VIOLATION } from 'schemes';
import { RollbarLogging } from 'tools';
import I18n from 'tools/translate';

export function reportPostViolation(postId: string, reasonId: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ReportPostViolationActions.ReportViolation,
        });

        client
            .mutate({ mutation: REPORT_POST_VIOLATION(postId, reasonId) })
            .then(() => {
                Toast.show({
                    text1: I18n.t('violation.messageHeading.successReport'),
                    text2: I18n.t('violation.messageBody.successReport'),
                    type: 'error',
                });
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'reportPostViolation');
            });
    };
}

export function setPostViolationReasons(reasons: ViolationReason[]) {
    return {
        type: ReportPostViolationActions.SetPostViolationReasons,
        reasons,
    };
}
