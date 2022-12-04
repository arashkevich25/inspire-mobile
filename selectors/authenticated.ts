import { AppState } from 'reducers';

function getAuthenticatedState(state: AppState) {
    return state.authenticated;
}

export function isAuthenticated(state: AppState) {
    return getAuthenticatedState(state).isAuthenticated;
}

export function authenticatedIsPending(state: AppState) {
    return getAuthenticatedState(state).authenticatedPending;
}

export function getUserId(state: AppState): number {
    return getAuthenticatedState(state).userId;
}

export function getAuthEmail(state: AppState): string {
    return getAuthenticatedState(state).email;
}

export function getSetPasswordIsPending(state: AppState): boolean {
    return getAuthenticatedState(state).setNewPasswordPending;
}
