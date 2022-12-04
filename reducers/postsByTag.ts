import { SimplifiedPost } from '@inspire/types';
import { PostByTagActionUnion, PostsByTagActionTypes } from 'app-constants/actionTypes';
import { SkipCounters } from 'app-constants/SkipCounters';

interface PostsByTagState {
    posts: SimplifiedPost[];
    tag: string;
    postsIsFetching: boolean;
    postsHasFetched: boolean;
    loadMoreIsPending: boolean;
    skipCounter: number;
    loadMoreIsAllowed: boolean;
}

const initState: PostsByTagState = {
    posts: [],
    tag: '',
    postsIsFetching: false,
    postsHasFetched: false,
    loadMoreIsPending: false,
    loadMoreIsAllowed: false,
    skipCounter: 0,
};

export function postsByTagReducer(state: PostsByTagState = initState, action: PostByTagActionUnion): PostsByTagState {
    switch (action.type) {
        case PostsByTagActionTypes.FetchPosts: {
            return {
                ...state,
                postsIsFetching: true,
            };
        }
        case PostsByTagActionTypes.FetchPostsSuccess: {
            return {
                ...state,
                postsIsFetching: false,
                postsHasFetched: true,
                posts: action.posts,
                tag: action.tag,
                loadMoreIsAllowed: action.posts.length === SkipCounters.PostsByTag,
            };
        }
        case PostsByTagActionTypes.LoadMorePosts: {
            return {
                ...state,
                loadMoreIsPending: true,
                skipCounter: action.skip,
            };
        }

        case PostsByTagActionTypes.LoadMorePostsSuccess: {
            return {
                ...state,
                loadMoreIsPending: false,
                posts: [...state.posts, ...action.posts],
                loadMoreIsAllowed: action.posts.length === SkipCounters.PostsByTag,
            };
        }

        case PostsByTagActionTypes.ResetStore:
        case PostsByTagActionTypes.FetchPostsFailure: {
            return initState;
        }

        default: {
            return state;
        }
    }
}
