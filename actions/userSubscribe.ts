import { ProfileActionTypes } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';

import Toast from 'react-native-toast-message';

import { client } from 'configs/graphql';
import { FOLLOW_USER, UNFOLLOW_USER } from 'schemes';

export function subscribeUser(followerId: number, userId: number) {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: ProfileActionTypes.FollowUser,
            userId,
        });
        client
            .mutate({
                mutation: FOLLOW_USER(followerId),
                optimisticResponse: {
                    subscribeUser: {
                        __typename: 'User',
                        id: followerId,
                        name: '',
                        avatar: '',
                    },
                },
                update: () =>
                    dispatch({
                        type: ProfileActionTypes.FollowUserSuccess,
                        subscriber: { id: followerId, name: '', avatar: '' },
                        userId,
                    }),
            })
            .then(({ data }) =>
                dispatch({
                    type: ProfileActionTypes.FollowUserSuccess,
                    subscriber: data!.subscribeUser,
                    userId,
                }),
            )
            .catch(err =>
                Toast.show({
                    text1: 'Error',
                    text2: `Error while follow: ${JSON.stringify(err)}`,
                    type: 'error',
                }),
            );
    };
}

export function unsubscribeUser(followerId: number, userId: number) {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: ProfileActionTypes.UnFollowUser,
            userId,
        });
        client
            .mutate({
                mutation: UNFOLLOW_USER(followerId),
                optimisticResponse: {
                    unsubscribeUser: {
                        __typename: 'User',
                        id: followerId,
                        name: '',
                        avatar: '',
                    },
                },
                update: () =>
                    dispatch({
                        type: ProfileActionTypes.UnFollowUserSuccess,
                        subscriber: { id: followerId, name: '', avatar: '' },
                        userId,
                    }),
            })
            .then(({ data }) =>
                dispatch({
                    type: ProfileActionTypes.UnFollowUserSuccess,
                    subscriber: data!.unsubscribeUser,
                    userId,
                }),
            )
            .catch(err =>
                showMessage({
                    message: 'Error',
                    description: `Error while unfollow: ${JSON.stringify(err)}`,
                    type: 'warning',
                }),
            );
    };
}
