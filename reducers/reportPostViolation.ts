import { PostViolationReason } from '@inspire/types';
import { ReportPostViolationActions, ReportPostViolationUnion } from 'app-constants/actionTypes';

export interface ReportPostViolationState {
    reportViolationPending: boolean;
    reasons: PostViolationReason[];
}

const initialState: ReportPostViolationState = {
    reportViolationPending: false,
    reasons: [],
};

export function reportPostViolationReducer(
    state: ReportPostViolationState = initialState,
    action: ReportPostViolationUnion,
): ReportPostViolationState {
    switch (action.type) {
        case ReportPostViolationActions.ReportViolation: {
            return {
                ...state,
                reportViolationPending: true,
            };
        }

        case ReportPostViolationActions.ReportViolationFailed: {
            return {
                ...state,
                reportViolationPending: false,
            };
        }

        case ReportPostViolationActions.ReportViolationSuccess: {
            return {
                ...state,
                reportViolationPending: false,
            };
        }

        case ReportPostViolationActions.SetPostViolationReasons: {
            return {
                ...state,
                reasons: action.reasons,
            };
        }

        default:
            return state;
    }
}
