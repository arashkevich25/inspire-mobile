import { DetailsPost } from '@inspire/types';
import { PostByIdAction, PostByIdActionUnion } from 'app-constants/actionTypes';

interface PostState {
    post: DetailsPost | null;
    postIsFetching: boolean;
    postHasFetched: boolean;
}

export interface PostByIdState {
    [key: string]: PostState;
}

export const initPostByIdState: PostState = {
    post: null,
    postIsFetching: false,
    postHasFetched: false,
};

export function postByIdReducer(state: PostByIdState = {}, action: PostByIdActionUnion): PostByIdState {
    switch (action.type) {
        case PostByIdAction.FetchPostById:
        case PostByIdAction.FetchPostByIdFailed:
        case PostByIdAction.FetchPostByIdSuccess:
        case PostByIdAction.RemovePostById:
        case PostByIdAction.IncreaseInspiredCountPostById:
        case PostByIdAction.DecreaseInspiredCountPostById:
        case PostByIdAction.RemovePostByIdSuccess:
        case PostByIdAction.UpdateRatingPostById:
        case PostByIdAction.IncreaseRecommendCountPostById:
        case PostByIdAction.DecreaseRecommendCountPostById:
        case PostByIdAction.UpdatePostById: {
            return {
                ...state,
                [action.postId]: reducer(state[action.postId], action),
            };
        }
        default: {
            return state;
        }
    }
}

function reducer(state: PostState = initPostByIdState, action: PostByIdActionUnion): PostState {
    switch (action.type) {
        case PostByIdAction.FetchPostById: {
            return {
                ...state,
                postIsFetching: true,
            };
        }

        case PostByIdAction.FetchPostByIdFailed: {
            return {
                post: null,
                postIsFetching: false,
                postHasFetched: false,
            };
        }

        case PostByIdAction.UpdatePostById: {
            return {
                ...state,
                post: { ...state.post, ...action.post },
            };
        }

        case PostByIdAction.IncreaseInspiredCountPostById: {
            const post = state.post || { inspirationCount: 0 };
            return {
                ...state,
                // @ts-ignore
                post: { ...post, inspirationCount: post.inspirationCount + 1, isInspiredByUser: true },
            };
        }

        case PostByIdAction.IncreaseRecommendCountPostById: {
            const post = state.post || { recommends: 0 };
            return {
                ...state,
                // @ts-ignore
                post: { ...post, recommends: post.recommends + 1, userHasRecommend: true },
            };
        }

        case PostByIdAction.DecreaseRecommendCountPostById: {
            const post = state.post || { recommends: 1 };
            return {
                ...state,
                // @ts-ignore
                post: { ...post, recommends: post.recommends - 1, userHasRecommend: false },
            };
        }

        case PostByIdAction.DecreaseInspiredCountPostById: {
            const post = state.post || { inspirationCount: 1 };
            return {
                ...state,
                // @ts-ignore
                post: { ...post, inspirationCount: post.inspirationCount - 1, isInspiredByUser: false },
            };
        }

        case PostByIdAction.UpdateRatingPostById: {
            return {
                ...state,
                // @ts-ignore
                post: {
                    ...state.post,
                    userRating: action.userRating,
                    rating: action.userRating,
                    isRateByUser: true,
                    ratingCount: state.post!.isRateByUser ? state.post!.ratingCount : state.post!.ratingCount + 1,
                },
            };
        }

        case PostByIdAction.FetchPostByIdSuccess: {
            return {
                post: action.post,
                postHasFetched: true,
                postIsFetching: false,
            };
        }

        default:
            return state;
    }
}
