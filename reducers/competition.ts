import { CompetitionDetails } from '@inspire/types';
import { CompetitionActions, CompetitionUnion } from 'app-constants/actionTypes';

export interface CompetitionState {
    competitionIsFetching: boolean;
    competitionHasFetched: boolean;
    competition: CompetitionDetails | null;
}

const initialState: CompetitionState = {
    competitionIsFetching: false,
    competitionHasFetched: false,
    competition: null,
};

export function competitionReducer(state: CompetitionState = initialState, action: CompetitionUnion): CompetitionState {
    switch (action.type) {
        case CompetitionActions.GetDetails: {
            return {
                ...state,
                competitionIsFetching: true,
            };
        }

        case CompetitionActions.GetDetailsFailed: {
            return {
                ...state,
                competitionIsFetching: false,
                competitionHasFetched: false,
            };
        }

        case CompetitionActions.GetDetailsSuccess: {
            return {
                ...state,
                competitionIsFetching: false,
                competitionHasFetched: true,
                competition: action.competition,
            };
        }

        default:
            return state;
    }
}
