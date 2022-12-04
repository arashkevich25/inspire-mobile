import { ViolationReason } from '@inspire/types';

export enum ReportPostViolationActions {
    ReportViolation = '[Report violation] report post violation',
    ReportViolationSuccess = '[Report violation] report post violation success',
    ReportViolationFailed = '[Report violation] report post violation failed',

    SetPostViolationReasons = '[Report violation] set post violation reasons',
}

interface ReportPostViolation {
    type: typeof ReportPostViolationActions.ReportViolation;
}

interface ReportPostViolationSuccess {
    type: typeof ReportPostViolationActions.ReportViolationSuccess;
}

interface ReportPostViolationFailed {
    type: typeof ReportPostViolationActions.ReportViolationFailed;
}

interface SetPostViolationReasons {
    type: typeof ReportPostViolationActions.SetPostViolationReasons;
    reasons: ViolationReason[];
}

export type ReportPostViolationUnion =
    | ReportPostViolation
    | ReportPostViolationSuccess
    | ReportPostViolationFailed
    | SetPostViolationReasons;
