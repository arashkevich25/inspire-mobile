import { User } from '@inspire/types';

import { AppState } from 'reducers';
import { FriendsState } from 'reducers/friends';

function friendsState(state: AppState): FriendsState {
    return state.friends;
}

export function friends(state: AppState): User[] {
    return friendsState(state).friendsData;
}

export function friendsIsPending(state: AppState): boolean {
    return friendsState(state).friendsDataIsFetching;
}

export function friendsHasFetched(state: AppState): boolean {
    return friendsState(state).friendsDataFetched;
}
