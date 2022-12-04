import { StatuteWithApproveStatus } from '@inspire/types';

export enum StatuteActions {
    GetStatuteDetails = '[Statute] get statute details',
    GetStatuteDetailsSuccess = '[Statute] get statute details success',
    GetStatuteDetailsFailed = '[Statute] get statute details failed',

    ApproveStatute = '[Statute] approve statute',
    ApproveStatuteSuccess = '[Statute] approve statute success',
    ApproveStatuteFailed = '[Statute] approve statute failed',
}

interface GetStatuteDetails {
    type: typeof StatuteActions.GetStatuteDetails;
}

interface GetStatuteDetailsSuccess {
    type: typeof StatuteActions.GetStatuteDetailsSuccess;
    statute: StatuteWithApproveStatus;
}

interface GetStatuteDetailsFailed {
    type: typeof StatuteActions.GetStatuteDetailsFailed;
}

interface ApproveStatute {
    type: typeof StatuteActions.ApproveStatute;
}

interface ApproveStatuteSuccess {
    type: typeof StatuteActions.ApproveStatuteSuccess;
    statute: StatuteWithApproveStatus;
}

interface ApproveStatuteFailed {
    type: typeof StatuteActions.ApproveStatuteFailed;
}

export type StatuteUnion =
    | GetStatuteDetails
    | GetStatuteDetailsSuccess
    | GetStatuteDetailsFailed
    | ApproveStatute
    | ApproveStatuteSuccess
    | ApproveStatuteFailed;
