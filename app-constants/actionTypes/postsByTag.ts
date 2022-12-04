import { SimplifiedPost } from '@inspire/types';

export enum PostsByTagActionTypes {
    FetchPosts = '[Posts by tag] fetch posts by tag',
    FetchPostsSuccess = '[Posts by tag] posts fetched by tag success',
    FetchPostsFailure = '[Posts by tag] posts fetched by tag failed',
    LoadMorePosts = '[Posts by tag] load more posts',
    LoadMorePostsSuccess = '[Posts by tag] load more posts success',
    ResetStore = '[Posts by tag] reset store',
}

interface FetchPosts {
    type: typeof PostsByTagActionTypes.FetchPosts;
}

interface FetchPostsSuccess {
    type: typeof PostsByTagActionTypes.FetchPostsSuccess;
    tag: string;
    posts: SimplifiedPost[];
}

interface FetchPostsFailure {
    type: typeof PostsByTagActionTypes.FetchPostsFailure;
}

interface LoadMorePosts {
    type: typeof PostsByTagActionTypes.LoadMorePosts;
    skip: number;
}

interface LoadMorePostsSuccess {
    type: typeof PostsByTagActionTypes.LoadMorePostsSuccess;
    posts: SimplifiedPost[];
}

interface ResetStore {
    type: typeof PostsByTagActionTypes.ResetStore;
}

export type PostByTagActionUnion =
    | FetchPosts
    | FetchPostsSuccess
    | FetchPostsFailure
    | LoadMorePosts
    | LoadMorePostsSuccess
    | ResetStore;
