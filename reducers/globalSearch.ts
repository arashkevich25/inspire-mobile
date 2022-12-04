import { SimplifiedPost, Tag, User } from '@inspire/types';
import { GlobalSearchActions, GlobalSearchActionsUnion } from 'app-constants/actionTypes';
import { SkipCounters } from 'app-constants/SkipCounters';

export interface GlobalSearchState {
    accountFetching: boolean;
    accountsHasFetched: boolean;
    accounts: User[];
    postsFetching: boolean;
    postsHasFetched: boolean;
    posts: SimplifiedPost[];
    searchedTagQuery: string;
    loadMorePostsPending: boolean;
    loadMoreTagsPending: boolean;
    postsSkip: number;
    postsLoadIsAllowed: boolean;
    tagsFetching: boolean;
    tagsHasFetched: boolean;
    tags: Tag[];
    tagsSkip: number;
    tagsLoadIsAllowed: boolean;
}

const initialState: GlobalSearchState = {
    accountFetching: false,
    accounts: [],
    searchedTagQuery: '',
    accountsHasFetched: false,
    postsFetching: false,
    loadMorePostsPending: false,
    loadMoreTagsPending: false,
    postsHasFetched: false,
    posts: [],
    postsSkip: 0,
    postsLoadIsAllowed: false,
    tagsFetching: false,
    tagsHasFetched: false,
    tags: [],
    tagsSkip: 0,
    tagsLoadIsAllowed: false,
};

export function globalSearchReducer(
    state: GlobalSearchState = initialState,
    action: GlobalSearchActionsUnion,
): GlobalSearchState {
    switch (action.type) {
        case GlobalSearchActions.ResetStore: {
            return {
                ...initialState,
            };
        }
        case GlobalSearchActions.FetchSearchedAccounts: {
            return {
                ...state,
                accountFetching: true,
            };
        }

        case GlobalSearchActions.FetchSearchedAccountsFailed: {
            return {
                ...state,
                accountFetching: false,
                accountsHasFetched: false,
            };
        }

        case GlobalSearchActions.FetchSearchedAccountsSuccess: {
            return {
                ...state,
                accountsHasFetched: true,
                accountFetching: false,
                accounts: action.accounts,
            };
        }

        case GlobalSearchActions.FetchSearchedPosts: {
            return {
                ...state,
                postsFetching: true,
            };
        }

        case GlobalSearchActions.FetchSearchedPostsSuccess: {
            return {
                ...state,
                postsFetching: false,
                postsHasFetched: true,
                posts: action.posts,
                postsLoadIsAllowed: action.posts.length === SkipCounters.SearchedPosts,
            };
        }

        case GlobalSearchActions.LoadMoreSearchedPosts: {
            return {
                ...state,
                loadMorePostsPending: true,
                postsSkip: action.skip,
            };
        }

        case GlobalSearchActions.LoadMoreSearchedPostsSuccess: {
            return {
                ...state,
                posts: [...state.posts, ...action.posts],
                loadMorePostsPending: false,
                postsLoadIsAllowed: action.posts.length === SkipCounters.SearchedPosts,
            };
        }

        case GlobalSearchActions.LoadMoreSearchedTags: {
            return {
                ...state,
                loadMoreTagsPending: true,
                tagsSkip: action.skip,
            };
        }

        case GlobalSearchActions.LoadMoreSearchedTagsSuccess: {
            return {
                ...state,
                loadMoreTagsPending: false,
                tags: [...state.tags, ...action.tags],
                tagsLoadIsAllowed: action.tags.length === SkipCounters.SearchedTags,
            };
        }

        case GlobalSearchActions.FetchSearchedPostsFailed: {
            return {
                ...state,
                postsFetching: false,
                postsHasFetched: false,
                posts: [],
            };
        }

        case GlobalSearchActions.FetchSearchedTags: {
            return {
                ...state,
                tagsFetching: true,
                searchedTagQuery: action.query,
            };
        }

        case GlobalSearchActions.FetchSearchedTagsFailed: {
            return {
                ...state,
                tagsFetching: false,
                tagsHasFetched: false,
                tags: [],
            };
        }

        case GlobalSearchActions.FetchSearchedTagsSuccess: {
            return {
                ...state,
                tags: action.tags,
                tagsFetching: false,
                tagsHasFetched: true,
                tagsLoadIsAllowed: action.tags.length === SkipCounters.SearchedTags,
            };
        }

        default:
            return state;
    }
}
