import { Activity } from '@inspire/types';
import { ActivitiesActions } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';

import { client } from 'configs/graphql';
import { GET_ACTIVITIES, MARK_ACTIVITIES_AS_READ } from 'schemes';
import { graphqlQueryWithPolicyByNetworkConnection, setBadgeByActivities } from 'tools';

export function fetchActivities() {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActivitiesActions.FetchActivities,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getActivities: Activity[] }>({
            query: GET_ACTIVITIES,
            variables: {
                skipCounter: 0,
            },
        })
            .then(response => dispatch(fetchActivitiesSuccess(response.data.getActivities)))
            .catch(() => {
                dispatch(fetchActivitiesFailed());
            });
    };
}

function fetchActivitiesSuccess(activities: Activity[]) {
    return {
        type: ActivitiesActions.FetchActivitiesSuccess,
        activities,
    };
}

function fetchActivitiesFailed() {
    return {
        type: ActivitiesActions.FetchActivitiesFailed,
    };
}

export function loadMoreActivities(skipCounter: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActivitiesActions.LoadMoreActivities,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getActivities: Activity[] }>({
            query: GET_ACTIVITIES,
            variables: {
                skipCounter,
            },
        }).then(response => dispatch(loadMoreActivitiesSuccess(response.data.getActivities, skipCounter)));
    };
}

function loadMoreActivitiesSuccess(activities: Activity[], skipCounter: number) {
    return {
        type: ActivitiesActions.LoadMoreActivitiesSuccess,
        activities,
        skipCounter,
    };
}

export function initActivities(activities: Activity[]) {
    return {
        type: ActivitiesActions.InitActivities,
        activities,
    };
}

export function markActivitiesAsRead(ids: number[]) {
    return (dispatch: Dispatch) => {
        if (!ids.length) {
            return;
        }
        client
            .mutate<{ readActivities: Activity[] }>({ mutation: MARK_ACTIVITIES_AS_READ, variables: { ids } })
            .then(response => {
                dispatch({
                    type: ActivitiesActions.MarkAsReadActivities,
                    activities: response.data?.readActivities,
                });
                setBadgeByActivities(response.data!.readActivities);
            });
    };
}
