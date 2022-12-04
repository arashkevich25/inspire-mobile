import { AppState } from 'reducers';
import { InitAppState } from 'reducers/init';

function initAppState(state: AppState): InitAppState {
    return state.initApp;
}

export function initAppSuccess(state: AppState): boolean {
    return initAppState(state).initSuccess;
}

export function initAppError(state: AppState): string {
    return initAppState(state).initError;
}

export function initAppIsPending(state: AppState): boolean {
    return initAppState(state).initPending;
}
