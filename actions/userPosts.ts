import { SimplifiedPost } from '@inspire/types';
import { ProfileActionTypes, ProfileActionUnion } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';

import { GET_POSTS_BY_USER, GET_PRODUCT_POSTS_BY_USER, GET_RECOMMENDED_POSTS_BY_USER } from 'schemes';
import { graphqlQueryWithPolicyByNetworkConnection } from 'tools';

export function updateUserPost(userId: number, post: Partial<SimplifiedPost>): ProfileActionUnion {
    return {
        type: ProfileActionTypes.UpdateUserPost,
        post,
        userId,
    };
}

export function loadMoreUserPosts(userId: number, skip: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ProfileActionTypes.LoadMorePosts,
            userId,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getSimplifiedPostsByUser: SimplifiedPost[] }>({
            query: GET_POSTS_BY_USER,
            variables: { userId, skip },
        })
            .then(response => {
                dispatch(loadMoreUserPostsSuccess(userId, response.data.getSimplifiedPostsByUser));
            })
            .catch(() => dispatch(loadMoreUserPostsFailed(userId)));
    };
}

export function loadMoreUserPostsSuccess(userId: number, posts: SimplifiedPost[]) {
    return {
        type: ProfileActionTypes.LoadMorePostsSuccess,
        posts,
        userId,
    };
}

export function loadMoreUserPostsFailed(userId: number) {
    return {
        type: ProfileActionTypes.LoadMorePostsFailed,
        userId,
    };
}

export function loadMoreUserProductPosts(userId: number, skip: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ProfileActionTypes.LoadMoreProductPosts,
            userId,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getProductSimplifiedPostsByUser: SimplifiedPost[] }>({
            query: GET_PRODUCT_POSTS_BY_USER,
            variables: { userId, skip },
        })
            .then(response => {
                dispatch(loadMoreUserProductPostsSuccess(userId, response.data.getProductSimplifiedPostsByUser, skip));
            })
            .catch(() => dispatch(loadMoreUserPostsFailed(userId)));
    };
}

export function loadMoreUserRecommendedPosts(userId: number, skip: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ProfileActionTypes.LoadMoreRecommendedPosts,
            userId,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getRecommendedPostsByUser: SimplifiedPost[] }>({
            query: GET_RECOMMENDED_POSTS_BY_USER,
            variables: { userId, skip },
        })
            .then(response => {
                dispatch(loadMoreUserRecommendedPostsSuccess(userId, response.data.getRecommendedPostsByUser, skip));
            })
            .catch(() => dispatch(loadMoreUserRecommendedPostsFailed(userId)));
    };
}

export function loadMoreUserRecommendedPostsSuccess(userId: number, posts: SimplifiedPost[], skip: number) {
    return {
        type: ProfileActionTypes.LoadMoreRecommendedPostsSuccess,
        posts,
        userId,
        skip,
    };
}

export function loadMoreUserRecommendedPostsFailed(userId: number) {
    return {
        type: ProfileActionTypes.LoadMoreRecommendedPostsFailed,
        userId,
    };
}

export function loadMoreUserProductPostsSuccess(userId: number, posts: SimplifiedPost[], skip: number) {
    return {
        type: ProfileActionTypes.LoadMoreProductPostsSuccess,
        posts,
        userId,
        skip,
    };
}

export function loadMoreUserProductPostsFailed(userId: number) {
    return {
        type: ProfileActionTypes.LoadMoreProductPostsFailed,
        userId,
    };
}
