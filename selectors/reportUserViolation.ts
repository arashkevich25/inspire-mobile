import { ViolationReason } from '@inspire/types';

import { AppState } from 'reducers';
import { ReportUserViolationState } from 'reducers/reportUserViolation';

function reportViolationState(state: AppState): ReportUserViolationState {
    return state.reportUserViolation;
}

export function reportUserViolationStatePending(state: AppState): boolean {
    return reportViolationState(state).reportViolationPending;
}

export function reportUserViolationReasons(state: AppState): ViolationReason[] {
    return reportViolationState(state).reasons;
}
