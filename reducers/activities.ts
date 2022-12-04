import { Activity } from '@inspire/types';
import { ActivitiesActions, ActivitiesUnion } from 'app-constants/actionTypes';
import { SkipCounters } from 'app-constants/SkipCounters';

import { prepareActivitiesDataWithSections } from 'tools';
import { ListSection } from 'types';
import { prepareDate } from '../screens/Activities/tools/prepareDate';

interface ActivitiesState {
    activities: ListSection<Activity>[];
    isFetching: boolean;
    hasFetched: boolean;
    skipCounter: number;
    nextLoadIsAllow: boolean;
    newActivityCount: number;
    loadIsPending: boolean;
}

const initActivities: ActivitiesState = {
    activities: [],
    isFetching: false,
    hasFetched: false,
    loadIsPending: false,
    skipCounter: 0,
    newActivityCount: 0,
    nextLoadIsAllow: false,
};

export function activitiesReducer(state: ActivitiesState = initActivities, action: ActivitiesUnion): ActivitiesState {
    switch (action.type) {
        case ActivitiesActions.FetchActivities: {
            return {
                ...state,
                isFetching: true,
            };
        }

        case ActivitiesActions.FetchActivitiesFailed: {
            return {
                ...state,
                isFetching: false,
                hasFetched: false,
                activities: [],
            };
        }

        case ActivitiesActions.InitActivities:
        case ActivitiesActions.FetchActivitiesSuccess: {
            const newActivityCount = action.activities.filter(activity => !activity.isRead).length;
            return {
                ...state,
                isFetching: false,
                hasFetched: true,
                activities: prepareActivitiesDataWithSections(action.activities),
                newActivityCount: newActivityCount,
                skipCounter: 0,
                nextLoadIsAllow: !(action.activities.length < SkipCounters.Activities),
            };
        }

        case ActivitiesActions.LoadMoreActivities: {
            return {
                ...state,
                loadIsPending: true,
            };
        }

        case ActivitiesActions.LoadMoreActivitiesSuccess: {
            return {
                ...state,
                loadIsPending: false,
                activities: prepareActivitiesDataWithSections(action.activities, state.activities),
                skipCounter: action.skipCounter,
                nextLoadIsAllow: !(action.activities.length < SkipCounters.Activities),
            };
        }

        case ActivitiesActions.MarkAsReadActivities: {
            const updatedState = [...state.activities];
            action.activities.forEach(activity => {
                updatedState.forEach((section, index) => {
                    if (section.title === prepareDate(activity.createdAt)) {
                        updatedState[index].data = [
                            ...updatedState[index].data.map(updatedActivity => {
                                if (activity.id === updatedActivity.id) {
                                    return {
                                        ...updatedActivity,
                                        isRead: activity.isRead,
                                    };
                                }
                                return updatedActivity;
                            }),
                        ];
                    }
                });
            });
            return {
                ...state,
                activities: updatedState,
                newActivityCount: updatedState.reduce(
                    (previousValue, currentValue) =>
                        previousValue + currentValue.data.filter(value => !value.isRead).length,
                    0,
                ),
            };
        }

        default:
            return state;
    }
}
