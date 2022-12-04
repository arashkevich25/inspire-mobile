import { CompetitionDetails } from '@inspire/types';
import { CompetitionActions } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';

import Toast from 'react-native-toast-message';

import { client } from 'configs/graphql';
import { ATTEND_ACCOUNT_COMPETITION, ATTEND_POSTS_COMPETITION, GET_COMPETITIONS_DETAILS } from 'schemes';
import { graphqlQueryWithPolicyByNetworkConnection, RollbarLogging } from 'tools';

export function getCompetitionDetails(competitionId: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: CompetitionActions.GetDetails,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getCompetitionDetails: CompetitionDetails }>({
            query: GET_COMPETITIONS_DETAILS,
            variables: {
                competitionId,
            },
        })
            .then(response => dispatch(getCompetitionDetailsSuccess(response.data.getCompetitionDetails)))
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'approveStatute');
                dispatch(getCompetitionDetailsFailed());
            });
    };
}

function getCompetitionDetailsSuccess(competition: CompetitionDetails) {
    return {
        type: CompetitionActions.GetDetailsSuccess,
        competition,
    };
}

function getCompetitionDetailsFailed() {
    return {
        type: CompetitionActions.GetDetailsFailed,
    };
}

export function attendPosts(competitionId: number, postsIds: number[]) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: CompetitionActions.AttendPosts,
        });

        client
            .mutate<{ attendPostCompetition: CompetitionDetails }>({
                mutation: ATTEND_POSTS_COMPETITION,
                variables: {
                    competitionId,
                    postsIds,
                },
            })
            .then((response: any) => dispatch(getCompetitionDetailsSuccess(response!.data!.attendPostCompetition)))
            .catch((error: Error) => {
                Toast.show({
                    text1: 'Error',
                    text2: error.message,
                    type: 'error',
                });
                RollbarLogging.reportErrorAtSpace(error, 'attendPostCompetition');
            });
    };
}

export function attendAccount(competitionId: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: CompetitionActions.AttendAccount,
        });

        client
            .mutate<{ attendAccountCompetition: CompetitionDetails }>({
                mutation: ATTEND_ACCOUNT_COMPETITION,
                variables: {
                    competitionId,
                },
            })
            .then((response: any) => dispatch(getCompetitionDetailsSuccess(response!.data!.attendAccountCompetition)))
            .catch((error: Error) => {
                showMessage({
                    message: 'Error',
                    description: error.message,
                    type: 'warning',
                });
                RollbarLogging.reportErrorAtSpace(error, 'attendPostCompetition');
            });
    };
}
