import { NoConnectionStatus, ShowPostModalFromPostById } from 'navigation';

import { Navigation } from 'react-native-navigation';

export async function redirectToFullPostView(
    postId: string,
    isInternetReachableState: boolean,
    componentId: string,
    backTitle: string,
) {
    if (!isInternetReachableState) {
        await Navigation.push(componentId, { component: NoConnectionStatus(backTitle) });
        return;
    }
    await Navigation.push(componentId, {
        component: ShowPostModalFromPostById(postId, componentId, backTitle),
    });
}
