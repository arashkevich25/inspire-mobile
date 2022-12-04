import { StatuteWithApproveStatus } from '@inspire/types';

import { AppState } from 'reducers';
import { StatuteState } from 'reducers/statute';

function statuteState(state: AppState): StatuteState {
    return state.statute;
}

export function getStatuteDetails(state: AppState): StatuteWithApproveStatus | null {
    return statuteState(state).statute;
}

export function getStatuteDetailsIsFetching(state: AppState): boolean {
    return statuteState(state).statuteIsFetching;
}

export function getStatuteDetailsHasFetched(state: AppState): boolean {
    return statuteState(state).statuteIsFetching;
}

export function approveStatuteIsPending(state: AppState): boolean {
    return statuteState(state).approveIsPending;
}
