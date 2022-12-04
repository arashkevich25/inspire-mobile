import { SimplifiedPost } from '@inspire/types';
import { WorldWallActions } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';

import FastImage from 'react-native-fast-image';

import { GET_WORLD_WALL_POSTS, GET_WORLD_WALL_POSTS_AUTHED_USER } from 'schemes';
import { graphqlQueryWithPolicyByNetworkConnection } from 'tools';
import { ActionObject } from 'types';

export function getWorldPosts(categoryId: number, city: string, authenticated: boolean): any {
    return (dispatch: Dispatch): void => {
        dispatch(getWorldPostsPending());

        const query = authenticated ? GET_WORLD_WALL_POSTS_AUTHED_USER : GET_WORLD_WALL_POSTS;

        graphqlQueryWithPolicyByNetworkConnection<any>({
            query: query,
            variables: {
                categoryId,
                skip: 0,
                city,
            },
        })
            .then(({ data: { ...response } }) => {
                const preparedResponse = response[Object.keys(response)[0]];
                dispatch(getWorldPostsSuccess(preparedResponse));
            })
            .catch(() => {
                dispatch(getWorldPostsFailure());
            });
    };
}

function getWorldPostsPending() {
    return {
        type: WorldWallActions.GetWorldPosts,
    };
}

function getWorldPostsSuccess(posts: SimplifiedPost[]): ActionObject {
    return {
        type: WorldWallActions.GetWorldPostsSuccess,
        posts,
    };
}

function getWorldPostsFailure(): ActionObject {
    return {
        type: WorldWallActions.GetWorldPostsFailure,
    };
}

export function initWorldPosts(posts: SimplifiedPost[]) {
    return {
        type: WorldWallActions.InitWorldPosts,
        posts,
    };
}

export function loadMoreWorldWallPosts(categoryId: number, skip: number, city: string, authenticated: boolean): any {
    return (dispatch: Dispatch) => {
        dispatch({
            type: WorldWallActions.LoadWorldPosts,
        });

        const query = authenticated ? GET_WORLD_WALL_POSTS_AUTHED_USER : GET_WORLD_WALL_POSTS;

        graphqlQueryWithPolicyByNetworkConnection<any>({
            query: query,
            variables: {
                categoryId,
                skip,
                city,
            },
        })
            .then(({ data: { ...response } }) => {
                const preparedResponse = response[Object.keys(response)[0]];
                const photos = preparedResponse.map((post: SimplifiedPost) => ({
                    uri: post.photo,
                }));
                FastImage.preload(photos);
                dispatch(loadMorePostsSuccess(preparedResponse, skip));
            })
            .catch(() => dispatch(loadMorePostsFailed()));
    };
}

function loadMorePostsSuccess(posts: SimplifiedPost[], skipCounter: number) {
    return {
        type: WorldWallActions.LoadWorldPostsSuccess,
        posts,
        skipCounter,
    };
}

function loadMorePostsFailed() {
    return {
        type: WorldWallActions.LoadWorldPostsFailed,
    };
}

export function updateWorldWallPost(post: Partial<SimplifiedPost>) {
    return {
        type: WorldWallActions.UpdateWorldPost,
        post,
    };
}

export function mountWorldFilter() {
    return {
        type: WorldWallActions.MountFilters,
    };
}

export function unmountWorldFilter() {
    return {
        type: WorldWallActions.UnmountFilters,
    };
}

export function removeWorldPostById(postId: string) {
    return {
        type: WorldWallActions.RemovePostById,
        postId,
    };
}
