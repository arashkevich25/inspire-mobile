import { NoConnectionStatus, Profile } from 'navigation';

import { Navigation } from 'react-native-navigation';

export async function redirectToProfile(
    userId: number,
    isInternetReachableState: boolean,
    componentId: string,
    backTitle: string,
) {
    if (!isInternetReachableState) {
        await Navigation.push(componentId, { component: NoConnectionStatus(backTitle) });
        return;
    }
    await Navigation.push(componentId, { component: Profile(userId) });
}
