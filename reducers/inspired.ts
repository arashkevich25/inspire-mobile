import { SimplifiedPost } from '@inspire/types';
import { InspiredActionTypes, InspiredUnion } from 'app-constants/actionTypes';
import { SkipCounters } from 'app-constants/SkipCounters';

interface InspiredState {
    inspiredPosts: SimplifiedPost[];
    inspiredIsFetching: boolean;
    inspiredFetched: boolean;
    skipCounter: number;
    loadPostsPending: boolean;
    loadMoreIsAllowed: boolean;
    filterIsMount: boolean;
    followUnfollowPending: boolean;
}

const initialState: InspiredState = {
    inspiredFetched: false,
    inspiredIsFetching: false,
    inspiredPosts: [],
    skipCounter: 0,
    loadPostsPending: false,
    loadMoreIsAllowed: false,
    filterIsMount: false,
    followUnfollowPending: false,
};

export function inspiredReducer(state: InspiredState = initialState, action: InspiredUnion): InspiredState {
    switch (action.type) {
        case InspiredActionTypes.InspiredPosts: {
            return {
                ...state,
                inspiredIsFetching: true,
                skipCounter: SkipCounters.InspiredPosts,
            };
        }

        case InspiredActionTypes.InspiredPostsFailed: {
            return {
                ...state,
                inspiredIsFetching: false,
                inspiredPosts: [],
                inspiredFetched: false,
            };
        }

        case InspiredActionTypes.InitInspiredPosts: {
            return {
                ...state,
                inspiredFetched: true,
                inspiredPosts: action.posts,
                skipCounter: SkipCounters.InspiredPosts,
                loadMoreIsAllowed: action.posts.length === SkipCounters.InspiredPosts,
            };
        }

        case InspiredActionTypes.MountFilters: {
            return {
                ...state,
                filterIsMount: true,
            };
        }

        case InspiredActionTypes.FollowUnfollowPost: {
            return {
                ...state,
                followUnfollowPending: true,
            };
        }

        case InspiredActionTypes.FollowUnfollowPostFailed:
        case InspiredActionTypes.FollowUnfollowPostSuccess: {
            return {
                ...state,
                followUnfollowPending: false,
            };
        }

        case InspiredActionTypes.UnmountFilters: {
            return {
                ...state,
                filterIsMount: false,
            };
        }

        case InspiredActionTypes.InspiredPostsSuccess: {
            return {
                ...state,
                inspiredFetched: true,
                inspiredIsFetching: false,
                inspiredPosts: action.posts,
                loadMoreIsAllowed: action.posts.length === SkipCounters.InspiredPosts,
            };
        }

        case InspiredActionTypes.RemovePostById: {
            const inspiredPosts = state.inspiredPosts.filter(post => post.id !== action.postId);
            return {
                ...state,
                inspiredPosts,
            };
        }

        case InspiredActionTypes.LoadInspiredPosts: {
            return {
                ...state,
                loadPostsPending: true,
                skipCounter: state.skipCounter + SkipCounters.InspiredPosts,
            };
        }

        case InspiredActionTypes.LoadInspiredPostsSuccess: {
            return {
                ...state,
                inspiredPosts: [...state.inspiredPosts, ...action.posts],
                loadPostsPending: false,
                loadMoreIsAllowed: action.posts.length === SkipCounters.InspiredPosts,
            };
        }

        case InspiredActionTypes.UpdateInspiredPosts: {
            const inspiredPosts = state.inspiredPosts.map(post => {
                // @ts-ignore
                if (post.id === action.post.id) {
                    return {
                        ...post,
                        // @ts-ignore
                        ...action.post,
                    };
                }

                return post;
            });
            return {
                ...state,
                inspiredPosts,
            };
        }

        default:
            return state;
    }
}
