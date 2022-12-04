import { ViolationReason } from '@inspire/types';

export enum ReportUserViolationActions {
    ReportViolation = '[Report violation] report user violation',
    ReportViolationSuccess = '[Report violation] report user violation success',
    ReportViolationFailed = '[Report violation] report user violation failed',

    SetUserViolationReasons = '[Report violation] set user violation reasons',
}

interface ReportUserViolation {
    type: typeof ReportUserViolationActions.ReportViolation;
}

interface ReportUserViolationSuccess {
    type: typeof ReportUserViolationActions.ReportViolationSuccess;
}

interface ReportUserViolationFailed {
    type: typeof ReportUserViolationActions.ReportViolationFailed;
}

interface SetUserViolationReasons {
    type: typeof ReportUserViolationActions.SetUserViolationReasons;
    reasons: ViolationReason[];
}

export type ReportUserViolationUnion =
    | ReportUserViolation
    | ReportUserViolationSuccess
    | ReportUserViolationFailed
    | SetUserViolationReasons;
