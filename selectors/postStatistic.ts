import { AppState } from 'reducers';

function getState(state: AppState) {
    return state.postStatistic;
}

export function recommendPostInProgress(state: AppState): boolean {
    return getState(state).recommendPostInProgress;
}

export function sentPostInProgress(state: AppState): boolean {
    return getState(state).sentPostInProgress;
}
