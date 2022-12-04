import { SimplifiedPost, Tag, User } from '@inspire/types';

export enum GlobalSearchActions {
    FetchSearchedAccounts = '[Global search / accounts] fetch searched accounts',
    FetchSearchedAccountsSuccess = '[Global search / accounts] fetch searched accounts success',
    FetchSearchedAccountsFailed = '[Global search / accounts] fetch searched accounts failed',
    ResetStore = '[Global search / accounts] reset store',

    LoadMoreSearchedPosts = '[Global search / posts] load more searched posts',
    LoadMoreSearchedPostsSuccess = '[Global search / posts] load more searched posts success',
    FetchSearchedPosts = '[Global search / posts] fetch searched posts',
    FetchSearchedPostsSuccess = '[Global search / posts] fetch searched posts success',
    FetchSearchedPostsFailed = '[Global search / posts] fetch searched posts failed',

    LoadMoreSearchedTags = '[Global search / tags] load more searched tags',
    LoadMoreSearchedTagsSuccess = '[Global search / tags] load more searched tags success',
    FetchSearchedTags = '[Global search / tags] fetch searched tags',
    FetchSearchedTagsSuccess = '[Global search / tags] fetch searched tags success',
    FetchSearchedTagsFailed = '[Global search / tags] fetch searched tags failed',
}

export interface LoadMoreSearchedTagsSuccess {
    type: typeof GlobalSearchActions.LoadMoreSearchedTagsSuccess;
    query: string;
    tags: Tag[];
}

export interface LoadMoreSearchedTags {
    type: typeof GlobalSearchActions.LoadMoreSearchedTags;
    skip: number;
}

export interface LoadMoreSearchedPosts {
    type: typeof GlobalSearchActions.LoadMoreSearchedPosts;
    skip: number;
}

export interface LoadMoreSearchedPostsSuccess {
    type: typeof GlobalSearchActions.LoadMoreSearchedPostsSuccess;
    query: string;
    posts: SimplifiedPost[];
}

export interface FetchSearchedTags {
    type: typeof GlobalSearchActions.FetchSearchedTags;
    query: string;
}

export interface FetchSearchedTagsSuccess {
    type: typeof GlobalSearchActions.FetchSearchedTagsSuccess;
    tags: Tag[];
}

export interface FetchSearchedTagsFailed {
    type: typeof GlobalSearchActions.FetchSearchedTagsFailed;
}

export interface FetchSearchedPosts {
    type: typeof GlobalSearchActions.FetchSearchedPosts;
    query: string;
}

export interface FetchSearchedPostsSuccess {
    type: typeof GlobalSearchActions.FetchSearchedPostsSuccess;
    posts: SimplifiedPost[];
}

export interface FetchSearchedPostsFailed {
    type: typeof GlobalSearchActions.FetchSearchedPostsFailed;
}

export interface FetchSearchedAccounts {
    type: typeof GlobalSearchActions.FetchSearchedAccounts;
    query: string;
}

export interface FetchSearchedAccountsSuccess {
    type: typeof GlobalSearchActions.FetchSearchedAccountsSuccess;
    accounts: User[];
}

export interface FetchSearchedAccountsFailed {
    type: typeof GlobalSearchActions.FetchSearchedAccountsFailed;
}

export interface ResetStore {
    type: typeof GlobalSearchActions.ResetStore;
}

export type GlobalSearchActionsUnion =
    | ResetStore
    | FetchSearchedAccounts
    | FetchSearchedAccountsSuccess
    | FetchSearchedTags
    | FetchSearchedTagsSuccess
    | FetchSearchedTagsFailed
    | LoadMoreSearchedTags
    | FetchSearchedAccountsFailed
    | FetchSearchedPosts
    | LoadMoreSearchedPosts
    | LoadMoreSearchedPostsSuccess
    | LoadMoreSearchedTagsSuccess
    | FetchSearchedPostsSuccess
    | FetchSearchedPostsFailed;
