import { CompetitionDetails } from '@inspire/types';

import { AppState } from 'reducers';
import { CompetitionState } from 'reducers/competition';

function competitionState(state: AppState): CompetitionState {
    return state.competition;
}

export function competition(state: AppState): CompetitionDetails | null {
    return competitionState(state).competition;
}

export function competitionIsFetching(state: AppState): boolean {
    return competitionState(state).competitionIsFetching;
}

export function competitionHasFetched(state: AppState): boolean {
    return competitionState(state).competitionHasFetched;
}
