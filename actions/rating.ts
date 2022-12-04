import { BasicPost } from '@inspire/types';
import { RatingActions } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';
import { updatePost } from './wall';
import { updateWorldWallPost } from './worldWall';

import { updateInspiredPost } from 'actions/inspired';
import { updatePostById, updateRatingPostById } from 'actions/postById';
import { updateGroupPost } from 'actions/userGroups';
import { updateUserPost } from 'actions/userPosts';
import { client } from 'configs/graphql';
import { SET_RATING } from 'schemes';
import { RollbarLogging } from 'tools';

export function setRating(userId: number, postId: string, rating: number, postUserId: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: RatingActions.SetRating,
        });

        client
            .mutate<{ setRatingBasicPostResponse: Partial<BasicPost> }>({
                mutation: SET_RATING,
                variables: {
                    postId,
                    rating,
                },
                optimisticResponse: {
                    setRatingBasicPostResponse: {
                        __typename: 'BasicPost',
                        id: postId,
                        rating: rating,
                        userRating: rating,
                        ratingCount: 1,
                        isRateByUser: true,
                    },
                },
                update: () => {
                    dispatch(updateRatingPostById(postId, rating));
                },
            })
            // @ts-ignore
            .then(({ data }) => {
                dispatch(setRatingSuccess());
                dispatch(updatePost(data!.setRatingBasicPostResponse));
                dispatch(updateWorldWallPost(data!.setRatingBasicPostResponse));
                dispatch(updateGroupPost(data!.setRatingBasicPostResponse));
                dispatch(updateInspiredPost(data!.setRatingBasicPostResponse));
                // @ts-ignore
                dispatch(updatePostById(data!.setRatingBasicPostResponse));

                if (postUserId !== userId) {
                    dispatch(updateUserPost(postUserId, data!.setRatingBasicPostResponse));
                } else {
                    dispatch(updateUserPost(userId, data!.setRatingBasicPostResponse));
                }
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'setRating');
                dispatch(setRatingFailed());
            });
    };
}

function setRatingSuccess(): any {
    return {
        type: RatingActions.SetRatingSuccess,
    };
}

function setRatingFailed(): any {
    return {
        type: RatingActions.SetRatingFailed,
    };
}
