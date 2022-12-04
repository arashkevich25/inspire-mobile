import { InspiredResponse, SimplifiedPost } from '@inspire/types';
import { InspiredActionTypes } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';
import { decreaseInspiredCountWallPost, increaseInspiredCountWallPost, updatePost } from './wall';
import { updateWorldWallPost } from './worldWall';

import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Toast from 'react-native-toast-message';

import { decreaseInspiredCountPostById, increaseInspiredCountPostById, updatePostById } from 'actions/postById';
import { updateGroupPost } from 'actions/userGroups';
import { updateUserPost } from 'actions/userPosts';
import { client } from 'configs/graphql';
import { ADD_INSPIRE_RELATION, INSPIRED_POSTS, REMOVE_INSPIRE_RELATION } from 'schemes';
import { graphqlQueryWithPolicyByNetworkConnection, RollbarLogging } from 'tools';
import I18n from 'tools/translate';

export function getInspiredPosts(categoryId: number, city: string): any {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: InspiredActionTypes.InspiredPosts,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getInspiredSimplifiedPosts: SimplifiedPost[] }>({
            query: INSPIRED_POSTS,
            variables: {
                categoryId,
                skip: 0,
                city,
            },
        })
            .then(response => {
                dispatch(inspiredPostsSuccess(response.data.getInspiredSimplifiedPosts));
            })
            .catch(() => dispatch(inspiredPostsFailed()));
    };
}

function inspiredPostsSuccess(posts: SimplifiedPost[]) {
    return {
        type: InspiredActionTypes.InspiredPostsSuccess,
        posts,
    };
}

function inspiredPostsFailed() {
    return {
        type: InspiredActionTypes.InspiredPostsSuccess,
    };
}

export function initInspiredPosts(posts: SimplifiedPost[]) {
    return {
        type: InspiredActionTypes.InitInspiredPosts,
        posts,
    };
}

export function followPost(
    userId: number,
    postId: string,
    postUserId: number,
    selectedCategoryFilter: number,
    selectedMapFilter: string,
) {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: InspiredActionTypes.FollowUnfollowPost,
        });

        client
            .mutate<{ addInspiredRelationSimplifiedPostResponse: InspiredResponse }>({
                mutation: ADD_INSPIRE_RELATION,
                variables: {
                    postId,
                },
                optimisticResponse: {
                    addInspiredRelationSimplifiedPostResponse: {
                        __typename: 'SimplifiedPost',
                        id: postId,
                        inspirationCount: 1,
                        isInspiredByUser: true,
                    },
                },
                update: () => {
                    dispatch(increaseInspiredCountPostById(postId));
                    dispatch(increaseInspiredCountWallPost(postId));
                    Toast.show({
                        text1: I18n.t('notifications.inspiredPostTitle'),
                        text2: I18n.t('notifications.inspiredPostDescription'),
                        type: 'inspired',
                    });
                    ReactNativeHapticFeedback.trigger('impactHeavy');
                },
            })
            .then(response => {
                dispatch(updatePost(response.data!.addInspiredRelationSimplifiedPostResponse));
                dispatch(updateWorldWallPost(response.data!.addInspiredRelationSimplifiedPostResponse));
                dispatch(updateInspiredPost(response.data!.addInspiredRelationSimplifiedPostResponse));
                dispatch(updateGroupPost(response.data!.addInspiredRelationSimplifiedPostResponse));
                dispatch(updatePostById(response.data!.addInspiredRelationSimplifiedPostResponse));
                if (postUserId !== userId) {
                    dispatch(updateUserPost(postUserId, response.data!.addInspiredRelationSimplifiedPostResponse));
                } else {
                    dispatch(updateUserPost(userId, response.data!.addInspiredRelationSimplifiedPostResponse));
                }

                dispatch({
                    type: InspiredActionTypes.FollowUnfollowPostSuccess,
                });
                dispatch(getInspiredPosts(selectedCategoryFilter, selectedMapFilter));
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'followPost');
                dispatch({
                    type: InspiredActionTypes.FollowUnfollowPostFailed,
                });
            });
    };
}

export function unFollowPost(userId: number, postId: string, userPostId: number) {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: InspiredActionTypes.FollowUnfollowPost,
        });
        client
            .mutate<{ removeInspiredRelationSimplifiedPostResponse: InspiredResponse }>({
                mutation: REMOVE_INSPIRE_RELATION,
                variables: {
                    postId,
                },
                optimisticResponse: {
                    removeInspiredRelationSimplifiedPostResponse: {
                        __typename: 'SimplifiedPost',
                        id: postId,
                        inspirationCount: 0,
                        isInspiredByUser: false,
                    },
                },
                update: () => {
                    dispatch(decreaseInspiredCountPostById(postId));
                    dispatch(decreaseInspiredCountWallPost(postId));
                },
            })
            .then(response => {
                dispatch(updatePost(response.data!.removeInspiredRelationSimplifiedPostResponse));
                dispatch(updateWorldWallPost(response.data!.removeInspiredRelationSimplifiedPostResponse));
                dispatch(updateGroupPost(response.data!.removeInspiredRelationSimplifiedPostResponse));
                dispatch(updateInspiredPost(response.data!.removeInspiredRelationSimplifiedPostResponse));
                dispatch(updatePostById(response.data!.removeInspiredRelationSimplifiedPostResponse));

                if (userPostId !== userId) {
                    dispatch(updateUserPost(userPostId, response.data!.removeInspiredRelationSimplifiedPostResponse));
                } else {
                    dispatch(updateUserPost(userId, response.data!.removeInspiredRelationSimplifiedPostResponse));
                }

                dispatch({
                    type: InspiredActionTypes.FollowUnfollowPostSuccess,
                });
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'unFollowPost');
                dispatch({
                    type: InspiredActionTypes.FollowUnfollowPostFailed,
                    error,
                });
            });
    };
}

export function updateInspiredPost(post: Partial<SimplifiedPost>) {
    return {
        type: InspiredActionTypes.UpdateInspiredPosts,
        post,
    };
}

export function loadMorePosts(categoryId: number, skip: number, city: string) {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: InspiredActionTypes.LoadInspiredPosts,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getInspiredSimplifiedPosts: SimplifiedPost[] }>({
            query: INSPIRED_POSTS,
            variables: {
                categoryId,
                skip,
                city,
            },
        })
            .then(response => {
                if (response.data.getInspiredSimplifiedPosts.length) {
                    dispatch(loadMorePostsSuccess(response.data.getInspiredSimplifiedPosts));
                }
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'loadMorePosts');
                Toast.show({
                    text1: 'Error',
                    text2: 'Error while fetching data from server',
                    type: 'error',
                });
            });
    };
}

function loadMorePostsSuccess(posts: SimplifiedPost[]) {
    return {
        type: InspiredActionTypes.LoadInspiredPostsSuccess,
        posts,
    };
}

export function mountInspiredFilter() {
    return {
        type: InspiredActionTypes.MountFilters,
    };
}

export function unmountInspiredFilter() {
    return {
        type: InspiredActionTypes.UnmountFilters,
    };
}

export function removeInspiredPostById(postId: string) {
    return {
        type: InspiredActionTypes.RemovePostById,
        postId,
    };
}
