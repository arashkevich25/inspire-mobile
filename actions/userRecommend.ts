import { User } from '@inspire/types';
import { ProfileActionTypes } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';
import { updateUserDetails } from './userDetails';

import { client } from 'configs/graphql';
import { DISRECOMMEND_USER, RECOMMEND_USER } from 'schemes';

export function recommendUser(userId: number): any {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ProfileActionTypes.RecommendUser,
        });

        client
            .mutate<{ recommendUser: User }>({
                mutation: RECOMMEND_USER,
                variables: {
                    userId,
                },
            })
            .then((response: any) => {
                dispatch(updateUserDetails(response.data.recommendUser, userId));
                dispatch(recommendUserSuccess());
            })
            .catch(() => dispatch(recommendUserFailed()));
    };
}

function recommendUserSuccess() {
    return {
        type: ProfileActionTypes.RecommendUserSuccess,
    };
}

function recommendUserFailed() {
    return {
        type: ProfileActionTypes.RecommendUserFailed,
    };
}

export function disrecommendUser(userId: number): any {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ProfileActionTypes.DisrecommendUser,
        });

        client
            .mutate<{ disrecommendUser: boolean }>({
                mutation: DISRECOMMEND_USER,
                variables: {
                    userId,
                },
            })
            .then((response: any) => {
                dispatch(updateUserDetails(response.data.disrecommendUser, userId));
                dispatch(disrecommendUserSuccess());
            })
            .catch(() => dispatch(disecommendUserFailed()));
    };
}

function disrecommendUserSuccess() {
    return {
        type: ProfileActionTypes.DisrecommendUserSuccess,
    };
}

function disecommendUserFailed() {
    return {
        type: ProfileActionTypes.DisrecommendUserFailed,
    };
}
