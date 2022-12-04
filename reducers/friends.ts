import { User } from '@inspire/types';
import { FriendActions, FriendsUnion } from 'app-constants/actionTypes';

export interface FriendsState {
    friendsData: User[];
    friendsDataIsFetching: boolean;
    friendsDataFetched: boolean;
}

const initialState: FriendsState = {
    friendsData: [],
    friendsDataFetched: false,
    friendsDataIsFetching: false,
};

export function friendsReducer(state: FriendsState = initialState, action: FriendsUnion): FriendsState {
    switch (action.type) {
        case FriendActions.GetFriendsData: {
            return {
                ...state,
                friendsDataIsFetching: true,
            };
        }

        case FriendActions.InitFriends: {
            return {
                ...state,
                friendsData: action.friendsData,
            };
        }

        case FriendActions.GetFriendsDataSuccess: {
            return {
                ...state,
                friendsDataIsFetching: false,
                friendsDataFetched: true,
                friendsData: action.friendsData,
            };
        }

        case FriendActions.GetFriendsDataFailed: {
            return {
                ...state,
                friendsDataIsFetching: false,
                friendsDataFetched: false,
            };
        }

        default:
            return state;
    }
}
