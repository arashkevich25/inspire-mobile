import { CompetitionDetails } from '@inspire/types';

export enum CompetitionActions {
    GetDetails = '[Competition] get details',
    GetDetailsSuccess = '[Competition] get details success',
    GetDetailsFailed = '[Competition] get details failed',

    AttendPosts = '[Competition] attend posts',
    AttendPostsSuccess = '[Competition] attend posts success',
    AttendPostsFailed = '[Competition] attend posts failed',

    AttendAccount = '[Competition] attend account',
    AttendAccountSuccess = '[Competition] attend account success',
    AttendAccountFailed = '[Competition] attend account failed',
}

interface AttendPosts {
    type: typeof CompetitionActions.AttendPosts;
}

interface AttendPostsSuccess {
    type: typeof CompetitionActions.AttendPostsSuccess;
    competition: CompetitionDetails;
}

interface AttendPostsFailed {
    type: typeof CompetitionActions.AttendPostsFailed;
}

interface AttendAccount {
    type: typeof CompetitionActions.AttendAccount;
}

interface AttendAccountSuccess {
    type: typeof CompetitionActions.AttendAccountSuccess;
    competition: CompetitionDetails;
}

interface AttendAccountFailed {
    type: typeof CompetitionActions.AttendAccountFailed;
}

interface GetDetails {
    type: typeof CompetitionActions.GetDetails;
}

interface GetDetailsSuccess {
    type: typeof CompetitionActions.GetDetailsSuccess;
    competition: CompetitionDetails;
}

interface GetDetailsFailed {
    type: typeof CompetitionActions.GetDetailsFailed;
    competition: CompetitionDetails;
}

export type CompetitionUnion =
    | GetDetails
    | GetDetailsSuccess
    | GetDetailsFailed
    | AttendPosts
    | AttendPostsSuccess
    | AttendPostsFailed
    | AttendAccount
    | AttendAccountSuccess
    | AttendAccountFailed;
