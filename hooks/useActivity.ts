import { Activity, HistoryEventsTypes } from '@inspire/types';
import { SkipCounters } from 'app-constants/SkipCounters';
import { ComponentId } from 'navigation/constants';
import { useDispatch, useSelector } from 'react-redux';
import { ListSection } from '../types/ListSection';

import { Navigation } from 'react-native-navigation';

import { fetchActivities, loadMoreActivities, markActivitiesAsRead } from 'actions/activities';
import { EditGroupById, Profile, ShowPostModalFromPostById } from 'navigation/components';
import { AppState } from 'reducers';
import {
    activitiesHasFetched,
    activitiesIsFetching,
    activitiesLoadMoreIsAllow,
    activitiesLoadState,
    activitiesSkipCounter,
    getActivities,
    newActivityCount,
} from 'selectors';
import { setBadgeByCounter } from 'tools';

interface UseActivityOutput {
    activities: ListSection<Activity>[];
    newActivity: number;
    activitiesFetchingState: boolean;
    activitiesFetchedState: boolean;
    activityLoadMoreAllow: boolean;
    fetchActivity: () => void;
    loadMore: () => void;
    markAllAsRead: (sectionTitle: string) => void;
    isSectionHasMarkAllButton: (sectionTitle: string) => boolean;
    onActivityClickHandle: (activity: Activity) => void;
    markActivityAsRead: (id: number) => void;
}

export function useActivity(): UseActivityOutput {
    const dispatch = useDispatch();
    const activities: ListSection<Activity>[] = useSelector((state: AppState) => getActivities(state));
    const activitiesFetchingState: boolean = useSelector((state: AppState) => activitiesIsFetching(state));
    const activitiesFetchedState: boolean = useSelector((state: AppState) => activitiesHasFetched(state));
    const activityLoadMoreAllow: boolean = useSelector((state: AppState) => activitiesLoadMoreIsAllow(state));
    const skipCounter: number = useSelector((state: AppState) => activitiesSkipCounter(state));
    const loadPending: boolean = useSelector((state: AppState) => activitiesLoadState(state));
    const newActivity: number = useSelector((state: AppState) => newActivityCount(state));

    function fetchActivity() {
        dispatch(fetchActivities());
    }

    function markAllAsRead(sectionTitle: string) {
        const ids: number[] = activities
            .filter(section => section.title === sectionTitle)[0]
            .data.filter(activity => !activity.isRead)
            .map(activity => activity.id);
        dispatch(markActivitiesAsRead(ids));
    }

    function loadMore() {
        if (!activityLoadMoreAllow || loadPending) {
            return;
        }
        dispatch(loadMoreActivities(skipCounter + SkipCounters.Activities));
    }

    function isSectionHasMarkAllButton(sectionTitle: string): boolean {
        return !!activities
            .filter(section => section.title === sectionTitle)[0]
            .data.filter(activity => !activity.isRead).length;
    }

    function markActivityAsRead(id: number) {
        dispatch(markActivitiesAsRead([id]));
    }

    async function onActivityClickHandle(activity: Activity) {
        if (!activity.isRead) {
            markActivityAsRead(activity.id);
        }
        switch (activity.kind) {
            case HistoryEventsTypes.PostAddedComment: {
                await Navigation.push(ComponentId.AppRootProfile, {
                    component: ShowPostModalFromPostById(activity.post!.id, ComponentId.AppRootProfile, ''),
                });
                break;
            }

            case HistoryEventsTypes.AddPostToGroup: {
                await Navigation.push(ComponentId.AppRootProfile, {
                    component: ShowPostModalFromPostById(activity.post!.id, ComponentId.AppRootProfile, ''),
                });
                break;
            }

            case HistoryEventsTypes.InspireByPost: {
                await Navigation.push(ComponentId.AppRootProfile, {
                    component: ShowPostModalFromPostById(activity.post!.id, ComponentId.AppRootProfile, ''),
                });
                break;
            }

            case HistoryEventsTypes.PostRecommend: {
                await Navigation.push(ComponentId.AppRootProfile, {
                    component: ShowPostModalFromPostById(activity.post!.id, ComponentId.AppRootProfile, ''),
                });
                break;
            }

            case HistoryEventsTypes.NewFollower: {
                await Navigation.push(ComponentId.AppRootProfile, {
                    component: Profile(activity.user!.id),
                });
                setBadgeByCounter(newActivity);
                break;
            }

            case HistoryEventsTypes.AddedUserToGroup: {
                await Navigation.push(ComponentId.AppRootProfile, {
                    component: EditGroupById(activity.group!.id, ''),
                });
                break;
            }

            default:
                break;
        }
    }

    return {
        activities,
        newActivity,
        activitiesFetchingState,
        activitiesFetchedState,
        activityLoadMoreAllow,
        fetchActivity,
        loadMore,
        onActivityClickHandle,
        isSectionHasMarkAllButton,
        markAllAsRead,
        markActivityAsRead,
    };
}
