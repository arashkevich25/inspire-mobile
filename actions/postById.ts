import { DetailsPost, PostStatistic } from '@inspire/types';
import { PostByIdAction } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';

import Toast from 'react-native-toast-message';

import { removeInspiredPostById } from 'actions/inspired';
import { removeProfilePostById } from 'actions/userDetails';
import { removeWallPostById } from 'actions/wall';
import { removeWorldPostById } from 'actions/worldWall';
import { client } from 'configs/graphql';
import { GET_POST_BY_ID_UNAUTH_USER, REMOVE_POST_BY_ID } from 'schemes';
import { GET_POST_BY_ID } from 'schemes/getPostById';
import { graphqlQueryWithPolicyByNetworkConnection, RollbarLogging } from 'tools';
import I18n from 'tools/translate';

export function getPostById(postId: string, userId = 0) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: PostByIdAction.FetchPostById,
            postId,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getDetailsPostById: DetailsPost; postStatistic: PostStatistic }>({
            query: userId ? GET_POST_BY_ID : GET_POST_BY_ID_UNAUTH_USER,
            variables: {
                id: postId,
                userId,
            },
        })
            .then(({ data: { getDetailsPostById, postStatistic } }) => {
                dispatch(getPostByIdSuccess({ ...getDetailsPostById, ...postStatistic }));
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'getPostById');
                dispatch(getPostByIdFailed(postId));
            });
    };
}

function getPostByIdSuccess(post: DetailsPost) {
    return {
        type: PostByIdAction.FetchPostByIdSuccess,
        post,
        postId: post.id,
    };
}

function getPostByIdFailed(postId: string) {
    return {
        type: PostByIdAction.FetchPostByIdFailed,
        postId,
    };
}

export function updatePostById(post: Partial<DetailsPost>) {
    return {
        type: PostByIdAction.UpdatePostById,
        post,
        postId: post.id,
    };
}

export function increaseInspiredCountPostById(postId: string) {
    return {
        type: PostByIdAction.IncreaseInspiredCountPostById,
        postId,
    };
}

export function decreaseInspiredCountPostById(postId: string) {
    return {
        type: PostByIdAction.DecreaseInspiredCountPostById,
        postId,
    };
}

export function increaseRecommendCountPostById(postId: string) {
    return {
        type: PostByIdAction.IncreaseRecommendCountPostById,
        postId,
    };
}

export function decreaseRecommendCountPostById(postId: string) {
    return {
        type: PostByIdAction.DecreaseRecommendCountPostById,
        postId,
    };
}

export function updateRatingPostById(postId: string, userRating: number) {
    return {
        type: PostByIdAction.UpdateRatingPostById,
        postId,
        userRating,
    };
}

export function removePostById(id: string, userId: number) {
    return (dispatch: Dispatch) => {
        client
            .mutate({ mutation: REMOVE_POST_BY_ID(id) })
            .then(() => {
                dispatch(removeInspiredPostById(id));
                dispatch(removeProfilePostById(id, userId));
                dispatch(removeWorldPostById(id));
                dispatch(removeWallPostById(id));
                Toast.show({
                    text1: I18n.t('postFullView.messageHeading.removePostSuccess'),
                    text2: I18n.t('postFullView.messageBody.removePostSuccess'),
                    type: 'success',
                });
            })
            .catch(() => {
                Toast.show({
                    text1: I18n.t('postFullView.messageHeading.removePostFailed'),
                    text2: I18n.t('postFullView.messageBody.removePostFailed'),
                    type: 'error',
                });
            });
    };
}
