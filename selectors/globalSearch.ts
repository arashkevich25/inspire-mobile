import { AppState } from 'reducers';
import { GlobalSearchState } from 'reducers/globalSearch';

function getGlobalSearchState(state: AppState): GlobalSearchState {
    return state.search;
}

export function accountsSearchIsFetching(state: AppState) {
    return getGlobalSearchState(state).accountFetching;
}

export function accountsSearchHasFetched(state: AppState) {
    return getGlobalSearchState(state).accountsHasFetched;
}

export function accountsSearchResult(state: AppState) {
    return getGlobalSearchState(state).accounts;
}

export function postsSearchIsFetching(state: AppState) {
    return getGlobalSearchState(state).postsFetching;
}

export function postsSearchHasFetched(state: AppState) {
    return getGlobalSearchState(state).postsHasFetched;
}

export function postsSearchResult(state: AppState) {
    return getGlobalSearchState(state).posts;
}

export function postsSearchSkipCounter(state: AppState) {
    return getGlobalSearchState(state).postsSkip;
}

export function postsSearchLoadIsAllowed(state: AppState) {
    return getGlobalSearchState(state).postsLoadIsAllowed;
}

export function tagsSearchSkipCounter(state: AppState) {
    return getGlobalSearchState(state).tagsSkip;
}

export function tagsSearchLoadIsAllowed(state: AppState) {
    return getGlobalSearchState(state).tagsLoadIsAllowed;
}

export function tagsLoadMoreIsPending(state: AppState) {
    return getGlobalSearchState(state).loadMoreTagsPending;
}

export function postsLoadMoreIsPending(state: AppState) {
    return getGlobalSearchState(state).loadMorePostsPending;
}

export function tagsSearchIsFetching(state: AppState) {
    return getGlobalSearchState(state).tagsFetching;
}

export function tagsSearchHasFetched(state: AppState) {
    return getGlobalSearchState(state).tagsHasFetched;
}

export function searchedTagQuery(state: AppState) {
    return getGlobalSearchState(state).searchedTagQuery;
}

export function tagsSearchResult(state: AppState) {
    return getGlobalSearchState(state).tags;
}
