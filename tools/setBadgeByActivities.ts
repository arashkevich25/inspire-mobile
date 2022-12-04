import { Activity } from '@inspire/types';
import { ComponentId } from 'navigation/constants/componentId';

import { Navigation } from 'react-native-navigation';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

export function setBadgeByActivities(getActivities: Activity[]) {
    if (getActivities.filter(activity => !activity.isRead).length) {
        Navigation.mergeOptions(ComponentId.AppRootProfile, {
            bottomTab: { badgeColor: 'red', badge: ' ' },
        });
        return;
    }
    Navigation.mergeOptions(ComponentId.AppRootProfile, {
        bottomTab: {
            badgeColor: '',
            badge: '',
            icon: require(`../navigation/assets/nonactive/profile.png`),
            iconColor: StylesValue(ThemeVariables.Color1),
            selectedIconColor: StylesValue(ThemeVariables.HighlightColor1),
        },
    });
}

export function setBadgeByCounter(counter: number) {
    if (counter) {
        Navigation.mergeOptions(ComponentId.AppRootProfile, {
            bottomTab: { badgeColor: 'red', badge: ' ' },
        });
        return;
    }
    Navigation.mergeOptions(ComponentId.AppRootProfile, {
        bottomTab: {
            badgeColor: '',
            badge: '',
            icon: require(`../navigation/assets/nonactive/profile.png`),
            iconColor: StylesValue(ThemeVariables.Color1),
            selectedIconColor: StylesValue(ThemeVariables.HighlightColor1),
        },
    });
}
