import { PostStatistic } from '@inspire/types';
import { PostStatisticActions } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';
import { updateInspiredPost } from './inspired';
import { decreaseRecommendCountPostById, increaseRecommendCountPostById, updatePostById } from './postById';
import { updateGroupPost } from './userGroups';
import { decreaseRecommendCountWallPost, increaseRecommendCountWallPost, updatePost } from './wall';
import { updateWorldWallPost } from './worldWall';

import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Toast from 'react-native-toast-message';

import { client } from 'configs/graphql';
import { DECREASE_POST_RECOMMEND, INCREASE_POST_RECOMMEND, INCREASE_POST_SENT } from 'schemes';
import { RollbarLogging } from 'tools';
import I18n from 'tools/translate';

export function increasePostRecommend(postId: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: PostStatisticActions.IncreaseRecommendPost,
        });

        client
            .mutate<{ increasePostRecommend: PostStatistic }>({
                mutation: INCREASE_POST_RECOMMEND,
                variables: {
                    postId,
                },
                optimisticResponse: {
                    increasePostRecommend: {
                        __typename: 'PostStatistic',
                        views: 0,
                        sent: 0,
                        recommends: 1,
                        userHasRecommend: true,
                    },
                },
                update: () => {
                    dispatch(increaseRecommendCountPostById(postId));
                    dispatch(increaseRecommendCountWallPost(postId));
                    Toast.show({
                        text1: I18n.t('notifications.recommendedPostTitle'),
                        text2: I18n.t('notifications.recommendedPostDescription'),
                        type: 'recommend',
                    });
                    ReactNativeHapticFeedback.trigger('impactMedium');
                },
            })
            .then(response => {
                dispatch(updatePostById({ id: postId, ...response.data!.increasePostRecommend }));
                dispatch(updatePost({ id: postId, ...response.data!.increasePostRecommend }));
                dispatch(updateWorldWallPost({ id: postId, ...response.data!.increasePostRecommend }));
                dispatch(updateGroupPost({ id: postId, ...response.data!.increasePostRecommend }));
                dispatch(updateInspiredPost({ id: postId, ...response.data!.increasePostRecommend }));
                dispatch(increasePostRecommendSuccess());
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'increaseRecommendPost');
                dispatch(increasePostRecommendFailed());
            });
    };
}

function increasePostRecommendSuccess() {
    return {
        type: PostStatisticActions.IncreaseRecommendPostSuccess,
    };
}

function increasePostRecommendFailed() {
    return {
        type: PostStatisticActions.IncreaseRecommendPostFailed,
    };
}

export function decreasePostRecommend(postId: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: PostStatisticActions.DecreaseRecommendPost,
        });

        client
            .mutate<{ decreasePostRecommend: PostStatistic }>({
                mutation: DECREASE_POST_RECOMMEND,
                variables: {
                    postId,
                },
                optimisticResponse: {
                    decreasePostRecommend: {
                        __typename: 'PostStatistic',
                        views: 0,
                        sent: 0,
                        recommends: 0,
                        userHasRecommend: false,
                    },
                },
                update: () => {
                    dispatch(decreaseRecommendCountPostById(postId));
                    dispatch(decreaseRecommendCountWallPost(postId));
                },
            })
            .then(response => {
                dispatch(updatePostById({ id: postId, ...response.data!.decreasePostRecommend }));
                dispatch(updatePost({ id: postId, ...response.data!.decreasePostRecommend }));
                dispatch(updateWorldWallPost({ id: postId, ...response.data!.decreasePostRecommend }));
                dispatch(updateGroupPost({ id: postId, ...response.data!.decreasePostRecommend }));
                dispatch(updateInspiredPost({ id: postId, ...response.data!.decreasePostRecommend }));
                dispatch(decreasePostRecommendSuccess());
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'decreaseRecommendPost');
                dispatch(decreasePostRecommendFailed());
            });
    };
}

function decreasePostRecommendSuccess() {
    return {
        type: PostStatisticActions.DecreaseRecommendPostSuccess,
    };
}

function decreasePostRecommendFailed() {
    return {
        type: PostStatisticActions.DecreaseRecommendPostFailed,
    };
}

export function increasePostSent(postId: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: PostStatisticActions.IncreaseSentPost,
        });

        client
            .mutate<{ increasePostSent: PostStatistic }>({
                mutation: INCREASE_POST_SENT,
                variables: {
                    postId,
                },
            })
            .then(() => {
                dispatch(increasePostSentSuccess());
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'increaseSentPost');
                dispatch(increasePostSentFailed());
            });
    };
}

function increasePostSentSuccess() {
    return {
        type: PostStatisticActions.IncreaseSentPostSuccess,
    };
}

function increasePostSentFailed() {
    return {
        type: PostStatisticActions.IncreaseSentPostFailed,
    };
}
