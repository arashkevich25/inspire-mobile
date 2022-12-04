import { StatuteWithApproveStatus } from '@inspire/types';
import { StatuteActions, StatuteUnion } from 'app-constants/actionTypes';

export interface StatuteState {
    statute: StatuteWithApproveStatus | null;
    approveIsPending: boolean;
    statuteIsFetching: boolean;
    statuteHasFetched: boolean;
}

const initialState: StatuteState = {
    statute: null,
    approveIsPending: false,
    statuteIsFetching: false,
    statuteHasFetched: false,
};

export function statuteReducer(state: StatuteState = initialState, action: StatuteUnion): StatuteState {
    switch (action.type) {
        case StatuteActions.GetStatuteDetails: {
            return {
                ...state,
                statuteIsFetching: true,
            };
        }

        case StatuteActions.GetStatuteDetailsSuccess: {
            return {
                ...state,
                statuteIsFetching: false,
                statuteHasFetched: false,
                statute: action.statute,
            };
        }

        case StatuteActions.GetStatuteDetailsFailed: {
            return {
                ...state,
                statuteIsFetching: false,
                statuteHasFetched: false,
            };
        }

        case StatuteActions.ApproveStatute: {
            return {
                ...state,
                approveIsPending: true,
            };
        }

        case StatuteActions.ApproveStatuteSuccess: {
            return {
                ...state,
                approveIsPending: false,
                statute: action.statute,
            };
        }

        case StatuteActions.ApproveStatuteFailed: {
            return {
                ...state,
                approveIsPending: false,
            };
        }

        default:
            return state;
    }
}
