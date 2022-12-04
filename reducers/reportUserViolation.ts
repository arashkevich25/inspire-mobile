import { ViolationReason } from '@inspire/types';
import { ReportUserViolationActions, ReportUserViolationUnion } from 'app-constants/actionTypes';

export interface ReportUserViolationState {
    reportViolationPending: boolean;
    reasons: ViolationReason[];
}

const initialState: ReportUserViolationState = {
    reportViolationPending: false,
    reasons: [],
};

export function reportUserViolationReducer(
    state: ReportUserViolationState = initialState,
    action: ReportUserViolationUnion,
): ReportUserViolationState {
    switch (action.type) {
        case ReportUserViolationActions.ReportViolation: {
            return {
                ...state,
                reportViolationPending: true,
            };
        }

        case ReportUserViolationActions.ReportViolationFailed: {
            return {
                ...state,
                reportViolationPending: false,
            };
        }

        case ReportUserViolationActions.ReportViolationSuccess: {
            return {
                ...state,
                reportViolationPending: false,
            };
        }

        case ReportUserViolationActions.SetUserViolationReasons: {
            return {
                ...state,
                reasons: action.reasons,
            };
        }

        default:
            return state;
    }
}
