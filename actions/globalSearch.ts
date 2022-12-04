import { SimplifiedPost, Tag, User } from '@inspire/types';
import { GlobalSearchActions } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';

import { SEARCH_ACCOUNTS, SEARCH_POSTS, SEARCH_TAGS } from 'schemes';
import { graphqlQueryWithPolicyByNetworkConnection, RollbarLogging } from 'tools';

export function searchAccounts(query: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: GlobalSearchActions.FetchSearchedAccounts,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ searchAccounts: User[] }>({
            query: SEARCH_ACCOUNTS,
            variables: {
                query,
            },
        })
            .then(({ data: { searchAccounts } }) => {
                dispatch(searchAccountsSuccess(searchAccounts));
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'searchAccounts');
                dispatch(searchAccountsFailed());
            });
    };
}

function searchAccountsSuccess(accounts: User[]) {
    return {
        type: GlobalSearchActions.FetchSearchedAccountsSuccess,
        accounts,
    };
}

function searchAccountsFailed() {
    return {
        type: GlobalSearchActions.FetchSearchedAccountsFailed,
    };
}

export function resetStore() {
    return {
        type: GlobalSearchActions.ResetStore,
    };
}

export function loadMorePosts(query: string, skip: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: GlobalSearchActions.LoadMoreSearchedPosts,
            skip,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ searchSimplifiedPosts: SimplifiedPost[] }>({
            query: SEARCH_POSTS,
            variables: {
                query,
                skip,
            },
        })
            .then(({ data: { searchSimplifiedPosts } }) => {
                dispatch({
                    type: GlobalSearchActions.LoadMoreSearchedPostsSuccess,
                    posts: searchSimplifiedPosts,
                    query,
                });
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'loadMorePosts');
            });
    };
}

export function loadMoreTags(query: string, skip: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: GlobalSearchActions.LoadMoreSearchedTags,
            skip,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ searchTags: Tag[] }>({
            query: SEARCH_TAGS,
            variables: {
                query,
                skip,
            },
        })
            .then(({ data: { searchTags } }) => {
                dispatch({
                    type: GlobalSearchActions.LoadMoreSearchedTagsSuccess,
                    tags: searchTags,
                    query,
                });
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'loadMoreTags');
            });
    };
}

export function searchPosts(query: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: GlobalSearchActions.FetchSearchedPosts,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ searchSimplifiedPosts: SimplifiedPost[] }>({
            query: SEARCH_POSTS,
            variables: {
                query,
                skip: 0,
            },
        })
            .then(({ data: { searchSimplifiedPosts } }) => {
                dispatch(searchPostsSuccess(searchSimplifiedPosts));
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'searchPosts');
                dispatch(searchPostsFailed());
            });
    };
}

function searchPostsSuccess(posts: SimplifiedPost[]) {
    return {
        type: GlobalSearchActions.FetchSearchedPostsSuccess,
        posts,
    };
}

function searchPostsFailed() {
    return {
        type: GlobalSearchActions.FetchSearchedPostsFailed,
    };
}

export function searchTags(query: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: GlobalSearchActions.FetchSearchedTags,
            query,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ searchTags: Tag[] }>({
            query: SEARCH_TAGS,
            variables: {
                query,
                skip: 0,
            },
        })
            .then(({ data: { searchTags } }) => {
                dispatch(searchTagsSuccess(searchTags));
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'searchTags');
                dispatch(searchTagsFailed());
            });
    };
}

function searchTagsSuccess(tags: Tag[]) {
    return {
        type: GlobalSearchActions.FetchSearchedTagsSuccess,
        tags,
    };
}

function searchTagsFailed() {
    return {
        type: GlobalSearchActions.FetchSearchedTagsFailed,
    };
}
