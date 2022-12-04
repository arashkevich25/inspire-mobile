import { User } from '@inspire/types';

import { AppState } from 'reducers';
import { BlockedUsersState } from 'reducers/blockedUsers';

export function blockedUsersState(appState: AppState): BlockedUsersState {
    return appState.blockedUsers;
}

export function getBlockedUsers(appState: AppState): User[] {
    return blockedUsersState(appState).blockedUsers;
}

export function getBlockedByUsers(appState: AppState): User[] {
    return blockedUsersState(appState).blockedBydUsers;
}
