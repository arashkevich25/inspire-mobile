import { AppState } from 'reducers';

function getWallState(state: AppState) {
    return state.wall;
}

export function wallPosts(state: AppState) {
    return getWallState(state).posts;
}

export function wallPostsIsPending(state: AppState) {
    return getWallState(state).postsIsPending;
}

export function wallPostsFetched(state: AppState) {
    return getWallState(state).postsFetched;
}

export function wallPostsSkipCounter(state: AppState) {
    return getWallState(state).skipCounter;
}

export function wallPostsLoadPostsPending(state: AppState) {
    return getWallState(state).loadingPostsPending;
}

export function wallPostsLoadPostsFetched(state: AppState) {
    return getWallState(state).loadingPostsFetched;
}

export function wallPostsLoadMorePostsIsAllowed(state: AppState) {
    return getWallState(state).loadMorePostsIsAllowed;
}

export function wallFiltersIsMount(state: AppState) {
    return getWallState(state).filterIsMount;
}
