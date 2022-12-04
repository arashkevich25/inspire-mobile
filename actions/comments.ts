import { Comment } from '@inspire/types';
import { CommentActionTypes } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';
import { updateCommentCounterWallPost } from './wall';

import { client } from 'configs/graphql';
import { GET_COMMENTS_BY_POST_ID } from 'schemes';
import { ADD_COMMENT } from 'schemes/comments';
import { RollbarLogging } from 'tools/RollbarLogging';

export function addComment(postId: string, comment: string) {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: CommentActionTypes.AddComment,
        });

        client
            .mutate<{ addCommentWithCommentResponse: Comment }>({
                mutation: ADD_COMMENT,
                variables: {
                    postId,
                    comment: comment.trim().replace(/"/g, ''),
                },
            })
            .then(response => {
                dispatch(updateByNewCommentById(response.data!.addCommentWithCommentResponse, postId));
                dispatch(updateCommentCounterWallPost(postId));
                dispatch(addCommentSuccess());
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'addComment');
            });
    };
}

function updateByNewCommentById(comment: Comment, postId: string) {
    return {
        type: CommentActionTypes.UpdateByNewCommentById,
        comment,
        postId,
    };
}

function addCommentSuccess() {
    return {
        type: CommentActionTypes.AddCommentSuccess,
    };
}

export function getCommentsByPostId(postId: string) {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: CommentActionTypes.FetchCommentsById,
            postId,
        });

        client
            .query<{ getCommentsByPostId: Comment[] }>({
                query: GET_COMMENTS_BY_POST_ID,
                variables: { postId, skip: 0 },
            })
            .then(({ data: { getCommentsByPostId } }) => {
                dispatch(getCommentsByPostIdSuccess(postId, getCommentsByPostId));
            })
            .catch(() => {
                dispatch(getCommentsByPostIdFailed(postId));
            });
    };
}

function getCommentsByPostIdSuccess(postId: string, comments: Comment[]) {
    return {
        type: CommentActionTypes.FetchCommentsByIdSuccess,
        comments,
        postId,
    };
}

function getCommentsByPostIdFailed(postId: string) {
    return {
        type: CommentActionTypes.FetchCommentsByIdFailed,
        postId,
    };
}

export function loadMoreComments(postId: string, skip: number) {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: CommentActionTypes.LoadMoreComments,
            postId,
        });

        client
            .query<{ getCommentsByPostId: Comment[] }>({
                query: GET_COMMENTS_BY_POST_ID,
                variables: { postId, skip },
            })
            .then(({ data: { getCommentsByPostId } }) => {
                dispatch(loadMoreCommentsSuccess(postId, getCommentsByPostId));
            });
    };
}

function loadMoreCommentsSuccess(postId: string, comments: Comment[]) {
    return {
        type: CommentActionTypes.LoadMoreCommentsSuccess,
        comments,
        postId,
    };
}
