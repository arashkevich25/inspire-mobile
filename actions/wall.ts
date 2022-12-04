import { BasicPost } from '@inspire/types';
import { WallActionTypes } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';

import FastImage from 'react-native-fast-image';

import { WALL_POSTS } from 'schemes/wallPosts';
import { graphqlQueryWithPolicyByNetworkConnection } from 'tools';

export function getWallPosts(categoryId: number, city: string) {
    return async (dispatch: Dispatch) => {
        dispatch(getWallPostsPending());

        graphqlQueryWithPolicyByNetworkConnection<{ getWallBasicPosts: BasicPost[] }>({
            query: WALL_POSTS,
            variables: { categoryId, skip: 0, city },
        })
            .then(response => {
                FastImage.preload(
                    response.data.getWallBasicPosts.map(item => ({
                        uri: item.photo,
                        priority: FastImage.priority.high,
                    })),
                );
                dispatch(getWallPostsSuccess(response.data.getWallBasicPosts));
            })
            .catch(() => dispatch(getWallPostsFailure()));
    };
}

function getWallPostsPending() {
    return {
        type: WallActionTypes.GetFollowersPosts,
    };
}

function getWallPostsSuccess(posts: BasicPost[]) {
    return {
        type: WallActionTypes.GetFollowersPostsSuccess,
        posts,
    };
}

function getWallPostsFailure() {
    return {
        type: WallActionTypes.GetFollowersPostsFailure,
    };
}

export function initWallPosts(posts: BasicPost[]) {
    return {
        type: WallActionTypes.InitWallPosts,
        posts,
    };
}

export function updatePost(post: Partial<BasicPost>) {
    return {
        type: WallActionTypes.UpdatePost,
        post,
    };
}

export function increaseInspiredCountWallPost(postId: string) {
    return {
        type: WallActionTypes.IncreaseInspiredCountWallPost,
        postId,
    };
}

export function increaseRecommendCountWallPost(postId: string) {
    return {
        type: WallActionTypes.IncreaseRecommendCountWallPost,
        postId,
    };
}

export function updateCommentCounterWallPost(postId: string) {
    return {
        type: WallActionTypes.UpdateCommentCounterWallPost,
        postId,
    };
}

export function decreaseRecommendCountWallPost(postId: string) {
    return {
        type: WallActionTypes.DecreaseRecommendCountWallPost,
        postId,
    };
}

export function decreaseInspiredCountWallPost(postId: string) {
    return {
        type: WallActionTypes.DecreaseInspiredCountWallPost,
        postId,
    };
}

export function loadWallPosts(categoryId: number, skip: number, city: string) {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: WallActionTypes.LoadFollowersPosts,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getWallBasicPosts: BasicPost[] }>({
            query: WALL_POSTS,
            variables: { categoryId, skip, city },
        })
            .then(response => {
                dispatch(loadWallPostsSuccess(response.data.getWallBasicPosts));
            })
            .catch(() => {
                dispatch(loadWallPostsFailed());
            });
    };
}

function loadWallPostsSuccess(posts: BasicPost[]) {
    return {
        type: WallActionTypes.LoadFollowersPostsSuccess,
        posts,
    };
}

function loadWallPostsFailed() {
    return {
        type: WallActionTypes.LoadFollowersPostsFailed,
    };
}

export function mountFilter() {
    return {
        type: WallActionTypes.MountFilters,
    };
}

export function unmountFilter() {
    return {
        type: WallActionTypes.UnmountFilters,
    };
}

export function removeWallPostById(postId: string) {
    return {
        type: WallActionTypes.RemovePostById,
        postId,
    };
}
