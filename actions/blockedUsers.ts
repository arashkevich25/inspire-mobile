import { User } from '@inspire/types';
import { BlockUserActionTypes } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';

import Toast from 'react-native-toast-message';

import { client } from 'configs/graphql';
import { BLOCK_USER, UNBLOCK_USER } from 'schemes';
import { GET_BLOCKED_USERS } from 'schemes/getBlockedUsers';
import { graphqlQueryWithPolicyByNetworkConnection } from 'tools';
import I18n from 'tools/translate';

export function fetchBlockedUsers(): any {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: BlockUserActionTypes.BlockedUsers,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ blockedUsers: User[] }>({
            query: GET_BLOCKED_USERS,
        }).then(response => {
            dispatch(fetchBlockedUsersSuccess(response!.data!.blockedUsers));
        });
    };
}

export function fetchBlockedByUsersSuccess(blockedByUsers: User[]) {
    return {
        type: BlockUserActionTypes.BlockedByUsersSuccess,
        blockedByUsers,
    };
}

export function fetchBlockedUsersSuccess(blockedUsers: User[]) {
    return {
        type: BlockUserActionTypes.BlockedUsersSuccess,
        blockedUsers,
    };
}

export function blockUser(userId: number) {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: BlockUserActionTypes.BlockUser,
        });

        client
            .mutate<{ blockUser: User[] }>({
                mutation: BLOCK_USER(userId),
            })
            .then(response => {
                Toast.show({
                    text1: I18n.t('blockedUsers.notify.title'),
                    text2: I18n.t('blockedUsers.notify.description'),
                    type: 'info',
                });
                dispatch(blockUserSuccess(response!.data!.blockUser));
            });
    };
}

function blockUserSuccess(blockedUsers: User[]) {
    return {
        type: BlockUserActionTypes.BlockUserSuccess,
        blockedUsers,
    };
}

export function unblockUser(userId: number) {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: BlockUserActionTypes.UnblockUser,
            userId,
        });

        client
            .mutate<{ unblockUser: User[] }>({
                mutation: UNBLOCK_USER(userId),
            })
            .then(response => {
                dispatch(unblockUserSuccess(response!.data!.unblockUser));
            });
    };
}

function unblockUserSuccess(blockedUsers: User[]) {
    return {
        type: BlockUserActionTypes.UnblockUserSuccess,
        blockedUsers,
    };
}
