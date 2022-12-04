import { ComponentId } from 'navigation/constants';
import { store } from '../store/store';

import { Navigation } from 'react-native-navigation';

import { markActivitiesAsRead } from 'actions';
import { EditGroupById, Profile, ShowPostModalFromPostById } from 'navigation/components';
import { NavigationService } from 'navigation/tools/NavigationService';

export async function openPushMessage(args: any) {
    await Navigation.mergeOptions(NavigationService.activeScreen, {
        bottomTabs: {
            currentTabIndex: 0,
        },
    });
    await redirectFromPushToActivity(args.notification.payload.additionalData);
}

export async function redirectFromPushToActivity({ postId, userId, groupId, activityId }: any) {
    if (activityId) {
        store.dispatch(markActivitiesAsRead([activityId]));
    }

    if (postId) {
        await Navigation.push(ComponentId.AppHome, {
            component: ShowPostModalFromPostById(postId, ComponentId.AppHome, 'World wall'),
        });
        return;
    }

    if (userId) {
        await Navigation.push(ComponentId.AppHome, { component: Profile(userId) });
        return;
    }

    if (groupId) {
        await Navigation.push(ComponentId.AppHome, {
            component: EditGroupById(Number(groupId), 'World wall'),
        });
        return;
    }
}
