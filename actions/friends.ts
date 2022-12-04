import { User } from '@inspire/types';
import { FriendActions } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';

import { GET_FRIENDS_DATA } from 'schemes';
import { graphqlQueryWithPolicyByNetworkConnection, RollbarLogging } from 'tools';

export function getFriendsData(userId: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: FriendActions.GetFriendsData,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getFriends: User[] }>({
            query: GET_FRIENDS_DATA,
            variables: {
                userId,
            },
        })
            .then(response => dispatch(getFriendsDataSuccess(response.data.getFriends)))
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'getFriendsData');
                dispatch(getFriendsDataFailed());
            });
    };
}

function getFriendsDataSuccess(friendsData: User[]) {
    return {
        type: FriendActions.GetFriendsDataSuccess,
        friendsData,
    };
}

function getFriendsDataFailed() {
    return {
        type: FriendActions.GetFriendsDataFailed,
    };
}
