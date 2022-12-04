import { AppState } from 'reducers';

function getState(state: AppState) {
    return state.postsByTag;
}

export function postsByTag(state: AppState) {
    return getState(state).posts;
}

export function postsByTagFetching(state: AppState) {
    return getState(state).postsIsFetching;
}

export function postsByTagHasFetched(state: AppState) {
    return getState(state).postsHasFetched;
}

export function postsByTagSkipCounter(state: AppState) {
    return getState(state).skipCounter;
}

export function postsByTagLoadIsPending(state: AppState) {
    return getState(state).loadMoreIsPending;
}

export function postsByTagLoadMoreIsAllowed(state: AppState) {
    return getState(state).loadMoreIsAllowed;
}

export function postsByTagSearchedTag(state: AppState) {
    return getState(state).tag;
}
