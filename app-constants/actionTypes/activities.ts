import { Activity } from '@inspire/types';

export enum ActivitiesActions {
    FetchActivities = '[Activities] fetch activities',
    InitActivities = '[Activities] init activities',
    FetchActivitiesSuccess = '[Activities] fetch activities success',
    FetchActivitiesFailed = '[Activities] fetch activities failed',
    LoadMoreActivities = '[Activities] load more Activities',
    LoadMoreActivitiesSuccess = '[Activities] load more Activities success',
    MarkAsReadActivities = '[Activities] mark as read',
}

interface FetchActivities {
    type: typeof ActivitiesActions.FetchActivities;
}

interface FetchActivitiesSuccess {
    type: typeof ActivitiesActions.FetchActivitiesSuccess;
    activities: Activity[];
}

interface InitActivities {
    type: typeof ActivitiesActions.InitActivities;
    activities: Activity[];
}

interface FetchActivitiesFailed {
    type: typeof ActivitiesActions.FetchActivitiesFailed;
}

interface LoadMoreActivitiesSuccess {
    type: typeof ActivitiesActions.LoadMoreActivitiesSuccess;
    activities: Activity[];
    skipCounter: number;
}

interface LoadMoreActivities {
    type: typeof ActivitiesActions.LoadMoreActivities;
}

interface MarkAsReadActivities {
    type: typeof ActivitiesActions.MarkAsReadActivities;
    activities: Activity[];
}

export type ActivitiesUnion =
    | LoadMoreActivitiesSuccess
    | FetchActivities
    | FetchActivitiesSuccess
    | FetchActivitiesFailed
    | InitActivities
    | LoadMoreActivities
    | MarkAsReadActivities;
