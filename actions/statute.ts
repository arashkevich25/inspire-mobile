import { StatuteWithApproveStatus } from '@inspire/types';
import { StatuteActions } from 'app-constants/actionTypes/statute';
import { Dispatch } from 'redux';
import { STATUTE_DETAILS_MODAL } from '../navigation/constants/modalsIds';

import { Navigation } from 'react-native-navigation';

import { client } from 'configs/graphql';
import { APPROVE_STATUTE, GET_STATUTE_DETAILS } from 'schemes';
import { graphqlQueryWithPolicyByNetworkConnection, RollbarLogging } from 'tools';

export function approveStatute(statuteId: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: StatuteActions.ApproveStatute,
        });

        client
            .mutate<{ approveStatute: StatuteWithApproveStatus }>({
                mutation: APPROVE_STATUTE,
                variables: {
                    statuteId,
                },
            })
            .then(response => {
                Navigation.dismissModal(STATUTE_DETAILS_MODAL);
                dispatch(approveStatuteSuccess(response!.data!.approveStatute));
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'approveStatute');
                dispatch(approveStatuteFailed());
            });
    };
}

function approveStatuteSuccess(statute: StatuteWithApproveStatus) {
    return {
        type: StatuteActions.ApproveStatuteSuccess,
        statute,
    };
}

function approveStatuteFailed() {
    return {
        type: StatuteActions.ApproveStatuteFailed,
    };
}

export function getStatuteDetails(statuteId: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: StatuteActions.GetStatuteDetails,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getStatuteDetails: StatuteWithApproveStatus }>({
            query: GET_STATUTE_DETAILS,
            variables: {
                statuteId,
            },
        })
            .then(response => dispatch(getStatuteDetailsSuccess(response.data.getStatuteDetails)))
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'getStatuteDetails');
                dispatch(getStatuteDetailsFailed());
            });
    };
}

function getStatuteDetailsSuccess(statute: StatuteWithApproveStatus) {
    return {
        type: StatuteActions.GetStatuteDetailsSuccess,
        statute,
    };
}

function getStatuteDetailsFailed() {
    return {
        type: StatuteActions.GetStatuteDetailsFailed,
    };
}
