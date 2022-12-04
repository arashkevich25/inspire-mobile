import { SimplifiedPost } from '@inspire/types';

import { AppState } from 'reducers';
import { WorldWallState } from 'reducers/worldWall';

function getWorldWallState(state: AppState): WorldWallState {
    return state.worldWall;
}

export function getWorldWallPosts(state: AppState): SimplifiedPost[] {
    return getWorldWallState(state).posts;
}

export function getWorldWallPostsIsPending(state: AppState): boolean {
    return getWorldWallState(state).postsIsPending;
}

export function getWorldWallPostsHasFetched(state: AppState): boolean {
    return getWorldWallState(state).postsFetched;
}

export function loadWorldWallPostsPending(state: AppState) {
    return getWorldWallState(state).postsIsPending;
}

export function loadWorldWallPostsIsEmpty(state: AppState) {
    return getWorldWallState(state).loadMoreIsAllowed;
}

export function loadWorldWallSkipCounter(state: AppState) {
    return getWorldWallState(state).skipCounter;
}

export function worldWallFiltersIsMount(state: AppState) {
    return getWorldWallState(state).filterIsMount;
}
