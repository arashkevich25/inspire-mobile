import { AppState } from 'reducers';

function inspiredState(state: AppState) {
    return state.inspired;
}

export function inspiredPosts(state: AppState) {
    return inspiredState(state).inspiredPosts;
}

export function inspiredPostsFetching(state: AppState) {
    return inspiredState(state).inspiredIsFetching;
}

export function inspiredPostsFetched(state: AppState) {
    return inspiredState(state).inspiredFetched;
}

export function loadInspiredPostsPending(state: AppState) {
    return inspiredState(state).loadPostsPending;
}

export function loadInspiredPostsEmpty(state: AppState) {
    return inspiredState(state).loadMoreIsAllowed;
}

export function loadInspiredPostsSkipCounter(state: AppState) {
    return inspiredState(state).skipCounter;
}

export function inspiredFiltersIsMount(state: AppState) {
    return inspiredState(state).filterIsMount;
}

export function followUnfollowPending(state: AppState) {
    return inspiredState(state).followUnfollowPending;
}
