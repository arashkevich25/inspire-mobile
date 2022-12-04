import { Activity } from '@inspire/types';

import { AppState } from 'reducers';
import { ListSection } from 'types';

function activitiesState(state: AppState) {
    return state.activities;
}

export function getActivities(state: AppState): ListSection<Activity>[] {
    return activitiesState(state).activities;
}

export function activitiesIsFetching(state: AppState): boolean {
    return activitiesState(state).isFetching;
}

export function activitiesHasFetched(state: AppState): boolean {
    return activitiesState(state).hasFetched;
}

export function activitiesSkipCounter(state: AppState): number {
    return activitiesState(state).skipCounter;
}

export function activitiesLoadState(state: AppState): boolean {
    return activitiesState(state).loadIsPending;
}

export function activitiesLoadMoreIsAllow(state: AppState): boolean {
    return activitiesState(state).nextLoadIsAllow;
}

export function newActivityCount(state: AppState): number {
    return activitiesState(state).newActivityCount;
}
