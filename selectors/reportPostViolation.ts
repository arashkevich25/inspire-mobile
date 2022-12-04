import { ViolationReason } from '@inspire/types';

import { AppState } from 'reducers';
import { ReportPostViolationState } from 'reducers/reportPostViolation';

function reportViolationState(state: AppState): ReportPostViolationState {
    return state.reportPostViolation;
}

export function reportPostViolationStatePending(state: AppState): boolean {
    return reportViolationState(state).reportViolationPending;
}

export function reportPostViolationReasons(state: AppState): ViolationReason[] {
    return reportViolationState(state).reasons;
}
